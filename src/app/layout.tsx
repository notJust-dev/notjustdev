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
