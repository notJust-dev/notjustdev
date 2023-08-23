import Image from 'next/image';
// import Button from './Button';
import { useRouter } from 'next/router';
import { MdOutlineDateRange } from 'react-icons/md';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import Link from 'next/link';

dayjs.extend(LocalizedFormat);

export interface EventCardProps {
  event: EventMeta;
  priority?: boolean;
}

const EventCard = ({ event, priority = false }: EventCardProps) => {
  const router = useRouter();

  const url = `/events/${event.slug}`;

  return (
    <div
      onClick={() => router.push(url)}
      className="bg-custom-blue-500 p-2 pb-5 flex flex-col  cursor-pointer h-full"
    >
      {event.image && (
        <div className="relative w-full aspect-w-16 aspect-h-9 mb-2">
          <Image
            src={event.image}
            alt={event.title}
            width={1280}
            height={720}
            priority={priority}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1100px) 50vw,
              550px"
          />
        </div>
      )}
      <h2 className="my-2 w-full text-center md:text-left">{event.title}</h2>
      <p className="flex items-center">
        <MdOutlineDateRange size={24} className="mr-2" color="#c5c5c5" />
        {dayjs(event.date).format('ll LT')}
      </p>
      <div className="my-2">
        {event.isPro && (
          <Link
            onClick={(e) => e.stopPropagation()}
            href={`/pro`}
            className={`bg-primary text-gray-900  pl-2 pr-3 py-1  rounded text-xs font-bold font-mono`}
          >
            <span className="opacity-60 mr-1 font-normal">#</span>
            pro
          </Link>
        )}
      </div>
      {/* <Button
        href={url}
        text="Read more"
        type="tertiary"
        className="m-2 mt-auto"
      /> */}
    </div>
  );
};

export default EventCard;
