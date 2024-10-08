import Image from 'next/image';
// import Tags from './Tags';
import path from 'path';
import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';

interface Props {
  project: PostMeta;
  mirrored?: boolean;
  priority?: boolean;
}

const ProjectCard = ({
  project,
  mirrored = false,
  priority = false,
}: Props) => {
  const float = mirrored ? 'left' : 'right';
  const projectUrl =
    project.redirect_url ||
    path.join('/projects', project.parentSlug || '', project.slug);
  return (
    <Link
      href={projectUrl}
      className="relative w-full my-3 flex flex-col items-stretch md:flex-row cursor-pointer group"
    >
      <div
        className={`absolute ${float}-0 bottom-0 bg-gray-800 w-full md:w-2/3 h-2/3 md:h-full rounded-md`}
      />

      <div
        className={`relative flex flex-1 items-center ${
          mirrored ? 'md:order-last' : ''
        }`}
      >
        <div
          className={`absolute ${float}-0 bottom-0 w-full md:w-1/2 h-1/2 md:h-full`}
        />
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={1280}
            height={720}
            priority={priority}
            className="p-5 z-10 mx-auto group-hover:scale-105 duration-500"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1100px) 50vw,
              550px"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col justify-center p-5 z-10 ">
        <h1 className="text-center md:text-left group-hover:text-secondary duration-500">
          {project.title}
        </h1>
        {/* <div className="mb-3">
          <Tags tags={project.tags} />
        </div> */}
        <p className="text-center mb-3 md:text-left text-gray-300">
          {project.description}
        </p>
        <div className="mt-auto font-semibold justify-center md:justify-start text-sm group-hover:text-secondary duration-500 flex gap-1 group-hover:gap-3">
          Let&apos;s build it
          <MdArrowRightAlt className="text-xl" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
