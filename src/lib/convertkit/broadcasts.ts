// import dummyBroadcasts from './dummyBroadcasts';
const CK_URL = 'https://api.kit.com/v4';

const fetchCK = (path: string, init: RequestInit = {}) => {
  console.log(`${CK_URL}/${path}`);
  return fetch(`${CK_URL}/${path}`, {
    ...init,
    cache: 'force-cache',
    headers: {
      ...init.headers,
      'X-Kit-Api-Key': process.env.KIT_API_KEY || '',
    },
  });
};

const listBroadcasts = async (): Promise<Broadcast[]> => {
  try {
    const response = await fetchCK('/broadcasts', {
      next: { revalidate: 3600 }, // 1 hour
    });
    const data = await response.json();
    return data?.broadcasts || [];
  } catch (e) {
    console.log('Failed to fetch broadcasts!', e);
    return [];
  }
};

export const getBroadcast = async (id: number): Promise<Broadcast | null> => {
  try {
    const response = await fetchCK(`/broadcasts/${id}`);
    const data = await response.json();
    return data?.broadcast || null;
  } catch (e) {
    console.log(
      `Failed to fetch broadcast with id ${id}. Error: ${(e as Error).message}`,
    );
    return null;
  }
};

export const getPublicBroadcasts = async (): Promise<Broadcast[]> => {
  const broadcasts = await listBroadcasts();

  const publicBroadCasts = broadcasts.filter((b) => b?.public);

  return publicBroadCasts;
};
