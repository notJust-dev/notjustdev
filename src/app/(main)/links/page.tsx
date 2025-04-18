'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import logo from '../../../../public/images/logo/white.png';
import { mainLinks, socialLinks, CustomLinkData } from '@/data/links';
import NewsletterPopup from '@/components/NewsletterForm/NewsletterModal';
import { BsNewspaper } from 'react-icons/bs';

const CustomLink = ({
  text,
  Icon,
  href,
  onClick = () => {},
}: CustomLinkData & { onClick?: () => void }) => (
  <Link
    href={href}
    className="border hover:text-primary border-primary  m-2 h-14  flex flex-row items-center"
    onClick={onClick}
  >
    <div className="bg-primary self-stretch flex items-center justify-center w-12 mr-3">
      <Icon className="text-2xl text-black" />
    </div>

    <span className="text-xl font-medium font-space-grotesk">
      <span className="text-white-200 font-normal">notJust </span>
      {text}
    </span>
  </Link>
);

const LinksPage = () => {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  return (
    <>
      <MaxWidthWrapper
        maxWidth={600}
        className="h-screen flex flex-col justify-center"
      >
        <section className="border border-white-100/25 ro p-5 px-20 w-full flex flex-col ">
          <Image
            src={logo}
            alt="notJust Development"
            width={150}
            className="self-center my-5"
          />
          {mainLinks.map((link) => (
            <CustomLink key={link.text} {...link} />
          ))}

          <CustomLink
            key="Newsletter"
            text="Newsletter"
            Icon={BsNewspaper}
            href="#"
            onClick={() => setShowNewsletterModal(true)}
          />
        </section>

        <section className="mt-2 self-center flex flex-row">
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.href} className="m-2">
              <link.Icon className="text-2xl text-gray-200 hover:text-primary" />
            </Link>
          ))}
        </section>

        <NewsletterPopup
          isOpen={showNewsletterModal}
          onClose={() => setShowNewsletterModal(false)}
        />
      </MaxWidthWrapper>
    </>
  );
};

export default LinksPage;
