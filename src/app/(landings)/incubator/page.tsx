import { Metadata } from 'next';
import Form from '../newsletter/form';
import Script from 'next/script';
import Image from 'next/image';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'notJust Incubator | Build and Launch Your Mobile App in 10 Weeks',
  description:
    'Join the AI development gold rush. Build and launch profitable mobile apps in 10 weeks with our proven system. Only 10 spots available.',
};

export default function IncubatorPage() {
  return (
    <section className="flex flex-col items-center min-h-[80vh]">
      <div className="flex-1 mb-5 space-y-10 w-full flex flex-col items-center justify-center">
        {/* Taglines */}
        <div className="flex flex-wrap gap-2">
          <span className="text-pill whitespace-pre font-semibold">
            ⚡{'  '} Only 10 Spots Available
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold text-center">
          notJust Incubator
        </h1>
        <h2 className="text-4xl md:text-5xl font-semibold text-primary-gradient text-center">
          Build and Launch your mobile app in 10 weeks
        </h2>

        <div className="w-full max-w-2xl bg-gradient-to-br from-[#ffe03000] to-[#ffe03010] p-8 rounded-2xl border-2 border-[#ffe03020] shadow-xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-white">
                Join the Waitlist
              </h3>

              <p className="text-lg">
                To learn more about the incubator and how to apply
              </p>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
              <Form
                formId="8546697"
                buttonText="Join the Waitlist"
                className="w-full"
              />
            </Suspense>
            {/* For analytics to track form views */}
            <Script
              async
              data-uid="f416c47518"
              src={`https://awesome-teacher-1065.kit.com/f416c47518/index.js`}
            />
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="mt-16 text-center">
        <blockquote className="text-xl md:text-2xl text-white-100 italic mb-6 prose">
          &ldquo;If you&apos;re still not building apps in 2026, you&apos;re
          missing out big time. <br />
          This is the AI development gold rush, and we are here to help you
          build and launch profitable mobile apps.&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
            <Image
              src="/images/vadim-avatar.png"
              alt="Vadim"
              width={64}
              height={64}
            />
          </div>
          <div className="text-left">
            <p className="text-white font-semibold text-lg">Vadim Savin</p>
            <p className="text-gray-400 text-sm">Founder, notJust.dev</p>
          </div>
        </div>
      </div>
    </section>
  );
}
