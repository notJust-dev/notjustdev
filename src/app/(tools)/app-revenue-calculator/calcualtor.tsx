'use client';
import { categories, revenueByCategory } from './data';
import type { Category } from './data';
import { useState, useRef } from 'react';

export default function Calculator() {
  const [downloads, setDownloads] = useState('1000');
  const [category, setCategory] = useState<Category>('All Categories');
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedCategory: Category = category || 'All Categories';
  const data =
    revenueByCategory[selectedCategory as keyof typeof revenueByCategory];

  // Format number with commas
  const formatNumber = (val: string) => {
    const num = Number(val.replace(/,/g, ''));
    if (isNaN(num)) return '';
    return num.toLocaleString();
  };

  // Only allow numbers, update state as string
  const handleDownloadsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/,/g, '');
    if (/^\d*$/.test(raw)) {
      setDownloads(raw);
    }
  };

  const calcRevenue = (arr: number[]) => {
    if (!downloads || isNaN(Number(downloads))) return [0, 0, 0, 0];
    return arr.map((v) => Math.ceil(Number(downloads) * v));
  };

  const day60 = calcRevenue(data.day60);
  // Q1 is index 1, Median is index 2
  const [q1_60, median_60] = [day60[1], day60[2]];

  return (
    <div className="max-w-2xl mx-auto p-8 bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white">
            Your app&apos;s revenue potential
          </h2>
          <p className=" text-zinc-400">
            Adjust the parameters below to calculate estimated revenue
          </p>
        </div>

        <div className="space-y-10">
          <select
            id="category"
            className="w-full px-5 py-4 text-center border-b-2 border-zinc-700 focus:ring-2 focus:ring-primary-500 focus:outline-none text-xl bg-zinc-900 text-zinc-100 transition shadow-md hover:border-primary-400 focus:border-primary-500"
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div className="flex flex-col space-y-2 items-center">
            <input
              id="downloads"
              ref={inputRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9,]*"
              className="w-full self-center max-w- text-center text-5xl lg:text-6xl font-extrabold border-0 border-b-2 border-zinc-700 bg-transparent focus:ring-0 focus:border-primary-400 text-white placeholder:text-zinc-500 transition appearance-none outline-none"
              placeholder="Enter downloads"
              value={formatNumber(downloads)}
              onChange={handleDownloadsChange}
              autoComplete="off"
              aria-label="Number of downloads"
            />
            <label
              htmlFor="downloads"
              className="block text-base font-medium mb-2 text-neutral-400"
            >
              Number of downloads
            </label>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="w-full rounded-3xl bg-zinc-900/80 shadow-xl border border-zinc-800 flex flex-col items-center py-10 px-6">
            <span className="text-lg font-medium text-zinc-400 mb-2 tracking-wide">
              Estimated Revenue (60 days)
            </span>
            <span className="text-4xl text-center lg:text-5xl font-extrabold tabular-nums bg-gradient-to-r  from-green-300 to-yellow-300 bg-clip-text text-transparent py-2 mb-2 select-text">
              ${q1_60.toLocaleString()} – ${median_60.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <p className="text-xs text-zinc-500 mt-12 text-center">
        * Estimates are based on industry data and may vary.
      </p>
    </div>
  );
}
// ... existing code ...
