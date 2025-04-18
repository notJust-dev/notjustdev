import AboutUsSection from '../../components/HomePage/AboutUsSection';
import HeroSection from '../../components/HomePage/HeroSection';
import HomePageProjects from '../../components/HomePage/ProjectsSection';
import BlogSection from '../../components/HomePage/BlogSection';
import { getAllPosts } from '../../lib/notion/notion';
// import HomePageEvents from '../../components/EventsOverview/EventsOverview';
// import { getUpcomingEvents } from '../../lib/events';
import SenjaWidget from '@/components/SenjaWidget';
import Image from 'next/image';
import StatsSection from '@/components/HomePage/StatsSection';
import RNMSection from '@/components/HomePage/RNMSection';

export const revalidate = 10;

const BLOG_POSTS_ON_HOME_PAGE = 4;
const PROJECTS_ON_HOME_PAGE = 2;
// const EVENTS_ON_HOME_PAGE = 2;

export default async function Home() {
  const [latestPosts, projects] = await Promise.all([
    getAllPosts({
      type: 'Blog',
      pageSize: BLOG_POSTS_ON_HOME_PAGE,
    }),
    getAllPosts({
      type: 'Project',
      pageSize: PROJECTS_ON_HOME_PAGE,
    }),
    // getUpcomingEvents({
    //   pageSize: EVENTS_ON_HOME_PAGE,
    // }),
  ]);

  return (
    <main className="grid gap-12">
      {/* Hero */}
      <HeroSection />

      <SenjaWidget id="fb91bb4e-be55-4ca9-a855-119d0bafcfb0" />

      {/* Tech stack */}
      {/* <TechLogos /> */}

      <StatsSection />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-[2/1] relative">
          <Image
            src="/images/testimonials/charlie-cheever.avif"
            alt="Testimonial from Charlie Cheever"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="aspect-[2/1] relative">
          <Image
            src="/images/testimonials/krzysztof-magiera.avif"
            alt="Testimonial from Krzysztof Magiera"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <RNMSection />

      {/* Projects */}
      <HomePageProjects project={projects} />

      {/* <HomePageEvents events={events} /> */}

      {/* Blog */}
      <BlogSection posts={latestPosts} />

      <AboutUsSection />

      <section className="space-y-10 my-20">
        <div className="flex flex-col gap-8 items-start">
          <span className="text-pill">💛 Wall of love</span>
          <h2 className="text-5xl text-primary-gradient">
            What our students say
          </h2>
        </div>
        <SenjaWidget id="bed0c23e-7ff0-4def-bf4f-c3dfafe519b6" />
      </section>
    </main>
  );
}
