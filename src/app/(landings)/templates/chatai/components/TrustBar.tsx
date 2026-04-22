import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const logos = [
  { name: 'Expo', src: '/images/partners/expo.avif', width: 100, height: 36 },
  { name: 'RevenueCat', src: '/images/partners/revenuecat.avif', width: 160, height: 36 },
];

const textPills = ['Supabase', 'OpenAI', 'Sentry', 'PostHog', 'TypeScript'];

export default function TrustBar() {
  return (
    <MaxWidthWrapper>
      <section className="py-10 border-t border-b border-white-200/10">
        <p className="text-center text-white-200 text-sm uppercase tracking-widest mb-6">
          Built on the tools you already trust
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
          {textPills.map((name) => (
            <span
              key={name}
              className="text-white-100/80 font-space-grotesk font-medium text-lg tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
