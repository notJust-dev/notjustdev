import { GetStaticProps } from 'next';
import Testimonials from '../components/Testimonials';
import TechLogos from '../components/TechLogos';
import AboutUsSection from '../components/AboutUsSection';
import HeroSection from '../components/HeroSection';
import HomePageProjects from '../components/HomePageProjects';
import BlogSection from '../components/BlogSection';
import Layout from '../components/Layout/Layout';
import { getAllPosts } from '../lib/notion/notion';
import courses from '../data/courses';
import HomePageEvents from '../components/EventsOverview/EventsOverview';
import { getUpcomingEvents } from '../lib/events';

const BLOG_POSTS_ON_HOME_PAGE = 4;
const PROJECTS_ON_HOME_PAGE = 2;
const EVENTS_ON_HOME_PAGE = 2;

interface Props {
  latestPosts: PostMeta[];
  projects: PostMeta[];
  events: EventMeta[];
}

export default function Home({ latestPosts, projects, events }: Props) {
  return (
    <Layout description="Start your journey in mobile development with notjust.dev. Master React Native & Expo with project-based tutorials designed for beginners and web developers moving to mobile. Explore our step-by-step guides to build your first app today!">
      <main className="grid gap-12">
        {/* Hero */}
        <HeroSection />

        {/* Tech stack */}
        <TechLogos />

        {/* Projects */}
        <HomePageProjects project={projects} courses={courses} />

        <Testimonials />

        <HomePageEvents events={events} />

        {/* Blog */}
        <BlogSection posts={latestPosts} />

        <AboutUsSection />
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    latestPosts: await getAllPosts({
      type: 'Blog',
      pageSize: BLOG_POSTS_ON_HOME_PAGE,
    }),
    projects: await getAllPosts({
      type: 'Project',
      pageSize: PROJECTS_ON_HOME_PAGE,
    }),
    events: await getUpcomingEvents({
      pageSize: EVENTS_ON_HOME_PAGE,
    }),
  },
  revalidate: 10,
});
