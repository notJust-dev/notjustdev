import { GtmNoscript, GtmScript } from '../components/GTM';
import { SEO } from '../lib/config';

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
    <html lang="en">
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
