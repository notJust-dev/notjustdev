// TODO: Probably not needed. Use layout files instead.
import React from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import { SEO } from '../../lib/config';
import MaxWidthWrapper from '../MaxWidthWrapper';

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  author?: string;
  keywords?: string;
  image?: string;
  pageType?: string;
  hideNewsletterForm?: boolean;
  isLandingPage?: boolean;
};

const Layout = ({
  children,
  title = SEO.title,
  description,
  author = SEO.author,
  keywords = SEO.keywords,
  image = SEO.image,
  pageType = 'website',
  hideNewsletterForm = false,
  isLandingPage = false,
}: Props) => {
  const url = SEO.hostname;
  const imageUrl = SEO.hostname + image;
  const siteName = 'notJust.dev';

  return (
    <div className="flex flex-col min-h-screen">
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
      {!isLandingPage && <Navbar />}
      <main>
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </main>

      {!isLandingPage && <Footer hideNewsletterForm={hideNewsletterForm} />}
    </div>
  );
};

export default Layout;
