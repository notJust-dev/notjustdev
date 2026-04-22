import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { faq } from '../data/faq';

function PlusIcon() {
  return (
    <svg
      className="w-5 h-5 text-primary shrink-0 transition-transform duration-200 group-open:rotate-45"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default function FAQAccordion() {
  return (
    <MaxWidthWrapper maxWidth={900}>
      <section className="py-20 md:py-24 space-y-10">
        <div className="space-y-4">
          <p className="text-pill w-fit">FAQ</p>
          <h2 className="text-3xl md:text-5xl">Questions, answered.</h2>
        </div>

        <div className="space-y-3">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl bg-black/30 border border-white-200/10 hover:border-primary/30 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 md:p-6 font-space-grotesk font-medium text-white-100 text-lg">
                <span>{item.question}</span>
                <PlusIcon />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-300 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        <p className="text-center text-gray-400 pt-4">
          Still have questions?{' '}
          <a
            href="mailto:support@notjust.dev?subject=ChatAI%20Template"
            className="text-primary hover:underline"
          >
            support@notjust.dev
          </a>
        </p>
      </section>
    </MaxWidthWrapper>
  );
}
