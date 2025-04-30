import Image from 'next/image';
import newsletterHero from '@images/newsletter/newsletter-hero.avif';
import senja from '@images/newsletter/senja.png';
import Form from './form';

export default function NewsletterLandingPage() {
  return (
    <section className="flex flex-col md:flex-row items-center min-h-[80vh]">
      <div className="flex-1 mb-5 space-y-10 w-full">
        {/* Taglines */}
        <div className="flex flex-wrap gap-2">
          <span className="text-pill whitespace-pre">⚛️{'  '}React Native</span>
          <span className="text-pill whitespace-pre">✨{'  '}Expo</span>
          <span className="text-pill whitespace-pre">
            🏗{'  '}Full Stack Mobile Dev
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-semibold text-primary-gradient">
          notJust Newsletter
        </h1>
        <p className="text-xl text-white-100 leading-relaxed">
          Stay up-to-date with the latest technologies and become a better{' '}
          <b>React Native</b> Developer.
        </p>

        <Form formId="7171106" />

        {/* <SenjaWidget id="7020b122-aafc-45a6-8667-57a0533faf15" /> */}
        <Image
          src={senja}
          alt="notJust Newsletter Social proof"
          width={380}
          height={45}
        />
      </div>

      {/* Hero image */}
      {/* <div className="flex-1 relative justify-center items-center pr-9 mb-10 w-full "> */}
      <Image
        src={newsletterHero}
        height={748}
        width={722}
        alt="notJust Newsletter Image"
        className="max-w-md"
        placeholder="blur"
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1100px) 50vw,
              550px"
      />

      {/* </div> */}
    </section>
  );
}
