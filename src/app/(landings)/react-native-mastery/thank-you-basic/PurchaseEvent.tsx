'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function PurchaseEvent() {
  useEffect(() => {
    window.gtag?.('event', 'purchase', {
      value: 349,
      currency: 'USD',
      items: [
        {
          item_id: 'prod_RA926pX22oQo9e',
          item_name: 'RNM Basic',
        },
      ],
    });
  }, []);

  return null;
}
