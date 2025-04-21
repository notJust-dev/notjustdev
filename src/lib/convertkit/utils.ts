const CK_URL = 'https://api.kit.com/v4';

export const fetchCK = (path: string, init: RequestInit = {}) => {
  return fetch(`${CK_URL}/${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Kit-Api-Key': process.env.KIT_API_KEY || '',
      ...init.headers,
    },
  });
};
