import { getBroadcast } from '@/lib/convertkit/broadcasts';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import * as cheerio from 'cheerio';
import { Metadata } from 'next';

dayjs.extend(RelativeTime);

type NewsletterIssueProps = {
  params: { id: number };
};

export default async function NewsletterIssue({
  params: { id },
}: NewsletterIssueProps) {
  const broadcast = await getBroadcast(id);
  if (!broadcast) {
    return <p>Not found!</p>;
  }

  const $ = cheerio.load(broadcast.content);
  $('a[href="{{ unsubscribe_url }}"]').closest('.ck-section').remove();

  return (
    <div>
      <h1 className="text-4xl sm:text-5xl mb-4 mt-16 sm:leading-normal leading-normal ">
        {broadcast.subject}
      </h1>
      <p className="text-gray-400 font-semibold text-xs">
        Published {dayjs(broadcast.published_at).fromNow()}
      </p>
      <div className="newsletter-broadcast my-3 rounded-xl overflow-hidden">
        <div dangerouslySetInnerHTML={{ __html: $.html() }} />
      </div>
    </div>
  );
}

export async function generateMetadata({
  params: { id },
}: NewsletterIssueProps): Promise<Metadata> {
  const broadcast = await getBroadcast(id);
  const title = broadcast?.subject || 'Newsletter broadcast';
  return {
    title,
    openGraph: {
      url: `https://www.notjust.dev/newsletter/${id}`,
      title,
      type: 'article',
      images: { url: broadcast?.thumbnail_url || '', alt: title },
    },
  };
}
