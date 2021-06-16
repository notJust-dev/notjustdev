import Image from 'next/image';
import Button from './Button';

interface ProjectCardProps {
  project: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    image: string;
  };
  mirrored: boolean;
}

const ProjectCard = ({ project, mirrored }: ProjectCardProps) => {
  const float = mirrored ? 'left' : 'right';
  return (
    <div className="relative w-full my-3 flex flex-col items-stretch md:flex-row">
      <div
        className={`absolute ${float}-0 bottom-0 bg-custom-blue-500 w-full md:w-2/3 h-2/3 md:h-full`}
      />

      <div
        className={`relative flex flex-1 items-center ${
          mirrored ? 'md:order-last' : ''
        }`}
      >
        <div
          className={`absolute ${float}-0 bottom-0 bg-custom-blue-500 w-full md:w-1/2 h-1/2 md:h-full`}
        />
        <div className="p-5 w-full">
          <Image
            src={project.image}
            layout="responsive"
            alt={project.title}
            width={16}
            height={9}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center p-5 z-10 ">
        <h1 className="text-center md:text-left">{project.title}</h1>
        <p className="text-center mb-3 md:text-left">{project.excerpt}</p>
        <div className="flex flex-col md:flex-row">
          <Button
            text="Learn more"
            href={`/project/${project.slug}`}
            className="w-full my-2 md:w-auto"
          />
          <Button
            text="See if you're ready"
            href={`/project/${project.slug}`}
            type="secondary"
            className="w-full my-2 md:w-auto md:ml-4"
          />
        </div>
      </div>
    </div>
  );
};

ProjectCard.defaultProps = {
  mirrored: false,
} as Partial<ProjectCardProps>;

export default ProjectCard;
