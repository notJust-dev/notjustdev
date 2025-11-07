import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'notJust.Podcast | Stories from Indie Hackers & Mobile Founders',
  description:
    'Listen to inspiring interviews and success stories from indie hackers and mobile founders. Available on YouTube, Spotify, and Apple Podcasts.',
  openGraph: {
    title: 'notJust.Podcast | Stories from Indie Hackers & Mobile Founders',
    description:
      'Listen to inspiring interviews and success stories from indie hackers and mobile founders.',
  },
};

const PlatformBadge = ({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`hover:scale-105 transition-transform ${
      src.includes('apple') && 'bg-white rounded-xl p-2'
    }`}
  >
    <Image
      src={src}
      alt={alt}
      width={150}
      height={50}
      className={`${src.includes('apple') ? 'h-[34px]' : 'h-[50px]'} w-auto`}
    />
  </Link>
);

export default function PodcastPage() {
  return (
    <section className="flex flex-col md:flex-row items-center min-h-[80vh]">
      <div className="md:flex-1 mb-5 space-y-10 w-full">
        {/* Taglines */}
        <div className="flex flex-wrap gap-2">
          <span className="text-pill whitespace-pre">🚀 Indie Hackers</span>
          <span className="text-pill whitespace-pre">📱 Mobile Founders</span>
          <span className="text-pill whitespace-pre">🎙️ Success Stories</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-semibold text-primary-gradient">
          notJust.Podcast
        </h1>

        {/* Description */}
        <p className="text-xl text-white-100 leading-relaxed max-w-xl">
          Real conversations with indie hackers and mobile founders. Hear their
          stories, learn from their mistakes, and get inspired by their success.
        </p>

        {/* Platform Links */}
        <div className="flex flex-wrap gap-6 items-center">
          <PlatformBadge
            href="https://www.youtube.com/playlist?list=PLY3ncAV1dSVDgIIDqqpN99o9J7RqHJxAi"
            src="/images/podcast/youtube.svg"
            alt="Listen on YouTube"
          />
          <PlatformBadge
            href="https://open.spotify.com/show/5ECntbxZifLQ8ymUrKED6p"
            src="/images/podcast/spotify.svg"
            alt="Listen on Spotify"
          />
          <PlatformBadge
            href="https://podcasts.apple.com/podcast/id1851194121"
            src="/images/podcast/apple.svg"
            alt="Listen on Apple Podcasts"
          />
        </div>
      </div>

      {/* Podcast Artwork */}
      <div className="p-2">
        <Image
          src="/images/podcast/thumbnail.png"
          alt="notJust.Podcast Cover"
          width={500}
          height={500}
          className="max-w-md rounded-2xl pointer-events-none"
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1100px) 50vw,
              500px"
        />
      </div>
    </section>
  );
}
