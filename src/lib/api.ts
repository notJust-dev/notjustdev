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

export async function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  // // sort posts by date in descending order
  // const sortedPosts = posts.sort((post1, post2) =>
  //   post1.date > post2.date ? -1 : 1
  // );
  return posts;
}
