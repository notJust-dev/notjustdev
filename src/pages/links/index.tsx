import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import logo from '../../../public/images/logo/white.png';
import { mainLinks, socialLinks, CustomLinkData } from '../../data/links';
import pattern from '../../../public/images/brand_elements/Pattern_13_white.png';

const CustomLink = ({ text, Icon, href }: CustomLinkData) => (
  <Link
    href={href}
    className="border-2 hover:text-secondary border-secondary  m-2 h-14  flex flex-row items-center"
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

const FormSuccess = () => (
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
      </section>

      <section className="mt-2 self-center flex flex-row">
        {socialLinks.map((link) => (
          <Link key={link.name} href={link.href} className="m-2">
            <link.Icon className="text-2xl text-gray-200 hover:text-secondary" />
          </Link>
        ))}
      </section>
    </MaxWidthWrapper>
  </>
);

export default FormSuccess;
