import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import MaxWidthWrapper from '../MaxWidthWrapper';
import NewsletterForm from '../NewsletterForm';
import { SOCIALS } from '../../lib/config';

import logo from '@images/logo/white.png';
import CopyrightFooter from './CopyrightFooter';

const SOCIAL_ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  Youtube: FaYoutube,
  LinkedIn: FaLinkedin,
  Twitter: FaTwitter,
  Instagram: FaInstagram,
};

type FooterProps = {
  hideNewsletterForm?: boolean;
};

const Footer = ({ hideNewsletterForm = false }: FooterProps) => (
  <footer className="mt-auto">
    {!hideNewsletterForm && (
      <MaxWidthWrapper>
        <NewsletterForm />
      </MaxWidthWrapper>
    )}
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
                  className="pointer-events-none"
                />
              </Link>
            </div>

            <p className="pt-5 text-gray-300 leading-relaxed">
              Your journey to becoming a full-stack technical lead starts today.
              Learn faster by building real projects.
            </p>

            <div className="flex items-center gap-4 pt-5">
              {Object.keys(SOCIALS).map((social) => {
                const Icon = SOCIAL_ICONS[social];
                if (!Icon) return null;
                return (
                  <a
                    key={social}
                    href={SOCIALS[social]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-y-6">
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
                <Link href="/podcast" className="text-gray-300 my-2">
                  Podcast
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
                <Link href="/incubator" className="text-gray-300 my-2">
                  nJ.Incubator
                </Link>
                <Link href="/club" className="text-gray-300 my-2">
                  notJust.Club
                </Link>
                <Link href="/testimonials" className="text-gray-300 my-2">
                  Wall of love
                </Link>
                <Link href="/partnerships" className="text-gray-300 my-2">
                  Advertise
                </Link>
                <Link href="/case-studies" className="text-gray-300 my-2">
                  Case Studies
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
              <h2 className=" mt-2 font-bold">Templates</h2>
              <div className="flex flex-col">
                <Link href="/templates" className="text-gray-300 my-2">
                  All templates
                </Link>
                <Link href="/templates/chatai" className="text-gray-300 my-2">
                  ChatAI
                </Link>
                <Link href="/templates/imageai" className="text-gray-300 my-2">
                  ImageAI
                </Link>
                <Link
                  href="/templates/ecommerce"
                  className="text-gray-300 my-2"
                >
                  Ecommerce
                </Link>
              </div>
            </div>

          </div>
        </div>
      </MaxWidthWrapper>
    </div>

    <CopyrightFooter />
  </footer>
);

export default Footer;
