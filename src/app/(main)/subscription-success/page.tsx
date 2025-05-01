import Image from 'next/image';
import React from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const FormSuccess = () => (
  <MaxWidthWrapper maxWidth={800}>
    <section className="min-h-[80vh] flex items-center">
      <div className="bg-black p-10 rounded-xl w-full space-y-5">
        <Image
          src="/images/checkmark.png"
          width={96}
          height={96}
          alt=""
          className="pointer-events-none"
        />
        <h1>You are all set! {'  '}🎉</h1>
        <p className="my-1">You have successfully confirmed your spot 🙌</p>
        <p className="my-1">You will receive more information soon</p>

        <div>
          <p className="text-gray-400  mt-5">
            To make sure your receive all the important information, make sure
            to add our email to your address book
          </p>
        </div>
      </div>
    </section>
  </MaxWidthWrapper>
);

export default FormSuccess;
