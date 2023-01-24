import { Client } from '@notionhq/client';
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { serialize } from 'next-mdx-remote/serialize';
import { NotionToMarkdown } from 'notion-to-md';
import { dirname } from 'path';
import { downloadImage } from '../utils/imageDownloader';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import remarkImagesSize from './remark-images-size';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const { NOTION_KEY, NOTION_DATABASE = '' } = process.env;

const rootDir = process.cwd();

// Initializing a client
const notion = new Client({
  auth: NOTION_KEY,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

const MD_IMAGE_REGEX = /!\[(?<alt>[^\]]*)\]\((?<url>.*?)(?=\"|\))\)/g;

const richTextToPlain = (richText: any[]) => {
  return richText.map((rt) => rt.plain_text).join(' ');
};

const parseNotionPageMeta = async (
  page: PageObjectResponse | PartialPageObjectResponse,
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
      const imageName = `${(
        match.groups.alt || slug + `-${uuidv4()}`
      ).replaceAll(' ', '-')}.png`; // use the ALT property as the name, or the slug of the post
      const uri = await downloadImage(
        match.groups.url,
        `/images/notion/${slug}/${imageName}`,
      );
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
  if (!page) {
    console.error(`Page with slug "${slug}" NOT FOUND!`);
  }

  const mdblocks = await n2m.pageToMarkdown(page.id);
  let mdString = n2m
    .toMarkdownString(mdblocks)
    .replaceAll('“', '"')
    .replaceAll('”', '"');

  mdString = await downloadAndReplaceMDXImages(mdString, slug);

  return {
    ...(await parseNotionPageMeta(page)),
    content: await serialize(mdString),
  };

  // const mdxSource = await serialize(mdString);
  // , {
  //   cwd: process.cwd(),
  //   mdxOptions: (options) => ({
  //     ...options,
  //     remarkPlugins: [...(options.remarkPlugins ?? []), remarkImagesSize],
  //     rehypePlugins: [
  //       ...(options.rehypePlugins ?? []),
  //       rehypeSlug,
  //       () =>
  //         rehypeAutolinkHeadings({
  //           behavior: 'append',
  //           properties: {
  //             className: 'heading-copy-link',
  //             'aria-hidden': 'true',
  //             tabIndex: -1,
  //           },
  //         }),
  //     ],
  //   }),
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
  // });

  // const post = {
  //   ...(await parseNotionPageMeta(page)),
  //   // slug,
  //   // title: 'Title',
  //   // publishedOn: '123',
  //   // image: '',
  //   // description: '1321',
  //   // category: 'abc',
  //   // tags: ['a', 'b'],
  //   code: mdxSource,
  //   // ...frontmatter,
  //   // slug: realSlug,
  //   // toc,
  // } as Post;
  // return post;
};
