import { useMemo } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import {
  getAllCoursesSubPagesSlugs,
  getCourseSubPageBySlug,
} from '../../../../lib/courseRepository';
import MaxWidthWrapper from '../../../../components/MaxWidthWrapper';
import { getMDXComponent } from 'mdx-bundler/client';
import Layout from '../../../../components/Layout/Layout';
import StaticCodeSnippet from '../../../../components/StaticCodeSnippet';
import InlineCodeSnippet from '../../../../components/InlineCodeSnippet';
import MDXImage from '../../../../components/MDXImage';

interface Props {
  courseSubPage: CourseSubPage | null;
}

const CourseSubPage = ({ courseSubPage }: Props) => {
  const Component = useMemo(
    () => getMDXComponent(courseSubPage?.code),
    [courseSubPage],
  );

  if (!courseSubPage) {
    return (
      <MaxWidthWrapper>
        <h3>Course sub page not found!</h3>
      </MaxWidthWrapper>
    );
  }
  return (
    <Layout
      title={courseSubPage.title}
      description={courseSubPage.description}
      image={courseSubPage.thumbnail}
      keywords={courseSubPage.keywords}
    >
      <MaxWidthWrapper>
        {/* {courseSubPage.thumbnail && (
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <Image
              src={course.thumbnail}
              layout="fill"
              objectFit="cover"
              alt="Course Thumbnail"
            />
          </div>
        )} */}
        <h1 className="text-5xl text-center my-10">{courseSubPage.title}</h1>

        <div className="mdx-post">
          <Component
            components={{
              pre: StaticCodeSnippet,
              code: InlineCodeSnippet,
              img: MDXImage,
            }}
          />
        </div>
      </MaxWidthWrapper>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const coursesWithSubPages = await getAllCoursesSubPagesSlugs();

  const paths = coursesWithSubPages.flatMap((course) =>
    course.subPages.map((subpage_slug) => ({
      params: { project_slug: course.courseSlug, subpage_slug },
    })),
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: GetStaticPropsContext) => {
  const projectSlug = params?.project_slug as string;
  const subPageSlug = params?.subpage_slug as string;

  const courseSubPage = await getCourseSubPageBySlug(projectSlug, subPageSlug);
  return {
    props: {
      courseSubPage,
    },
  };
};

export default CourseSubPage;
