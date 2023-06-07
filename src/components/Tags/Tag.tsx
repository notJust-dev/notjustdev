// const colors: { [key: string]: string } = {
//   blue: 'bg-blue-50 text-blue-600',
//   brown: 'bg-amber-50 text-amber-600',
//   default: 'bg-custom-blue-500 text-gray-300',
//   gray: 'bg-gray-50 text-gray-600',
//   green: 'bg-green-50 text-green-600',
//   orange: 'bg-orange-50 text-orange-600',
//   pink: 'bg-pink-50 text-pink-600',
//   purple: 'bg-purple-50 text-purple-600',
//   red: 'bg-rose-50 text-rose-600',
//   yellow: 'bg-yellow-50 text-yellow-500',
// };

const colors: { [key: string]: string } = {
  blue: 'bg-blue-500 text-blue-50',
  brown: 'bg-amber-700 text-amber-50',
  default: 'bg-custom-blue-500 text-white',
  gray: 'bg-gray-300 text-gray-700',
  green: 'bg-lime-400 text-lime-950',
  orange: 'bg-orange-500 text-orange-50',
  pink: 'bg-pink-600 text-pink-50',
  purple: 'bg-violet-500 text-violet-50',
  red: 'bg-rose-500 text-rose-50',
  yellow: 'bg-yellow-400 text-yellow-950',
};

export default function Tag({ tag }: { tag: NotionMultiSelect }) {
  return (
    <span
      className={`${
        colors[tag.color]
      } px-3 py-1 rounded text-xs font-bold font-mono`}
    >
      {tag.name}
    </span>
  );
}
