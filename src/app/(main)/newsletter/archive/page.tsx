import NewsletterCard from '@/components/NewsletterCard';
import { getPublicBroadcasts } from '@/lib/convertkit/broadcasts';

export default async function NewsletterIssue() {
  const broadcasts = await getPublicBroadcasts();

  console.log(broadcasts[1]);

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-center my-5 text-3xl">notJust Newsletter Archive</h3>
      {broadcasts.map((broadcast) => (
        <NewsletterCard key={broadcast.id} broadcast={broadcast} />
      ))}
    </div>
  );
}

export const metadata = {
  title: 'notJust Development Newsletter Archive',
  description: 'Dive into all the issues from notJust Development Newsletter',
};
