import React from 'react';
import BlogCard from '../BlogCard';
import Button from '../Button';
import MaxWidthWrapper from '../MaxWidthWrapper';

const blogPosts = [
  {
    id: '1',
    slug: 'the_importance_of_learning_css',
    title: 'The Importance of Learning CSS',
    image:
      'https://ourcodeworld.com/public-media/articles/articleocw-5d07e6b3790af.jpg',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias maiores praesentium dignissimos suscipit illum animi fugiat.',
  },
  {
    id: '2',
    slug: 'the_importance_of_learning_css_2',
    title: 'The Importance of Learning HTML',
    image: 'https://miro.medium.com/max/12000/1*Tums41FARnW23dtyXsi86w.jpeg',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias maiores praesentium dignissimos suscipit illum animi fugiat.',
  },
  {
    id: '3',
    slug: 'the_importance_of_learning_css',
    title: 'The Importance of Learning CSS',
    image:
      'https://ourcodeworld.com/public-media/articles/articleocw-5d07e6b3790af.jpg',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias maiores praesentium dignissimos suscipit illum animi fugiat.',
  },
  {
    id: '4',
    slug: 'the_importance_of_learning_css_2',
    title: 'The Importance of Learning HTML',
    image: 'https://miro.medium.com/max/12000/1*Tums41FARnW23dtyXsi86w.jpeg',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias maiores praesentium dignissimos suscipit illum animi fugiat.',
  },
];

function BlogSection() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center">
        <h1>Blog</h1>
        <p className="text-xs text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
          molestias reiciendis totam repellendus cumque nobis architecto,
          mollitia consequuntur, accusantium incidunt nihil? Ad totam corporis
          repudiandae voluptas alias illo officia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          {blogPosts.map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </div>

        <Button text="See all posts" href="/blog" type="secondary" />
      </section>
    </MaxWidthWrapper>
  );
}

export default BlogSection;
