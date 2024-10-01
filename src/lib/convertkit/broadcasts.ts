// import dummyBroadcasts from './dummyBroadcasts';

const CK_URL = 'https://api.convertkit.com/v3';

const listBroadcasts = async (page = 1): Promise<BroadcastListItem[]> => {
  try {
    const response = await fetch(
      `${CK_URL}/broadcasts?page=${page}&sort_order=desc&api_secret=${process.env.CONVERT_KIT_API_KEY}`,
    );
    const data = await response.json();
    return data?.broadcasts || [];
  } catch (e) {
    console.log('Failed to fetch broadcasts!');
    console.log(e);
    return [];
  }
};

export const listAllBroadcasts = async (): Promise<BroadcastListItem[]> => {
  const allBroadcasts: BroadcastListItem[] = [];
  let page = 1;

  while (true) {
    const newItems = await listBroadcasts(page);
    allBroadcasts.push(...newItems);
    page += 1;
    if (!newItems || newItems.length === 0) {
      break;
    }
  }
  return allBroadcasts;
};

export const getBroadcast = async (id: number): Promise<Broadcast | null> => {
  try {
    const response = await fetch(
      `${CK_URL}/broadcasts/${id}?api_secret=${process.env.CONVERT_KIT_API_KEY}`,
    );
    const data = await response.json();
    return data?.broadcast || null;
  } catch (e) {
    console.log(
      `Failed to fetch broadcast with id ${id}. Error: ${(e as Error).message}`,
    );
    console.log(e);
    return null;
  }
};

export const getPublicBroadcasts = async (): Promise<Broadcast[]> => {
  // return dummyBroadcasts;
  const broadcastsList = await listAllBroadcasts();
  const broadcasts = await Promise.all(
    broadcastsList.map((b) => getBroadcast(b.id)),
  );

  const publicBroadCasts = broadcasts.filter((b) => b?.public) as Broadcast[];
  // console.log(
  //   JSON.stringify(
  //     publicBroadCasts.map((b) => ({
  //       id: b.id,
  //       subject: b.subject,
  //       public: b.public,
  //       thumbnail_url: b.thumbnail_url,
  //       published_at: b.published_at,
  //     })),
  //     null,
  //     2,
  //   ),
  // );

  return publicBroadCasts;
};
