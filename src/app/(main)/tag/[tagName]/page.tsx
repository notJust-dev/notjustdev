import React from 'react';
import BlogCard from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { getAllPostTags, getAllPosts } from '@/lib/notion/notion';
import Tag from '@/components/Tags/Tag';
import ProjectCard from '@/components/ProjectCard';
import Tags from '@/components/Tags/Tags';
import { Metadata } from 'next';

type TaggedPostsProps = {
  params: Promise<{
    tagName: string;
  }>;
};

export async function generateStaticParams() {
  const tags = await getAllPostTags();
  return tags.map((tag) => ({
    tagName: tag.name,
  }));
}

export async function generateMetadata({
  params,
}: TaggedPostsProps): Promise<Metadata> {
  const { tagName } = await params;
  const allTags = await getAllPostTags();
  const tag = allTags.find(
    (o) => o.name.toLowerCase() === tagName.toLowerCase(),
  );

  if (!tag) {
    return {
      title: 'notJust.dev Tags',
    };
  }

  return {
    title: `notJust.dev content: ${tag.name}`,
    description: `Dive into mobile development and learn more about ${tag.name}. Master React Native & Expo and start building your mobile app ideas today.`,
  };
}

export default async function TaggedPosts({ params }: TaggedPostsProps) {
  const { tagName } = await params;

  const allTags = await getAllPostTags();
  const tag = allTags.find(
    (o) => o.name.toLowerCase() === tagName.toLowerCase(),
  );

  if (!tag) {
    return (
      <MaxWidthWrapper>
        <section className="flex flex-col items-center my-5">
          <h1>Could not find posts for this tag</h1>
        </section>
      </MaxWidthWrapper>
    );
  }

  const posts = await getAllPosts({ tag });
  const projects = posts.filter((post) => post.type === 'Project');
  const blogs = posts.filter((post) => post.type === 'Blog');

  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center my-5">
        <Tags tags={allTags} highlighted={tag} />

        <h1 className="flex text-4xl items-center mt-10">
          Content tagged&nbsp;&nbsp;
          <Tag tag={tag} />
        </h1>

        {posts.length === 0 && <h2>No posts found for this tag</h2>}

        {projects.length > 0 && (
          <section className="my-10">
            <h2>Projects</h2>
            {projects.map((project, index) => (
              <ProjectCard
                project={project}
                key={project.slug}
                mirrored={index % 2 === 1}
                priority={index < 2}
              />
            ))}
          </section>
        )}

        {blogs.length > 0 && (
          <section className="my-10">
            <h2>From our blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
              {blogs.map((post, index) => (
                <BlogCard post={post} key={post.slug} priority={index < 2} />
              ))}
            </div>
          </section>
        )}
      </section>
    </MaxWidthWrapper>
  );
}
