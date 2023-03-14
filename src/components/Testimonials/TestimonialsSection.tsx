import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import TestimonialCard from './TestimonialCard';

import mattImage from '../../../public/images/testimonials/matt.jpg';
import adityaImage from '../../../public/images/testimonials/aditya.jpg';
import rhiannonImage from '../../../public/images/testimonials/rhiannon.png';

function Testimonials() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center">
        <h1 className="text-center">What students say about us?</h1>

        <div className="flex flex-col md:flex-row justify-center my-5">
          <TestimonialCard
            name="Matt"
            occupation="Developer & Youtuber"
            image={mattImage}
            href="https://twitter.com/madewithmatt/status/1387418917052862466"
            Testimonial={() => (
              <>
                Just finished @VadimNotJustDev’s Spotify build tutorial. Learned
                a ton about AWS Amplify, S3, GraphQL and writing clean React
                Native code.
                <span className="bg-primary text-gray-600 font-bold  py-1">
                  {' '}
                  Highly recommend if you are currently learning React Native!
                </span>
              </>
            )}
          />

          <TestimonialCard
            name="Rhiannon Monks"
            occupation="Founder, CEO"
            image={rhiannonImage}
            href="https://www.linkedin.com/posts/rhiannonmonks_netflix-backend-in-react-native-aws-activity-6807831400213995520-DwjI/"
            Testimonial={() => (
              <>
                For any developers out there wanting to learn more about
                <span
                  className=" text-gray-800 font-bold  py-1"
                  style={{ backgroundColor: '#e89736' }}
                >
                  {' '}
                  React Native, GraphQL, AWS Amplify and Typescript{' '}
                </span>
                , I recommend checking out Vadim Savin tutorials. I finished the
                whole Netflix series in 2 days just for fun, and built a front
                and back end Netflix clone, and now I&apos;m on the the Uber
                one!
              </>
            )}
          />

          <TestimonialCard
            name="Aditya Shukla"
            occupation="Student"
            image={adityaImage}
            href="https://twitter.com/shukla_aditya_/status/1405041057641865229"
            Testimonial={() => (
              <>
                Never knew it could be that
                <span
                  className="text-secondary font-bold  py-1"
                  style={{ backgroundColor: '#4a8f52', color: '#09120A' }}
                >
                  {' '}
                  simple and fast{' '}
                </span>
                . Making flawless React Native apps in less than 10 hours (in a
                single stretch) sounds impractical at first but then again
                it&apos;s @VadimNotJustDev we&apos;re talking about. Thanks
                Vadim!
              </>
            )}
          />
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

export default Testimonials;
