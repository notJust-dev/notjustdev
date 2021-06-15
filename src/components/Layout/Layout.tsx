import React from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
};

const Layout = ({ children, title, description }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
    </Head>
    <Navbar />

    <main>{children}</main>

    <Footer />
  </div>
);

Layout.defaultProps = {
  description: '',
} as Partial<Props>;

export default Layout;
