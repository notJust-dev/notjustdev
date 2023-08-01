/* eslint-disable jsx-a11y/anchor-is-valid */

import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './ActiveLink.module.css';

interface ActiveLinkProps {
  title: string;
  href: string;
}

function ActiveLink({ href, title }: ActiveLinkProps) {
  const router = useRouter();

  const segments = router.asPath.split('/');
  let isActive = segments?.[1] === href.split('/')?.[1];
  if (href === '/') {
    isActive = router.asPath === '/';
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
