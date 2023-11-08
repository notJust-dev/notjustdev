import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MaxWidthWrapper from '../MaxWidthWrapper';
import ActiveLink from './ActiveLink';
import logo from '../../../public/images/logo/white.png';
import Announcement from '../Announcement';
import Button from '../Button';
import { useRouter } from 'next/router';
import { PRO_MEMBERSHIP_CHECKOUT_URL } from '../../lib/config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const isOnPro = router.asPath === '/pro';

  return (
    <>
      <Announcement />
      <MaxWidthWrapper>
        <nav className="flex items-center justify-between flex-wrap bg-teal pt-6 pb-16">
          <Link href="/" passHref>
            <div className="cursor-pointer w-44">
              <Image
                src={logo}
                alt="notJust Development Logo"
                placeholder="blur"
                priority
                sizes="176px"
              />
            </div>
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
            {/* <ActiveLink href="/" title="Home" /> */}
            <ActiveLink href="/accelerator" title="🚀 Accelerator" />

            <ActiveLink href="/projects" title="Projects" />

            <ActiveLink href="/pro-courses" title="Courses" />

            <ActiveLink href="/events" title="Events" />

            <ActiveLink href="/blog" title="Blog" />

            <Button
              text="Become PRO"
              href={isOnPro ? PRO_MEMBERSHIP_CHECKOUT_URL : '/pro'}
              type={isOnPro ? 'primary' : 'outline'}
              className={isOnPro ? 'font-bold' : 'font-normal'}
            />
          </div>
        </nav>
      </MaxWidthWrapper>
    </>
  );
};

export default Navbar;
