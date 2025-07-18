'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import logo from '../../../public/images/logo/white.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-2xl drop-shadow-lg border-b md:border-b-0 border-white-100/25 mb-10 md:mb-0">
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
              className={`w-full flex pt-8 md:pt-0 flex-col md:flex-row flex-grow items-center md:flex md:items-center md:justify-end md:w-auto space-y-4 md:space-y-0 md:space-x-6 ${
                !isOpen && 'hidden'
              }`}
            >
              {/* <Link
                href="/newsletter/archive"
                className="block lg:inline-block text-white-100 hover:text-primary font-space-grotesk font-medium"
              >
                Archive
              </Link>
              <ActiveLink href="/partnerships" title="Advertise" /> */}
            </div>
          </nav>
        </MaxWidthWrapper>
      </div>
    </>
  );
}
