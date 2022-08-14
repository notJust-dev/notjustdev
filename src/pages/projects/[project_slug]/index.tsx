import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { getCourseBySlug, getCourseSlugs } from '../../../lib/courseRepository';
import CoursePage, { CoursePageProps } from '../../../components/CoursePage';

export const getStaticPaths: GetStaticPaths = async () => {
  const courses = await getCourseSlugs();

  const paths = courses.map((project_slug) => ({
    params: { project_slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CoursePageProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const course = await getCourseBySlug(params?.project_slug as string);

  return {
    props: {
      course,
    },
  };
};

export default CoursePage;
