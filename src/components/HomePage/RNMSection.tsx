import Button from '../Button';
import SenjaWidget from '../SenjaWidget';
import Image from 'next/image';

export default function RNMSection() {
  return (
    <section className="flex flex-col gap-8 py-10 min-h-[80vh] justify-center">
      {/* title */}
      <div className="flex flex-col gap-8 items-start">
        <span className="text-pill">Our Flagship Course</span>
        <h2 className="text-5xl text-primary-gradient">React Native Mastery</h2>
      </div>
      {/* content */}
      <div className="flex flex-row gap-8">
        {/* description and benefits */}
        <div className="flex flex-1 flex-col items-start gap-8">
          <p className="text-white-100 text-xl">
            The only course you need to Master mobile development with React
            Native & Expo
          </p>

          <div className="space-y-4">
            {[
              'Build 7 real-world mobile apps',
              'Master React Native & Expo',
              'Build your developer portfolio',
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <span className="text-primary text-2xl bg-yellow-400/15 rounded-full p-2 w-10 h-10 flex items-center justify-center  ">
                  ✓
                </span>
                <span className="text-white-100 text-xl">{benefit}</span>
              </div>
            ))}
          </div>

          <Button
            href="/react-native-mastery"
            text="Learn more"
            className="min-w-80"
          />

          <SenjaWidget id="5012cf37-566b-4484-861f-b11738cec85b" />
        </div>
        {/* logo */}
        <div className="max-w-[350px] w-full relative hidden md:block">
          <Image
            src="/images/brand_elements/rnm_logo.avif"
            alt="React Native 3d Logo"
            fill
            className="object-contain"
          />
          <Image
            src="/images/brand_elements/union.svg"
            alt="brand elements"
            width={731}
            height={850}
            className="absolute top-0 bottom-0 left-auto right-0 blur-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
