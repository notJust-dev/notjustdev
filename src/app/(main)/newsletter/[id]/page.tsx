import { getBroadcast } from '@/lib/convertkit/broadcasts';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import * as cheerio from 'cheerio';

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
