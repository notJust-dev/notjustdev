import fs from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { join, dirname } from 'path';
import { getFileContents, getFullPath } from './utils';
import remarkImageSize from './remark-image-size';

const rootDir = process.cwd();
const courseDirectory = join(rootDir, 'content', 'courses');
const outDir = join(rootDir, 'public', 'images', 'content', 'courses');

interface IGetCourseOptionsByType {
  limit?: number;
  type: 'pro' | 'free';
}

export function getCourseSlugs() {
  return fs
    .readdirSync(courseDirectory)
    .map((course) => course.replace(/\.md$/, ''));
}

export async function getCourseBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = getFullPath(slug, courseDirectory);

  const { code, frontmatter } = await bundleMDX({
    source: getFileContents(fullPath),
    cwd: dirname(fullPath),
    mdxOptions: (options) => ({
      ...options,
      remarkPlugins: [...(options.remarkPlugins ?? []), remarkImageSize],
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
      publicPath: `/images/content/courses/${realSlug}`,
      write: true,
    }),
  });

  const course = {
    ...frontmatter,
    code,
    slug: realSlug,
  } as Course;
  return course;
}

export async function getCourseMetaBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = getFullPath(slug, courseDirectory);

  const { frontmatter } = await bundleMDX({
    file: fullPath,
    cwd: dirname(fullPath),
  });

  const course = {
    ...frontmatter,
    slug: realSlug,
  } as CourseMeta;
  return course;
}

export async function getCoursesMetaByType(options: IGetCourseOptionsByType) {
  const { limit, type } = options;

  const slugs = getCourseSlugs();
  let courses = (
    await Promise.all(slugs.map((slug) => getCourseMetaBySlug(slug)))
  ).filter((c) => c && c.type === type) as CourseMeta[];

  if (limit && limit > 0) {
    courses = courses.slice(0, limit);
  }

  return courses;
}
