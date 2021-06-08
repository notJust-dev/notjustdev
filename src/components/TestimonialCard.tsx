import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    occupation: string;
    image: string;
    testimonial: string;
  };
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-custom-blue-500 p-5 my-3 md:mx-3">
      <div className="flex row mb-2 items-center">
        <div className="relative w-16 h-16 mr-2">
          <Image
            src={testimonial.image}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div>
          <h2>{testimonial.name}</h2>
          <p className="text-secondary">{testimonial.occupation}</p>
        </div>
      </div>

      <p>{testimonial.testimonial}</p>
    </div>
  );
}

export default TestimonialCard;
