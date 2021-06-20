import React, { useMemo, useRef } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import useScript from '../../hooks/useScript';

import { CONVERTKIT } from '../../lib/config';

function NewsletterForm() {
  const scriptRef = useRef<HTMLDivElement | null>(null);

  useScript(CONVERTKIT.FORM_SRC as string, scriptRef, {
    uid: CONVERTKIT.FORM_ID as string,
  });

  const subscribers = useMemo(() => {
    const now = +new Date();
    const subscribersUpdatedOn = +new Date(CONVERTKIT.subscribersUpdatedOn);
    const daysSinceLastUpdate = Math.floor(
      (now - subscribersUpdatedOn) / (1000 * 60 * 60 * 24),
    );
    return (
      CONVERTKIT.subscribers +
      daysSinceLastUpdate * CONVERTKIT.averageNewSubscribersPerDay
    );
  }, []);

  return (
    <MaxWidthWrapper>
      <div id="newsletter" className="bg-gray-900 shadow-lg p-3 md:p-10">
        <div className="mb-5 md:mx-3">
          <h1>notJust Development Newsletter</h1>
          <p>
            Join over{' '}
            <span className="text-primary font-bold">{subscribers}</span> other
            notJust Developers on the road to success. No spam, unsubscribe at
            any time.
          </p>
        </div>

        <div ref={scriptRef} />
      </div>
    </MaxWidthWrapper>
  );
}

export default NewsletterForm;
