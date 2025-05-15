import { Metadata } from 'next';
import Calculator from './calcualtor';

export const metadata: Metadata = {
  title:
    "App Revenue Calculator | Estimate Your Mobile App's Earning Potential",
  description:
    "Calculate your mobile app's revenue potential with our free tool. Get accurate 14-day and 60-day projections based on real industry data across all app categories.",
};

export default function AppRevenueCalculator() {
  return (
    <div className="mt-8 md:mt-20 flex flex-col gap-12 md:gap-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-primary-gradient">
        Mobile App Revenue Calculator
      </h1>

      <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20  justify-center">
        {/* Info Column */}
        <section className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">
          <div className="text-lg md:text-xl text-gray-600 dark:text-white-200 flex flex-col gap-4">
            <p>
              Estimate your mobile app&apos;s revenue based on real industry
              data. Enter your download count and app category to see your
              potential earnings after 60 days.
            </p>

            <p>
              Perfect for indie developers, studios, and anyone curious about
              app monetization.
            </p>
          </div>

          <div className="text-base text-gray-500 dark:text-neutral-300  rounded-xl p-4 border border-gray-100 dark:border-zinc-700">
            <span className="font-semibold ">Data Source:</span> Revenue
            estimates are based on{' '}
            <a
              href="https://www.revenuecat.com/state-of-subscription-apps-2025/?utm_source=notjustdev&utm_medium=referral&utm_campaign=app-revenue-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-600 dark:hover:text-primary-400"
            >
              The State of Subscription Apps 2025 by RevenueCat
            </a>
            . Data is drawn from 75,000+ subscription apps and $10B+ in tracked
            revenue, providing Q1 to median ranges for each category.{' '}
            <span className="sr-only">
              Source:
              https://www.revenuecat.com/state-of-subscription-apps-2025/
            </span>
          </div>
        </section>
        {/* Calculator Column */}
        <section className="w-full md:w-1/2 ">
          <Calculator />
        </section>
      </div>
    </div>
  );
}
