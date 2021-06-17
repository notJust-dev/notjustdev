import React from 'react';
import Button from '../Button';
import MaxWidthWrapper from '../MaxWidthWrapper';
import ProjectCard from '../ProjectCard';

const projects = [
  {
    id: '0',
    slug: 'youtube',
    title: 'React Native Youtube Clone',
    image: '/images/tmp/thumbnail.png',
    excerpt:
      'Learn React Native and AWS Amplify from scratch by building a cross-platform (ios and android) YouTube mobile application clone. ',
  },
  {
    id: '2',
    slug: 'whatsapp',
    title: 'Realtime Chat app (WhatsApp clone)',
    image: '/images/tmp/thumbnail_2.png',
    excerpt:
      'Learn React Native, AWS Amplify, GraphQL by building a real-time chat application similar to WhatsApp',
  },
];

function HomePageProjects() {
  return (
    <div className="relative py-10">
      <div className="absolute top-0 shadow-lg right-0 bottom-0 left-0 z-50 w-full h-full bg-gray-700 bg-opacity-70 flex justify-center items-center">
        <h1 className="text-6xl text-primary text-center">Coming soon...</h1>
      </div>

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
                key={project.id}
                mirrored={index % 2 === 1}
              />
            ))}
          </div>

          <Button text="See all projects" href="/blog" type="secondary" />
        </section>
      </MaxWidthWrapper>
    </div>
  );
}

export default HomePageProjects;
