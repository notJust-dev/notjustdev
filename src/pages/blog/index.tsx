import React from 'react';
import { GetStaticProps } from 'next';
import BlogCard from '../../components/BlogCard';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import { getAllPosts } from '../../lib/api';

interface BlogProps {
  posts: Post[];
}

const Blog = ({ posts }: BlogProps) => (
  <Layout title="notJust Development Blog">
    <MaxWidthWrapper>
      <section className="flex flex-col items-center my-5">
        <h1>Blog</h1>
        <p className="text-xs text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
          molestias reiciendis totam repellendus cumque nobis architecto,
          mollitia consequuntur, accusantium incidunt nihil? Ad totam corporis
          repudiandae voluptas alias illo officia.
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
    posts: await getAllPosts(),
  },
});
