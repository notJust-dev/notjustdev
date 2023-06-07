import { Client, isFullPage } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { serialize } from 'next-mdx-remote/serialize';
import { NotionToMarkdown } from 'notion-to-md';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getAuthorDetails } from './authors';
import { richTextToPlain, shuffle } from './utils';
import { buildToC, shiftHeadings } from './utils/tableOfContents';
import { processVideos } from './utils/videos';
import { copyFileToS3 } from './s3Client';

const { NOTION_KEY, NOTION_DATABASE = '' } = process.env;

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
  includeAuthors = false,
): Promise<PostMeta> => {
  const {
    properties: {
      slug,
      Name,
      description,
      'Hide Image Header': hideImageHeader,
      'Hide Newsletter': hideNewsletter,
      Author,
      Type,
      tags,
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
  if (Type.type !== 'select' || !Type.select) {
    throw new Error('Validation Error: Type is not a select');
  }
  if (tags.type !== 'multi_select') {
    throw new Error('Validation Error: Tags is not a multi-select');
  }

  const post: PostMeta = {
    updatedOn: page.last_edited_time,
    slug: richTextToPlain(slug.rich_text),
    title: richTextToPlain(Name.title),
    description: richTextToPlain(description.rich_text),
    hideImageHeader: hideImageHeader.checkbox,
    hideNewsletterForm: hideNewsletter.checkbox,
    authors: [],
    type: Type.select.name as PostType,
    tags: tags.multi_select,
  };
  if (includeAuthors) {
    post.authors = (
      await Promise.all(Author.relation.map(({ id }) => getAuthorDetails(id)))
    ).filter((a) => a !== null) as Author[];
  }

  if (page.cover?.type === 'file' && page.cover.file.url) {
    post.image = await copyFileToS3(page.cover.file.url);
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
    response.results
      .filter(isFullPage)
      .map((page) => parseNotionPageMeta(page)),
  );
};

const downloadAndReplaceMDXImages = async (mdString: string) => {
  const matches = mdString.matchAll(MD_IMAGE_REGEX);

  for (const match of matches) {
    if (match.groups?.url) {
      const uri = await copyFileToS3(match.groups.url);
      mdString = mdString.replace(match.groups?.url, uri);
    }
  }
  return mdString;
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

  let mdBlocks = await n2m.pageToMarkdown(page.id);

  mdBlocks = await Promise.all(mdBlocks.map(processVideos));

  let mdString = n2m
    .toMarkdownString(mdBlocks)
    .parent.replaceAll('“', '"')
    .replaceAll('”', '"');

  // TODO them based on blocks, similar to videos?
  // There is also custom transformers
  // https://github.com/souvikinator/notion-to-md/blob/master/README.md#custom-transformers
  mdString = await downloadAndReplaceMDXImages(mdString);
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
    ...(await parseNotionPageMeta(page, true)),
    content,
    toc,
  };
};

export const getRecommendedPostsMeta = async (
  forPost: PostMeta,
  limit: number = 2,
): Promise<Post[]> => {
  const all = (await getAllPosts({ type: forPost.type })).filter(
    (p) => p.slug !== forPost.slug,
  );

  let random2 = shuffle(all).slice(0, limit > 0 ? limit : 2);

  return random2;
};
