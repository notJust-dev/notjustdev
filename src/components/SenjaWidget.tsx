import Script from 'next/script';

export default function SenjaWidget({ id }: { id: string }) {
  return (
    <>
      <Script
        src={`https://widget.senja.io/widget/${id}/platform.js`}
        type="text/javascript"
        async
        strategy="afterInteractive"
      />

      <div
        className="senja-embed"
        data-id={id}
        data-mode="shadow"
        data-lazyload="false"
        style={{ display: 'block', width: '100%' }}
      />
    </>
  );
}
