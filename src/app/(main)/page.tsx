import AboutUsSection from '../../components/AboutUsSection';
import HeroSection from '../../components/HeroSection';
import HomePageProjects from '../../components/HomePageProjects';
import BlogSection from '../../components/BlogSection';
import { getAllPosts } from '../../lib/notion/notion';
import HomePageEvents from '../../components/EventsOverview/EventsOverview';
import { getUpcomingEvents } from '../../lib/events';
import SenjaWidget from '@/components/SenjaWidget';
import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Button from '@/components/Button';
const BLOG_POSTS_ON_HOME_PAGE = 4;
const PROJECTS_ON_HOME_PAGE = 2;
const EVENTS_ON_HOME_PAGE = 2;

export const revalidate = 10;

const stats = [
  {
    value: '1000',
    label: 'Students',
  },
  {
    value: '130K',
    label: 'Youtube Subscribers',
  },
  {
    value: '20M',
    label: 'Tutorial Views',
  },
];

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

      <SenjaWidget id="fb91bb4e-be55-4ca9-a855-119d0bafcfb0" />

      {/* Tech stack */}
      {/* <TechLogos /> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 min-h-[500px] items-center ">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-6xl md:text-8xl font-space-grotesk font-black text-transparent [text-stroke:2px_#FF4D4D] [-webkit-text-stroke:2px_#FFE030]">
              {stat.value}
            </span>
            <span className="text-xl text-white-200 ">{stat.label}</span>
          </div>
        ))}
      </div>

      <div>
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
      </div>

      <div className="relative py-10 min-h-[80vh] flex items-center">
        <MaxWidthWrapper>
          <section className="flex flex-col gap-8">
            {/* title */}
            <div className="flex flex-col gap-8 items-start">
              <span className="text-pill">Our Flagship Course</span>
              <h2 className="text-5xl text-primary-gradient">
                React Native Mastery
              </h2>
            </div>
            <div className="flex flex-row gap-8">
              {/* description and benefits */}
              <div className="flex flex-1 flex-col items-start gap-8">
                <p className="text-white-100 text-xl">
                  The only course you need to Master mobile development with
                  React Native & Expo
                </p>

                <div className="space-y-4">
                  {[
                    'Build 7 real-world mobile apps',
                    'Master React Native & Expo',
                    'Build your developer portfolio',
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <span className="text-primary text-2xl bg-yellow-400/15 rounded-full p-2 w-10 h-10 flex items-center justify-center  ">
                        ✓
                      </span>
                      <span className="text-white-100 text-xl">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button
                  href="/react-native-mastery"
                  text="Learn more"
                  className="min-w-80"
                />

                <SenjaWidget id="5012cf37-566b-4484-861f-b11738cec85b" />
              </div>
              {/* logo */}
              <div className="max-w-[350px] w-full relative hidden md:block">
                <Image
                  src="/images/brand_elements/rnm_logo.avif"
                  alt="React Native 3d Logo"
                  fill
                  className="object-contain"
                />
                <Image
                  src="/images/brand_elements/union.svg"
                  alt="brand elements"
                  width={731}
                  height={850}
                  className="absolute top-0 bottom-0 left-auto right-0 blur-[300px]"
                />
              </div>
            </div>
          </section>
        </MaxWidthWrapper>
      </div>

      {/* Projects */}
      <HomePageProjects project={projects} />

      <HomePageEvents events={events} />

      {/* Blog */}
      <BlogSection posts={latestPosts} />

      <AboutUsSection />

      <section className="space-y-5 mb-10">
        <h2 className="text-center">Wall of love 💛</h2>
        <SenjaWidget id="bed0c23e-7ff0-4def-bf4f-c3dfafe519b6" />
      </section>
    </main>
  );
}
