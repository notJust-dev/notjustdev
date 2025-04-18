import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import ProjectCard from '@/components/ProjectCard';
import { getAllPosts } from '@/lib/notion/notion';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'notJust.dev Projects',
  description:
    'Master React Native & Expo development by building real-world project with step-by-step guides and video tutorials',
};

export const revalidate = 60;

export default async function Projects() {
  const projects = await getAllPosts({ type: 'Project' });

  return (
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
              priority={index < 2}
            />
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
