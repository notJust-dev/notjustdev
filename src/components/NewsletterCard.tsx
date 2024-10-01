import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(RelativeTime);

interface Props {
  broadcast: Broadcast;
  priority?: boolean;
}

const NewsletterCard = ({ broadcast, priority = false }: Props) => {
  return (
    <Link
      href={`/newsletter/${broadcast.id}`}
      className="post flex flex-col sm:flex-row gap-4 bg-zinc-900 rounded-md group"
    >
      <div
        className="post-thumbnail relative w-full sm:w-auto h-auto sm:h-48 pb-1/2 sm:pb-0 sm:flex-shrink-0 overflow-hidden"
        style={{ aspectRatio: 16 / 9 }}
      >
        {broadcast.thumbnail_url?.includes('embed.filekitcdn.com') && (
          <Image
            src={broadcast.thumbnail_url}
            alt={broadcast.subject}
            width={128}
            height={72}
            priority={priority}
            className="absolute object-cover object-center h-full w-full rounded group-hover:scale-105 duration-500"
            sizes="(max-width: 680px) 100vw, 350px"
          />
        )}
      </div>

      <div className="flex flex-col sm:flex-1 justify-center gap-1 overflow-hidden break-words p-2">
        <h3 className="text-2xl leading-9 line-clamp-3 sm:line-clamp-2 group-hover:text-secondary duration-500">
          {broadcast.subject}
        </h3>
        <p className="text-gray-400">
          {dayjs(broadcast.published_at).fromNow()}
        </p>
      </div>
    </Link>
  );
};

export default NewsletterCard;
