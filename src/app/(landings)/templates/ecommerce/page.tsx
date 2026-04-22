import { Metadata } from 'next';
import ComingSoonPage, {
  ComingSoonConfig,
} from '../_components/ComingSoonPage';

const title =
  'Ecommerce: Production-Ready React Native Mobile Commerce Template | notJust.dev';
const description =
  'A full Expo + Supabase + Stripe template for mobile commerce apps. Catalog, cart, checkout, and orders built in. Pre-order now at a discount.';
const canonical = 'https://www.notjust.dev/templates/ecommerce';
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
  name: 'Ecommerce',
  tagline: 'Launch a mobile store in a weekend.',
  description:
    'A full mobile commerce template with catalog, cart, Stripe checkout, user accounts, and order tracking. Built on the same production stack as ChatAI, so you can ship your store without gluing ten SDKs together.',
  featuresPill: 'Sneak peek',
  features: [
    {
      title: 'Product catalog with search and filters',
      description:
        'Categories, variants, inventory, and fast search. Backed by Postgres and ready for thousands of SKUs.',
    },
    {
      title: 'Cart, checkout, and Stripe payments',
      description:
        'Native cart flow, address collection, and Stripe payment sheet for iOS and Android.',
    },
    {
      title: 'User accounts and order history',
      description:
        'Email and social sign-in, saved addresses, past orders, and re-order in one tap.',
    },
    {
      title: 'Order tracking and push notifications',
      description:
        'Real-time order status updates plus push notifications for shipping and delivery.',
    },
    {
      title: 'Wishlist, reviews, and promo codes',
      description:
        'Everything shoppers expect from a modern mobile storefront, wired up on day one.',
    },
    {
      title: 'Same production stack as ChatAI',
      description:
        'Expo SDK 55, Supabase, Sentry, PostHog, and EAS workflows. Signed builds, OTA updates, the whole kit.',
    },
  ],
  preOrder: {
    stripeUrl: 'https://buy.stripe.com/5kQ14p89y8NI9dQdY74gg00',
    price: '99',
    originalPrice: '199',
    currency: '€',
    discountLabel: '€100 off · Pre-order price',
  },
  waitlistFormId: '9357766',
  waitlistEmbedUid: 'dfe427ebb6',
  heroImage: {
    src: '/images/templates/ecommerce/screenshots/home.png',
    alt: 'Ecommerce template home screen',
  },
};

export default function EcommercePage() {
  return <ComingSoonPage config={config} />;
}
