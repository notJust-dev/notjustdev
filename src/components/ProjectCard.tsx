import Image from 'next/image';
import Button from './Button';

interface ProjectCardProps {
  project: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    image: string;
  }
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="bg-custom-blue-500 p-2 pb-5 my-3 flex flex-col items-center">
    <div className="">
      <Image
        src={project.image}
        width={300}
        height={200}
        objectFit="contain"
      />
    </div>

    <h1 className="my-3">{project.title}</h1>
    <p className="text-center text-sm font-light mb-3">
      {project.excerpt}
    </p>
    <Button text="Learn more" href={`/project/${project.slug}`} className="w-full" />
    <Button text="See if you're ready" href={`/project/${project.slug}`} type="secondary" className="w-full" />
  </div>
);

export default ProjectCard;
