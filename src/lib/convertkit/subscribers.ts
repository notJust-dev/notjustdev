import { fetchCK } from './utils';

export const createSubscriber = async (email: string) => {
  try {
    const inputBody = {
      // first_name: 'Alice',
      email_address: email,
      state: 'inactive',
      // fields: {
      // 'Last name': 'Lamarr',
      // Birthday: 'Feb 17',
      // Source: 'landing page',
      // Role: 'Software developer',
      // Company: 'Convertkit',
      // 'Postal code': '83702',
      // Website: 'convertkit.com',
      // 'Social media': 'https://www.linkedin.com/company/convertkit',
      // 'How did you hear about us?': 'Social media',
      // Interests: 'Monetization',
      // Coupon: '',
      // },
    };

    const response = await fetchCK('/subscribers', {
      method: 'POST',
      body: JSON.stringify(inputBody),
    });

    if (!response.ok) {
      console.log('Failed to create subscriber!', response);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.log('Failed to create subscriber!', e);
    return null;
  }
};
