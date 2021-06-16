import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import MaxWidthWrapper from '../MaxWidthWrapper';
import ActiveLink from './ActiveLink';
import { CHANNEL_ID } from '../../lib/config';
import logo from '../../../public/images/logo/white.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Script
        src="https://apis.google.com/js/platform.js"
        strategy="lazyOnload"
      />

      <MaxWidthWrapper>
        <nav className="flex items-center justify-between flex-wrap bg-teal pt-6 pb-16">
          <Link href="/" passHref>
            <div className="cursor-pointer w-44">
              <Image
                src={logo}
                alt="notJust Development Logo"
                layout="responsive"
                placeholder="blur"
              />
            </div>
          </Link>

          <div className="block lg:hidden">
            <button
              className="flex items-center p-3"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto ${
              !isOpen && 'hidden'
            }`}
          >
            <ActiveLink href="/" title="Home" />

            <ActiveLink href="/projects" title="Project Tutorials" />

            <ActiveLink href="/blog" title="Blog" />

            <div
              className="mt-4 ml-5 lg:inline-block lg:mt-0"
              style={{ width: 116, height: 24 }}
            >
              <div
                className="g-ytsubscribe"
                data-channelid={CHANNEL_ID}
                data-layout="default"
                data-count="default"
              />
            </div>
          </div>

          {/* <h1>Company</h1>
      <div className="flex flex-col">
        <Link href="/"><a>Home</a></Link>
        <Link href="/"><a>About us</a></Link>
        <Link href="/"><a>Home</a></Link>
        <Link href="/"><a>Home</a></Link>
      </div> */}
        </nav>
      </MaxWidthWrapper>
    </>
  );
};

export default Navbar;
