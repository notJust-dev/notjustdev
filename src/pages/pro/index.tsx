import Button from '../../components/Button';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import TestimonialCard from '../../components/Testimonials/TestimonialCard';
import BenefitItem from './BenefitItem';

import LuigiImage from '../../../public/images/testimonials/LuigiPiscitelli.jpeg';
import PricingCard from './PricingCard';
import { PRO_MEMBERSHIP_CHECKOUT_URL } from '../../lib/config';
import { getAllEvents } from '../../lib/events';
import EventsOverview from '../../components/EventsOverview/EventsOverview';
import { GetStaticProps } from 'next';

interface ProPageProps {
  events: EventMeta[];
}

export default function ProPage({ events }: ProPageProps) {
  return (
    <Layout title="notJust Development Blog" hideNewsletterForm>
      {/* HERO */}
      <section className="py-40">
        <MaxWidthWrapper maxWidth={600} className="flex flex-col items-center">
          <p className="text-s text-secondary font-mono">
            Become a Part of Something Bigger
          </p>
          <h1 className="text-4xl leading-relaxed text-center">
            notJust.dev PRO Community
          </h1>
          <p className="text-xl text-gray-300 my-4 leading-relaxed text-center">
            With our Pro Membership It&apos;s notJust about building apps -
            It&apos;s about growing together.
          </p>
          {/* button */}
          <Button
            href={PRO_MEMBERSHIP_CHECKOUT_URL}
            text="Join PRO"
            className="w-48 text-xl font-bold"
          />
        </MaxWidthWrapper>
      </section>

      {/*  Benefits */}
      <section className="my-20">
        <MaxWidthWrapper maxWidth={750}>
          <h2 className="text-3xl text-center my-10">
            What&apos;s included in your Pro Membership?
          </h2>
          <div className="flex flex-col gap-5">
            <BenefitItem
              title="Monthly Pro Calls with Vadim Savin"
              description="Access exclusive private calls with Vadim, an industry expert who's ready to share insider knowledge, answer your queries, and guide your journey to the top."
            />
            <BenefitItem
              title="Private Community with successful developers"
              description="Engage with an exclusive network of successful developers. Share, learn, and grow together in an environment that fosters creativity, mutual support, and knowledge exchange."
            />
            <BenefitItem
              title="Exclusive Workshops"
              description="Join exclusive workshops and trainings to become a better Mobile Developer."
            />
            <BenefitItem
              title="Influence Our Content"
              description="As a member, you're not just an audience — you're part of our team. You'll have the power to shape our future content, ensuring we focus on the topics that matter most to you."
            />
            <BenefitItem
              title="Access to Source Codes"
              description="Gain exclusive access to the source code of all our builds. Get hands-on experience, dive into the nuts and bolts of practical development, and learn from real-world examples."
            />
            <BenefitItem
              title="Collaborative Project Work"
              description="Work together on projects with your fellow members. Develop teamwork skills, build your portfolio, and get invaluable feedback."
            />
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Testimonials */}
      <section className="flex flex-col items-center my-20">
        <MaxWidthWrapper>
          <h2 className="text-3xl text-center my-10">What do members say?</h2>

          <div className="flex flex-col md:flex-row justify-center my-5">
            <TestimonialCard
              name="Cristian Sanchez"
              occupation="React Native Dev"
              quote="I am continuing to grow and learn my skills as a React developer and @Vadim Savin has been the best teacher that i have come across. Hoping to transition from my regular day to day job, to becoming a react developer. @Vadim Savin has been a big hope of mine to make the dream come true! "
            />

            <TestimonialCard
              name="Gigi Piscitelli"
              occupation="CoFounder & CEO at ANTHILL"
              image={LuigiImage}
              href="https://www.linkedin.com/in/gigipiscitelli/"
              quote="Thanks to Vadim and this community I’m only a few weeks away from releasing the app 🚀🚀🚀 Happy to connect and open to collaborations."
            />

            <TestimonialCard
              name="Peter"
              occupation="React Native Dev"
              quote="I continuously strive to expand my knowledge and improve my skills and have found great value in the insights shared by industry experts like Vadim. My goal is to create impactful, high-performing applications that stand at the intersection of functionality and user experience."
            />
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center my-20">
        <MaxWidthWrapper className="flex flex-col md:flex-row">
          <div>
            <h2 className="text-3xl my-10">The PRO Community is for you if:</h2>

            <h3 className="text-white text-xl">You Love Creating Apps</h3>
            <p className="my-2 leading-7 text-slate-400">
              {' '}
              You have a passion for mobile app development and are excited
              about learning more.
            </p>

            <h3 className="text-white text-xl mt-5">
              You Want to Join a Like-Minded Group
            </h3>
            <p className="my-2 leading-7 text-slate-400">
              {' '}
              You want to be part of a community where everyone shares your
              interests and supports each other.
            </p>

            <h3 className="text-white text-xl mt-3">
              You&apos;re Eager to Learn from Experts
            </h3>
            <p className="my-2 leading-7 text-slate-400">
              {' '}
              You&apos;re looking for guidance and insights from professionals
              in the field.
            </p>
          </div>

          <PricingCard />
        </MaxWidthWrapper>
      </section>

      <EventsOverview title="Events exclusive to PRO Members" events={events} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ProPageProps> = async () => ({
  props: {
    events: await getAllEvents({
      pageSize: 2,
      filter: {
        isPro: true,
      },
    }),
  },
  revalidate: 10,
});
