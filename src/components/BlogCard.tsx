import Image from 'next/image';
import Button from './Button';
import Tags from './Tags';
import { useRouter } from 'next/router';

export interface BlogCardProps {
  post: PostMeta;
  priority?: boolean;
}

const MAX_DESCRIPTION_LENGTH = 256;

const BlogCard = ({ post, priority = false }: BlogCardProps) => {
  const router = useRouter();

  const blogUrl = `/blog/${post.slug}`;
  return (
    <div
      onClick={() => router.push(blogUrl)}
      className="bg-custom-blue-500 p-2 pb-5 flex flex-col items-center cursor-pointer h-full"
    >
      {post.image && (
        <div className="relative w-full aspect-w-16 aspect-h-9 mb-2">
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
      <h2 className="my-2 w-full text-center md:text-left">{post.title}</h2>
      <Tags tags={post.tags} />
      <p className="my-2 text-center md:text-left font-light">
        {post.description?.slice(0, MAX_DESCRIPTION_LENGTH)}
        {post.description?.length > MAX_DESCRIPTION_LENGTH && '...'}
      </p>
      <Button
        href={blogUrl}
        text="Read more"
        type="tertiary"
        className="m-2 mt-auto"
      />{' '}
    </div>
  );
};

export default BlogCard;
