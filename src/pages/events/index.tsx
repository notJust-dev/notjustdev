import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import EventCard from '../../components/EventCard';
import { getPastEvents, getUpcomingEvents } from '../../lib/events';

interface EventsProps {
  upcomingEvents: EventMeta[];
  pastEvents: EventMeta[];
}

export default function Events({ upcomingEvents, pastEvents }: EventsProps) {
  return (
    <Layout title="notJust Development Events" description='Workshops, Trainings and Webinars to help you master mobile development with React Native & Expo'>
      <MaxWidthWrapper>
        <section className="flex flex-col items-center">
          <h1>notJust.Events</h1>
          <p className="text-gray-500 text-center mb-5">
            Workshops, Trainings and Webinars for Mobile Developers
          </p>

          {!!upcomingEvents.length && (
            <section className="my-4 w-full">
              <h2 className="text-center mb-5">Upcoming events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {upcomingEvents.map((event, index) => (
                  <EventCard
                    event={event}
                    key={event.slug}
                    priority={index < 2}
                  />
                ))}
              </div>
            </section>
          )}
          {!!pastEvents.length && (
            <section className="my-4 w-full">
              <h2 className="text-center  mb-5">Past events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {pastEvents.map((event, index) => (
                  <EventCard
                    event={event}
                    key={event.slug}
                    priority={index < 2}
                  />
                ))}
              </div>
            </section>
          )}
        </section>
      </MaxWidthWrapper>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<EventsProps> = async () => ({
  props: {
    upcomingEvents: await getUpcomingEvents({}),
    pastEvents: await getPastEvents({}),
  },
  revalidate: 10,
});
