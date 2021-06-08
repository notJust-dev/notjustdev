import Image from 'next/image';
import Button from './Button';

interface BlogCardProps {
  post: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    image: string;
  };
}

const BlogCard = ({ post }: BlogCardProps) => (
  <div className="bg-custom-blue-500 p-2 pb-5 my-3 flex flex-col items-center">
    <div className="relative w-full h-40">
      <Image src={post.image} layout="fill" objectFit="cover" />
    </div>

    <h2 className="my-3 text-center">{post.title}</h2>
    <p className="text-center font-light mb-3">{post.excerpt}</p>
    <Button text="Read more" href={`/posts/${post.slug}`} type="tertiary" className="m-2" />
  </div>
);

export default BlogCard;
