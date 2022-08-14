import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import { useMemo } from 'react';
import Layout from '../Layout/Layout';
import MaxWidthWrapper from '../MaxWidthWrapper';
import StaticCodeSnippet from '../StaticCodeSnippet';
import InlineCodeSnippet from '../InlineCodeSnippet';
import MDXImage from '../MDXImage';
import ProjectTableOfContents from '../ProjectTableOfContents';
import YoutubeVideo from '../shared/YoutubeVideo';

export interface CoursePageProps {
  course: Course | CourseSubPage | null;
}

const CoursePage = ({ course }: CoursePageProps) => {
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
        <div className="flex flex-row">
          {course.toc && <ProjectTableOfContents toc={course.toc} />}

          <MaxWidthWrapper maxWidth={800} px={0}>
            <article className="flex-1">
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
              {course.ytVideoId && <YoutubeVideo id={course.ytVideoId} />}

              <div className="mdx-post">
                <Component
                  components={{
                    pre: StaticCodeSnippet,
                    code: InlineCodeSnippet,
                    img: MDXImage,
                  }}
                />
              </div>
            </article>
          </MaxWidthWrapper>
        </div>
      </MaxWidthWrapper>
    </Layout>
  );
};

export default CoursePage;
