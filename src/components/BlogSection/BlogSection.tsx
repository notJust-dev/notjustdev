import React from 'react';
import BlogCard from '../BlogCard';
import Button from '../Button';
import MaxWidthWrapper from '../MaxWidthWrapper';

interface Props {
  posts: PostMeta[];
}

function BlogSection({ posts }: Props) {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-start">
        <div className="flex flex-col gap-8 items-start">
          <h2 className="text-5xl text-primary-gradient">Blog</h2>
          <p className="text-white-100 text-xl">
            Check out our blog for the latest tips, tricks, and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
          {posts.map((post) => (
            <BlogCard post={post} key={post.slug} />
          ))}
        </div>

        <Button
          text="See all posts"
          href="/blog"
          type="secondary"
          className="self-center"
        />
      </section>
    </MaxWidthWrapper>
  );
}

export default BlogSection;
