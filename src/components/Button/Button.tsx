import React from 'react';
import Link from 'next/link';

import styles from './Button.module.css';

type ButtonType = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  href: string;
  text: string;
  type: ButtonType;
  className: string;
}

const Button = ({ text, href, type, className }: ButtonProps) => (
  <Link href={href} passHref>
    <a
      href="replace"
      className={`${styles.button} ${styles[type]} ${className}`}
    >
      {text}
    </a>
  </Link>
);

Button.defaultProps = {
  type: 'primary',
  className: '',
} as Partial<ButtonProps>;

export default Button;
