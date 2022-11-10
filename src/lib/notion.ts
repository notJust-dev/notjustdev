import { Client } from '@notionhq/client';
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { bundleMDX } from 'mdx-bundler';
import { NotionToMarkdown } from 'notion-to-md';
import { dirname } from 'path';
import { downloadImage } from '../utils/imageDownloader';

const { NOTION_KEY, NOTION_DATABASE = '' } = process.env;

// Initializing a client
const notion = new Client({
  auth: NOTION_KEY,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

const MD_IMAGE_REGEX =
  /!\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/g;

const richTextToPlain = (richText: any[]) => {
  return richText.map((rt) => rt.plain_text).join(' ');
};

const parseNotionPageMeta = async (
  page: PageObjectResponse,
): Promise<NotionBlogMeta> => {
  const notionBlog: NotionBlogMeta = {
    updatedOn: page.last_edited_time,
    slug: richTextToPlain(page.properties.slug.rich_text),
    title: richTextToPlain(page.properties.Name.title),
    description: richTextToPlain(page.properties.description.rich_text),
  };
  if (page.cover?.file?.url) {
    notionBlog.image = await downloadImage(
      page.cover.file.url,
      `/images/notion/thumbnails/${notionBlog.slug}.png`,
    );
  }
  return notionBlog;
};

export const getAllPosts = async (): Promise<NotionBlogMeta[]> => {
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE,
  });

  // console.log(JSON.stringify(response.results, null, 2));

  // const pageMeta = response.results[0];
  // console.log(pageMeta.id);
  // const page = await notion.blocks.children.list({ block_id: pageMeta.id });
  // console.log(JSON.stringify(page, null, 2));

  return Promise.all(response.results.map(parseNotionPageMeta));
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
  if (!page) {
    console.error(`Page with slug "${slug}" NOT FOUND!`);
  }

  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m
    .toMarkdownString(mdblocks)
    .replaceAll('“', '"')
    .replaceAll('”', '"');

  const matches = mdString.matchAll(MD_IMAGE_REGEX);
  console.log([...matches].map((match) => match.groups));

  const { code, frontmatter } = await bundleMDX({
    source: mdString,
    cwd: process.cwd(),
    // mdxOptions: (options) => ({
    //   ...options,
    //   remarkPlugins: [...(options.remarkPlugins ?? []), remarkImagesSize],
    //   rehypePlugins: [
    //     ...(options.rehypePlugins ?? []),
    //     rehypeSlug,
    //     () =>
    //       rehypeAutolinkHeadings({
    //         behavior: 'append',
    //         properties: {
    //           className: 'heading-copy-link',
    //           'aria-hidden': 'true',
    //           tabIndex: -1,
    //         },
    //       }),
    //   ],
    // }),
    // esbuildOptions: (options) => ({
    //   ...options,
    //   outdir: join(outDir, realSlug),
    //   loader: {
    //     ...options.loader,
    //     '.png': 'file',
    //     '.jpeg': 'file',
    //     '.jpg': 'file',
    //     '.gif': 'file',
    //   },
    //   publicPath: `/images/content/posts/${realSlug}`,
    //   write: true,
    // }),
  });

  const post = {
    ...(await parseNotionPageMeta(page)),
    // slug,
    // title: 'Title',
    // publishedOn: '123',
    // image: '',
    // description: '1321',
    // category: 'abc',
    // tags: ['a', 'b'],
    code,
    ...frontmatter,
    // slug: realSlug,
    // toc,
  } as Post;
  return post;
};
