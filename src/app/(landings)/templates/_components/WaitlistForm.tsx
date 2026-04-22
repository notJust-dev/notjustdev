import Script from 'next/script';
import { Suspense } from 'react';
import Form from '../../newsletter/form';

type Props = {
  formId: string;
  embedUid: string;
  heading?: string;
  subheading?: string;
  buttonText?: string;
};

export default function WaitlistForm({
  formId,
  embedUid,
  heading = 'Join the waitlist',
  subheading = 'Be the first to know when it drops. Early-bird pricing for waitlist members.',
  buttonText = 'Join the Waitlist',
}: Props) {
  return (
    <div className="w-full max-w-xl bg-gradient-to-br from-[#ffe03000] to-[#ffe03010] p-6 md:p-8 rounded-2xl border-2 border-[#ffe03020] shadow-xl">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl text-white font-semibold">{heading}</h3>
          <p className="text-gray-300">{subheading}</p>
        </div>

        <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
          <Form formId={formId} buttonText={buttonText} className="w-full" />
        </Suspense>

        <Script
          async
          data-uid={embedUid}
          src={`https://awesome-teacher-1065.kit.com/${embedUid}/index.js`}
        />
      </div>
    </div>
  );
}
