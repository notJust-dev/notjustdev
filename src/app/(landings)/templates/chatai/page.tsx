import { Metadata } from 'next';
import ChataiNavbar from './components/ChataiNavbar';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import FeaturesSection from './components/FeaturesSection';
import MonetizationSection from './components/MonetizationSection';
import IncludedSection from './components/IncludedSection';
import TechStackSection from './components/TechStackSection';
import HowItWorksSection from './components/HowItWorksSection';
import PricingSection from './components/PricingSection';
import FAQAccordion from './components/FAQAccordion';
import FinalCTA from './components/FinalCTA';

const title =
  'ChatAI: Production-Ready React Native AI Chat Template | notJust.dev';
const description =
  'A full Expo + Supabase + OpenAI chat app template. Streaming responses, multi-model picker, RevenueCat paywalls, Sentry, PostHog, and EAS CI/CD included. Ship in days, not months.';
const ogImage = '/images/templates/chatai/og-image.png';
const canonical = 'https://www.notjust.dev/templates/chatai';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [ogImage],
    type: 'website',
    url: canonical,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
  alternates: {
    canonical,
  },
};

export default function ChatAITemplatePage() {
  return (
    <>
      <ChataiNavbar />
      <HeroSection />
      <TrustBar />
      <FeaturesSection />
      <MonetizationSection />
      <IncludedSection />
      <TechStackSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
