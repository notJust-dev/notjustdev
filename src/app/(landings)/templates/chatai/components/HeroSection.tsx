import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { pricing } from '../data/pricing';

export default function HeroSection() {
  return (
    <MaxWidthWrapper>
      <section className="py-16 md:py-28 flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        <div className="flex-1 space-y-6">
          <p className="text-pill w-fit">A notJust.dev Template</p>
          <h1 className="text-4xl md:text-6xl leading-tight">
            Ship an AI chat app <br className="hidden md:block" />
            <span className="text-primary-gradient">in a weekend.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl">
            ChatAI is a production-ready Expo template with streaming,
            multi-model support, Supabase, paywalls, and CI/CD already wired up.
            Clone it, drop in your API keys, and publish.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={pricing.stripeUrl}
              className="button button-primary"
              data-stripe-link
            >
              Get the Template
            </a>
            <span className="text-primary font-space-grotesk font-medium text-sm tracking-wide">
              Early bird · €100 off
            </span>
          </div>
          <p className="text-gray-400 text-sm pt-2">
            iOS + Android · Full stack · Lifetime updates
          </p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/images/templates/chatai/screenshots/model-picker.png"
            alt="ChatAI template preview"
            width={380}
            height={800}
            priority
            className="rounded-[40px] shadow-2xl shadow-primary/10 max-w-[280px] md:max-w-[360px] h-auto"
          />
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
