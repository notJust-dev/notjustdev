'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { montserrat, ubuntu, manrope, inter } from '@/styles/fonts';
import styles from '../rnm.module.css';
import brandElements from '@images/brand_elements/union.svg';

export default function RNMPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div
      className={`${styles.rnmPage} relative ${montserrat.variable} ${ubuntu.variable} ${manrope.variable} ${inter.variable}`}
    >
      <Image
        src={brandElements}
        alt=""
        width={731}
        height={850}
        className="absolute top-0 bottom-0 max-h-[100vh] left-auto right-0 blur-[300px] pointer-events-none"
        aria-hidden
      />
      {children}
    </div>
  );
}
