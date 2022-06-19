import fs from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { remarkMdxImages } from 'remark-mdx-images';
import { join, dirname } from 'path';
import { getFileContents, getFullPath } from './utils';

const rootDir = process.cwd();
const courseDirectory = join(rootDir, 'content', 'courses');
const outDir = join(rootDir, 'public', 'images', 'content', 'courses');

interface IGetCourseOptionsByType {
  limit?: number;
  type: 'pro' | 'free';
}

export function getCourseSlugs() {
  return fs.readdirSync(courseDirectory);
}

function getCourseSubPagesSlugs(postSlug: string) {
  const subPagesDir = join(courseDirectory, postSlug, 'subpages');
  if (fs.existsSync(subPagesDir)) {
    return fs.readdirSync(subPagesDir).map((slug) => slug.replace(/\.md$/, ''));
  }
  return [];
}

export function getAllCoursesSubPagesSlugs() {
  const courses = getCourseSlugs();
  return courses.map((course) => ({
    courseSlug: course,
    subPages: getCourseSubPagesSlugs(course),
  }));
}

export async function getCourseSubPageBySlug(
  courseSlug: string,
  subPageSlug: string,
) {
  const subPagesDir = join(courseDirectory, courseSlug, 'subpages');

  const fullPath = getFullPath(subPageSlug, subPagesDir);

  const { code, frontmatter } = await bundleMDX({
    source: getFileContents(fullPath),
    cwd: dirname(fullPath),
    mdxOptions: (options) => ({
      ...options,
      remarkPlugins: [...(options.remarkPlugins ?? []), remarkMdxImages],
    }),
    esbuildOptions: (options) => ({
      ...options,
      outdir: join(outDir, courseSlug),
      loader: {
        ...options.loader,
        '.png': 'file',
        '.jpeg': 'file',
        '.jpg': 'file',
        '.gif': 'file',
      },
      publicPath: `/images/content/courses/${courseSlug}`,
      write: true,
    }),
  });

  const courseSubPage = {
    ...frontmatter,
    code,
    courseSlug,
    subPageSlug,
  } as CourseSubPage;
  return courseSubPage;
}

export async function getCourseBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = getFullPath(slug, courseDirectory);

  const toc = await Promise.all(
    getCourseSubPagesSlugs(realSlug).map(async (subPageSlug) => {
      const subPage = await getCourseSubPageBySlug(slug, subPageSlug);
      return {
        slug: subPageSlug,
        title: subPage.title,
        depth: 1,
        url: `/projects/${slug}/${subPageSlug}`,
      };
    }),
  );

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
      publicPath: `/images/content/courses/${realSlug}`,
      write: true,
    }),
  });

  const course = {
    ...frontmatter,
    code,
    slug: realSlug,
    toc,
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
