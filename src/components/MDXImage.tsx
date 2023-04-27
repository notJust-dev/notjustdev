import React, { ReactNode } from 'react';
import Image from 'next/image';

interface Props {
  src?: string;
  alt?: string;
  children?: ReactNode;
  width?: number | string;
  height?: number | string;
}

const MDXImage = ({ src, alt, children, width, height }: Props) => (
  <span className="relative block my-7 text-center">
    <Image
      src={src as string}
      alt={alt as string}
      width={Number(width)}
      height={Number(height)}
      unoptimized={src?.endsWith('.gif')}
    />
    {children}
  </span>
);

MDXImage.defaultProps = {
  src: '',
  alt: '',
  width: 1920,
  height: 1080,
} as Partial<Props>;

export default MDXImage;
