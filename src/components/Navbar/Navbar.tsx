/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styles from './Navbar.module.css';
import useScript from '../../utils/useScript';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <></>
        {useScript('https://apis.google.com/js/platform.js')}
      </Head>

      <MaxWidthWrapper>
        <nav className="flex items-center justify-between flex-wrap bg-teal py-6">
          <Image
            src="/images/logo/white.png"
            height={30}
            width={100}
            alt="notJust Development Logo"
            layout="intrinsic"
            objectFit="contain"
          />

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
            <Link href="/">
              <a className={`${styles.link} ${styles.isActive}`}>Home</a>
            </Link>

            <Link href="/projects">
              <a className={styles.link}>Courses</a>
            </Link>

            <Link href="/">
              <a className={styles.link}>Blog</a>
            </Link>

            <div className={styles.link}>
              <div
                className="g-ytsubscribe"
                data-channelid="UCYSa_YLoJokZAwHhlwJntIA" // TODO ADD channel id in config
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
