import React from 'react';
import Button from '../Button';
import ProjectCard from '../ProjectCard';

type ProjectsSection = {
  project: PostMeta[];
};

export default function ProjectsSection({ project }: ProjectsSection) {
  return (
    <section className="flex flex-col flex-start py-10">
      <div className="flex flex-col gap-8 items-start">
        <span className="text-pill">Free step-by-step tutorials</span>
        <h2 className="text-5xl text-primary-gradient">
          Project based tutorials
        </h2>
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
  );
}
