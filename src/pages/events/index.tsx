import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import EventCard from '../../components/EventCard';
import { getAllEvents } from '../../lib/events';

interface EventsProps {
  events: EventMeta[];
}

function Events({ events }: EventsProps) {
  return (
    <Layout title="notJust Development Projects">
      <MaxWidthWrapper>
        <section className="flex flex-col items-center">
          <h1>notJust.Events</h1>
          <p className="text-gray-500 text-center">
            Workshops, Trainings and Webinars for Mobile Developers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            {events.map((event, index) => (
              <EventCard event={event} key={event.slug} priority={index < 2} />
            ))}
          </div>
        </section>
      </MaxWidthWrapper>
    </Layout>
  );
}

export default Events;

export const getStaticProps: GetStaticProps<EventsProps> = async () => ({
  props: {
    events: await getAllEvents({}),
  },
  revalidate: 10,
});
