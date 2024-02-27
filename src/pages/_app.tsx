import type { AppProps } from 'next/app';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import '../styles/globals.css';
import { GtmScript } from '../components/GTM';

// export function reportWebVitals({
//   id,
//   name,
//   label,
//   value,
// }: NextWebVitalsMetric) {
//   event(name, {
//     category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
//     value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
//     label: id, // id unique to current page load
//     nonInteraction: true, // avoids affecting bounce rate.
//   });
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GtmScript />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
