import { Metadata } from 'next';
import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const CALENDLY_URL = 'https://calendly.com/vadim-notjustdev/bootcamp-1on1';
const APPLY_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScoG8A7ETshQBocHT9HXFgxmNDHCuC25kWcy9v7-AFdPsz7VA/viewform?usp=dialog';

const partnerLogos = [
  { name: 'AWS', src: '/images/partners/aws.avif', width: 80, height: 48 },
  { name: 'Hostinger', src: '/images/partners/hostinger.avif', width: 170, height: 38 },
  { name: 'Voximplant', src: '/images/partners/voximplant.avif', width: 180, height: 38 },
  { name: 'Stream', src: '/images/partners/stream.avif', width: 150, height: 38 },
  { name: 'Expo', src: '/images/partners/expo.avif', width: 110, height: 38 },
  { name: 'RevenueCat', src: '/images/partners/revenuecat.avif', width: 170, height: 38 },
  { name: 'Taskode', src: '/images/partners/taskade.avif', width: 150, height: 38 },
];

const sponsorTags = [
  'Dedicated tutorials',
  'Ad reads',
  'Newsletter',
  'Hackathon',
];

const collaborations = [
  {
    title: 'Dedicated tutorial',
    description:
      'In-depth tutorial published on notJust.dev integrating your tool or service in a real project. Perfect for SDKs, Dev tools.',
  },
  {
    title: 'Ad read',
    description:
      '30-90 sec Mention in one of the tutorials published on notJust.dev youtube channel',
  },
  {
    title: 'Newsletter',
    description:
      'Get your brand in front of over 30.000 developers right in their inbox',
  },
  {
    title: 'Events',
    description:
      'Join special events at notJust.dev. ex: Hackathons, Launch weeks, Conferences, etc.',
  },
];

const stats = [
  { value: '125.000+', label: 'youtube subscribers' },
  { value: '30.000+', label: 'email subscribers' },
  { value: '2M+', label: 'views last 6 months' },
  { value: '~2H', label: 'Average View Duration' },
];

const workedWithLogos = [
  { name: 'Expo', src: '/images/partners/expo.avif', width: 100, height: 36 },
  { name: 'RevenueCat', src: '/images/partners/revenuecat.avif', width: 160, height: 36 },
  { name: 'AWS', src: '/images/partners/aws.avif', width: 70, height: 44 },
  { name: 'Stream', src: '/images/partners/stream.avif', width: 120, height: 36 },
  { name: 'Voximplant', src: '/images/partners/voximplant.avif', width: 160, height: 36 },
  { name: 'Hostinger', src: '/images/partners/hostinger.avif', width: 150, height: 36 },
];

export const metadata: Metadata = {
  title: 'Partnerships - notJust.dev',
  description:
    'Get your product in the hands of 125k Mobile Devs. Showcase your product through engaging, hands-on tutorials.',
};

function BookACallCTA() {
  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noreferrer"
        className="border-2 border-primary text-primary font-bold px-8 py-3 rounded-full hover:bg-primary hover:text-black transition-colors"
      >
        Book a call
      </a>
      <p className="text-gray-400 text-sm">
        for a personalized package tailored to your brand
      </p>
    </div>
  );
}

export default function PartnershipsPage() {
  return (
    <>
      {/* Hero */}
      <MaxWidthWrapper>
        <section className="py-16 md:py-28 flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center">
          <div className="flex-1 space-y-6">
            <h1 className="text-primary">
              Get your product in the hands of 125k Mobile Devs
            </h1>
            <p className="text-gray-300 text-lg max-w-lg">
              Showcase your product to mobile developers and turn them into
              skilled, loyal users through engaging, hands-on tutorials.
            </p>
            <p className="text-gray-300 text-lg">
              Because the best marketing happens through{' '}
              <strong className="text-white">education!</strong>
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="border border-primary/40 bg-black/30 text-white font-semibold px-10 py-4 rounded-xl hover:bg-primary hover:text-black transition-colors text-lg"
              >
                Book a call
              </a>
              <a
                href={APPLY_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="border border-primary/40 bg-black/30 text-primary font-semibold px-10 py-4 rounded-xl hover:bg-primary hover:text-black transition-colors text-lg"
              >
                Apply Here
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl">
              Join us as a sponsor
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {sponsorTags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary text-black font-semibold text-sm px-5 py-2.5 rounded-full text-center"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </MaxWidthWrapper>

      {/* Partner Logo Bar */}
      <MaxWidthWrapper>
        <section className="py-10 border-t border-b border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partnerLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </section>
      </MaxWidthWrapper>

      {/* Collaborations */}
      <MaxWidthWrapper>
        <section className="py-20 space-y-12">
          <h2 className="text-primary text-center text-3xl md:text-4xl font-bold">
            Hey, we&apos;re open for collaborations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {collaborations.map((item) => (
              <div key={item.title} className="text-center space-y-3">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </MaxWidthWrapper>

      {/* Book a Call CTA */}
      <section className="py-16">
        <BookACallCTA />
      </section>

      {/* Stats */}
      <MaxWidthWrapper>
        <section className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </MaxWidthWrapper>

      {/* Case Studies */}
      <MaxWidthWrapper>
        <section className="py-20 space-y-12">
          <h2 className="text-primary text-center text-3xl md:text-4xl font-bold">
            Case studies
          </h2>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Left - Expo case study */}
            <div className="flex-1 space-y-4">
              <p className="text-gray-400 text-sm">notJust.dev X</p>
              <h3 className="text-white text-3xl font-bold">Expo</h3>
              <p className="text-gray-300">
                When many developers hesitated to use Expo,{' '}
                <strong className="text-white">notJust.dev</strong> stepped in
                to change the narrative. By creating real-world, practical
                tutorials, we showcased the power and flexibility of Expo,
                helping developers overcome their concerns and confidently build
                apps.
              </p>
              <p className="text-gray-300">
                Today, Expo is a widely adopted and recommended tool in the
                mobile development community, and we&apos;re proud to have
                played a key role in that transformation.
              </p>

              <Image
                src="/images/testimonials/charlie-expo-testimonial.png"
                alt="Testimonial from Charlie Cheever, Co-founder & CEO of Expo"
                width={400}
                height={400}
                className="rounded-xl mt-6"
              />
            </div>

            {/* Right - Video thumbnails */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/posts/videos.png"
                alt="notJust.dev tutorial videos featuring Expo integrations"
                width={400}
                height={700}
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </section>
      </MaxWidthWrapper>

      {/* Book a Call CTA */}
      <section className="py-16">
        <BookACallCTA />
      </section>

      {/* We've worked with */}
      <MaxWidthWrapper maxWidth={800}>
        <section className="py-20 space-y-10">
          <h2 className="text-primary text-center text-3xl md:text-4xl font-bold">
            We&apos;ve worked with
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {workedWithLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
              />
            ))}
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
}
