import type { AppProps } from 'next/app';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Script from 'next/script';

import '../styles/globals.css';
import { GTM } from '../lib/config';

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

// TODO: move other tags to the Google Tag Manager
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <!-- Google Tag Manager --> */}
      <Script id="setup-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM}');
        `}
      </Script>
      {/* <!-- End Google Tag Manager --> */}

      {/* Yandex.Metrika counter */}
      <Script id="setup-yandex" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(91208801, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
          });
        `}
      </Script>
      {/* /Yandex.Metrika counter */}
      {/* <!-- Meta Pixel Code --> */}
      <Script id="setup-pixel">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '828991778317631');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* <!-- End Meta Pixel Code --> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
