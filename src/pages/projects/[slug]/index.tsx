import Image from 'next/image';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Layout from '../../../components/Layout/Layout';
import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import StaticCodeSnippet from '../../../components/StaticCodeSnippet';
import InlineCodeSnippet from '../../../components/InlineCodeSnippet';
import MDXImage from '../../../components/MDXImage';
import { MDXRemote } from 'next-mdx-remote';
import * as sharedComponents from '../../../components/shared';
import { getAllPosts, getPostBySLug } from '../../../lib/notion';

interface Props {
  post: Post | null;
}

const components = {
  pre: StaticCodeSnippet,
  code: InlineCodeSnippet,
  img: MDXImage,
  ...sharedComponents,
};

function CoursePage({ post }: Props) {
  if (!post) {
    return (
      <MaxWidthWrapper>
        <h3>Course not found!</h3>
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
        <h1 className="text-5xl text-center my-10">{post.title}</h1>

        <div className="mdx-post">
          <MDXRemote {...post.content} components={components} />
        </div>
      </MaxWidthWrapper>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // if (process.env.SKIP_BUILD_STATIC_GENERATION) {
  //   return {
  //     paths: [],
  //     fallback: 'blocking',
  //   };
  // }

  const posts = await getAllPosts({ type: 'Project' });

  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: GetStaticPropsContext) => {
  const post = await getPostBySLug(params?.slug as string);

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export default CoursePage;
