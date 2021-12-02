import React from 'react';

interface ButtonProps {
  href: string;
  title: string;
  target: '_blank' | '_self';
}

const Button = ({ title, href, target }: ButtonProps) => (
  <a
    href={href}
    target={target}
    className="inline-block py-2 px-7 rounded bg-primary mb-5"
    style={{color: '#111827'}}
  >
    {title}
  </a>
);

export default Button;
