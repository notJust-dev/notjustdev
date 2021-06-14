import fs from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'content', 'posts');

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((post) => post.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { code, frontmatter } = await bundleMDX(fileContents);

  const post = {
    code,
    slug: realSlug,
    ...frontmatter,
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
    (post1, post2) => Date.parse(post2.publishedOn) - Date.parse(post1.publishedOn),
  );

  if (limit && limit > 0) {
    posts = posts.slice(0, limit);
  }

  return posts;
}
