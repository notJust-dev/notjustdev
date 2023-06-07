import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogCard from '../../components/BlogCard';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import { getAllPostTags, getAllPosts } from '../../lib/notion';
import Tag from '../../components/Tags/Tag';
import ProjectCard from '../../components/ProjectCard';
import Tags from '../../components/Tags/Tags';

interface TaggedPostsProps {
  tag?: NotionMultiSelect;
  allTags: NotionMultiSelect[];
  posts: PostMeta[];
}

const TaggedPosts = ({ posts, tag, allTags }: TaggedPostsProps) => {
  if (!tag) {
    return (
      <Layout title="notJust Development Blog">
        <MaxWidthWrapper>
          <section className="flex flex-col items-center my-5">
            <h1>Could not find posts for this tag</h1>
          </section>
        </MaxWidthWrapper>
      </Layout>
    );
  }

  const projects = posts.filter((post) => post.type === 'Project');
  const blogs = posts.filter((post) => post.type === 'Blog');

  return (
    <Layout title="notJust Development Blog">
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
    </Layout>
  );
};

export default TaggedPosts;

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllPostTags();
  const paths = tags.map((tag) => ({
    params: { tagName: tag.name },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<TaggedPostsProps> = async ({
  params,
}) => {
  const allTags = await getAllPostTags();
  const tag = allTags.find(
    (o) => o.name.toLowerCase() === (params?.tagName as string)?.toLowerCase(),
  );
  if (!tag) {
    return {
      props: { posts: [], allTags },
      revalidate: 10,
    };
  }
  return {
    props: {
      tag,
      allTags,
      posts: await getAllPosts({ tag }),
    },
    revalidate: 10,
  };
};
