import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import ProjectCard from '../../components/ProjectCard';
import { getAllPosts } from '../../lib/notion';

interface CourseProps {
  projects: PostMeta[];
}

function Projects({ projects }: CourseProps) {
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
            {projects.map((project, index) => (
              <ProjectCard
                project={project}
                key={project.slug}
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
    projects: await getAllPosts({ type: 'Project' }),
  },
  // revalidate: 10,
});
