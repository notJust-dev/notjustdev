import React from 'react';
import Image from 'next/image';
import MaxWidthWrapper from '../MaxWidthWrapper';

import aws from '../../../public/images/tech_logos/aws.svg';
import amplify from '../../../public/images/tech_logos/amplify.svg';
import graphql from '../../../public/images/tech_logos/graphql.svg';
import javascript from '../../../public/images/tech_logos/javascript.svg';
import mongodb from '../../../public/images/tech_logos/mongodb.svg';
import nextjs from '../../../public/images/tech_logos/nextjs.svg';
import nodejs from '../../../public/images/tech_logos/nodejs.svg';
import react from '../../../public/images/tech_logos/react.svg';
import typescript from '../../../public/images/tech_logos/typescript.svg';

const techLogos: { [index: string]: string } = {
  aws,
  amplify,
  graphql,
  javascript,
  mongodb,
  nextjs,
  nodejs,
  react,
  typescript,
};

function TechLogosRow() {
  return (
    <MaxWidthWrapper maxWidth={800}>
      <section className="flex flex-row flex-wrap justify-center">
        {Object.keys(techLogos).map((logoName) => (
          <div
            className="relative w-16 h-8 m-3 sm:w-24 sm:h-10 sm:m-5"
            key={logoName}
          >
            <Image
              src={techLogos[logoName]}
              alt={`${logoName} logo`}
              fill
              sizes="96px"
            />
          </div>
        ))}
      </section>
    </MaxWidthWrapper>
  );
}

export default TechLogosRow;
