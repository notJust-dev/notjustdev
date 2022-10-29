import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import { getCoursesMetaByType } from '../../lib/courseRepository';
import CourseCard from '../../components/ProjectCard';

interface CourseProps {
  courses: CourseMeta[];
}

function Projects({ courses }: CourseProps) {
  return (
    <Layout title="notJust Development Projects">
      <MaxWidthWrapper>
        <section className="flex flex-col items-center">
          <h1>Project Based Tutorials</h1>
          <p className="text-gray-500 text-center">
            &quot;You don&apos;t learn to walk by following rules. You learn by
            doing, and by falling over.&quot; ― Richard Branson
          </p>

          <div className="my-5">
            {courses.map((course, index) => (
              <CourseCard
                course={course}
                key={course.slug}
                mirrored={index % 2 === 1}
                priority={index < 2}
              />
            ))}
          </div>
        </section>
      </MaxWidthWrapper>
    </Layout>
  );
}

export default Projects;

export const getStaticProps: GetStaticProps<CourseProps> = async () => ({
  props: {
    courses: await getCoursesMetaByType({ type: 'free' }),
  },
});
