import Testimonials from '../components/Testimonials';
import TechLogosRow from '../components/TechLogosRow';
import AboutUsSection from '../components/AboutUsSection';
import HeroSection from '../components/HeroSection';
import HomePageProjects from '../components/HomePageProjects';
import BlogSection from '../components/BlogSection';
import Layout from '../components/Layout/Layout';

export default function Home() {
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
        <BlogSection />

        {/* About us */}
        <AboutUsSection />
      </main>
    </Layout>
  );
}
