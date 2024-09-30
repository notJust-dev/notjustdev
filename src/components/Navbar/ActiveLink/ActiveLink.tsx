/* eslint-disable jsx-a11y/anchor-is-valid */

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './ActiveLink.module.css';

interface ActiveLinkProps {
  title: string;
  href: string;
}

function ActiveLink({ href, title }: ActiveLinkProps) {
  const path = usePathname();

  const segments = path?.split('/');
  let isActive = segments?.[1] === href.split('/')?.[1];
  if (href === '/') {
    isActive = path === '/';
  }

  return (
    <Link
      href={href}
      className={`${styles.link} ${isActive && styles.isActive}`}
    >
      {title}
    </Link>
  );
}

export default ActiveLink;
