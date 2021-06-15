import React from 'react';
import Link from 'next/link';

import styles from './Button.module.css';

type ButtonType = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  href: string;
  text: string;
  type: ButtonType;
  className: string;
  target: '_blank' | '_self';
}

const Button = ({ text, href, type, className, target }: ButtonProps) => (
  <Link href={href} passHref>
    <a
      href="replace"
      target={target}
      className={`${styles.button} ${styles[type]} ${className}`}
    >
      {text}
    </a>
  </Link>
);

Button.defaultProps = {
  type: 'primary',
  className: '',
  target: '_self',
} as Partial<ButtonProps>;

export default Button;
