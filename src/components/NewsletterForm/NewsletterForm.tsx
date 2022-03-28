import React, { useMemo } from 'react';

import { CONVERTKIT } from '../../lib/config';
import OptInForm from '../shared/OptInForm/OptInForm';

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

  if (!CONVERTKIT.FORM_ID || !CONVERTKIT.FORM_SRC) {
    return <p>Failed to load the form</p>;
  }

  return (
    <OptInForm
      formId={CONVERTKIT.FORM_ID}
      formSrc={CONVERTKIT.FORM_SRC}
      title="notJust Development Newsletter"
    >
      Join over <span className="text-primary font-bold">{subscribers}</span>{' '}
      other notJust Developers on the road to success. No spam, unsubscribe at
      any time.
    </OptInForm>
  );
}

export default NewsletterForm;
