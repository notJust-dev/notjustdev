import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { techStack } from '../data/techStack';

export default function TechStackSection() {
  return (
    <MaxWidthWrapper>
      <section className="py-16 md:py-20 space-y-10">
        <div className="space-y-4 max-w-xl">
          <p className="text-pill w-fit">Tech stack</p>
          <h2 className="text-3xl md:text-4xl">
            Modern. Battle-tested.{' '}
            <span className="text-primary-gradient">Your stack.</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4">
          {techStack.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-black/40 border border-white-200/10"
            >
              {item.logo && (
                <Image
                  src={item.logo}
                  alt=""
                  width={item.logoWidth ?? 70}
                  height={item.logoHeight ?? 24}
                  className="h-5 md:h-6 w-auto"
                  aria-hidden
                />
              )}
              <span className="text-white-100 font-space-grotesk font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
