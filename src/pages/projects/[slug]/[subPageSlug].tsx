import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import {
  getAllPosts,
  getPostBySLug,
  getSubPostsFor,
} from '../../../lib/notion/notion';
import ProjectPage, {
  ProjectPageProps,
} from '../../../views/ProjectPage/ProjectPage';

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

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const post = await getPostBySLug(
    params?.subPageSlug as string,
    params?.slug as string,
  );
  const parentPost = await getPostBySLug(params?.slug as string); // We only need post meta
  // Maybe later
  // const subPosts = await getSubPostsFor(post.id);

  const siblingPosts = (await getSubPostsFor(parentPost.id)).reverse();
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
      subPosts: [], // a sub page can also have subpages,
      parentPost,
      pagination,
    },
    revalidate: 10,
  };
};

export default ProjectPage;
