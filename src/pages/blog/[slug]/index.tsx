import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import {
  getAllPosts,
  getPostBySLug,
  getRecommendedPostsMeta,
} from '../../../lib/notion/notion';

import PostPage, { PostPageProps } from '../../../views/PostPage';

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts({ type: 'Blog' });
  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const post = await getPostBySLug(params?.slug as string);

  const recommendedPosts = post ? await getRecommendedPostsMeta(post) : [];

  return {
    props: {
      post,
      recommendedPosts,
    },
    revalidate: 10,
  };
};
