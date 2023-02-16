import { Client, isFullPage } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { serialize } from 'next-mdx-remote/serialize';
import { NotionToMarkdown } from 'notion-to-md';
import { downloadImage } from '../utils/imageDownloader';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
// import remarkImagesSize from './remark-images-size';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getAuthorDetails } from './authors';
import { richTextToPlain } from './utils';
import GithubSlugger from 'github-slugger';

const { NOTION_KEY, NOTION_DATABASE = '' } = process.env;

const rootDir = process.cwd();
const slugger = new GithubSlugger();

// Initializing a client
const notion = new Client({
  auth: NOTION_KEY,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

const MD_IMAGE_REGEX = /!\[(?<alt>[^\]]*)\]\((?<url>.*?)(?=\"|\))\)/g;

const getStatusFilter = () => {
  // In production, show only Published posts
  const statuses = ['Published'];

  // On staging, show Published and Draft posts
  if (process.env.VERCEL_ENV === 'preview') {
    statuses.push('Draft');
  }

  // Locally, show Published, Draft and In progress posts
  if (process.env.NODE_ENV === 'development') {
    statuses.push('Draft');
    statuses.push('In progress');
  }

  return {
    or: statuses.map((status) => ({
      property: 'Status',
      status: {
        equals: status,
      },
    })),
  };
};

const parseNotionPageMeta = async (
  page: PageObjectResponse,
): Promise<PostMeta> => {
  const {
    properties: {
      slug,
      Name,
      description,
      'Hide Image Header': hideImageHeader,
      'Hide Newsletter': hideNewsletter,
      Author,
    },
  } = page;

  // validation
  if (slug.type !== 'rich_text') {
    throw new Error('Validation Error: slug is not a rich_text');
  }
  if (Name.type !== 'title') {
    throw new Error('Validation Error: Name is not a title');
  }
  if (description.type !== 'rich_text') {
    throw new Error('Validation Error: description is not a rich_text');
  }
  if (hideImageHeader.type !== 'checkbox') {
    throw new Error('Validation Error: hideImageHeader is not a checkbox');
  }
  if (hideNewsletter.type !== 'checkbox') {
    throw new Error('Validation Error: hideNewsletter is not a checkbox');
  }
  if (Author.type !== 'relation') {
    throw new Error('Validation Error: Author is not a relation');
  }

  const post: PostMeta = {
    updatedOn: page.last_edited_time,
    slug: richTextToPlain(slug.rich_text),
    title: richTextToPlain(Name.title),
    description: richTextToPlain(description.rich_text),
    hideImageHeader: hideImageHeader.checkbox,
    hideNewsletterForm: hideNewsletter.checkbox,
    authors: (
      await Promise.all(Author.relation.map(({ id }) => getAuthorDetails(id)))
    ).filter((a) => a !== null) as Author[],
  };
  if (page.cover?.type === 'file' && page.cover.file.url) {
    post.image = await downloadImage(
      page.cover.file.url,
      `/images/notion/thumbnails/${post.slug}.png`,
    );
  }
  return post;
};

interface GetAllPostsOption {
  type: PostType;
  pageSize?: number;
}

export const getAllPosts = async ({
  type,
  pageSize = 100,
}: GetAllPostsOption): Promise<PostMeta[]> => {
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE,
    page_size: pageSize,
    filter: {
      and: [
        {
          property: 'Type',
          select: {
            equals: type,
          },
        },
        getStatusFilter(),
      ],
    },
  });

  return Promise.all(
    response.results.filter(isFullPage).map(parseNotionPageMeta),
  );
};

const downloadAndReplaceMDXImages = async (mdString: string, slug: string) => {
  // re-create folder for images
  const dir = `${rootDir}/public/images/notion/${slug}`;
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true });
  }
  fs.mkdirSync(dir);

  const matches = mdString.matchAll(MD_IMAGE_REGEX);

  for (const match of matches) {
    if (match.groups?.url) {
      // use the ALT property as the name, or the slug of the post
      let imageName = match.groups.alt?.slice(0, 200) || `${slug}-${uuidv4()}`; 
      // clean special characters from the image name
      imageName = imageName.replace(/\W+/g, '-');

      const uri = await downloadImage(
        match.groups.url,
        `/images/notion/${slug}/${imageName}.png`,
      );
      mdString = mdString.replace(match.groups?.url, uri);
    }
  }
  return mdString;
};

// Shift heading one way smaller (H1 becomes H2, H2 -> H3)
const shiftHeadings = (mdString: string) => {
  const headings = mdString
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith('#'));

  headings.forEach(
    (heading) => (mdString = mdString.replace(heading, `#${heading.trim()}`)),
  );
  return mdString;
};

const isHeader2or3 = (line: string) => {
  const trimmed = line.trim();
  return trimmed.startsWith('## ') || trimmed.startsWith('### ');
};

const buildToC = (mdString: string): ToCHeading[] => {
  const headings = mdString.split(/\r?\n/).filter(isHeader2or3);

  const toc = headings.map((h) => {
    const depth = h.split(' ', 1)[0].length;
    const title = h
      .slice(depth)
      .replaceAll('_', '')
      .replace(/\[([^\[\]]*)\]\((.*?)\)/gm, '$1')
      .trim();
    return {
      slug: slugger.slug(title),
      title,
      depth,
    };
  });

  toc.unshift({ slug: 'introduction', title: 'Introduction', depth: 2 });
  return toc;
};

export const getPostBySLug = async (slug: string): Promise<Post> => {
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE,
    filter: {
      property: 'slug',
      rich_text: {
        equals: slug,
      },
    },
  });
  const page = response.results?.[0];
  if (!page || !isFullPage(page)) {
    console.error(`Page with slug "${slug}" NOT FOUND!`);
    throw new Error('Cannot find page!');
  }

  const mdBlocks = await n2m.pageToMarkdown(page.id);
  let mdString = n2m
    .toMarkdownString(mdBlocks)
    .replaceAll('“', '"')
    .replaceAll('”', '"');

  mdString = await downloadAndReplaceMDXImages(mdString, slug);
  // TODO maybe this should be a rehype plugin?
  mdString = shiftHeadings(mdString);
  const toc = buildToC(mdString);

  const content = await serialize(mdString, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        () =>
          rehypeAutolinkHeadings({
            behavior: 'append',
            properties: {
              className: 'heading-copy-link',
              'aria-hidden': 'true',
              tabIndex: -1,
            },
          }),
      ],
    },
  });

  return {
    ...(await parseNotionPageMeta(page)),
    content,
    toc,
  };
};
