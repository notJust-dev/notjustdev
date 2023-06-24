import Image from 'next/image';
import Button from './Button';
import Tags from './Tags';
import { useRouter } from 'next/router';
import path from 'path';

interface Props {
  project: PostMeta;
  mirrored: boolean;
  priority: boolean;
}

const ProjectCard = ({ project, mirrored, priority }: Props) => {
  const router = useRouter();

  const float = mirrored ? 'left' : 'right';
  const projectUrl =
    project.redirect_url ||
    path.join('/projects', project.parentSlug || '', project.slug);
  return (
    <div
      onClick={() => router.push(projectUrl)}
      className="relative w-full my-3 flex flex-col items-stretch md:flex-row cursor-pointer"
    >
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
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={1280}
            height={720}
            priority={priority}
            className="p-5 z-10 mx-auto"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1100px) 50vw,
              550px"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col justify-center p-5 z-10 ">
        <h1 className="text-center md:text-left">{project.title}</h1>
        <div className="mb-3">
          <Tags tags={project.tags} />
        </div>
        <p className="text-center mb-3 md:text-left">{project.description}</p>
        <div className="flex flex-col md:flex-row">
          <Button
            href={projectUrl}
            text="Read More"
            className="w-full my-2 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

ProjectCard.defaultProps = {
  mirrored: false,
  priority: false,
} as Partial<Props>;

export default ProjectCard;
