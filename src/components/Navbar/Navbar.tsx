'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MaxWidthWrapper from '../MaxWidthWrapper';
import ActiveLink from './ActiveLink';
import logo from '../../../public/images/logo/white.png';
// import Announcement from '../Announcement';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* TODO: Add announcement back in */}
      {/* <Announcement /> */}
      <div className="sticky top-0 z-50 backdrop-blur-2xl drop-shadow-lg">
        <MaxWidthWrapper>
          <nav className="flex items-center justify-between flex-wrap bg-teal py-6">
            <Link href="/">
              <Image
                src={logo}
                alt="notJust Development Logo"
                placeholder="blur"
                priority
                width={120}
              />
            </Link>

            <div className="block md:hidden">
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
              className={`w-full block flex-grow md:flex md:items-center md:justify-end md:w-auto ${
                !isOpen && 'hidden'
              }`}
            >
              <ActiveLink href="/projects" title="Tutorials" />
              <ActiveLink href="/pro-courses" title="Courses" />
              <ActiveLink href="/blog" title="Blog" />
              <ActiveLink href="/newsletter" title="Newsletter" />
            </div>
          </nav>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Navbar;
