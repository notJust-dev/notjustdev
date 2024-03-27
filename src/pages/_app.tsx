import type { AppProps } from 'next/app';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import '../styles/globals.css';
import { GtmScript } from '../components/GTM';
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GtmScript />
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
