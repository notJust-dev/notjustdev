import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import Testimonials from '../components/Testimonials';
import Navbar from '../components/Navbar';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import TechLogosRow from '../components/TechLogosRow';
import AboutUsSection from '../components/AboutUsSection';

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

const projects = [
  {
    id: '0',
    slug: 'the_importance_of_learning_css',
    title: 'The Importance of Learning CSS',
    image: '/images/tmp/thumbnail.png',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias maiores praesentium dignissimos suscipit illum animi fugiat.',
  },
  {
    id: '1',
    slug: 'the_importance_of_learning_css',
    title: 'The Importance of Learning CSS',
    image: '/images/tmp/thumbnail_2.png',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias maiores praesentium dignissimos suscipit illum animi fugiat.',
  },
  {
    id: '2',
    slug: 'the_importance_of_learning_css_2',
    title: 'The Importance of Learning HTML',
    image: '/images/tmp/thumbnail_3.png',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias maiores praesentium dignissimos suscipit illum animi fugiat.',
  },
];

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="grid gap-12">
        {/* Hero */}
        <MaxWidthWrapper>
          <section className="flex flex-col md:flex-row items-center">
            {/* Taglines */}
            <div className="flex-1 mb-5">
              <p className="text-xs text-secondary font-mono">
                Development | Code | Entrepreneurship
              </p>

              <h1 className="text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h1>
              <p className="text-sm text-gray-300 my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                autem tempore nulla aliquam error facere iusto consectetur
                dignissimos maiores
              </p>

              {/* button */}
              <Button href="" text="Sign up" className="w-32" />
            </div>

            {/* Video */}
            <div className="flex-1 relative justify-center items-center pr-9 mb-10 w-full">
              <Image
                src="/images/video_img.png"
                height={144}
                width={144}
                alt="profile image"
                layout="responsive"
              />
              <div className="absolute bottom-0 right-0 w-14 transform translate-y-9 md:w-24 md:translate-y-16 md:translate-x-6">
                <Image
                  src="/images/pattern_4.svg"
                  height={2106} /* TODO height should be smaller */
                  width={1204}
                  alt="pattern around video"
                  layout="responsive"
                />
              </div>
            </div>
          </section>
        </MaxWidthWrapper>

        {/* Tech stack */}
        <TechLogosRow />

        {/* Projects */}
        <MaxWidthWrapper>
          <section className="flex flex-col items-center">
            <h1>Project Based Tutorials</h1>
            <p className=" text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
              molestias reiciendis totam repellendus cumque nobis architecto
            </p>

            {projects.map((project, index) => (
              <ProjectCard
                project={project}
                key={project.id}
                mirrored={index % 2 == 1}
              />
            ))}

            <Button text="See all projects" href="/blog" type="secondary" />
          </section>
        </MaxWidthWrapper>

        <Testimonials />

        {/* Blog */}
        <MaxWidthWrapper>
          <section className="flex flex-col items-center">
            <h1>Blog</h1>
            <p className="text-xs text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
              molestias reiciendis totam repellendus cumque nobis architecto,
              mollitia consequuntur, accusantium incidunt nihil? Ad totam
              corporis repudiandae voluptas alias illo officia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
              {blogPosts.map((post) => (
                <BlogCard post={post} key={post.id} />
              ))}
            </div>

            <Button text="See all posts" href="/blog" type="secondary" />
          </section>
        </MaxWidthWrapper>

        {/* About us */}
        <AboutUsSection />
      </main>

      <Footer />
    </div>
  );
}
