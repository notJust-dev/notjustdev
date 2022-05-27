import fs from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { remarkMdxImages } from 'remark-mdx-images';
import { join, dirname } from 'path';
import { getFileContents, getFullPath, shuffle } from './utils';

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

  const { code, frontmatter } = await bundleMDX({
    source: getFileContents(fullPath),
    cwd: dirname(fullPath),
    mdxOptions: (options) => ({
      ...options,
      remarkPlugins: [...(options.remarkPlugins ?? []), remarkMdxImages],
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
