import BlogCard from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { getAllPosts } from '@/lib/notion/notion';
import { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Case Studies | notJust.dev',
  description:
    'Explore real-world success stories from our community. See how developers built and launched their mobile apps with notJust.dev.',
};

export default async function CaseStudies() {
  const posts = await getAllPosts({ type: 'Case study' });

  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center my-5">
        <h1>Case Studies</h1>
        <p className="text-gray-500 text-center">
          Real success stories from developers who built and launched their
          mobile apps.
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
