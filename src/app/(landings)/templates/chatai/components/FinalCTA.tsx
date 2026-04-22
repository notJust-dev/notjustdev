import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { pricing } from '../data/pricing';

export default function FinalCTA() {
  return (
    <MaxWidthWrapper maxWidth={800}>
      <section className="py-20 md:py-28 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl leading-tight">
          Stop building auth, paywalls, and streaming from scratch.{' '}
          <span className="text-primary-gradient">Ship the app.</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Every day you spend wiring up infrastructure is a day your app
          isn&apos;t making money. Grab the template and skip straight to the
          product.
        </p>
        <div className="pt-4">
          <a
            href={pricing.stripeUrl}
            className="button button-primary"
            data-stripe-link
          >
            Get the ChatAI Template
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          Instant access · Lifetime updates
        </p>
      </section>
    </MaxWidthWrapper>
  );
}
