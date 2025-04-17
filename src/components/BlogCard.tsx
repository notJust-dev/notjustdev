import Image from 'next/image';
import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';

export interface BlogCardProps {
  post: PostMeta;
  priority?: boolean;
}

const MAX_DESCRIPTION_LENGTH = 256;

const BlogCard = ({ post, priority = false }: BlogCardProps) => {
  const blogUrl = `/blog/${post.slug}`;
  return (
    <Link
      href={blogUrl}
      className="flex flex-col border border-white-100/25 cursor-pointer group rounded-md overflow-hidden"
    >
      {post.image && (
        <div className="relative w-full aspect-w-16 aspect-h-9 group-hover:scale-105 duration-500">
          <Image
            src={post.image}
            alt={post.title}
            width={1280}
            height={720}
            priority={priority}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1100px) 50vw,
              550px"
          />
        </div>
      )}
      <div className="p-3 flex flex-col h-full">
        <h2 className="my-2 w-full font-medium text-center md:text-left group-hover:text-secondary duration-500">
          {post.title}
        </h2>
        <p className="my-2 text-center md:text-left font-light w-full text-gray-300">
          {post.description?.slice(0, MAX_DESCRIPTION_LENGTH)}
          {post.description?.length > MAX_DESCRIPTION_LENGTH && '...'}
        </p>
        <div className="mt-auto font-semibold justify-center md:justify-start text-sm group-hover:text-secondary duration-500 flex gap-1 group-hover:gap-3">
          Read more
          <MdArrowRightAlt className="text-xl" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
