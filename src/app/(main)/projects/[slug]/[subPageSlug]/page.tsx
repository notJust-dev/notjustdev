import { Metadata } from 'next';
import {
  getAllPosts,
  getPostBySLug,
  getSubPostsFor,
} from '@/lib/notion/notion';
import PostPage from '@/views/PostPage';

export const revalidate = 60;

type Props = {
  params: Promise<{
    slug: string;
    subPageSlug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts({
    type: 'Project',
    subPageFilter: 'sub_pages',
  });

  return posts.map(({ parentSlug, slug }) => ({
    slug: parentSlug,
    subPageSlug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subPageSlug, slug } = await params;
  const post = await getPostBySLug(subPageSlug, slug);

  return {
    title: post?.seoTitle || post?.title,
    description: post?.description,
    openGraph: {
      type: 'article',
      images: post?.image ? [post.image] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { subPageSlug, slug } = await params;
  const post = await getPostBySLug(subPageSlug, slug);

  if (!post) {
    return <PostPage post={null} />;
  }

  const parentPost = await getPostBySLug(slug);
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

  return (
    <PostPage post={post} parentPost={parentPost} pagination={pagination} />
  );
}
