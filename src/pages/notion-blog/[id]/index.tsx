import React, { useEffect, useMemo, useState } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import Layout from '../../../components/Layout/Layout';
import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import {
  getPostBySlug,
  getPostSlugs,
  getRecommendedPostsMeta,
} from '../../../lib/postRepository';
import StaticCodeSnippet from '../../../components/StaticCodeSnippet';
import InlineCodeSnippet from '../../../components/InlineCodeSnippet';
import MDXImage from '../../../components/MDXImage';
import AuthorDetails from '../../../components/AuthorDetails';
import BlogCard from '../../../components/BlogCard';
import TableOfContents from '../../../components/TableOfContents';
import { getAllPosts, getPost } from '../../../lib/notion';

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
  const Component = useMemo(() => getMDXComponent(post?.code), [post]);

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

  return (
    <Layout
      title={post.title}
      description={post.description}
      image={post.image}
      pageType="article"
      keywords={post.keywords}
    >
      <MaxWidthWrapper>
        {post.image && !post.hideImageHeader && (
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
        )}
        <h1 className="text-5xl text-center my-10">{post.title}</h1>

        <hr className="my-4 border-gray-700" />
        <div>
          <h4>
            Published on:
            <b>
              {' '}
              {new Date(post.publishedOn).toLocaleString('en-US', dateFormat)}
            </b>
          </h4>
        </div>
        <hr className="my-4 border-gray-700" />

        <div className="flex flex-row">
          <MaxWidthWrapper maxWidth={800} px={0}>
            <article className="flex-1">
              <h2 id="introduction" className="invisible h-0 mt-0">
                Introduction
              </h2>
              <div className="mdx-post">
                <Component
                  components={{
                    pre: StaticCodeSnippet,
                    code: InlineCodeSnippet,
                    img: MDXImage,
                  }}
                />
              </div>
            </article>
          </MaxWidthWrapper>
          {post.toc && (
            <TableOfContents toc={post.toc} activeHeadingId={activeHeadingId} />
          )}
        </div>

        {post.author && <AuthorDetails authorId={post.author} />}

        <h3 className="text-2xl mt-10">Read next</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          {recommendedPosts?.map((recommendedPost) => (
            <BlogCard post={recommendedPost} key={recommendedPost.slug} />
          ))}
        </div>
      </MaxWidthWrapper>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  console.log(posts);
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: GetStaticPropsContext) => {
  const post = await getPost(params?.id as string);
  // const recommendedPosts = post?.slug
  //   ? await getRecommendedPostsMeta(post.slug)
  //   : [];
  console.log(post);
  return {
    props: {
      post,
      // recommendedPosts,
    },
  };
};

export default BlogPostPage;
