import Testimonials from '../../components/Testimonials';
import TechLogos from '../../components/TechLogos';
import AboutUsSection from '../../components/AboutUsSection';
import HeroSection from '../../components/HeroSection';
import HomePageProjects from '../../components/HomePageProjects';
import BlogSection from '../../components/BlogSection';
import { getAllPosts } from '../../lib/notion/notion';
import courses from '../../data/courses';
import HomePageEvents from '../../components/EventsOverview/EventsOverview';
import { getUpcomingEvents } from '../../lib/events';

const BLOG_POSTS_ON_HOME_PAGE = 4;
const PROJECTS_ON_HOME_PAGE = 2;
const EVENTS_ON_HOME_PAGE = 2;

export const revalidate = 10;

export default async function Home() {
  const [latestPosts, projects, events] = await Promise.all([
    getAllPosts({
      type: 'Blog',
      pageSize: BLOG_POSTS_ON_HOME_PAGE,
    }),
    getAllPosts({
      type: 'Project',
      pageSize: PROJECTS_ON_HOME_PAGE,
    }),
    getUpcomingEvents({
      pageSize: EVENTS_ON_HOME_PAGE,
    }),
  ]);

  return (
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
  );
}
