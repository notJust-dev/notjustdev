export type TemplateStatus = 'available' | 'pre-order';

export type TemplateCard = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: TemplateStatus;
  price: string;
  originalPrice: string;
  currency: string;
  image: string;
  stack: string[];
};

export const templates: TemplateCard[] = [
  {
    slug: 'chatai',
    name: 'ChatAI',
    tagline: 'AI chat app, production-ready.',
    description:
      'Ship an AI chat app in a weekend. Streaming, multi-model picker, paywalls, and CI/CD already wired up.',
    status: 'available',
    price: '99',
    originalPrice: '199',
    currency: '€',
    image: '/images/templates/chatai/screenshots/model-picker.png',
    stack: ['Expo', 'Supabase', 'OpenAI', 'RevenueCat'],
  },
  {
    slug: 'imageai',
    name: 'ImageAI',
    tagline: 'AI image apps, done right.',
    description:
      'Text-to-image, editing, credits, and paywall built in. Same production stack that powers ChatAI.',
    status: 'pre-order',
    price: '99',
    originalPrice: '199',
    currency: '€',
    image: '/images/templates/imageai/screenshots/home.png',
    stack: ['Expo', 'Supabase', 'RevenueCat', 'DALL-E · Flux'],
  },
  {
    slug: 'ecommerce',
    name: 'Ecommerce',
    tagline: 'Mobile store in a weekend.',
    description:
      'Catalog, cart, Stripe checkout, and order tracking. Everything shoppers expect on day one.',
    status: 'pre-order',
    price: '99',
    originalPrice: '199',
    currency: '€',
    image: '/images/templates/ecommerce/screenshots/home.png',
    stack: ['Expo', 'Supabase', 'Stripe', 'Push'],
  },
];
