import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const steps = [
  {
    number: '01',
    title: 'Buy',
    description:
      'One-time payment via Stripe. You get instant access to the private GitHub repo and documentation.',
  },
  {
    number: '02',
    title: 'Clone',
    description:
      'Clone the repo, run the setup script, drop your Supabase and OpenAI keys into the .env file.',
  },
  {
    number: '03',
    title: 'Ship',
    description:
      'Rebrand, tweak copy, push to main. EAS builds and submits to the App Store and Play Store automatically.',
  },
];

export default function HowItWorksSection() {
  return (
    <MaxWidthWrapper>
      <section className="py-20 md:py-24 space-y-12">
        <div className="space-y-4 max-w-xl">
          <p className="text-pill w-fit">How it works</p>
          <h2 className="text-3xl md:text-5xl">
            From purchase to App Store{' '}
            <span className="text-primary-gradient">in days.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-8 rounded-2xl bg-black/30 border border-white-200/10 space-y-3"
            >
              <p className="text-primary-gradient font-space-grotesk font-bold text-5xl">
                {step.number}
              </p>
              <h3 className="text-white text-2xl">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
