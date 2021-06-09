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

  let isActive = router.asPath.startsWith(href);
  if (href === '/') {
    isActive = router.asPath === '/';
  }

  return (
    <Link href={href}>
      <a className={`${styles.link} ${isActive && styles.isActive}`}>{title}</a>
    </Link>
  );
}

export default ActiveLink;
