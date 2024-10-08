import Image from 'next/image';
import Script from 'next/script';
import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import petrImage from '../../../public/images/testimonials/petr.jpeg';
import andrewDay from '../../../public/images/testimonials/andrew_day.jpeg';
import veloshan from '../../../public/images/testimonials/veloshan.png';
import luigiPiscitelli from '../../../public/images/testimonials/LuigiPiscitelli.jpeg';
import rogelio from '../../../public/images/testimonials/rogelio.jpeg';

import andreiImage from '../../../public/images/testimonials/andrei.jpeg';
import screenshot1 from '../../../public/images/testimonials/screenshot1.png';
import screenshot2 from '../../../public/images/testimonials/screenshot2.png';
import screenshot3 from '../../../public/images/testimonials/screenshot3.png';
import screenshot4 from '../../../public/images/testimonials/screenshot4.png';
import screenshot5 from '../../../public/images/testimonials/screenshot5.png';

import TestimonialCard from './TestimonialCard';
import { VideoPlayer } from '../shared';
import Link from 'next/link';

const CTA = () => (
  <div className="my-20 flex justify-center">
    <Link
      href="https://academy.notjust.dev/"
      className="inline-block text-l py-5 px-7 rounded bg-primary"
      style={{ color: '#111827' }}
    >
      Enroll now for the <b>Full Stack Mobile Developer</b> course
    </Link>
  </div>
);

