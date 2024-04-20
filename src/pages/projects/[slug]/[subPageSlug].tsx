import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import {
  getAllPosts,
  getPostBySLug,
  getSubPostsFor,
} from '../../../lib/notion/notion';
import PostPage, { PostPageProps } from '../../../views/PostPage';

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts({
    type: 'Project',
    subPageFilter: 'sub_pages',
  });

  const paths = posts.map(({ parentSlug, slug }) => ({
    params: { slug: parentSlug, subPageSlug: slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const post = await getPostBySLug(
    params?.subPageSlug as string,
    params?.slug as string,
  );
  
  if (!post) {
    return {
      props: { post: null },
      revalidate: 10,
    };
  }

  const parentPost = await getPostBySLug(params?.slug as string); // We only need post meta
  // Maybe later
  // const subPosts = await getSubPostsFor(post.id);

  const siblingPosts = parentPost
    ? (await getSubPostsFor(parentPost.id)).reverse()
    : [];
  const currentPostIndex = siblingPosts.findIndex((s) => s.id === post.id);
  const pagination = {
    prev: currentPostIndex > 0 ? siblingPosts[currentPostIndex - 1] : null,
    next:
      currentPostIndex < siblingPosts.length - 1
        ? siblingPosts[currentPostIndex + 1]
        : null,
  };

  return {
    props: {
      post,
      parentPost,
      pagination,
    },
    revalidate: 10,
  };
};
