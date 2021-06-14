import { GetStaticProps } from 'next';
import Testimonials from '../components/Testimonials';
import TechLogosRow from '../components/TechLogosRow';
import AboutUsSection from '../components/AboutUsSection';
import HeroSection from '../components/HeroSection';
import HomePageProjects from '../components/HomePageProjects';
import BlogSection from '../components/BlogSection';
import Layout from '../components/Layout/Layout';
import { getAllPosts } from '../lib/api';

const BLOG_POSTS_ON_HOME_PAGE = 4;

interface Props {
  latestPosts: Post[];
}

export default function Home({ latestPosts }: Props) {
  return (
    <Layout title="notJust Development">
      <main className="grid gap-12">
        {/* Hero */}
        <HeroSection />

        {/* Tech stack */}
        <TechLogosRow />

        {/* Projects */}
        <HomePageProjects />

        <Testimonials />

        {/* Blog */}
        <BlogSection posts={latestPosts} />

        {/* About us */}
        <AboutUsSection />
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    latestPosts: await getAllPosts({ limit: BLOG_POSTS_ON_HOME_PAGE }),
  },
});
