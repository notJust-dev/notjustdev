import React from 'react';
import Link from 'next/link';

type ButtonType = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  href: string;
  text: string;
  type: ButtonType;
  className: string;
}

const Button = ({ text, href, type, className }: ButtonProps) => {
  let aClassNames = '';
  if (type === 'primary') {
    aClassNames = 'bg-primary text-gray-900';
  } else if (type === 'secondary') {
    aClassNames = 'bg-secondary text-gray-900';
  } else {
    aClassNames = 'text-orange';
  }

  return (
    <Link href={href} passHref>
      <a
        href="replace"
        className={`${aClassNames} block py-2 px-7 m-2 rounded text-center ${className}`}
      >
        {text}
      </a>
    </Link>
  );
};

Button.defaultProps = {
  type: 'primary',
  className: '',
} as Partial<ButtonProps>;

export default Button;
