import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import Testimonials from '../components/Testimonials';
import Navbar from '../components/Navbar';

const techLogos = [
  '/images/tech_logos/firebase.svg',
  '/images/tech_logos/graphql.svg',
  '/images/tech_logos/javascript.svg',
  '/images/tech_logos/mongodb.svg',
  '/images/tech_logos/next-js.svg',
  '/images/tech_logos/nodejs.svg',
  '/images/tech_logos/react.svg',
  '/images/tech_logos/redux.svg',
  '/images/tech_logos/typescript.svg',
];

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
];

const projects = [
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

      <main className="p-5 max-w-screen-xl grid gap-12">
        {/* Hero */}
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
            <div className="absolute bottom-0 right-0 w-14 transform translate-y-9">
              <Image
                src="/images/pattern_4.svg"
                height={2106} /* TODO height should be smaller */
                width={1204}
                alt="pattern around video"
                layout="responsive"
              />
            </div>
          </div>

          <div>
            <Button href="" text="Sign up" />
          </div>
        </section>

        {/* Tech stack */}
        <section className="flex flex-row flex-wrap justify-center">
          {techLogos.map((logo) => (
            <div className="relative w-10 h-12 m-3" key={logo}>
              <Image
                src={logo} // Route of the image fil
                alt="profile image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="flex flex-col items-center">
          <h1>Project Based Tutorials</h1>
          <p className=" text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
            molestias reiciendis totam repellendus cumque nobis architecto
          </p>

          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}

          <Button text="See all projects" href="/blog" type="secondary" />
        </section>

        <Testimonials />

        {/* Blog */}
        <section className="flex flex-col items-center">
          <h1>Blog</h1>
          <p className="text-xs text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
            molestias reiciendis totam repellendus cumque nobis architecto,
            mollitia consequuntur, accusantium incidunt nihil? Ad totam corporis
            repudiandae voluptas alias illo officia.
          </p>

          {blogPosts.map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}

          <Button text="See all posts" href="/blog" type="secondary" />
        </section>

        {/* About us */}
        <section className="flex flex-col items-center">
          <h1>About us</h1>
          <p className="text-xs text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
            molestias reiciendis totam repellendus cumque nobis architecto,
            mollitia consequuntur, accusantium incidunt nihil? Ad totam corporis
            repudiandae voluptas alias illo officia.
          </p>
          <Image
            src="/images/vadim.png"
            height={440}
            width={340}
            alt="profile image"
            layout="intrinsic"
            objectFit="contain"
          />
          <div>
            <h2 className="text-secondary">This is me</h2>
            <h1>Master the latest technologies</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nemo sapiente excepturi vel iure! Aliquam vel, excepturi accusamus
              maiores libero quidem nisi, asperiores eveniet natus nam
              praesentium! Vero, quos ducimus.
            </p>
            <div className="flex flex-row">
              <div className="relative w-20 h-20 m-3">
                <Image
                  src="/images/certifications/cp.png" // Route of the image fil
                  alt="profile image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative w-20 h-20 m-3">
                <Image
                  src="/images/certifications/cp.png" // Route of the image fil
                  alt="profile image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative w-20 h-20 m-3">
                <Image
                  src="/images/certifications/cp.png"
                  alt="profile image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <Button text="Let's talk" href="/blog" />
              <Button text="My story" href="/blog" type="tertiary" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
