import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { features } from '../data/features';
import FeatureRow from './FeatureRow';

export default function FeaturesSection() {
  return (
    <MaxWidthWrapper>
      <section id="features" className="py-20 md:py-28 space-y-12 md:space-y-20">
        <div className="space-y-4 max-w-2xl">
          <p className="text-pill w-fit">What&apos;s inside</p>
          <h2 className="text-3xl md:text-5xl">
            Every screen a real chat app needs,{' '}
            <span className="text-primary-gradient">already built</span>
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {features.map((feature, i) => (
            <FeatureRow
              key={feature.title}
              feature={feature}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
