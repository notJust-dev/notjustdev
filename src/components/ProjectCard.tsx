import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

interface CourseCardProps {
  course: CourseMeta;
  mirrored: boolean;
}

const ProjectCard = ({ course, mirrored }: CourseCardProps) => {
  const float = mirrored ? 'left' : 'right';
  return (
    <Link href={course.redirect_url || `/projects/${course.slug}`} passHref>
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
          <div className="p-5 w-full">
            <Image
              src={course.thumbnail}
              layout="responsive"
              alt={course.title}
              width={16}
              height={9}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center p-5 z-10 ">
          <h1 className="text-center md:text-left">{course.title}</h1>
          <p className="text-center mb-3 md:text-left">{course.description}</p>
          <div className="flex flex-col md:flex-row">
            <Button
              text="Read More"
              href={`/projects/${course.slug}`}
              className="w-full my-2 md:w-auto"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

ProjectCard.defaultProps = {
  mirrored: false,
} as Partial<CourseCardProps>;

export default ProjectCard;
