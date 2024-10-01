import React from 'react';
import Link from 'next/link';

import styles from './Button.module.css';

type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'outline';

interface ButtonProps {
  href: string;
  text: string;
  type?: ButtonType;
  className?: string;
  target?: '_blank' | '_self';
  data?: { [key: string]: string };
  size: 'md' | 'l' | 'xl';
}

const Button = ({
  text,
  href,
  type = 'primary',
  className = '',
  target = '_self',
  data,
  size,
}: ButtonProps) =>
  href ? (
    <Link
      href={href}
      target={target}
      className={`${styles.button} ${styles[type]} ${styles[size]} ${className}`}
      {...data}
    >
      {text}
    </Link>
  ) : (
    <span className={`${styles.button} ${styles[type]} ${className}`}>
      {text}
    </span>
  );

export default Button;
