import React, { ReactNode } from 'react';
import Image from 'next/image';

interface Props {
  src?: string;
  alt?: string;
  children?: ReactNode;
  width?: number | string;
  height?: number | string;
}

const MDXImage = ({ src, alt, children, width, height }: Props) => {
  return (
    <span className="relative block my-7 text-center">
      <Image
        src={src as string}
        alt={alt as string}
        width={Number(width)}
        height={Number(height)}
        unoptimized={src?.endsWith('.gif')}
        sizes="(max-width: 1100px) 100vw, 1100px" // TODO: it doesn't account for 2 columns layout of content + table of contents
      />
      {children}
    </span>
  );
};

MDXImage.defaultProps = {
  src: '',
  alt: '',
  width: 1280,
  height: 720,
} as Partial<Props>;

export default MDXImage;
