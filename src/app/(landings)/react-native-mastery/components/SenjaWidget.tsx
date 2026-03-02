'use client';

import Script from 'next/script';

export default function SenjaWidget({
  widgetId,
  lazyLoad = false,
}: {
  widgetId: string;
  lazyLoad?: boolean;
}) {
  return (
    <>
      <div
        className="senja-embed"
        data-id={widgetId}
        data-mode="shadow"
        data-lazyload={lazyLoad ? 'true' : 'false'}
        style={{ display: 'block' }}
      />
      <Script
        src={`https://widget.senja.io/widget/${widgetId}/platform.js`}
        strategy="lazyOnload"
      />
    </>
  );
}
