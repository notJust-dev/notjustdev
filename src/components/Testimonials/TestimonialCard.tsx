import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { VideoPlayer } from '../shared';

interface TestimonialCardProps {
  name: string;
  occupation: string;
  image: StaticImageData;
  href: string;
  Testimonial?: React.FC;
  quote?: string;
  videoUrl?: string;
  autoplay?: boolean;
  poster?: string;
}

function TestimonialCard({
  image,
  name,
  occupation,
  href,
  Testimonial,
  quote,
  videoUrl,
  autoplay,
  poster,
}: TestimonialCardProps) {
  return (
    <div className="bg-custom-blue-500 p-5 my-3 md:mx-2 shadow-md w-full rounded-md">
      <a href={href} target="blank">
        <div className="flex row mb-4 items-center">
          <div className="relative w-16 h-16 mr-2">
            <Image
              src={image}
              alt={`${name} profile picture`}
              className="rounded-full"
              sizes="64px"
              fill
            />
          </div>
          <div>
            <h2>{name}</h2>
            <p className="text-secondary">{occupation}</p>
          </div>
        </div>

        {quote && (
          <p className="leading-normal text-lg ">&quot;{quote}&quot;</p>
        )}

        {Testimonial && (
          <p className="leading-loose text-gray-400">
            <Testimonial />{' '}
          </p>
        )}
      </a>

      {videoUrl && (
        <div className="pt-3">
          <VideoPlayer url={videoUrl} autoplay={autoplay} poster={poster} />
        </div>
      )}
    </div>
  );
}

export default TestimonialCard;
