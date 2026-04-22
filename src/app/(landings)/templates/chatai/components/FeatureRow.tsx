import Image from 'next/image';
import { type Feature } from '../data/features';

type Props = {
  feature: Feature;
  reverse?: boolean;
};

export default function FeatureRow({ feature, reverse = false }: Props) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-12 md:gap-20 items-center`}
    >
      <div className="flex-1 space-y-5">
        <p className="text-pill w-fit">{feature.tagline}</p>
        <h2 className="text-3xl md:text-4xl leading-tight">{feature.title}</h2>
        <p className="text-gray-300 text-lg">{feature.description}</p>
        <ul className="space-y-2 pt-2">
          {feature.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-gray-300">
              <span
                className="text-primary mt-1 shrink-0"
                aria-hidden
              >
                ✓
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex justify-center">
        <Image
          src={feature.image}
          alt={feature.imageAlt}
          width={360}
          height={780}
          sizes="(max-width: 768px) 80vw, 360px"
          className="rounded-[40px] shadow-2xl shadow-primary/5 max-w-[280px] md:max-w-[340px] h-auto"
        />
      </div>
    </div>
  );
}
