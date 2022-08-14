import React, { ReactNode } from 'react';
import Image from 'next/image';

interface Props {
  src?: string;
  alt?: string;
  children?: ReactNode;
  width?: string | number;
  height?: string | number;
}

const MDXImage = ({ src, alt, children, width, height }: Props) => (
  <span className="relative block my-7 text-center">
    <Image
      src={src as string}
      alt={alt as string}
      width={width}
      height={height}
      objectFit="contain"
    />
    {children}
  </span>
);

MDXImage.defaultProps = {
  src: '',
  alt: '',
  width: 0,
  height: 0,
} as Partial<Props>;

export default MDXImage;
