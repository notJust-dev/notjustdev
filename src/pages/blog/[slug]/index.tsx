import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useMemo } from 'react';
import Layout from '../../../components/Layout/Layout';
import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import { getPostBySlug, getPostSlugs } from '../../../lib/api';
import styles from './styles.css';

interface Props {
  post: Post;
}

function BlogPostPage({ post }: Props) {
  const Component = useMemo(() => getMDXComponent(post.code), [post]);
  // TODO Add SEO title description etc
  return (
    <Layout title={post.title}>
      <MaxWidthWrapper>
        <div className="relative w-full h-96">
          <Image src={post.image} layout="fill" objectFit="cover" />
        </div>
        <h1 className="text-5xl text-center my-10">{post.title}</h1>

        <div className="mdx-post">
          <Component />
        </div>
      </MaxWidthWrapper>
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

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: GetStaticPropsContext) => {
  const post = await getPostBySlug(params?.slug as string);

  return {
    props: {
      post,
    },
  };
};

export default BlogPostPage;
