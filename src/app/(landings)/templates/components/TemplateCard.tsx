import Image from 'next/image';
import Link from 'next/link';
import { type TemplateCard as Card } from '../data/templates';

export default function TemplateCard({ template }: { template: Card }) {
  const statusLabel =
    template.status === 'available' ? 'Available now' : 'Pre-order';

  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group relative flex flex-col rounded-2xl bg-black/40 border border-white-200/10 hover:border-primary/50 transition-all overflow-hidden"
    >
      <div className="relative aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 overflow-hidden">
        <Image
          src={template.image}
          alt={`${template.name} preview`}
          width={280}
          height={560}
          sizes="(max-width: 768px) 80vw, 400px"
          className="w-auto h-[85%] max-w-[60%] rounded-3xl shadow-2xl shadow-primary/10 group-hover:scale-105 transition-transform duration-300"
        />
        <span
          className={`absolute top-4 left-4 text-xs font-space-grotesk font-medium px-3 py-1.5 rounded-full ${
            template.status === 'available'
              ? 'bg-primary text-gray-900'
              : 'bg-black/60 text-primary border border-primary/40'
          }`}
        >
          {statusLabel}
        </span>
      </div>

      <div className="flex flex-col gap-4 p-6 md:p-8 flex-1">
        <div className="space-y-2">
          <h3 className="text-white-100 text-2xl font-space-grotesk font-semibold">
            {template.name}
          </h3>
          <p className="text-primary font-space-grotesk">{template.tagline}</p>
        </div>

        <p className="text-gray-300 leading-relaxed">{template.description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {template.stack.map((s) => (
            <span
              key={s}
              className="text-xs text-white-200 bg-white-100/5 border border-white-200/10 rounded-full px-2.5 py-1 font-space-grotesk"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between pt-4 mt-auto border-t border-white-200/10">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-white-200 text-sm line-through decoration-white-200/60 font-space-grotesk">
                {template.currency}
                {template.originalPrice}
              </span>
              <span className="text-white-100 text-2xl font-space-grotesk font-bold">
                {template.currency}
                {template.price}
              </span>
            </div>
            <p className="text-gray-400 text-xs mt-0.5">
              One-time · Lifetime updates
            </p>
          </div>
          <span className="text-primary font-space-grotesk font-medium text-sm group-hover:translate-x-1 transition-transform">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
