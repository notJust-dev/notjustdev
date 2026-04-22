import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { pricing } from '../data/pricing';

export default function PricingSection() {
  return (
    <MaxWidthWrapper>
      <section id="pricing" className="py-20 md:py-28">
        <div className="space-y-4 max-w-xl mb-12">
          <p className="text-pill w-fit">Pricing</p>
          <h2 className="text-3xl md:text-5xl">
            One price.{' '}
            <span className="text-primary-gradient">Unlimited apps.</span>
          </h2>
        </div>

        <div className="relative max-w-xl mx-auto">
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary via-primary/30 to-secondary/20" />
          <div className="relative rounded-3xl bg-[#0e0b00] p-8 md:p-12 space-y-8">
            <div className="text-center space-y-2">
              <p className="text-white-200 font-space-grotesk uppercase tracking-widest text-sm">
                ChatAI Template
              </p>
              <span className="inline-block bg-primary/15 text-primary font-space-grotesk font-semibold text-sm px-4 py-1.5 rounded-full">
                {pricing.discountLabel}
              </span>
              <div className="flex items-baseline justify-center gap-3 pt-1">
                <p className="text-white-200 text-2xl md:text-3xl font-space-grotesk line-through decoration-white-200/60">
                  {pricing.currency}
                  {pricing.originalPrice}
                </p>
                <p className="text-white-100 text-6xl md:text-7xl font-space-grotesk font-bold">
                  {pricing.currency}
                  {pricing.price}
                </p>
              </div>
              <p className="text-gray-400">One-time payment · Lifetime updates</p>
            </div>

            <ul className="space-y-3">
              {pricing.licenseSummary.map((item) => (
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
              href={pricing.stripeUrl}
              className="button button-primary w-full"
              data-stripe-link
            >
              Get the Template
            </a>

            <p className="text-gray-400 text-sm text-center">
              Instant access · Lifetime updates
            </p>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
