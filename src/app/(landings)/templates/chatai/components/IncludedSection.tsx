import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { included } from '../data/included';

export default function IncludedSection() {
  return (
    <MaxWidthWrapper>
      <section className="py-20 md:py-24 space-y-12">
        <div className="space-y-4 max-w-2xl">
          <p className="text-pill w-fit">Everything included</p>
          <h2 className="text-3xl md:text-5xl">
            Not a starter kit.{' '}
            <span className="text-primary-gradient">A finished product.</span>
          </h2>
          <p className="text-gray-300 text-lg">
            The boring parts of shipping an app, the parts most tutorials skip,
            are already done.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {included.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 p-4 rounded-xl bg-black/30 border border-white-200/10 hover:border-primary/40 transition-colors"
            >
              <span
                className="text-primary text-lg mt-0.5 shrink-0"
                aria-hidden
              >
                ✓
              </span>
              <span className="text-gray-200">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </MaxWidthWrapper>
  );
}
