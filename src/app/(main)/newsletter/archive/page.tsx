import NewsletterCard from '@/components/NewsletterCard';
import { getPublicBroadcasts } from '@/lib/convertkit/broadcasts';

export default async function NewsletterIssue() {
  const broadcasts = await getPublicBroadcasts();

  return (
    <div className="flex flex-col gap-3">
      {broadcasts.map((broadcast) => (
        <NewsletterCard key={broadcast.id} broadcast={broadcast} />
      ))}
    </div>
  );
}
