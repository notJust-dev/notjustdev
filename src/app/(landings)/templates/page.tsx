import { Metadata } from 'next';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import NavbarMini from '@/components/Navbar/NavbarMini';
import { templates } from './data/templates';
import TemplateCard from './components/TemplateCard';

const title = 'Mobile App Templates | notJust.dev';
const description =
  'Production-ready React Native templates for the apps you actually want to ship. AI chat, AI image generation, ecommerce, and more.';
const canonical = 'https://www.notjust.dev/templates';
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

const pillars = [
  {
    title: 'Production-ready, not a starter',
    description:
      'Signed builds, Sentry, PostHog, RevenueCat, row-level security, and EAS CI/CD. The boring parts are done.',
  },
  {
    title: 'One stack across every template',
    description:
      'Expo, Supabase, and TypeScript under the hood. Learn it once, reuse it across every template you buy.',
  },
  {
    title: 'Built for AI pair programming',
    description:
      'AGENTS.md files tuned for Claude Code, Cursor, Windsurf, and Copilot so your editor understands the code.',
  },
  {
    title: 'Lifetime updates',
    description:
      'Bug fixes, new features, and SDK upgrades land in the repo. Pull them in whenever you are ready.',
  },
];

export default function TemplatesIndexPage() {
  return (
    <>
      <NavbarMini />

      {/* Hero */}
      <MaxWidthWrapper>
        <section className="py-16 md:py-24 space-y-6 max-w-3xl">
          <p className="text-pill w-fit">Mobile App Templates</p>
          <h1 className="text-4xl md:text-6xl leading-tight">
            Ship the app{' '}
            <span className="text-primary-gradient">
              without shipping the plumbing.
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl">
            Production-ready React Native templates for the apps people
            actually want to build. Clone, rebrand, ship. Skip the six months
            of auth, paywalls, and CI/CD wiring.
          </p>
        </section>
      </MaxWidthWrapper>

      {/* Templates grid */}
      <MaxWidthWrapper>
        <section className="pb-20 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {templates.map((t) => (
              <TemplateCard key={t.slug} template={t} />
            ))}
          </div>
        </section>
      </MaxWidthWrapper>

      {/* Why notJust.dev */}
      <MaxWidthWrapper>
        <section className="py-20 md:py-24 space-y-12">
          <div className="space-y-4 max-w-2xl">
            <p className="text-pill w-fit">Why notJust.dev templates</p>
            <h2 className="text-3xl md:text-5xl">
              The same stack, the same quality,{' '}
              <span className="text-primary-gradient">every time.</span>
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <li
                key={p.title}
                className="flex items-start gap-3 p-5 rounded-xl bg-black/30 border border-white-200/10"
              >
                <span
                  className="text-primary text-lg mt-0.5 shrink-0"
                  aria-hidden
                >
                  ✓
                </span>
                <div className="space-y-1">
                  <p className="text-white-100 font-space-grotesk font-medium">
                    {p.title}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </MaxWidthWrapper>

      {/* Final CTA */}
      <MaxWidthWrapper maxWidth={800}>
        <section className="py-20 md:py-24 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl">
            Got an app idea?{' '}
            <span className="text-primary-gradient">
              Start from a finished one.
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Pick a template. Drop in your keys. Push to the store. Every
            template is delivered as source code with full documentation.
          </p>
        </section>
      </MaxWidthWrapper>
    </>
  );
}
