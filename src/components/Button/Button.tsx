import React from 'react';
import Link from 'next/link';

import styles from './Button.module.css';

type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'outline';

interface ButtonProps {
  href: string;
  text: string;
  type: ButtonType;
  className: string;
  target: '_blank' | '_self';
}

const Button = ({ text, href, type, className, target }: ButtonProps) =>
  href ? (
    <Link
      href={href}
      target={target}
      className={`${styles.button} ${styles[type]} ${className}`}
    >
      {text}
    </Link>
  ) : (
    <span className={`${styles.button} ${styles[type]} ${className}`}>
      {text}
    </span>
  );

Button.defaultProps = {
  type: 'primary',
  className: '',
  target: '_self',
} as Partial<ButtonProps>;

export default Button;
