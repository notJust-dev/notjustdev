export type PricingModule = {
  name: string;
  label: string;
};

export type PricingTier = {
  name: string;
  description: string;
  priceUSD: number;
  priceEUR: number;
  stripeLink: string;
  splitLink?: string;
  splitLabel?: string;
  features: string[];
  modules: PricingModule[];
  bonusLessons?: string[];
  highlight?: boolean;
  variant: 'basic' | 'pro' | 'ultimate';
  bootcampNote?: string;
  bootcampReadMore?: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: 'BASIC',
    description: 'Master the fundamentals of React Native',
    priceUSD: 349,
    priceEUR: 349,
    stripeLink: 'https://buy.stripe.com/bJecN4fYo7RPdgJ4Uv73G0f',
    features: [
      'Access to the first 4 modules',
      'Notion guide',
      'Exclusive Discord Community',
      '30-days money-back',
    ],
    modules: [
      { name: 'Business Card', label: 'RN Fundamentals' },
      { name: 'Quiz app', label: 'Data Management' },
      { name: 'Camera App', label: 'Platform APIs' },
      { name: 'Complex Form Management', label: '' },
    ],
    variant: 'basic',
  },
  {
    name: 'PRO',
    description:
      'Master React Native and build professional mobile apps',
    priceUSD: 499,
    priceEUR: 499,
    stripeLink: 'https://buy.stripe.com/28o6s6gJ621R2zeeV2',
    features: [
      'Access to all modules and projects',
      'Notion guide',
      'Exclusive Discord Community',
      'Certificate of completion',
      '30-days money-back',
    ],
    modules: [
      { name: 'Business Card', label: 'RN Fundamentals' },
      { name: 'Quiz app', label: 'Data Management' },
      { name: 'Camera App', label: 'Platform APIs' },
      { name: 'Complex Form Management', label: '' },
      { name: 'Fitness App', label: 'Local First App' },
      { name: 'Game', label: 'Animations & Gestures' },
      { name: 'Ultimate Social Media', label: '' },
    ],
    bonusLessons: ['Fitness App UI'],
    highlight: true,
    variant: 'pro',
  },
  {
    name: 'Bootcamp',
    description:
      'Master React Native in 8 weeks - with direct mentorship from Vadim.',
    priceUSD: 799,
    priceEUR: 997,
    stripeLink: 'https://ntjst.dev/sZxZaE2',
    splitLink: 'https://ntjst.dev/aI80rcz',
    splitLabel: 'Or split it in 3 x €349',
    features: [
      '8 weeks structured program',
      'Weekly Coaching calls with Vadim',
      'Clear milestones & Accountability',
      'Homework Projects & code reviews',
      'Access to all RNM module',
      'Notion guide',
      'Exclusive Discord Community',
      'Certificate of completion',
      'Bonus advanced workshops',
      '30-days money-back',
    ],
    modules: [
      { name: 'Business Card', label: 'RN Fundamentals' },
      { name: 'Quiz app', label: 'Data Management' },
      { name: 'Camera App', label: 'Platform APIs' },
      { name: 'Complex Form Management', label: '' },
      { name: 'Fitness App', label: 'Local First App' },
      { name: 'Game', label: 'Animations & Gestures' },
      { name: 'Ultimate Social Media', label: '' },
    ],
    variant: 'ultimate',
    bootcampNote:
      'We run the Bootcamp only once a year with just 25 Students!',
    bootcampReadMore: 'https://www.notjust.dev/bootcamp',
  },
];

export const blackFridayTiers: PricingTier[] = pricingTiers.map((tier) => {
  const bfPriceEUR = tier.priceEUR / 2;
  const promoSuffix = '?prefilled_promo_code=bf2025';
  return {
    ...tier,
    priceEUR: bfPriceEUR,
    stripeLink: `${tier.stripeLink}${promoSuffix}`,
    splitLink: tier.splitLink
      ? `${tier.splitLink}${promoSuffix}`
      : undefined,
    splitLabel: tier.splitLink
      ? `Or split it in 3 x €${(bfPriceEUR / 3).toFixed(1)}`
      : undefined,
  };
});
