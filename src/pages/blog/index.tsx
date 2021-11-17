import React from 'react';
import { GetStaticProps } from 'next';
import BlogCard from '../../components/BlogCard';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import { getAllPostsMeta } from '../../lib/postRepository';

interface BlogProps {
  posts: PostMeta[];
}

const Blog = ({ posts }: BlogProps) => (
  <Layout title="notJust Development Blog">
    <MaxWidthWrapper>
      <section className="flex flex-col items-center my-5">
        <h1>Blog</h1>
        <p className="text-gray-500 text-center">
          Check out our blog for the latest tips, tricks, and best practices on
          Javascript, React/React Native, AWS and Startups.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          {posts.map((post) => (
            <BlogCard post={post} key={post.slug} />
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  </Layout>
);

export default Blog;

export const getStaticProps: GetStaticProps<BlogProps> = async () => ({
  props: {
    posts: await getAllPostsMeta(),
  },
});
