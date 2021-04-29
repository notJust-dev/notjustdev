import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button';
import BlogCard from '../components/BlogCard';

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
    image: 'https://ourcodeworld.com/public-media/articles/articleocw-5d07e6b3790af.jpg',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias maiores praesentium dignissimos suscipit illum animi fugiat.',
  }, {
    id: '2',
    slug: 'the_importance_of_learning_css_2',
    title: 'The Importance of Learning HTML',
    image: 'https://miro.medium.com/max/12000/1*Tums41FARnW23dtyXsi86w.jpeg',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias maiores praesentium dignissimos suscipit illum animi fugiat.',
  },
];

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-5 max-w-screen-xl grid gap-12">

        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center">
          {/* Taglines */}
          <div className="flex-1 mb-5">
            <p className="text-xs text-secondary font-mono">Development | Code | Entrepreneurship</p>

            <h1 className="text-2xl my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
            <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem tempore nulla aliquam error facere iusto consectetur dignissimos maiores</p>

            {/* button */}

          </div>

          {/* Video */}
          <div className="flex-1 relative justify-center items-center pr-9 mb-10 w-full">
            <Image
              src="/images/video_img.png" // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="profile image"
              layout="responsive"
            />
            <div className="absolute bottom-0 right-0 w-14 transform translate-y-9">
              <Image
                src="/images/pattern_4.svg" // Route of the image file
                height={2106} // Desired size with correct aspect ratio
                width={1204} // Desired size with correct aspect ratio
                alt="profile image"
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
          {techLogos.map(logo => (
            <div className="relative w-10 h-12 m-3">
              <Image
                src={logo} // Route of the image fil
                alt="profile image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </section>

        {/* Blog */}
        <section className="flex flex-col items-center">
          <h1 className="text-2xl">Blog</h1>
          <p className="text-xs text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio molestias reiciendis totam repellendus cumque nobis architecto, mollitia consequuntur, accusantium incidunt nihil? Ad totam corporis repudiandae voluptas alias illo officia.</p>

          {blogPosts.map((post) => <BlogCard post={post} />)}

          <Button text="See all posts" href="/blog" type="secondary" />
        </section>
      </main>

      <footer className="">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="" />
        </a>
      </footer>
    </div>
  );
}
