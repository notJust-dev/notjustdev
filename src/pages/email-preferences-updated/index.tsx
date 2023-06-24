import Image from 'next/image';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import checkmark from '../../../public/images/checkmark.png';

const FormSuccess = () => (
  <Layout title="Email preferences updated" hideNewsletterForm>
    <MaxWidthWrapper maxWidth={600}>
      <section className="bg-custom-blue-500 p-5 self-stretch flex flex-col items-center">
        <Image src={checkmark} alt="" />
        <h1>Email preferences updated!</h1>
        <p className="my-1">We appreciate your digital personal space 🙌</p>
      </section>
    </MaxWidthWrapper>
  </Layout>
);

export default FormSuccess;
