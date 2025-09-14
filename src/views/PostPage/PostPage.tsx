import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';

import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import StaticCodeSnippet from '../../components/StaticCodeSnippet';
import InlineCodeSnippet from '../../components/InlineCodeSnippet';
import MDXImage from '../../components/MDXImage';
import AuthorDetails from '../../components/AuthorDetails';
import BlogCard from '../../components/BlogCard';
import TableOfContents from '../../components/TableOfContents';

import * as sharedComponents from '../../components/shared';
import Tags from '../../components/Tags';
import PostLinks from '../../components/PostLinks';
import Link from 'next/link';
import { IoIosOpen } from 'react-icons/io';
import ProjectCard from '../../components/ProjectCard';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { SerializeOptions } from 'next-mdx-remote/dist/types';
import KitForm from '@/components/KitForm';

const { YoutubeVideo } = sharedComponents;

const components = {
  pre: StaticCodeSnippet,
  code: InlineCodeSnippet,
  img: MDXImage,
  ...sharedComponents,
};

const dateFormat: Intl.DateTimeFormatOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
};

export type PostPageProps = {
  post: Post | null;
  recommendedPosts?: PostMeta[];
  parentPost?: Post | null;
  subPosts?: PostMeta[];
  pagination?: {
    prev: PostMeta | null;
    next: PostMeta | null;
  };
};

export default function PostPage({
  post,
  parentPost,
  subPosts,
  pagination,
  recommendedPosts = [],
}: PostPageProps) {
  if (!post) {
    return (
      <MaxWidthWrapper>
        <h3>Post not found!</h3>
      </MaxWidthWrapper>
    );
  }

  const author = post.authors[0];

  const serializeOptions: SerializeOptions = {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        () =>
          rehypeAutolinkHeadings({
            behavior: 'append',
            properties: {
              className: 'heading-copy-link',
              'aria-hidden': 'true',
              tabIndex: -1,
            },
          }),
      ],
    },
  };

  return (
    <div className="py-10">
      <div className="my-10">
        <Tags tags={post.tags} />

        <h1 className="text-5xl leading-snug mt-10 mb-5">{post.title}</h1>

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

        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 my-5">
          <div className="flex gap-3">
            {author?.image && (
              <Image
                src={author.image}
                width={50}
                height={50}
                alt={`${author.name} profile picture`}
                className="rounded-full"
              />
            )}
            <div className="flex flex-col w-full">
              <span className="font-bold text-lg">{author?.name}</span>
              <span className="text-gray-400">
                {new Date(post.updatedOn).toLocaleString('en-US', dateFormat)}
              </span>
            </div>
          </div>
          {/* <Tags tags={post.tags} /> */}
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-10 items-stretch xl:items-end">
        <div className="xl:max-w-screen-md w-full rounded-lg overflow-hidden">
          {post.youtubeID ? (
            <YoutubeVideo id={post.youtubeID} title={post.title} />
          ) : (
            !!post.image &&
            !post.hideImageHeader && (
              <div className="relative w-full aspect-w-16 aspect-h-9">
                <Image
                  src={post.image}
                  alt="post image"
                  width={1280}
                  height={720}
                  priority
                  sizes="(max-width: 1100px) 100vw, 1100px"
                />
              </div>
            )
          )}
        </div>
        {post.kitFormId ? (
          <KitForm
            formId={post.kitFormId}
            formEmbedID={post.kitFormEmbedID}
            beforeTitle="Get access to"
            title="The Asset Bundle"
            description="Source code, Step by step guide, code snippets, and assets used for this project."
            buttonText="Get the bundle"
          />
        ) : (
          <KitForm
            formId="2371301"
            formEmbedID="5f2aa76c34"
            beforeTitle="Subscribe to"
            title="notJust.Newsletter"
            description="Stay up-to-date with the latest technologies and become a better React Native Developer."
            buttonText="Subscribe"
          />
        )}
      </div>

      <div className="flex flex-row gap-16 mt-10">
        <div className="max-w-screen-md">
          <article className="flex-1">
            <h2 id="introduction" className="invisible h-0 mt-0">
              Introduction
            </h2>
            <div className="mdx-post">
              <MDXRemote
                source={post.content}
                options={serializeOptions}
                components={components}
              />
            </div>

            {!!subPosts?.length && (
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
                    href={`/${
                      parentPost.type === 'Blog' ? 'blog' : 'projects'
                    }/${parentPost.slug}`}
                  >
                    {parentPost.title}&nbsp;
                  </Link>
                  series
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                  {/* prev part */}
                  {/* TODO: links */}
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
          </article>
        </div>
        <aside className="flex-col flex-1 py-5 sticky top-0 self-start max-h-screen overflow-scroll no-scrollbar hidden lg:block">
          <div className="flex flex-col gap-5">
            <PostLinks post={post} />
            {post.toc && <TableOfContents toc={post.toc} />}
          </div>
        </aside>
      </div>
      {post.authors.length ? <AuthorDetails author={post.authors[0]} /> : null}

      {!!recommendedPosts?.length && (
        <>
          <h3 className="text-2xl mt-10">Read next</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            {recommendedPosts.map((recommendedPost) => (
              <BlogCard post={recommendedPost} key={recommendedPost.slug} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
