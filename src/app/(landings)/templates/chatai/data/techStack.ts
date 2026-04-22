export type TechItem = {
  name: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
};

export const techStack: TechItem[] = [
  { name: 'Expo SDK 55', logo: '/images/partners/expo.avif', logoWidth: 110, logoHeight: 38 },
  { name: 'React Native 0.83' },
  { name: 'TypeScript (strict)' },
  { name: 'Supabase (Postgres + Auth + Edge)' },
  { name: 'OpenAI' },
  { name: 'RevenueCat', logo: '/images/partners/revenuecat.avif', logoWidth: 170, logoHeight: 38 },
  { name: 'Sentry' },
  { name: 'PostHog' },
  { name: 'TanStack Query' },
  { name: 'NativeWind + Tailwind v4' },
];
