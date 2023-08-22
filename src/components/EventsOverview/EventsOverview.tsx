import React from 'react';
import Button from '../Button';
import MaxWidthWrapper from '../MaxWidthWrapper';
import EventCard from '../EventCard';

interface Props {
  events: EventMeta[];
  title?: string;
}

export default function EventsOverview({ events, title }: Props) {
  if (!events.length) {
    return null;
  }

  return (
    <div className="relative py-10">
      <MaxWidthWrapper>
        <section className="flex flex-col items-center">
          <h1>{title || 'Upcoming events'}</h1>
          <p className="text-gray-500 text-center">
            Workshops, Trainings, and Webinars for Mobile Developers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            {events.map((event) => (
              <EventCard event={event} key={event.slug} />
            ))}
          </div>

          <Button text="See all events" href="/events" type="secondary" />
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
