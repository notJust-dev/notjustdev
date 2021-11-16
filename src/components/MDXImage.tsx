import React from 'react';
import Image from 'next/image';

interface Props {
  src?: string;
  alt?: string;
}

const MDXImage = ({ src, alt }: Props) => (
  <div className="aspect-w-16 aspect-h-9 relative my-7">
    <Image
      src={src as string}
      alt={alt as string}
      layout="fill"
      objectFit="contain"
    />
  </div>
);

MDXImage.defaultProps = {
  src: '',
  alt: '',
} as Partial<Props>;

export default MDXImage;
