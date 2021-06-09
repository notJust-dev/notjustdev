import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout/Layout';

const post = {
  id: '1',
  slug: 'the_importance_of_learning_css',
  title: 'The Importance of Learning CSS',
  image:
    'https://ourcodeworld.com/public-media/articles/articleocw-5d07e6b3790af.jpg',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias maiores praesentium dignissimos suscipit illum animi fugiat.',
};

function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout title={post.title}>
      <h1>{slug}</h1>
    </Layout>
  );
}

export default BlogPostPage;
