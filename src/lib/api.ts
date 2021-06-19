import fs from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { remarkMdxImages } from 'remark-mdx-images';
import { join, dirname } from 'path';

// should be set before importing bundleMDX
if (process.platform === 'win32') {
  process.env.ESBUILD_BINARY_PATH = join(
    process.cwd(),
    'node_modules',
    'esbuild',
    'esbuild.exe',
  );
} else {
  process.env.ESBUILD_BINARY_PATH = join(
    process.cwd(),
    'node_modules',
    'esbuild',
    'bin',
    'esbuild',
  );
}

const postsDirectory = join(process.cwd(), 'content', 'posts');

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((post) => post.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');

  let fullPath = join(postsDirectory, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) {
    fullPath = join(postsDirectory, realSlug, `index.md`);
  }
  // Check if file exits (directory might be empty, or not contain an index)

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { code, frontmatter } = await bundleMDX(fileContents, {
    cwd: dirname(fullPath),
    xdmOptions: (options) => ({
      ...options,
      remarkPlugins: [...(options.remarkPlugins || []), remarkMdxImages],
    }),
    esbuildOptions: (options) => ({
      ...options,
      outdir: `./public/images/content/posts/${realSlug}`,
      loader: {
        ...options.loader,
        '.png': 'file',
        '.jpeg': 'file',
        '.jpg': 'file',
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

interface GetAllPostsOptions {
  limit?: number;
  includeDraft?: boolean;
}

export async function getAllPosts(options: GetAllPostsOptions = {}) {
  const { limit, includeDraft = false } = options;

  const slugs = getPostSlugs();
  let posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));

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
