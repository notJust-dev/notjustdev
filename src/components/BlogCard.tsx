import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export interface BlogCardProps {
  post: Post;
}

const MAX_DESCRIPTION_LENGTH = 256;

const BlogCard = ({ post }: BlogCardProps) => (
  <Link href={`/blog/${post.slug}`}>
    <div className="bg-custom-blue-500 p-2 pb-5 flex flex-col items-center cursor-pointer">
      {post.image && (
        <div className="relative w-full h-40">
          <Image src={post.image} layout="fill" objectFit="cover" />
        </div>
      )}

      <h2 className="p-2 w-full text-center md:text-left">{post.title}</h2>
      <p className="p-2 text-center md:text-left font-light">
        {post.description?.slice(0, MAX_DESCRIPTION_LENGTH)}
        {post.description?.length > MAX_DESCRIPTION_LENGTH && '...'}
      </p>
      <Button
        text="Read more"
        href={`/posts/${post.slug}`}
        type="tertiary"
        className="m-2"
      />
    </div>
  </Link>
);

export default BlogCard;
