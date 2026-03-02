'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../rnm.module.css';

const navLinks = [
  { label: 'Tech stack', href: '#Stack' },
  { label: 'Projects', href: '#Projects' },
  { label: 'Pricing', href: '#Pricing' },
  { label: 'Your tutor', href: '#tutor' },
  { label: 'FAQ', href: '#FAQ' },
];

export default function RNMNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ParityDeals injects the PPP banner into this container */}
      <div className="ppp" style={{ position: 'sticky', top: 0, zIndex: 101 }} />
      <div className={styles.navbarFull}>
        <div className={styles.navbarInner}>
          <nav className={styles.navbarContainer}>
            <div className={styles.navbarWrapper}>
              <a href="#Home" className={styles.navbarBrand}>
                <Image
                  src="/images/react-native-mastery/logo-white.svg"
                  alt="notJust.dev"
                  width={120}
                  height={44}
                  priority
                />
              </a>

              <ul className={styles.navMenu}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={styles.navLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a href="#Pricing" className={styles.enrollButton}>
                Enroll Now
              </a>

              <button
                className={styles.hamburger}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                type="button"
              >
                <div className={styles.hamburgerIcon}>
                  <span />
                  <span />
                  <span />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </div>

      <div
        className={`${styles.mobileMenuOverlay} ${isOpen ? styles.mobileMenuOpen : ''}`}
        onClick={() => setIsOpen(false)}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a href="#Pricing" className={styles.enrollButton}>
          Enroll Now
        </a>
      </div>
    </>
  );
}
