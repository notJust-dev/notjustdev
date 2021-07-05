import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { SEO } from '../../lib/config';

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  author: string;
  keywords: string;
  image: string;
  pageType: string;
};

const Layout = ({
  children,
  title,
  description,
  author,
  keywords,
  image,
  pageType,
}: Props) => {
  const router = useRouter();

  const url = SEO.hostname + router.asPath;
  const imageUrl = SEO.hostname + image;
  const siteName = 'notJust.dev';

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keywords" content={keywords} />

        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={pageType} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteName} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content={siteName} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={title} />
        <meta property="twitter:creator" content={SEO.twitter} />
      </Head>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: SEO.title,
  description: SEO.description,
  author: SEO.author,
  keywords: SEO.keywords,
  image: SEO.image,
  pageType: 'website',
} as Partial<Props>;

export default Layout;
