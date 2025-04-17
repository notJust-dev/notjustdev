import React from 'react';
import Button from '../Button';
import MaxWidthWrapper from '../MaxWidthWrapper';

function HeroSection() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col md:flex-row items-center min-h-[60vh]">
        {/* Taglines */}
        <div className="flex-1 mb-5 space-y-6">
          <div className="flex gap-2">
            <span className="text-pill whitespace-pre">👨‍💻{'  '}Build</span>
            <span className="text-pill whitespace-pre">🚀{'  '}Launch</span>
            <span className="text-pill whitespace-pre">🌱{'  '}Grow</span>
          </div>

          <h1 className="text-6xl font-semibold text-transparent from-primary to-yellow-100 bg-clip-text bg-gradient-to-r">
            Build apps with confidence
          </h1>
          <p className="text-xl text-white-100 leading-relaxed">
            Learn Full-Stack Mobile development with <b>React Native</b> — by
            building real apps.
          </p>

          {/* button */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Button href="/react-native-mastery" text="Master React Native" />
            <Button
              href="https://www.youtube.com/channel/UCYSa_YLoJokZAwHhlwJntIA"
              text="Subscribe"
              type="outline"
            />
          </div>
        </div>

        {/* Video */}
        {/* <div className="flex-1 relative justify-center items-center pr-9 mb-10 w-full">
          <Image
            src={video}
            alt="profile image"
            placeholder="blur"
            priority
            sizes="(max-width: 768px) 100vw,
              (max-width: 1100px) 50vw,
              550px"
          />
          <div className="absolute bottom-0 right-0 w-14 translate-y-9 md:w-24 md:translate-y-16 md:translate-x-6">
            <Image src={pattern4} width={100} height={200} alt="" />
          </div>
        </div> */}
      </section>
    </MaxWidthWrapper>
  );
}

export default HeroSection;
