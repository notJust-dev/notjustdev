import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export interface BlogCardProps {
  post: PostMeta;
}

const MAX_DESCRIPTION_LENGTH = 256;

const BlogCard = ({ post }: BlogCardProps) => (
  <Link href={`/blog/${post.slug}`} passHref>
    <div className="bg-custom-blue-500 p-2 pb-5 flex flex-col items-center cursor-pointer">
      {post.image && (
        <div className="relative w-full aspect-w-16 aspect-h-9 mb-2">
          <Image
            src={post.image}
            layout="fill"
            objectFit="cover"
            alt={post.title}
          />
        </div>
      )}

      <h2 className="p-2 w-full text-center md:text-left">{post.title}</h2>
      <p className="p-2 text-center md:text-left font-light">
        {post.description?.slice(0, MAX_DESCRIPTION_LENGTH)}
        {post.description?.length > MAX_DESCRIPTION_LENGTH && '...'}
      </p>
      <Button
        text="Read more"
        href={`/blog/${post.slug}`}
        type="tertiary"
        className="m-2"
      />
    </div>
  </Link>
);

export default BlogCard;
