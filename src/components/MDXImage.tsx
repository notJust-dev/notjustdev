import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
}

const MDXImage = ({ src, alt }: Props) => (
  <div className="aspect-w-16 aspect-h-9 relative my-7 ">
    <Image src={src} alt={alt} layout="fill" objectFit="contain" />
  </div>
);

export default MDXImage;
