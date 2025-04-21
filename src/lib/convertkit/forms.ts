import { fetchCK } from './utils';

export async function addSubscriberToForm(
  formId: string,
  subscriberId: string,
  referrer: string,
) {
  try {
    const response = await fetchCK(
      `/forms/${formId}/subscribers/${subscriberId}`,
      {
        method: 'POST',
        body: JSON.stringify({ referrer }),
      },
    );

    if (!response.ok) {
      console.log('Failed to add subscriber to form!', response);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.log('Failed to add subscriber to form!', e);
    return null;
  }
}
