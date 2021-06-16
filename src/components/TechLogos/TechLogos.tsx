import React from 'react';
import Image from 'next/image';
import MaxWidthWrapper from '../MaxWidthWrapper';

const techLogos = [
  'aws',
  'amplify',
  'graphql',
  'javascript',
  'mongodb',
  'next-js',
  'nodejs',
  'react',
  'typescript',
];

function TechLogosRow() {
  return (
    <MaxWidthWrapper maxWidth={800}>
      <section className="flex flex-row flex-wrap justify-center">
        {techLogos.map((logo) => (
          <div
            className="relative w-16 h-8 m-3 sm:w-24 sm:h-10 sm:m-5"
            key={logo}
          >
            <Image
              src={`/images/tech_logos/${logo}.svg`}
              alt={`${logo} logo`}
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
