import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import MaxWidthWrapper from '../MaxWidthWrapper';

function HeroSection() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col md:flex-row items-center">
        {/* Taglines */}
        <div className="flex-1 mb-5">
          <p className="text-xs text-secondary font-mono">
            Development | Code | Entrepreneurship
          </p>

          <h1 className="text-3xl leading-relaxed">
            notJust Development is where coding meets entrepreneurship
          </h1>
          <p className="text-xl text-gray-300 my-4 leading-relaxed">
            Your journey to becoming a full-stack technical lead starts today.
            Learn faster by building real projects.
          </p>

          {/* button */}
          <Button href="/" text="Sign up" className="w-32 my-5" />
        </div>

        {/* Video */}
        <div className="flex-1 relative justify-center items-center pr-9 mb-10 w-full">
          <Image
            src="/images/video_img.png"
            height={144}
            width={144}
            alt="profile image"
            layout="responsive"
          />
          <div className="absolute bottom-0 right-0 w-14 transform translate-y-9 md:w-24 md:translate-y-16 md:translate-x-6">
            <Image
              src="/images/pattern_4.svg"
              height={2106} /* TODO height should be smaller */
              width={1204}
              alt="pattern around video"
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

export default HeroSection;
