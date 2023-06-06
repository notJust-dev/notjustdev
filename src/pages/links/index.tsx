import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import logo from '../../../public/images/logo/white.png';
import { mainLinks, socialLinks, CustomLinkData } from '../../data/links';
import pattern from '../../../public/images/brand_elements/Pattern_13_white.png';
import NewsletterPopup from '../../components/NewsletterForm/NewsletterModal';
import { BsNewspaper } from 'react-icons/bs';

const CustomLink = ({
  text,
  Icon,
  href,
  onClick = () => {},
}: CustomLinkData & { onClick?: () => void }) => (
  <Link
    href={href}
    className="border-2 hover:text-secondary border-secondary  m-2 h-14  flex flex-row items-center"
    onClick={onClick}
  >
    <div className="bg-secondary self-stretch flex items-center justify-center w-12 mr-3">
      <Icon className="text-2xl text-custom-blue-500" />
    </div>

    <h3>
      <span className="text-gray-400">notJust </span>
      {text}
    </h3>
  </Link>
);

const LinksPage = () => {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  return (
    <>
      <Image
        src={pattern}
        alt=""
        width={100}
        height={200}
        className="absolute bottom-0 right-0"
      />
      <MaxWidthWrapper
        maxWidth={400}
        className="h-screen flex flex-col justify-center"
      >
        <section className="bg-custom-blue-500 p-5 w-full flex flex-col ">
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
              <link.Icon className="text-2xl text-gray-200 hover:text-secondary" />
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