const Testimonials = () => (
  <MaxWidthWrapper>
    <section className="flex flex-col items-center my-5">
      <h1 className="text-3xl">Success stories from our students</h1>
      <div className="p-5">
        <VideoPlayer
          url="https://notjustdev-media.s3.amazonaws.com/testimonials/videos/Course+Testimonial+Compilation+Long.mp4"
          autoplay={true}
        />

        <CTA />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <TestimonialCard
          name="Luigi Piscitelli"
          occupation="CoFounder & CEO at ANTHILL "
          image={luigiPiscitelli}
          href="https://www.linkedin.com/in/gigipiscitelli/"
          quote="I teach the Master's at the University, and this course equals to that in the sense that you've got all you need to achieve your goals in terms of development. My goals were to build my own app in a professional way."
          videoUrl={
            'https://notjustdev-media.s3.amazonaws.com/testimonials/videos/4.+Luigi+Piscitelli+Testimonial.mp4'
          }
          poster="/images/testimonials/LuigiPoster.png"
          // autoplay
        />

        <TestimonialCard
          name="Veloshan Pillay"
          occupation="Head of Data Analytics and AI at Tune Protect Group"
          image={veloshan}
          href="https://www.linkedin.com/in/veloshan-pillay-14aa3842/"
          quote="If you have an idea, especially in the mobile app development, by dedicating some time and effort and by following your course - they can possibly land that 6 figure job at a top organization!"
          videoUrl={
            'https://notjustdev-media.s3.amazonaws.com/testimonials/videos/2.+Veloshan+Pillay+Testimonial.mp4'
          }
          poster="/images/testimonials/veloshanPoster.png"
        />

        <TestimonialCard
          name="Rogelio Zamora"
          occupation="Software Engineer"
          image={rogelio}
          href=""
          quote="If you truly have a passion for mobile development, if you truly want to learn and take your skills to the next level, you have to invest in yourself. notJust.dev provides quality content and help you every step of the way."
          videoUrl={
            'https://notjustdev-media.s3.amazonaws.com/testimonials/videos/5.+Rogelio+Zamora+Testimonial.mp4'
          }
          poster="/images/testimonials/rogelioPoster.png"
        />

        <TestimonialCard
          name="Andrew Day"
          occupation="React Developer"
          image={andrewDay}
          href="https://www.linkedin.com/in/reactnetau/"
          quote="It's a bit expensive, but it did teach me things that I can't find anywhere else!"
          videoUrl={
            'https://notjustdev-media.s3.amazonaws.com/testimonials/videos/3.+Andrew+Day+Testimonial.mp4'
          }
          poster="/images/testimonials/andrewPoster.png"
        />

        <TestimonialCard
          name="Petr Brantalík"
          occupation="Frontend Engineer at STRV"
          image={petrImage}
          href="https://www.linkedin.com/in/petr-brantal%C3%ADk-9475001a7/"
          quote="It's a shame that I didn't run into this course when I started"
          videoUrl={
            'https://notjustdev-media.s3.amazonaws.com/testimonials/videos/Testimonial+Petr+Brantalik.mp4'
          }
        />

        <TestimonialCard
          name="Andrei Terus"
          occupation="Software Engineer at Profuse"
          image={andreiImage}
          href="https://www.linkedin.com/posts/andrei-terus-38a772184_developer-reactnative-future-activity-7037115497254969345-aS8T?utm_source=share&utm_medium=member_desktop"
          Testimonial={() => (
            <>
              I want to give a special shoutout to my friend Vadim Savin and the{' '}
              <b>notJust.dev</b> team for being an incredible resource
              throughout my learning journey.{' '}
              <span
                className=" text-gray-800 font-bold  py-1"
                style={{ backgroundColor: '#e89736' }}
              >
                His tutorials and courses on React Native were incredibly useful
                and helped me
              </span>{' '}
              gain the knowledge and skills needed{' '}
              <span
                className=" text-gray-800 font-bold  py-1"
                style={{ backgroundColor: '#e89736' }}
              >
                to land my dream job
              </span>{' '}
              at Profuse. Thank you so much for all your hard work and
              dedication to the React Native community.
            </>
          )}
        />
      </div>
      <CTA />

      <div className="p-10" />

      {/* Testimonial.to widget */}
      <Script
        type="text/javascript"
        src="https://testimonial.to/js/iframeResizer.min.js"
        onLoad={() => {
          // @ts-expect-error no-idea
          iFrameResize(
            { log: false, checkOrigin: false },
            '#testimonialto-carousel-all-the-full-stack-mobile-developer-dark',
          );
        }}
      />
      <iframe
        id="testimonialto-carousel-all-the-full-stack-mobile-developer-dark"
        src="https://embed-v2.testimonial.to/carousel/all/the-full-stack-mobile-developer?theme=dark&autoplay=on&showmore=off&one-row=on&hideDate=on&same-height=off"
        frameBorder="0"
        scrolling="no"
        width="100%"
      ></iframe>

      <h2 className="mt-20 mb-10 text-4xl">notJust.dev on Social media</h2>
      <div className="flex">
        <div>
          <Image
            src={screenshot1}
            alt="Hello Vadim. I want to share my success story. I recently got a job as a react native mobile developer. The company reached out to me after seeing the practice apps I built. And all I did was follow along with your tutorials. I've learnt so much from you. I'm really happy I found your YouTube channel. And I can't wait to learn more. Love all the way from Nigeria I. Thank vou"
            width={500}
          />
          <Image
            src={screenshot2}
            alt="Also me vadim I get my job after watching your videos on youtube and realize some of them and put it on my Cv thanks vadim a lot of respect you are a great person your youtube change the life of many people"
            width={500}
          />
          <Image
            src={screenshot5}
            alt="You taught me development. Now I have a mobile app development agency in South Africa which made over $100k in 2022"
            width={500}
          />
        </div>
        <div>
          <Image
            src={screenshot4}
            alt="Learned to use react native from scratch by following your videos. I am currently doing Fiverr as a side hustle and I have to reject orders because I have too much work on my hands"
            width={500}
          />
          <Image
            src={screenshot3}
            alt="Hello vadim I am Konstantinos I am from Greece and i am currently studying software engineering in university of Thessaly. I just wanted to say a HUGE thank  you .because of you I made my first e-commerce app that connects  local farmers to consumers make some money of it and now I landed my first job. This wouldn't be possible without you and your YouTube channel."
            width={500}
          />
        </div>
      </div>

      <CTA />
    </section>
  </MaxWidthWrapper>
);

export default Testimonials;
