import Button from '../../components/Button';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import useScript from '../../hooks/useScript';
import Rocket from '../../../public/images/accelerator/rocket.png';
import BG from '../../../public/images/accelerator/bg.webp';

import Image from 'next/image';

const FORM_SRC = 'https://awesome-teacher-1065.ck.page/5a9ee192f2';
const FORM_UID = '5a9ee192f2';

interface AcceleratorProps {}

export default function AcceleratorPage({}: AcceleratorProps) {
  useScript(`${FORM_SRC}/index.js`, 'accelerator-signup', {
    uid: FORM_UID,
  });

  return (
    <Layout title="notJust Development Blog" isLandingPage>
      {/* HERO */}
      <div
        className="fixed top-0 bottom-0 left-0 right-0"
        style={{ backgroundColor: '#100936' }}
      >
        <Image
          src={BG}
          alt="background"
          priority
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="animate-bounce absolute top-10 w-full  text-center">
        <span className="text-xl text-white font-bold font-mono my-4 leading-relaxed bg-purple-800 p-2.5 px-5 rounded-full">
          📅 Next batch: <u>Jan 2024</u>
        </span>
      </div>

      <MaxWidthWrapper className=" flex flex-col md:flex-row mt-24 md:mt-0 min-h-screen items-center">
        <div className="flex-1 my-5">
          <p className="text-s text-secondary font-mono">From Idea to Market</p>
          <h1 className="text-5xl leading-relaxed">notJust Accelerator</h1>
          <h2 className="text-3xl leading-relaxed text-purple-200">
            Turn your mobile app ideas into reality in just 3 months.
          </h2>
          <p className="text-xl text-purple-300 my-4 leading-relaxed">
            Resources, mentorship, and the network you need to successfully
            launch and scale your applications.
          </p>

          {/* button */}
          <Button
            href={FORM_SRC}
            text="Join the Waitlist"
            className="w-full"
            size="xl"
            data={{
              'data-formkit-toggle': FORM_UID,
            }}
          />
        </div>
        <div className="flex-1">
          <Image src={Rocket} alt="Rocket" priority />
        </div>
      </MaxWidthWrapper>
    </Layout>
  );
}
