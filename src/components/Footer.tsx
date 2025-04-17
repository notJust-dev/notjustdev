import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import NewsletterForm from './NewsletterForm';
import { SOCIALS } from '../lib/config';

import logo from '../../public/images/logo/white.png';

type FooterProps = {
  hideNewsletterForm?: boolean;
};

const Footer = ({ hideNewsletterForm = false }: FooterProps) => (
  <footer className="mt-auto">
    {!hideNewsletterForm && <NewsletterForm />}
    <div className="border-t border-white-100/25 mt-10">
      <MaxWidthWrapper>
        <div className="py-10 flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-7 md:mr-7">
            <div style={{ maxWidth: 200 }}>
              <Link href="/">
                <Image
                  src={logo}
                  alt="notJust Development Logo"
                  placeholder="blur"
                  sizes="200px"
                />
              </Link>
            </div>

            <p className="pt-5 text-gray-300 leading-relaxed">
              Your journey to becoming a full-stack technical lead starts today.
              Learn faster by building real projects.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-3">
            <div>
              <h2 className="text-white-400 mt-2 font-bold">Company</h2>
              <div className="flex flex-col">
                <Link href="/projects" className="text-gray-300 my-2">
                  Tutorials
                </Link>
                <Link href="/blog" className="text-gray-300 my-2">
                  Blog
                </Link>
                <Link href="/newsletter" className="text-gray-300 my-2">
                  Newsletter
                </Link>
                <Link href="/events" className="text-gray-300 my-2">
                  Events
                </Link>

                <Link
                  href="https://notjusthack.com/"
                  className="text-gray-300 my-2"
                  target="_blank"
                >
                  notJust Hack
                </Link>
              </div>
            </div>

            <div>
              <h2 className=" mt-2 font-bold">Products</h2>
              <div className="flex flex-col">
                <Link
                  href="/react-native-mastery"
                  className="text-gray-300 my-2"
                >
                  React Native Mastery
                </Link>
                <Link href="/club" className="text-gray-300 my-2">
                  notJust.Club
                </Link>
                <Link href="/testimonials" className="text-gray-300 my-2">
                  Testimonials
                </Link>
                <Link href="/partnerships" className="text-gray-300 my-2">
                  Advertise
                </Link>
              </div>
            </div>

            {/* <div>
              <h2 className=" mt-2 font-bold">
                Project Tutorials
              </h2>
              <div className="flex flex-col">
                <Link href="/projects/linkedin" className="text-gray-300 my-2">
                  LinkedIn Clone
                </Link>
                <Link href="/projects/imessages" className="text-gray-300 my-2">
                  iMessage Clone
                </Link>
                <Link
                  href="/projects/twitter"
                  passHref
                  className="text-gray-300 my-2"
                >
                  Twitter Clone
                </Link>
              </div>
            </div> */}

            <div>
              <h2 className=" mt-2 font-bold">On Social</h2>
              <div className="flex flex-col">
                {Object.keys(SOCIALS).map((social) => (
                  <a
                    href={SOCIALS[social]}
                    className="text-secondary my-2"
                    target="_blank"
                    rel="noreferrer"
                    key={social}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>

    <p className="text-center p-5 text-gray-300">
      Copyright © 2025 notJust.dev All rights reserved.
    </p>
  </footer>
);

export default Footer;
