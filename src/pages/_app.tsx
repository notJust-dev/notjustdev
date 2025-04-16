import type { AppProps } from 'next/app';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import '../styles/globals.css';
import { GtmScript } from '../components/GTM';
import { inter, spaceGrotesk } from '@/styles/fonts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <GtmScript />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
