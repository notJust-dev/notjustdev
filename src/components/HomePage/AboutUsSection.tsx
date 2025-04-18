import Image from 'next/image';
import author from '../../../public/images/vadim.jpg';

export default function AboutUsSection() {
  return (
    <section className="flex flex-col items-start my-20">
      <div className="flex flex-col gap-8 items-start">
        <span className="text-pill">Meet your tutor</span>
        <h2 className="text-5xl text-primary-gradient">Hi, I&apos;m Vadim</h2>
      </div>

      <div className="flex flex-col md:flex-row my-5 gap-12 mt-16">
        <div className="flex-1 w-full border border-white-100/25 rounded-2xl p-6 px-8 flex flex-col gap-6 group">
          <Image
            src={author}
            alt="Vadim Savin"
            placeholder="blur"
            className="rounded-2xl grayscale group-hover:grayscale-0 duration-500"
          />
          <span className="font-space-grotesk leading-normal text-3xl text-white-100 font-medium">
            Developer, Educator <br /> Founder of notJust.dev
          </span>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="leading-relaxed text-lg space-y-4">
            <p className="text-primary-gradient text-4xl font-space-grotesk">
              At notJust.dev, my mission is to help developers build impactful
              mobile apps.
            </p>
            <p>
              Our educational content has reached over{' '}
              <b className="text-primary">10 million developers</b>, giving them
              the tools and confidence to bring their app ideas to life.
            </p>
            <p>
              Before starting notJust.dev, I worked at a big tech company
              (FAANG), built a software development agency, and co-founded 2
              startups. These experiences taught me a lot about coding and
              entrepreneurship.
            </p>
            <p>
              I have built over 100 apps with{' '}
              <b className="text-primary">React Native</b> and{' '}
              <b className="text-primary">Expo</b>, and I want to help you do
              the same.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
