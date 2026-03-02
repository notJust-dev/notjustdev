'use client';

import { useEffect } from 'react';

declare global {
  function gtag(...args: unknown[]): void;
}

function getUrlParams(): Record<string, string> {
  const params: Record<string, string> = {};
  const searchParams = new URLSearchParams(window.location.search);
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  return params;
}

function getGAClientId(): Promise<string | null> {
  return new Promise((resolve) => {
    if (typeof gtag === 'function') {
      gtag('get', 'G-BTVZKB40F5', 'client_id', (clientId: string) => {
        resolve(clientId);
      });
    } else {
      resolve(null);
    }
  });
}

export default function StripeLinksEnhancer() {
  useEffect(() => {
    async function updateStripeLinks() {
      const utmParams = getUrlParams();
      const clientId = await getGAClientId();
      const clientReferenceId = clientId
        ? clientId.toString().replace(/\./g, '_')
        : null;

      const stripeLinks =
        document.querySelectorAll<HTMLAnchorElement>('.stripe-link');

      stripeLinks.forEach((link) => {
        const originalUrl = new URL(link.href);

        Object.entries(utmParams).forEach(([key, value]) => {
          originalUrl.searchParams.set(key, value);
        });

        if (clientReferenceId) {
          originalUrl.searchParams.set(
            'client_reference_id',
            clientReferenceId,
          );
        }

        link.href = originalUrl.toString();
      });
    }

    function logBeginCheckout() {
      const stripeLinks = document.querySelectorAll('.stripe-link');
      stripeLinks.forEach((link) => {
        link.addEventListener('click', () => {
          if (typeof gtag === 'function') {
            gtag('event', 'begin_checkout', {});
          }
        });
      });
    }

    updateStripeLinks();
    logBeginCheckout();
  }, []);

  return null;
}
