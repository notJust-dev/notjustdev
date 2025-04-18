const stats = [
  {
    value: '1000',
    label: 'Students',
  },
  {
    value: '130K',
    label: 'Youtube Subscribers',
  },
  {
    value: '20M',
    label: 'Tutorial Views',
  },
];

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 min-h-[500px] items-center ">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center space-y-2">
          <span className="text-6xl md:text-8xl font-space-grotesk font-black text-transparent [text-stroke:2px_#FF4D4D] [-webkit-text-stroke:2px_#FFE030]">
            {stat.value}
          </span>
          <span className="text-xl text-white-200 ">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
