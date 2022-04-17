import { GetStaticProps } from 'next';
import Testimonials from '../components/Testimonials';
import TechLogos from '../components/TechLogos';
import AboutUsSection from '../components/AboutUsSection';
import HeroSection from '../components/HeroSection';
import HomePageProjects from '../components/HomePageProjects';
import BlogSection from '../components/BlogSection';
import Layout from '../components/Layout/Layout';
import { getAllPostsMeta } from '../lib/postRepository';
import { getCoursesMetaByType } from '../lib/courseRepository';

const BLOG_POSTS_ON_HOME_PAGE = 4;
const COURSES_ON_HOME_PAGE = 2;

interface Props {
  latestPosts: PostMeta[];
  freeCourses: CourseMeta[];
  proCourses: CourseMeta[];
}

export default function Home({ latestPosts, freeCourses, proCourses }: Props) {
  return (
    <Layout>
      <main className="grid gap-12">
        {/* Hero */}
        <HeroSection />

        {/* Tech stack */}
        <TechLogos />

        {/* Projects */}
        <HomePageProjects freeCourses={freeCourses} proCourses={proCourses} />

        <Testimonials />

        {/* Blog */}
        <BlogSection posts={latestPosts} />

        <AboutUsSection />
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    latestPosts: await getAllPostsMeta({ limit: BLOG_POSTS_ON_HOME_PAGE }),
    freeCourses: await getCoursesMetaByType({
      type: 'free',
      limit: COURSES_ON_HOME_PAGE,
    }),
    proCourses: await getCoursesMetaByType({
      type: 'pro',
      limit: COURSES_ON_HOME_PAGE,
    }),
  },
});
