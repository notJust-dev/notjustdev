import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import TemplateNavbar from './TemplateNavbar';
import WaitlistForm from './WaitlistForm';

export type ComingSoonConfig = {
  name: string;
  tagline: string;
  description: string;
  featuresPill: string;
  features: { title: string; description: string }[];
  preOrder: {
    stripeUrl: string;
    price: string;
    originalPrice: string;
    currency: string;
    discountLabel: string;
  };
  waitlistFormId: string;
  waitlistEmbedUid: string;
};

export default function ComingSoonPage({ config }: { config: ComingSoonConfig }) {
  return (
    <>
      <TemplateNavbar
        ctaHref={config.preOrder.stripeUrl}
        ctaLabel="Pre-order"
        secondary={{ href: '#waitlist', label: 'Join the waitlist' }}
      />

      {/* Hero */}
      <MaxWidthWrapper>
        <section className="py-16 md:py-24 space-y-6 max-w-3xl">
          <p className="text-pill w-fit">Coming soon · notJust.dev Template</p>
          <h1 className="text-4xl md:text-6xl leading-tight">
            {config.name}
            <br className="hidden md:block" />
            <span className="text-primary-gradient">{config.tagline}</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl">
            {config.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={config.preOrder.stripeUrl}
              className="button button-primary"
              data-stripe-link
            >
              Pre-order now
            </a>
            <span className="text-primary font-space-grotesk font-medium text-sm tracking-wide">
              {config.preOrder.discountLabel}
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            Locked-in pre-order price. Delivered when the template launches.
          </p>
        </section>
      </MaxWidthWrapper>

      {/* Sneak peek */}
      <MaxWidthWrapper>
        <section className="py-20 md:py-24 space-y-12">
          <div className="space-y-4 max-w-2xl">
            <p className="text-pill w-fit">{config.featuresPill}</p>
            <h2 className="text-3xl md:text-5xl">
              What&apos;s coming{' '}
              <span className="text-primary-gradient">in the box.</span>
            </h2>
            <p className="text-gray-300 text-lg">
              A rough preview. Final feature list will firm up closer to launch.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {config.features.map((f) => (
              <li
                key={f.title}
                className="flex items-start gap-3 p-5 rounded-xl bg-black/30 border border-white-200/10 hover:border-primary/40 transition-colors"
              >
                <span
                  className="text-primary text-lg mt-0.5 shrink-0"
                  aria-hidden
                >
                  ✓
                </span>
                <div className="space-y-1">
                  <p className="text-white-100 font-space-grotesk font-medium">
                    {f.title}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </MaxWidthWrapper>

      {/* Pre-order card */}
      <MaxWidthWrapper>
        <section className="py-16 md:py-20">
          <div className="space-y-4 max-w-xl mb-10">
            <p className="text-pill w-fit">Pre-order pricing</p>
            <h2 className="text-3xl md:text-5xl">
              Pay less today.{' '}
              <span className="text-primary-gradient">Get it the day it ships.</span>
            </h2>
          </div>

          <div className="relative max-w-xl mx-auto">
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary via-primary/30 to-secondary/20" />
            <div className="relative rounded-3xl bg-[#0e0b00] p-8 md:p-12 space-y-8">
              <div className="text-center space-y-2">
                <p className="text-white-200 font-space-grotesk uppercase tracking-widest text-sm">
                  {config.name} Template
                </p>
                <span className="inline-block bg-primary/15 text-primary font-space-grotesk font-semibold text-sm px-4 py-1.5 rounded-full">
                  {config.preOrder.discountLabel}
                </span>
                <div className="flex items-baseline justify-center gap-3 pt-1">
                  <p className="text-white-200 text-2xl md:text-3xl font-space-grotesk line-through decoration-white-200/60">
                    {config.preOrder.currency}
                    {config.preOrder.originalPrice}
                  </p>
                  <p className="text-white-100 text-6xl md:text-7xl font-space-grotesk font-bold">
                    {config.preOrder.currency}
                    {config.preOrder.price}
                  </p>
                </div>
                <p className="text-gray-400">
                  Pre-order today. Access delivered at launch.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  'One developer',
                  'Unlimited apps',
                  'Lifetime updates',
                  'Delivered as soon as the template ships',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <span className="text-primary text-lg" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={config.preOrder.stripeUrl}
                className="button button-primary w-full"
                data-stripe-link
              >
                Pre-order {config.name}
              </a>

              <p className="text-gray-400 text-sm text-center">
                Not ready? Join the waitlist below for launch updates.
              </p>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>

      {/* Waitlist */}
      <MaxWidthWrapper maxWidth={800}>
        <section
          id="waitlist"
          className="py-20 md:py-24 flex justify-center scroll-mt-24"
        >
          <WaitlistForm
            formId={config.waitlistFormId}
            embedUid={config.waitlistEmbedUid}
          />
        </section>
      </MaxWidthWrapper>
    </>
  );
}
