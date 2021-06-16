import React from 'react';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';
import Button from './Button';
import { CONTACT_EMAIL } from '../lib/config';

import author from '../../public/images/me.png';
import awsDA from '../../public/images/certifications/aws-certified-developer-associate.png';
import awsSAA from '../../public/images/certifications/aws-certified-solutions-architect-associate.png';
import awsSYSA from '../../public/images/certifications/aws-certified-sysops-administrator-associate.png';

function AboutUsSection() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center mb-10">
        <div className="flex flex-col md:flex-row items-center my-5 ">
          <div className="flex-1 w-full">
            <Image
              src={author}
              layout="responsive"
              alt="profile image"
              placeholder="blur"
            />
          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="text-secondary">Meet your instructor</h2>
            <h1>Vadim Savin</h1>
            <div className="leading-relaxed">
              <p className="py-2">Hi 👋 Let me introduce myself</p>
              <p className="py-2">
                I started my career as a{' '}
                <b className="text-primary">Fullstack Developer</b> when I was{' '}
                <b className="text-primary">16 y.o.</b>
              </p>
              <p className="py-2">
                In search of more freedom, I transitioned to{' '}
                <b className="text-primary">freelancing</b>, which quickly grew
                into a global{' '}
                <b className="text-primary">software development agency</b> 🔥
              </p>
              <p className="py-2">
                Because that was not challenging enough, I started my{' '}
                <b className="text-primary">startup</b> which is used by over
                20k users. This experience gave another meaning to being a
                (notJust) developer 🚀
              </p>
              <p className="py-2">
                I am also a proud <b className="text-primary">ex-Amazon SDE</b>{' '}
                and Certified AWS Architect, Developer and SysOps. You are in
                good hands 👌
              </p>
            </div>

            <div className="grid grid-cols-3 gap-5 my-5">
              <Image
                src={awsDA}
                alt="aws developer associate certificate"
                layout="responsive"
                placeholder="blur"
              />
              <Image
                src={awsSAA}
                alt="aws solutions architect associate certificate"
                layout="responsive"
                placeholder="blur"
              />
              <Image
                src={awsSYSA}
                alt="aws sysops administrator associate certificate"
                layout="responsive"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-row mt-5">
              <Button
                text="Let's talk"
                href={`mailto:${CONTACT_EMAIL}`}
                target="_blank"
              />
              <Button text="My story" href="/blog" type="tertiary" />
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

export default AboutUsSection;
