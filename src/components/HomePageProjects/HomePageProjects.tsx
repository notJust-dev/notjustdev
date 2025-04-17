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
          <section className="flex flex-col flex-start">
            <div className="flex flex-col gap-8 items-start">
              <h2 className="text-5xl text-primary-gradient">Projects</h2>
              <p className="text-white-100 text-xl">
                Follow along step-by-step and build real apps with React Native
                & Expo.
              </p>
            </div>

            <div className="my-5">
              {project.map((course, index) => (
                <ProjectCard
                  project={course}
                  key={course.slug}
                  mirrored={index % 2 === 1}
                />
              ))}
            </div>

            <Button
              text="See all projects"
              href="/projects"
              type="secondary"
              className="self-center"
            />
          </section>
        </MaxWidthWrapper>
      </div>
    </>
  );
}
