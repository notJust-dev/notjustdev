import { Metadata } from 'next';
import ComingSoonPage, {
  ComingSoonConfig,
} from '../_components/ComingSoonPage';

const title =
  'ImageAI: Production-Ready React Native AI Image Generation Template | notJust.dev';
const description =
  'A full Expo + Supabase template for AI image generation apps. Text-to-image, editing, credits, and paywall built in. Pre-order now at a discount.';
const canonical = 'https://www.notjust.dev/templates/imageai';
const ogImage = '/images/templates/chatai/og-image.png';

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
  alternates: { canonical },
};

const config: ComingSoonConfig = {
  name: 'ImageAI',
  tagline: 'AI image apps, done right.',
  description:
    'Skip the plumbing for your next text-to-image or AI photo app. ImageAI ships with generation, editing, credits, history, and a paywall, all on the same production stack that powers ChatAI.',
  featuresPill: 'Sneak peek',
  features: [
    {
      title: 'AI image generation',
      description:
        'Turn any prompt into a finished image, with the leading models wired up and ready to swap.',
    },
    {
      title: 'Edit, inpaint, upscale',
      description:
        'Built-in tools for editing existing images, inpainting regions, and upscaling results.',
    },
    {
      title: 'Style presets and custom prompts',
      description:
        'Pre-tuned style presets plus full control over prompts, aspect ratios, and seeds.',
    },
    {
      title: 'Credits-based monetization',
      description:
        'RevenueCat-powered credits system out of the box. Users buy credit packs or subscribe.',
    },
    {
      title: 'Generation history and gallery',
      description:
        'Every render is saved in Supabase with RLS. Favorite, share, or re-generate from history.',
    },
    {
      title: 'Same production stack as ChatAI',
      description:
        'Expo SDK 55, Supabase, Sentry, PostHog, and EAS workflows. Signed builds, OTA updates, the whole kit.',
    },
  ],
  preOrder: {
    stripeUrl: 'https://buy.stripe.com/14AdRbcpO4xs75IaLV4gg01',
    price: '99',
    originalPrice: '199',
    currency: '€',
    discountLabel: '€100 off · Pre-order price',
  },
  waitlistFormId: '9357746',
  waitlistEmbedUid: '156b18e6a7',
  heroImage: {
    src: '/images/templates/imageai/screenshots/home.png',
    alt: 'ImageAI template home screen',
  },
};

export default function ImageAIPage() {
  return <ComingSoonPage config={config} />;
}
