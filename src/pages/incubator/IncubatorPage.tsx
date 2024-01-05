import Button from '../../components/Button';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import useScript from '../../hooks/useScript';
// import Rocket from '../../../public/images/incubator/rocket.png';
import BG from '../../../public/images/incubator/bg.webp';

import Image from 'next/image';

const FORM_SRC = 'https://awesome-teacher-1065.ck.page/5a9ee192f2';
const applicationFormUrl = 'https://forms.gle/L6kRnPuQ8dVyRHWe8';
const FORM_UID = '5a9ee192f2';

interface IncubatorProps {}

export default function IncubatorPage({}: IncubatorProps) {
  useScript(`${FORM_SRC}/index.js`, 'incubator-signup', {
    uid: FORM_UID,
  });

  return (
    <Layout title="notJust Development Blog" isLandingPage>
      {/* HERO */}
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-indigo-950 to-purple-800 ">
        <Image
          src={BG}
          alt="background"
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="invisible md:visible"
        />
      </div>

      <div className="animate-bounce absolute top-10 w-full  text-center">
        <span className="md:text-xl text-white font-bold font-mono my-4 leading-relaxed bg-purple-800 p-2.5 px-5 rounded-full">
          📅 Next batch: <u>Feb 2024</u>
        </span>
      </div>

      <MaxWidthWrapper
        maxWidth={1300}
        className="flex flex-col md:flex-row mt-24 md:mt-0 min-h-screen items-center gap-4"
      >
        <div className="flex-1 my-5">
          <p className="text-s text-secondary font-mono">From Idea to Market</p>
          <h1 className="text-2xl md:text-5xl md:leading-relaxed">
            notJust Incubator
          </h1>
          <h2 className="text-xl md:text-3xl md:leading-relaxed text-purple-200">
            Turn your mobile app ideas into reality in just 3 months.
          </h2>
          <p className="md:text-xl text-purple-300 my-4 md:leading-relaxed">
            Resources, mentorship, and the network you need to successfully
            launch and scale your applications.
          </p>

          {/* button */}

          {/* <Button
            href={FORM_SRC}
            text="Join the Waitlist"
            className="w-full"
            size="xl"
            data={{
              'data-formkit-toggle': FORM_UID,
            }}
          /> */}
          <Button
            href={applicationFormUrl}
            target="_blank"
            text="Apply now"
            className="w-full"
            size="xl"
          />
          <p className="md:text-xl text-purple-100 my-4 md:leading-relaxed">
            Limited spots: Only 10 projects will be selected
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center">
          {/* <Image src={Rocket} alt="Rocket" priority /> */}
          <h3 className="mb-5 text-xl">
            Success stories from previous batch 👇
          </h3>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/qmQOsfQXSKg?si=DqWYN1Xta1-qg2zb"
            title="YouTube video player"
            // @ts-ignore
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </MaxWidthWrapper>
    </Layout>
  );
}
