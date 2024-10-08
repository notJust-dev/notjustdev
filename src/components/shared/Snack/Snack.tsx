import React from 'react';

interface SnackProps {
  snackId: string;
  platform?: 'mydevice' | 'ios' | 'android' | 'web';
  preview?: boolean;
  theme?: 'dark' | 'light';
  height?: number;
}

const Snack = ({
  snackId,
  platform = 'web',
  preview = true,
  theme = 'dark',
  height = 500,
}: SnackProps) => (
  <div>
    <div
      data-snack-id={snackId}
      data-snack-platform={platform}
      data-snack-preview={preview}
      data-snack-theme={theme}
      className="overflow-hidden w-full bg-gray-900 border-1 border-gray-800 rounded-md my-5"
      style={{ height }}
    />
    <script defer src="https://snack.expo.io/embed.js" />
  </div>
);

export default Snack;
