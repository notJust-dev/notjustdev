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
        <h1>You are all set! {'  '}🎉</h1>
        <p className="my-1">You have successfully confirmed your spot 🙌</p>
        <p className="my-1">You will receive more information soon</p>

        <div>
          <p className="text-gray-400 text-center mt-5">
            To make sure your receive all the important information, make sure
            to add our email to your address book
          </p>
        </div>
      </section>
    </MaxWidthWrapper>
  </Layout>
);

export default FormSuccess;
