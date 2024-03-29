import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import {
  getAllPosts,
  getPostBySLug,
  getSubPostsFor,
} from '../../../lib/notion/notion';
import PostPage, { PostPageProps } from '../../../views/PostPage';

export default PostPage;

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

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const post = await getPostBySLug(params?.slug as string);
  const subPosts = (await getSubPostsFor(post.id)).reverse();

  return {
    props: {
      post,
      subPosts,
    },
    revalidate: 10,
  };
};
