import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useMemo } from 'react';
import Layout from '../../../components/Layout/Layout';
import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import { getCourseBySlug, getCourseSlugs } from '../../../lib/courseRepository';
import StaticCodeSnippet from '../../../components/StaticCodeSnippet';
import InlineCodeSnippet from '../../../components/InlineCodeSnippet';
import MDXImage from '../../../components/MDXImage';

interface Props {
  course: Course | null;
}

function CoursePage({ course }: Props) {
   const Component = useMemo(() => getMDXComponent(course?.code), [course]);

  if (!course) {
    return (
      <MaxWidthWrapper>
        <h3>Course not found!</h3>
      </MaxWidthWrapper>
    );
  }

  return (
    <Layout
      title={course.title}
      description={course.description}
      image={course.thumbnail}
      keywords={course.keywords}
    >
      <MaxWidthWrapper>
        {course.thumbnail && (
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <Image
              src={course.thumbnail}
              layout="fill"
              objectFit="cover"
              alt="Course Thumbnail"
            />
          </div>
        )}
        <h1 className="text-5xl text-center my-10">{course.title}</h1>

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
}

export const getStaticPaths: GetStaticPaths = async () => {
  const courses = await getCourseSlugs();

  const paths = courses.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: GetStaticPropsContext) => {
  const course = await getCourseBySlug(params?.slug as string);

  return {
    props: {
      course,
    },
  };
};

export default CoursePage;
