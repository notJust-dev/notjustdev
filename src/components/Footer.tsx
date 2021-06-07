/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer className="">
    <div className="bg-custom-blue-500 p-5">
      <Image
        src="/images/logo/white.png"
        height={50}
        width={150}
        alt="notJust Development Logo"
        layout="intrinsic"
        objectFit="contain"
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est fugit
        error quaerat tempora vero natus ipsam molestiae, excepturi pariatur,
        non ullam esse ipsum dolor itaque quam sequi eaque consectetur
        praesentium.
      </p>

      <h2 className="text-secondary mt-2">Company</h2>
      <div className="flex flex-col">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>About us</a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>

      <h2 className="text-secondary mt-2">Courses</h2>
      <div className="flex flex-col">
        <Link href="/">
          <a>Whatsapp Clone</a>
        </Link>
        <Link href="/">
          <a>Instagram Clone</a>
        </Link>
        <Link href="/">
          <a>Twitter Clone</a>
        </Link>
      </div>

      <h2 className="text-secondary mt-2">Resources</h2>
      <div className="flex flex-col">
        <Link href="/">
          <a>Our Blog</a>
        </Link>
      </div>

      <h2 className="text-secondary mt-2">On Social</h2>
      <div className="flex flex-col">
        <Link href="/">
          <a>Youtube</a>
        </Link>
        <Link href="/">
          <a>Twitter</a>
        </Link>
        <Link href="/">
          <a>Instagram</a>
        </Link>
      </div>
    </div>
    <p className="text-center p-5 text-gray-400">
      Copyright © notjust.dev All rights reserved.
    </p>
  </footer>
);

export default Footer;
