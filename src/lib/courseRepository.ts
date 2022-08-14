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

const getBundledMDX = (path: string, slug: string) => {
  return bundleMDX({
    source: getFileContents(path),
    cwd: dirname(path),
    mdxOptions: (options) => ({
      ...options,
      remarkPlugins: [...(options.remarkPlugins ?? []), remarkMdxImages],
    }),
    esbuildOptions: (options) => ({
      ...options,
      outdir: join(outDir, slug),
      loader: {
        ...options.loader,
        '.png': 'file',
        '.jpeg': 'file',
        '.jpg': 'file',
        '.gif': 'file',
      },
      publicPath: `/images/content/courses/${slug}`,
      write: true,
    }),
  });
};

export async function getCourseMetaBySlug(slug: string, parentSlug?: string) {
  const dir = parentSlug
    ? join(courseDirectory, parentSlug, 'subpages')
    : courseDirectory;

  const fullPath = getFullPath(slug, dir);

  const { frontmatter } = await bundleMDX({
    file: fullPath,
    cwd: dirname(fullPath),
  });

  const course = {
    ...frontmatter,
    slug,
  } as CourseMeta;
  return course;
}

export async function getCourseBySlug(slug: string, parentSlug?: string) {
  const dir = parentSlug
    ? join(courseDirectory, parentSlug, 'subpages')
    : courseDirectory;

  const fullPath = getFullPath(slug, dir);
  const courseSlug = parentSlug || slug;

  let toc = await Promise.all(
    getCourseSubPagesSlugs(courseSlug).map(async (subPageSlug) => {
      const subPage = await getCourseMetaBySlug(subPageSlug, courseSlug);
      return {
        slug: subPageSlug,
        title: subPage.title,
        depth: 1,
        url: `/projects/${courseSlug}/${subPageSlug}`,
      };
    }),
  );
  const courseMeta = await getCourseMetaBySlug(courseSlug);
  toc = [
    {
      slug: courseSlug,
      title: courseMeta.title,
      depth: 0,
      url: `/projects/${courseSlug}`,
    },
    ...toc,
  ];

  const { code, frontmatter } = await getBundledMDX(fullPath, slug);

  const course = {
    ...frontmatter,
    code,
    slug,
    toc,
  } as Course;
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
