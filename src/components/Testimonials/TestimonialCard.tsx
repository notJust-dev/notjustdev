import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  occupation: string;
  image: StaticImageData;
  href: string;
  Testimonial: React.FC;
}

function TestimonialCard({
  image,
  name,
  occupation,
  href,
  Testimonial,
}: TestimonialCardProps) {
  return (
    <a
      href={href}
      target="blank"
      className="bg-custom-blue-500 p-5 my-3 md:mx-2 shadow-md w-full md:w-1/3 rounded-md"
    >
      <div className="flex row mb-4 items-center">
        <div className="relative w-16 h-16 mr-2">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt={`${name} profile picture`}
            className="rounded-full"
          />
        </div>
        <div>
          <h2>{name}</h2>
          <p className="text-secondary">{occupation}</p>
        </div>
      </div>
      <p className="leading-loose text-gray-400">
        <Testimonial />
      </p>
    </a>
  );
}

export default TestimonialCard;
