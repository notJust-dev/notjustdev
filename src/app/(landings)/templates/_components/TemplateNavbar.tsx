'use client';
import Image from 'next/image';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import logo from '../../../../../public/images/logo/white.png';

type SecondaryLink = {
  href: string;
  label: string;
};

type Props = {
  ctaHref: string;
  ctaLabel: string;
  secondary?: SecondaryLink;
};

export default function TemplateNavbar({ ctaHref, ctaLabel, secondary }: Props) {
  const isExternal = ctaHref.startsWith('http');

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

          <div className="flex items-center gap-2 md:gap-4">
            {secondary && (
              <a
                href={secondary.href}
                className="hidden sm:inline-block text-white-100 hover:text-primary font-space-grotesk font-medium text-sm md:text-base px-3 py-2 transition-colors"
              >
                {secondary.label}
              </a>
            )}
            <a
              href={ctaHref}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
              className="bg-primary text-gray-900 font-space-grotesk font-medium rounded-xl px-4 py-2.5 md:px-6 md:py-3 text-sm md:text-base hover:shadow-lg hover:shadow-primary/40 transition-all"
              data-stripe-link={isExternal ? '' : undefined}
            >
              {ctaLabel}
            </a>
          </div>
        </nav>
      </MaxWidthWrapper>
    </div>
  );
}
