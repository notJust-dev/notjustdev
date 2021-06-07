/* eslint jsx-a11y/anchor-is-valid: 0 */
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
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
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          !isOpen && 'hidden'
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-gray-400 hover:text-white mr-4">
              Docs
            </a>
          </Link>

          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-gray-400 hover:text-white mr-4">
              Examples
            </a>
          </Link>

          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-gray-400 hover:text-white">
              Blog
            </a>
          </Link>
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
  );
};

export default Navbar;
