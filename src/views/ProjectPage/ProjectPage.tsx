import Image from 'next/image';
import Layout from '../../components/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import StaticCodeSnippet from '../../components/StaticCodeSnippet';
import InlineCodeSnippet from '../../components/InlineCodeSnippet';
import MDXImage from '../../components/MDXImage';
import { MDXRemote } from 'next-mdx-remote';
import * as sharedComponents from '../../components/shared';
import Tags from '../../components/Tags';
import ProjectCard from '../../components/ProjectCard';
import Link from 'next/link';
import { IoIosOpen } from 'react-icons/io';

export interface ProjectPageProps {
  post: Post | null;
  parentPost?: Post;
  subPosts: PostMeta[];
  pagination?: {
    prev: PostMeta | null;
    next: PostMeta | null;
  };
}

const components = {
  pre: StaticCodeSnippet,
  code: InlineCodeSnippet,
  img: MDXImage,
  ...sharedComponents,
};

function ProjectPage({
  post,
  parentPost,
  subPosts,
  pagination,
}: ProjectPageProps) {
  if (!post) {
    return (
      <MaxWidthWrapper>
        <h3>Project not found!</h3>
      </MaxWidthWrapper>
    );
  }

  return (
    <Layout
      title={post.title}
      description={post.description}
      image={post.image}
      // keywords={post.keywords}
    >
      <MaxWidthWrapper>
        {post.image && (
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <Image
              src={post.image}
              alt="Course Thumbnail"
              width={1280}
              height={720}
              priority
            />
          </div>
        )}
        <h1 className="text-5xl mt-10">{post.title}</h1>

        {parentPost && (
          <p className="mb-5 flex flex-row items-center">
            <span className="border-b-2 border-transparent">
              Part of:&nbsp;&nbsp;
            </span>
            <Link
              className="text-primary border-b-2 border-transparent hover:border-primary flex flex-row items-center"
              href={`/projects/${parentPost.slug}`}
            >
              {parentPost.title}&nbsp;&nbsp;
              <IoIosOpen color="lightgray" size={20} />
            </Link>
          </p>
        )}

        <Tags tags={post.tags} />

        <div className="mdx-post">
          <MDXRemote {...post.content} components={components} />
        </div>

        {subPosts.length > 0 && (
          <>
            <h2 className="text-5xl mt-10">Episodes</h2>
            {subPosts.map((project, index) => (
              <ProjectCard
                project={project}
                key={project.slug}
                mirrored={index % 2 === 1}
                priority={index < 2}
              />
            ))}
          </>
        )}

        {pagination && parentPost && (
          <>
            <hr className="my-5 border-gray-500" />
            <p className="mb-5 text-xl">
              Check other episodes from the &nbsp;
              <Link
                className="text-primary"
                href={`/projects/${parentPost.slug}`}
              >
                {parentPost.title}&nbsp;
              </Link>
              series
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              {/* prev part */}
              {pagination.prev && (
                <Link
                  href={`/projects/${pagination.prev.parentSlug}/${pagination.prev.slug}`}
                  className="flex-1 p-5 border-2 border-gray-700 hover:border-primary rounded-lg flex flex-col items-center"
                >
                  <p className="text-xs text-gray-400">Previous part</p>
                  <p className="text-lg mt-3">{pagination.prev.title}</p>
                </Link>
              )}
              {/* next part */}
              {pagination.next && (
                <Link
                  href={`/projects/${pagination.next.parentSlug}/${pagination.next.slug}`}
                  className="flex-1 p-5 border-2 border-gray-700 hover:border-primary  rounded-lg flex flex-col items-center"
                >
                  <p className="text-xs text-gray-400">Next part</p>
                  <p className="text-lg mt-3">{pagination.next.title}</p>
                </Link>
              )}
            </div>
          </>
        )}
      </MaxWidthWrapper>
    </Layout>
  );
}

export default ProjectPage;
