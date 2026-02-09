import { Metadata } from 'next';
import {
  getAllPosts,
  getPostBySLug,
  getRecommendedPostsMeta,
} from '@/lib/notion/notion';
import PostPage from '@/views/PostPage';

export const revalidate = 60;

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts({ type: 'Case study' });
  return posts.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
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

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const post = await getPostBySLug(slug);
  const recommendedPosts = post ? await getRecommendedPostsMeta(post) : [];

  return <PostPage post={post} recommendedPosts={recommendedPosts} />;
}
