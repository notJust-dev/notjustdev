/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';

const Footer = () => (
  <footer className="">
    <div className="bg-custom-blue-500 mt-10">
      <MaxWidthWrapper>
        <div className="p-5 flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-5 md:mr-5">
            <Image
              src="/images/logo/white.png"
              height={50}
              width={150}
              alt="notJust Development Logo"
              layout="intrinsic"
              objectFit="contain"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              fugit error quaerat tempora vero natus ipsam molestiae, excepturi
              pariatur, non ullam esse ipsum dolor itaque quam sequi eaque
              consectetur praesentium.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="text-white-400 mt-2 font-bold">Company</h2>
              <div className="flex flex-col">
                <Link href="/">
                  <a className="text-gray-300 my-2">Home</a>
                </Link>
                <Link href="/">
                  <a className="text-gray-300 my-2">About us</a>
                </Link>
                <Link href="/">
                  <a className="text-gray-300 my-2">Home</a>
                </Link>
                <Link href="/">
                  <a className="text-gray-300 my-2">Home</a>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-white-400 mt-2 font-bold">Courses</h2>
              <div className="flex flex-col">
                <Link href="/">
                  <a className="text-gray-300 my-2">Whatsapp Clone</a>
                </Link>
                <Link href="/">
                  <a className="text-gray-300 my-2">Instagram Clone</a>
                </Link>
                <Link href="/">
                  <a className="text-gray-300 my-2">Twitter Clone</a>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-white-400 mt-2 font-bold">Resources</h2>
              <div className="flex flex-col">
                <Link href="/">
                  <a className="text-gray-300 my-2">Our Blog</a>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-white-400 mt-2 font-bold">On Social</h2>
              <div className="flex flex-col">
                <Link href="/">
                  <a className="text-secondary my-2">Youtube</a>
                </Link>
                <Link href="/">
                  <a className="text-secondary my-2">Twitter</a>
                </Link>
                <Link href="/">
                  <a className="text-secondary my-2">Instagram</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>

    <p className="text-center p-5 text-gray-400">
      Copyright © notjust.dev All rights reserved.
    </p>
  </footer>
);

export default Footer;
