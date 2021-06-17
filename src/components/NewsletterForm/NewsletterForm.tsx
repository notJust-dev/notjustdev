import React, { useMemo } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';

import { CONVERTKIT } from '../../lib/config';

function NewsletterForm() {
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
      <div className="bg-gray-900 shadow-lg p-10">
        <div className="m-3">
          <h1>notJust Development Newsletter</h1>
          <p>
            Join over{' '}
            <span className="text-primary font-bold">{subscribers}</span> other
            notJust Developers on the road to success. No spam, unsubscribe at
            any time.
          </p>
        </div>
        <script async data-uid={CONVERTKIT.FORM_ID} src={CONVERTKIT.FORM_SRC} />
      </div>
    </MaxWidthWrapper>
  );
}

export default NewsletterForm;
