import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import ProjectCard from '../../components/ProjectCard';
import coursesData from '../../data/courses';

interface Props {
  courses: PostMeta[];
}

function ProCourses({ courses }: Props) {
  return (
    <Layout title="Pro course to become a full stack mobile developer">
      <MaxWidthWrapper>
        <section className="flex flex-col items-center">
          <h1>Premium Course</h1>
          <p className="text-gray-500 text-center">
            &quot;You don&apos;t learn to walk by following rules. You learn by
            doing, and by falling over.&quot; ― Richard Branson
          </p>

          <div className="my-5">
            {courses.map((course, index) => (
              <ProjectCard
                project={course}
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

export default ProCourses;

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: { courses: coursesData },
});
