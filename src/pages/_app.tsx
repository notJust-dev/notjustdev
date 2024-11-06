import type { AppProps } from 'next/app';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import '../styles/globals.css';
import { GtmScript } from '../components/GTM';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GtmScript />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
