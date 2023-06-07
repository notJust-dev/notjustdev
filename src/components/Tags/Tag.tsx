import Link from 'next/link';

const colors: { [key: string]: string } = {
  blue: 'bg-blue-500 text-blue-50',
  brown: 'bg-amber-700 text-amber-50',
  default: 'bg-slate-600 text-white',
  gray: 'bg-gray-300 text-gray-700',
  green: 'bg-lime-400 text-lime-950',
  orange: 'bg-orange-500 text-orange-50',
  pink: 'bg-pink-600 text-pink-50',
  purple: 'bg-violet-500 text-violet-50',
  red: 'bg-rose-500 text-rose-50',
  yellow: 'bg-yellow-400 text-yellow-950',
};

export default function Tag({
  tag,
  dimmed = false,
}: {
  tag: NotionMultiSelect;
  dimmed?: boolean;
}) {
  return (
    <Link
      onClick={(e) => e.stopPropagation()}
      href={`/tag/${encodeURIComponent(tag.name)}`}
      className={`${colors[tag.color]} ${
        dimmed && 'opacity-50'
      } pl-2 pr-3 py-1  rounded text-xs font-bold font-mono`}
    >
      <span className="opacity-60 mr-1 font-normal">#</span>
      {tag.name}
    </Link>
  );
}
