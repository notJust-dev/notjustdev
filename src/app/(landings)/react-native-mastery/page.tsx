import { Metadata } from 'next';
import Script from 'next/script';
import RNMPageWrapper from './components/RNMPageWrapper';
import RNMNavbar from './components/RNMNavbar';
import HeroSection from './components/HeroSection';
import SenjaWidget from './components/SenjaWidget';
import TestimonialsSection from './components/TestimonialsSection';
import LogoCarousel from './components/LogoCarousel';
import TechStackSection from './components/TechStackSection';
import ResultsSection from './components/ResultsSection';
import ProjectsGrid from './components/ProjectsGrid';
import CapstoneProject from './components/CapstoneProject';
import PricingSection from './components/PricingSection';
import CurriculumTabs from './components/CurriculumTabs';
import FAQAccordion from './components/FAQAccordion';
import TutorSection from './components/TutorSection';
import StudentReviews from './components/StudentReviews';
import FinalCTA from './components/FinalCTA';
import { testimonialGroups } from './data/testimonials';

export const metadata: Metadata = {
  title: 'React Native Mastery - the Ultimate React Native and Expo Course',
  description:
    'The only course you need to Master mobile development with React Native & Expo. Build 7 projects and prepare your portfolio with real mobile apps.',
  openGraph: {
    title: 'React Native Mastery - the Ultimate React Native and Expo Course',
    description:
      'The only course you need to Master mobile development with React Native & Expo. Build 7 projects and prepare your portfolio with real mobile apps.',
    images: ['/images/thumbnails/courses/react-native-mastery.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React Native Mastery - the Ultimate React Native and Expo Course',
    description:
      'The only course you need to Master mobile development with React Native & Expo. Build 7 projects and prepare your portfolio with real mobile apps.',
    images: ['/images/thumbnails/courses/react-native-mastery.png'],
  },
  alternates: {
    canonical: 'https://www.notjust.dev/react-native-mastery',
  },
};

export default function ReactNativeMasteryPage() {
  return (
    <RNMPageWrapper>
      <RNMNavbar />
      <HeroSection />

      {/* Senja reviews strip — full width */}
      <div style={{ padding: '75px 0', width: '100%' }}>
        <SenjaWidget widgetId="a0dd54df-a3b8-4f1d-8dca-ee8cf87c11e1" />
      </div>

      {/* Testimonials #1: Charlie Cheever, Evan Bacon */}
      <TestimonialsSection images={testimonialGroups[0].images} />

      <LogoCarousel />
      <TechStackSection />
      <ResultsSection />

      {/* Testimonials #2: Krzysztof Magiera, Catalin Miron */}
      <TestimonialsSection images={testimonialGroups[1].images} />

      <ProjectsGrid />
      <CapstoneProject />

      {/* Testimonials #3: Marc Rousavy, Jamon Holmgren */}
      <TestimonialsSection images={testimonialGroups[2].images} />

      <PricingSection />

      {/* Testimonials #4: Sebastien Lorber, Hirbod */}
      <TestimonialsSection images={testimonialGroups[3].images} />

      <CurriculumTabs />
      <TutorSection />

      {/* Testimonials #5: Simon Grimm, Enzo Manuel Mangano */}
      <TestimonialsSection images={testimonialGroups[4].images} />

      <FAQAccordion />

      {/* Testimonials #6: Tomasz, Krzysztof P, Kacper, Giovanni */}
      <TestimonialsSection images={testimonialGroups[5].images} />

      <StudentReviews />

      {/* Testimonials #7: Colby Fayock, Hosna Qasmei */}
      <TestimonialsSection images={testimonialGroups[6].images} />

      <FinalCTA />

      {/* ParityDeals PPP banner */}
      <Script
        src="https://cdn.paritydeals.com/banner.js"
        strategy="afterInteractive"
      />
    </RNMPageWrapper>
  );
}
