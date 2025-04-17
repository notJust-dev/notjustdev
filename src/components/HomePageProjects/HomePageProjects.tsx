import React from 'react';
import Button from '../Button';
import MaxWidthWrapper from '../MaxWidthWrapper';
import ProjectCard from '../ProjectCard';

interface Props {
  project: PostMeta[];
}

export default function HomePageProjects({ project }: Props) {
  return (
    <>
      <div className="relative py-10">
        <MaxWidthWrapper>
          <section className="flex flex-col items-center">
            <h2>Free Courses</h2>
            <p className="text-gray-500 text-center">
              &quot;You don&apos;t learn to walk by following rules. You learn
              by doing, and by falling over.&quot; ― Richard Branson
            </p>

            <div className="my-5">
              {project.map((course, index) => (
                <ProjectCard
                  project={course}
                  key={course.slug}
                  mirrored={index % 2 === 1}
                />
              ))}
            </div>

            <Button text="See all projects" href="/projects" type="secondary" />
          </section>
        </MaxWidthWrapper>
      </div>
   
    </>
  );
}
