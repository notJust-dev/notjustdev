import fs from 'fs';
import { bundleMDX } from 'mdx-bundler';
import remarkImagesSize from './remark-images-size';
import { join, dirname } from 'path';
import { getFileContents, getFullPath, shuffle } from './utils';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import GithubSlugger from 'github-slugger';

var slugger = new GithubSlugger();

const rootDir = process.cwd();
const postsDirectory = join(rootDir, 'content', 'posts');
const outDir = join(rootDir, 'public', 'images', 'content', 'posts');

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((post) => post.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  let fullPath;
  try {
    fullPath = getFullPath(slug, postsDirectory);
  } catch (e) {
    return null;
  }

  const source = getFileContents(fullPath);

  const isHeader2or3 = (line: string) => {
    const trimmed = line.trim();
    return trimmed.startsWith('## ') || trimmed.startsWith('### ');
  };

  const headings = source.split(/\r?\n/).filter(isHeader2or3);

  const toc = headings.map((h) => {
    const depth = h.split(' ', 1)[0].length;
    const title = h.slice(depth).replaceAll('_', '').trim();
    return {
      slug: slugger.slug(title),
      title,
      depth,
    };
  });

  toc.unshift({ slug: 'introduction', title: 'Introduction', depth: 2 });

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: dirname(fullPath),
    mdxOptions: (options) => ({
      ...options,
      remarkPlugins: [...(options.remarkPlugins ?? []), remarkImagesSize],
      rehypePlugins: [
        ...(options.rehypePlugins ?? []),
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
    }),
    esbuildOptions: (options) => ({
      ...options,
      outdir: join(outDir, realSlug),
      loader: {
        ...options.loader,
        '.png': 'file',
        '.jpeg': 'file',
        '.jpg': 'file',
        '.gif': 'file',
      },
      publicPath: `/images/content/posts/${realSlug}`,
      write: true,
    }),
  });

  const post = {
    ...frontmatter,
    code,
    slug: realSlug,
    toc,
  } as Post;
  return post;
}

export async function getPostMetaBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  let fullPath;
  try {
    fullPath = getFullPath(slug, postsDirectory);
  } catch (e) {
    return null;
  }

  const { frontmatter } = await bundleMDX({
    file: fullPath,
    cwd: dirname(fullPath),
  });

  const post = {
    ...frontmatter,
    slug: realSlug,
  } as PostMeta;
  return post;
}

interface GetAllPostsOptions {
  limit?: number;
  includeDraft?: boolean;
}

export async function getAllPostsMeta(options: GetAllPostsOptions = {}) {
  const { limit, includeDraft = false } = options;

  // This is not optimal. It reads and builds ALL posts, and then selects the first X
  // The challenge here is that in order to know if it's draft or not, we need to read it
  const slugs = getPostSlugs();
  let posts = (
    await Promise.all(slugs.map((slug) => getPostMetaBySlug(slug)))
  ).filter((p) => p) as PostMeta[];

  if (!includeDraft) {
    posts = posts.filter((p) => !p.draft);
  }

  // sort posts by date in descending order
  posts = posts.sort(
    (post1, post2) =>
      Date.parse(post2.publishedOn) - Date.parse(post1.publishedOn),
  );

  if (limit && limit > 0) {
    posts = posts.slice(0, limit);
  }

  return posts;
}

export const getRecommendedPostsMeta = async (
  forSlug: string,
  limit: number = 2,
) => {
  let slugs = getPostSlugs().filter((s) => s !== forSlug);
  slugs = shuffle(slugs);
  if (limit > 0) {
    slugs = slugs.slice(0, limit);
  }

  let posts = (
    await Promise.all(slugs.map((slug) => getPostMetaBySlug(slug)))
  ).filter((p) => p && !p.draft) as PostMeta[];

  return posts;
};
