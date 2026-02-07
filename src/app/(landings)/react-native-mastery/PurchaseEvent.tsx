'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function PurchaseEvent({
  value,
  itemId,
  itemName,
}: {
  value: number;
  itemId: string;
  itemName: string;
}) {
  useEffect(() => {
    window.gtag?.('event', 'purchase', {
      value,
      currency: 'USD',
      items: [{ item_id: itemId, item_name: itemName }],
    });
  }, [value, itemId, itemName]);

  return null;
}
