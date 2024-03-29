import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import Layout from '../../../components/Layout/Layout';
import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import StaticCodeSnippet from '../../../components/StaticCodeSnippet';
import InlineCodeSnippet from '../../../components/InlineCodeSnippet';
import MDXImage from '../../../components/MDXImage';
import AuthorDetails from '../../../components/AuthorDetails';
import BlogCard from '../../../components/BlogCard';
import TableOfContents from '../../../components/TableOfContents';
import {
  getAllPosts,
  getPostBySLug,
  getRecommendedPostsMeta,
} from '../../../lib/notion/notion';

import * as sharedComponents from '../../../components/shared';
import Tags from '../../../components/Tags';
import PostLinks from '../../../components/PostLinks';

const { YoutubeVideo } = sharedComponents;

const components = {
  pre: StaticCodeSnippet,
  code: InlineCodeSnippet,
  img: MDXImage,
  ...sharedComponents,
};

const dateFormat = {
  month: 'short' as 'short',
  day: 'numeric' as 'numeric',
  year: 'numeric' as 'numeric',
};

interface Props {
  post: Post | null;
  recommendedPosts: PostMeta[];
}

function BlogPostPage({ post, recommendedPosts }: Props) {
  const [activeHeadingId, setActiveHeadingId] = useState('');

  useEffect(() => {
    const callback: IntersectionObserverCallback = (headings) => {
      const intersectingHeader = headings.find((h) => h.isIntersecting);
      if (intersectingHeader) {
        setActiveHeadingId(intersectingHeader.target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -40% 0px',
    });

    const headingElements = Array.from(document.querySelectorAll('h2, h3'));
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  if (!post) {
    return (
      <MaxWidthWrapper>
        <h3>Post not found!</h3>
      </MaxWidthWrapper>
    );
  }

  const author = post.authors[0];

  return (
    <Layout
      title={post.title}
      description={post.description}
      image={post.image}
      pageType="article"
      // keywords={post.keywords}
      hideNewsletterForm={post.hideNewsletterForm}
    >
      <div className="bg-gray-900 pt-10">
        <MaxWidthWrapper maxWidth={1200}>
          <div className="my-10">
            <h1 className="text-5xl leading-snug mt-10 mb-5">{post.title}</h1>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 my-5">
              <div className="flex gap-3">
                {author?.image && (
                  <Image
                    src={author.image}
                    width={50}
                    height={50}
                    alt={`${author.name} profile picture`}
                  />
                )}
                <div className="flex flex-col w-full">
                  <span className="font-bold text-lg">{author?.name}</span>
                  <span className="text-gray-400">
                    {new Date(post.updatedOn).toLocaleString(
                      'en-US',
                      dateFormat,
                    )}
                  </span>
                </div>
              </div>
              <Tags tags={post.tags} />
            </div>
          </div>

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

          <div className="flex flex-row gap-20">
            <MaxWidthWrapper maxWidth={750} noPadding>
              <article className="flex-1">
                <h2 id="introduction" className="invisible h-0 mt-0">
                  Introduction
                </h2>
                <div className="mdx-post">
                  <MDXRemote {...post.content} components={components} />
                </div>
              </article>
            </MaxWidthWrapper>
            <aside className="flex-col flex-1 py-5 sticky top-0 self-start max-h-screen overflow-scroll no-scrollbar hidden lg:block">
              <div className="flex flex-col gap-5">
                <PostLinks post={post} />
                {post.toc && (
                  <TableOfContents
                    toc={post.toc}
                    activeHeadingId={activeHeadingId}
                  />
                )}
              </div>
            </aside>
          </div>

          {post.authors.length ? (
            <AuthorDetails author={post.authors[0]} />
          ) : null}

          {/* Displaying multiple authors (Needs a bit of style adjustment) */}
          {/* {post.authors.map((author) => (
          <AuthorDetails key={author.id} author={author} />
        ))} */}

          <h3 className="text-2xl mt-10">Read next</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            {recommendedPosts?.map((recommendedPost) => (
              <BlogCard post={recommendedPost} key={recommendedPost.slug} />
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  // if (process.env.SKIP_BUILD_STATIC_GENERATION) {
  //   return {
  //     paths: [],
  //     fallback: 'blocking',
  //   };
  // }

  const posts = await getAllPosts({ type: 'Blog' });
  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: GetStaticPropsContext) => {
  const post = await getPostBySLug(params?.slug as string);
  const recommendedPosts = await getRecommendedPostsMeta(post);

  return {
    props: {
      post,
      recommendedPosts,
    },
    revalidate: 10,
  };
};

export default BlogPostPage;
