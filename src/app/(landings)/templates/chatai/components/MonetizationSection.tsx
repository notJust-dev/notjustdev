import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const highlights = [
  {
    title: 'RevenueCat paywall, pre-wired',
    description:
      'Gated through Stack.Protected so users hit the paywall on first launch, not three screens deep.',
  },
  {
    title: 'Multi-tier subscriptions',
    description:
      'Pro and Plus entitlements configured out of the box. Add, rename, or reprice tiers in minutes.',
  },
  {
    title: 'Cross-platform purchase + restore',
    description:
      'iOS and Android IAP handled by RevenueCat, including receipt validation and restore flows.',
  },
  {
    title: 'Subscription management screen',
    description:
      'Users can view, manage, and cancel their plan from inside the app, with a post-purchase confirmation flow.',
  },
];

export default function MonetizationSection() {
  return (
    <MaxWidthWrapper>
      <section className="py-20 md:py-28">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="flex-1 space-y-6">
            <p className="text-pill w-fit">Monetization</p>
            <h2 className="text-3xl md:text-5xl leading-tight">
              Charge users on day one{' '}
              <span className="text-primary-gradient">
                without writing a payment line.
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Most chat templates leave monetization as an exercise for the
              reader. ChatAI ships with a complete RevenueCat setup, so you can
              launch a paid app the same day you clone the repo.
            </p>

            <ul className="space-y-5 pt-2">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span
                    className="text-primary text-lg mt-0.5 shrink-0"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <div className="space-y-1">
                    <p className="text-white-100 font-space-grotesk font-medium">
                      {item.title}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src="/images/templates/chatai/screenshots/paywall.png"
              alt="ChatAI RevenueCat paywall showing multi-tier subscription options"
              width={360}
              height={780}
              sizes="(max-width: 768px) 80vw, 360px"
              className="rounded-[40px] shadow-2xl shadow-primary/10 max-w-[280px] md:max-w-[340px] h-auto"
            />
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
