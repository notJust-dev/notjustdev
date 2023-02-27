import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

interface Props {
  project: PostMeta;
  mirrored: boolean;
  priority: boolean;
}

const ProjectCard = ({ project, mirrored, priority }: Props) => {
  const float = mirrored ? 'left' : 'right';
  return (
    <Link href={project.redirect_url ?? `/projects/${project.slug}`}>
      <div className="relative w-full my-3 flex flex-col items-stretch md:flex-row cursor-pointer">
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
          <p className="text-center mb-3 md:text-left">{project.description}</p>
          <div className="flex flex-col md:flex-row">
            <Button text="Read More" className="w-full my-2 md:w-auto" />
          </div>
        </div>
      </div>
    </Link>
  );
};

ProjectCard.defaultProps = {
  mirrored: false,
  priority: false,
} as Partial<Props>;

export default ProjectCard;
