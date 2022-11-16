import Image from 'next/image';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import checkmark from '../../../public/images/checkmark.png';

const FormSuccess = () => (
  <Layout title="notJust Development Blog" hideNewsletterForm>
    <MaxWidthWrapper maxWidth={600}>
      <section className="bg-custom-blue-500 p-5 self-stretch flex flex-col items-center">
        <Image src={checkmark} alt="" />
        <h1>Thank you!</h1>
        <p className="my-2">The form was submitted successfully!</p>
        <p className="my-2">You should receive a confirmation email soon</p>
        <p className="my-2 py-5 font-bold text-center bg-yellow-200 text-black p-2 rounded-md">
          ⭕️ Confirm your spot following the link in the email
        </p>

        <div>
          <p className="text-gray-400 text-center mt-5">
            Check spam and promotional folder. If you still didn&apos;t receive
            it, get in touch with us at <i>support@notjust.dev</i>
          </p>
        </div>
      </section>
    </MaxWidthWrapper>
  </Layout>
);

export default FormSuccess;
