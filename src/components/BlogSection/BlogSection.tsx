import React from 'react';
import BlogCard from '../BlogCard';
import Button from '../Button';
import MaxWidthWrapper from '../MaxWidthWrapper';

interface Props {
  posts: Post[];
}

function BlogSection({ posts }: Props) {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center">
        <h1>Blog</h1>
        <p className="text-gray-500 text-center">
          Check out our blog for the latest tips, tricks, and best practices on
          Javascript, React/React Native, AWS and Startups.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
          {posts.map((post) => (
            <BlogCard post={post} key={post.slug} />
          ))}
        </div>

        <Button text="See all posts" href="/blog" type="secondary" />
      </section>
    </MaxWidthWrapper>
  );
}

export default BlogSection;
