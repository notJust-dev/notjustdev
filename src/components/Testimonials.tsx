import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: '1',
    name: 'Robert de Niro',
    occupation: 'Student',
    image: '/images/tmp/thumbnail_3.png',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias ',
  },
  {
    id: '2',
    name: 'Robert de Niro',
    occupation: 'Student',
    image: '/images/tmp/thumbnail_3.png',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias ',
  },
  {
    id: '3',
    name: 'Robert de Niro',
    occupation: 'Student',
    image: '/images/tmp/thumbnail_3.png',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quibusdam molestias ',
  },
];

function Testimonials() {
  return (
    <section className="flex flex-col items-center">
      <h1>What students think about us</h1>
      <p className="text-xs text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio molestias reiciendis totam repellendus cumque nobis architecto, mollitia consequuntur, accusantium incidunt nihil? Ad totam corporis repudiandae voluptas alias illo officia.</p>

      {testimonials.map((testimonial) => (
        <TestimonialCard testimonial={testimonial} key={testimonial.id} />
      ))}
    </section>
  );
}

export default Testimonials;
