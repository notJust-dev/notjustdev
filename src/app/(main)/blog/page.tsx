import BlogCard from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { getAllPosts } from '@/lib/notion/notion';
import { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'notJust Development Blog',
  description:
    'Dive into mobile development on our blog. Master React Native & Expo and start building your mobile app ideas today.',
};

export default async function Blog() {
  const posts = await getAllPosts({ type: 'Blog' });

  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center my-5">
        <h1>Blog</h1>
        <p className="text-gray-500 text-center">
          Check out our blog for the latest tips, tricks, and best practices on
          Javascript, React/React Native, AWS and Startups.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          {posts.map((post, index) => (
            <BlogCard post={post} key={post.slug} priority={index < 2} />
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
