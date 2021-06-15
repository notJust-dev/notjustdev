import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import TestimonialCard from './TestimonialCard';

function Testimonials() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center">
        <h1 className="text-center">What students say about us?</h1>

        <div className="flex flex-col md:flex-row justify-center my-5">
          <TestimonialCard
            name="Matt"
            occupation="Student"
            image="/images/tmp/thumbnail.png"
            href="https://twitter.com/madewithmatt/status/1387418917052862466"
            Testimonial={() => (
              <>
                Just finished @VadimNotJustDev’s Spotify build tutorial. Learned
                a ton about AWS Amplify, S3, GraphQL and writing clean React
                Native code.{' '}
                <span className="bg-primary text-gray-600 font-bold  py-1">
                  Highly recommend if you are currently learning React Native
                </span>
              </>
            )}
          />
          <TestimonialCard
            name="Matt"
            occupation="Student"
            image="/images/tmp/thumbnail.png"
            href="https://twitter.com/madewithmatt/status/1387418917052862466"
            Testimonial={() => (
              <>
                Just finished @VadimNotJustDev’s Spotify build tutorial. Learned
                a ton about AWS Amplify, S3, GraphQL and writing clean React
                Native code.{' '}
                <span
                  className="text-secondary font-bold  py-1"
                  style={{ backgroundColor: '#4a8f52', color: '#09120A' }}
                >
                  Highly recommend if you are currently learning React Native
                </span>
              </>
            )}
          />
          <TestimonialCard
            name="Matt"
            occupation="Student"
            image="/images/tmp/thumbnail.png"
            href="https://twitter.com/madewithmatt/status/1387418917052862466"
            Testimonial={() => (
              <>
                Just finished @VadimNotJustDev’s Spotify build tutorial. Learned
                a ton about AWS Amplify, S3, GraphQL and writing clean React
                Native code.{' '}
                <span
                  className=" text-gray-800 font-bold  py-1"
                  style={{ backgroundColor: '#e89736' }}
                >
                  Highly recommend if you are currently learning React Native
                </span>
              </>
            )}
          />
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

export default Testimonials;
