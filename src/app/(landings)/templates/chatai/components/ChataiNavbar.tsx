'use client';
import Image from 'next/image';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import logo from '../../../../../../public/images/logo/white.png';
import { pricing } from '../data/pricing';

export default function ChataiNavbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-2xl drop-shadow-lg border-b border-white-100/10">
      <MaxWidthWrapper>
        <nav className="flex items-center justify-between gap-4 py-4 md:py-6">
          <Link href="/">
            <Image
              src={logo}
              alt="notJust Development Logo"
              placeholder="blur"
              priority
              width={120}
            />
          </Link>

          <a
            href={pricing.stripeUrl}
            className="bg-primary text-gray-900 font-space-grotesk font-medium rounded-xl px-4 py-2.5 md:px-6 md:py-3 text-sm md:text-base hover:shadow-lg hover:shadow-primary/40 transition-all"
            data-stripe-link
          >
            Get the Template
          </a>
        </nav>
      </MaxWidthWrapper>
    </div>
  );
}
