'use server';

import { addSubscriberToForm } from '@/lib/convertkit/forms';
import { createSubscriber } from '@/lib/convertkit/subscribers';

export default async function submit(
  prevState: { success?: boolean },
  formData: FormData,
) {
  const email = formData.get('email_address')?.toString();
  const formId = formData.get('form_id')?.toString();
  const referrer = formData.get('referrer')?.toString() || 'unknown';

  if (!email) {
    return { error: 'Email is required', success: false };
  }

  if (!formId) {
    return { error: 'Form ID is required', success: false };
  }

  const subscriber = await createSubscriber(email);
  if (!subscriber?.subscriber?.id) {
    return { error: 'Failed to create subscriber', success: false };
  }

  const subscriberId = subscriber.subscriber.id;

  const formResponse = await addSubscriberToForm(
    formId,
    subscriberId,
    referrer,
  );

  if (!formResponse) {
    return { error: 'Failed to add subscriber to form', success: false };
  }

  return { success: true, error: '' };
}
