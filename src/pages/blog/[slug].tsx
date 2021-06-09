import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import Layout from '../../components/Layout/Layout';
import { getPostBySlug, getPostSlugs } from '../../lib/api';

const mdxSource = `
---
title: Example Post
published: 2021-02-13
description: This is some description
---

# Wahoo

Here's a **neat** demo:

`.trim();

function BlogPostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMemo(() => getMDXComponent(post.code), [post]);

  return (
    <Layout title={post.title}>
      <h1>{post.title}</h1>
      <Component />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPostSlugs();

  const paths = posts.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const post = await getPostBySlug(params?.slug as string, [
    'slug',
    'title',
    'date',
    'canonical',
    'description',
    'category',
    'tags',
    'code',
  ]);

  // const components = await getComponents(post.directory);

  // const source = await prepareMDX(post.content, components);

  return {
    props: {
      post,
    },
  };
};

export default BlogPostPage;
