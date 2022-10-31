import { Client } from '@notionhq/client';
import { bundleMDX } from 'mdx-bundler';
import { NotionToMarkdown } from 'notion-to-md';
import { dirname } from 'path';

const { NOTION_KEY, NOTION_DATABASE = '' } = process.env;

// Initializing a client
const notion = new Client({
  auth: NOTION_KEY,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

export const getAllPosts = async () => {
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE,
  });

  // console.log(JSON.stringify(response, null, 2));

  // const pageMeta = response.results[0];
  // console.log(pageMeta.id);
  // const page = await notion.blocks.children.list({ block_id: pageMeta.id });
  // console.log(JSON.stringify(page, null, 2));

  return response.results;
};

export const getPost = async (id: string) => {
  const mdblocks = await n2m.pageToMarkdown(id);
  const mdString = n2m
    .toMarkdownString(mdblocks)
    .replaceAll('“', '"')
    .replaceAll('”', '"');

  console.log(mdString);

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
    slug: id,
    title: 'Title',
    publishedOn: '123',
    image: '',
    description: '1321',
    category: 'abc',
    tags: ['a', 'b'],
    code,
    ...frontmatter
    // slug: realSlug,
    // toc,
  } as Post;
  return post;
};
