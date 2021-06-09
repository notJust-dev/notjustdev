import React from 'react';
import Button from '../Button';
import MaxWidthWrapper from '../MaxWidthWrapper';
import ProjectCard from '../ProjectCard';

const projects = [
  {
    id: '0',
    slug: 'the_importance_of_learning_css',
    title: 'The Importance of Learning CSS',
    image: '/images/tmp/thumbnail.png',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias maiores praesentium dignissimos suscipit illum animi fugiat.',
  },
  {
    id: '1',
    slug: 'the_importance_of_learning_css',
    title: 'The Importance of Learning CSS',
    image: '/images/tmp/thumbnail_2.png',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias maiores praesentium dignissimos suscipit illum animi fugiat.',
  },
  {
    id: '2',
    slug: 'the_importance_of_learning_css_2',
    title: 'The Importance of Learning HTML',
    image: '/images/tmp/thumbnail_3.png',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias maiores praesentium dignissimos suscipit illum animi fugiat.',
  },
];

function HomePageProjects() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center">
        <h1>Project Based Tutorials</h1>
        <p className=" text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
          molestias reiciendis totam repellendus cumque nobis architecto
        </p>

        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            key={project.id}
            mirrored={index % 2 === 1}
          />
        ))}

        <Button text="See all projects" href="/blog" type="secondary" />
      </section>
    </MaxWidthWrapper>
  );
}

export default HomePageProjects;
