import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useMemo } from 'react';
import Layout from '../../../components/Layout/Layout';
import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import { getPostBySlug, getPostSlugs } from '../../../lib/postRepository';
import StaticCodeSnippet from '../../../components/StaticCodeSnippet';
import InlineCodeSnippet from '../../../components/InlineCodeSnippet';
import MDXImage from '../../../components/MDXImage';
import AuthorDetails from '../../../components/AuthorDetails';

const dateFormat = {
  month: 'short' as 'short',
  day: 'numeric' as 'numeric',
  year: 'numeric' as 'numeric',
};

interface Props {
  post: Post | null;
}

function BlogPostPage({ post }: Props) {
  const Component = useMemo(() => getMDXComponent(post?.code), [post]);

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
              layout="fill"
              objectFit="cover"
              alt="post image"
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

        <div className="mdx-post">
          <Component
            components={{
              pre: StaticCodeSnippet,
              code: InlineCodeSnippet,
              img: MDXImage,
            }}
          />
        </div>

        {post.author && <AuthorDetails authorId={post.author} />}
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
