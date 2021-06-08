import React from 'react';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';
import Button from './Button';

function AboutUsSection() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center mb-10">
        <h1>About us</h1>
        <p className="text-xs text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
          molestias reiciendis totam repellendus cumque nobis architecto,
          mollitia consequuntur, accusantium incidunt nihil? Ad totam corporis
          repudiandae voluptas alias illo officia.
        </p>

        <div className="flex flex-col md:flex-row items-center my-5 ">
          <div className="flex flex-1">
            <Image
              src="/images/vadim.png"
              height={440}
              width={340}
              alt="profile image"
              layout="intrinsic"
              objectFit="contain"
            />
          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="text-secondary">This is me</h2>
            <h1>Master the latest technologies</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nemo sapiente excepturi vel iure! Aliquam vel, excepturi accusamus
              maiores libero quidem nisi, asperiores eveniet natus nam
              praesentium! Vero, quos ducimus.
            </p>
            <div className="flex flex-row">
              <div className="relative w-20 h-20 m-3">
                <Image
                  src="/images/certifications/cp.png" // Route of the image fil
                  alt="profile image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative w-20 h-20 m-3">
                <Image
                  src="/images/certifications/cp.png" // Route of the image fil
                  alt="profile image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="relative w-20 h-20 m-3">
                <Image
                  src="/images/certifications/cp.png"
                  alt="profile image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex flex-row mt-5">
              <Button text="Let's talk" href="/blog" />
              <Button text="My story" href="/blog" type="tertiary" />
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

export default AboutUsSection;
