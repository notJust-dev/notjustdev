import { Metadata } from 'next';
import {
  getAllPosts,
  getPostBySLug,
  getSubPostsFor,
} from '../../../../lib/notion/notion';
import PostPage from '../../../../views/PostPage';

export const revalidate = 60;

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts({ type: 'Project' });
  return posts.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySLug(slug);

  return {
    title: post?.seoTitle || post?.title,
    description: post?.description,
    openGraph: {
      type: 'article',
      images: post?.image || '',
    },
  };
}

export default async function ProjectPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySLug(slug);
  const subPosts = post ? (await getSubPostsFor(post.id)).reverse() : [];

  return <PostPage post={post} subPosts={subPosts} />;
}
