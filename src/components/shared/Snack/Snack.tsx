import React from 'react';
import Script from 'next/script';

interface SnackProps {
  snackId: string;
  platform: 'mydevice' | 'ios' | 'android' | 'web';
  preview: boolean;
  theme: 'dark' | 'light';
  height: number;
}

const Snack = ({ snackId, platform, preview, theme, height }: SnackProps) => (
  <div>
    <div
      data-snack-id={snackId}
      data-snack-platform={platform}
      data-snack-preview={preview}
      data-snack-theme={theme}
      className="overflow-hidden w-full bg-gray-900 border-1 border-gray-800 rounded-md my-5"
      style={{ height }}
    />
    <Script strategy="lazyOnload" src="https://snack.expo.io/embed.js" />
  </div>
);

Snack.defaultProps = {
  platform: 'web',
  preview: true,
  theme: 'dark',
  height: 500,
} as Partial<SnackProps>;

export default Snack;
