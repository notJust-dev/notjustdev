import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import {
  getAllCoursesSubPagesSlugs,
  getCourseBySlug,
} from '../../../../lib/courseRepository';
import CoursePage, { CoursePageProps } from '../../../../components/CoursePage';

export const getStaticPaths: GetStaticPaths = async () => {
  const coursesWithSubPages = await getAllCoursesSubPagesSlugs();

  const paths = coursesWithSubPages.flatMap((course) =>
    course.subPages.map((subpage_slug) => ({
      params: { project_slug: course.courseSlug, subpage_slug },
    })),
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CoursePageProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const projectSlug = params?.project_slug as string;
  const subPageSlug = params?.subpage_slug as string;

  const course = await getCourseBySlug(subPageSlug, projectSlug);
  return {
    props: {
      course,
    },
  };
};

export default CoursePage;
