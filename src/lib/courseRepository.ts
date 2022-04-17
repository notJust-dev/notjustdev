import fs from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { remarkMdxImages } from 'remark-mdx-images';
import { join, dirname } from 'path';

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

const getFullPath = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, '');

  let fullPath = join(courseDirectory, `${realSlug}.md`);
  if (fs.existsSync(fullPath)) {
    return fullPath;
  }

  fullPath = join(courseDirectory, realSlug, `index.md`);
  if (fs.existsSync(fullPath)) {
    return fullPath;
  }

  throw new Error(`MDX file not found: ${fullPath}`);
};

const getFileContents = (path: string) => fs.readFileSync(path, 'utf8');

export async function getCourseBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = getFullPath(slug);
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
  const fullPath = getFullPath(slug);
  const fileContents = getFileContents(fullPath);

  // TODO check bundleMDXFile
  const { frontmatter } = await bundleMDX(fileContents, {
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
