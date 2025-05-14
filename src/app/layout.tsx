import { GtmNoscript, GtmScript } from '../components/GTM';
import { SEO } from '../lib/config';
import { inter, spaceGrotesk } from '@/styles/fonts';

export const metadata = {
  title: SEO.title,
  description: SEO.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      // TODO this will probably break webflow animations and interactions later.
      // The page id should be dynamically
      // data-wf-domain="notjust-dev.webflow.io"
      data-wf-domain="notjust.dev"
      data-wf-page="65cd13813bd3677534fa7c15"
      data-wf-site="65cd13813bd3677534fa7c0b"
    >
      <head>
        <GtmScript />
      </head>
      <body>
        <GtmNoscript />

        {children}
      </body>
    </html>
  );
}
