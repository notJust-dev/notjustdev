import React from 'react';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';

const techLogos = [
  '/images/tech_logos/firebase.svg',
  '/images/tech_logos/graphql.svg',
  '/images/tech_logos/javascript.svg',
  '/images/tech_logos/mongodb.svg',
  '/images/tech_logos/next-js.svg',
  '/images/tech_logos/nodejs.svg',
  '/images/tech_logos/react.svg',
  '/images/tech_logos/redux.svg',
  '/images/tech_logos/typescript.svg',
];

function TechLogosRow() {
  return (
    <MaxWidthWrapper maxWidth={800}>
      <section className="flex flex-row flex-wrap justify-center">
        {techLogos.map((logo) => (
          <div
            className="relative w-8 h-8 m-3 sm:w-12 sm:h-12 sm:mx-10 sm:my-5"
            key={logo}
          >
            <Image
              src={logo} // Route of the image fil
              alt="profile image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </section>
    </MaxWidthWrapper>
  );
}

export default TechLogosRow;
