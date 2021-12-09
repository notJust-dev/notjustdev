import fs from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { remarkMdxImages } from 'remark-mdx-images';
import { join, dirname } from 'path';

const rootDir = process.cwd();
const postsDirectory = join(rootDir, 'content', 'posts');
const outDir = join(rootDir, 'public', 'images', 'content', 'posts');

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((post) => post.replace(/\.md$/, ''));
}

const getFullPath = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, '');

  let fullPath = join(postsDirectory, `${realSlug}.md`);
  if (fs.existsSync(fullPath)) {
    return fullPath;
  }

  fullPath = join(postsDirectory, realSlug, `index.md`);
  if (fs.existsSync(fullPath)) {
    return fullPath;
  }

  throw new Error(`MDX file not found: ${fullPath}`);
};

const getFileContents = (path: string) => fs.readFileSync(path, 'utf8');

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  let fullPath;
  try {
    fullPath = getFullPath(slug);
  } catch (e) {
    return null;
  }

  const fileContents = getFileContents(fullPath);

  // TODO check bundleMDXFile
  const { code, frontmatter } = await bundleMDX(fileContents, {
    cwd: dirname(fullPath),
    xdmOptions: (options) => ({
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
    fullPath = getFullPath(slug);
  } catch (e) {
    return null;
  }
  const fileContents = getFileContents(fullPath);

  // TODO check bundleMDXFile
  const { frontmatter } = await bundleMDX(fileContents, {
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
