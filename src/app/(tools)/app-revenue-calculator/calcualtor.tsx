'use client';
import { useState } from 'react';
import { categories, revenueByCategory } from './data';
import type { Category } from './data';

export default function Calculator() {
  const [downloads, setDownloads] = useState('1000');
  const [category, setCategory] = useState<Category>('All Categories');

  const selectedCategory: Category = category || 'All Categories';
  const data =
    revenueByCategory[selectedCategory as keyof typeof revenueByCategory];

  const calcRevenue = (arr: number[]) => {
    if (!downloads || isNaN(Number(downloads))) return [0, 0, 0, 0];
    return arr.map((v) => Math.ceil(Number(downloads) * v));
  };

  const day60 = calcRevenue(data.day60);
  // Q1 is index 1, Median is index 2
  const [q1_60, median_60] = [day60[1], day60[2]];

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-800">
      <div className="space-y-8">
        <div>
          <input
            type="number"
            min="0"
            className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-primary-500 focus:outline-none text-xl bg-white dark:bg-zinc-800 dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-500 transition"
            placeholder="Number of downloads"
            value={downloads}
            onChange={(e) => setDownloads(e.target.value)}
          />
        </div>
        <div>
          <select
            className="w-full px-5 py-4 rounded-2xl border border-gray-200 dark:border-zinc-700 focus:ring-2 focus:ring-primary-500 focus:outline-none text-xl bg-white dark:bg-zinc-800 dark:text-zinc-100 transition"
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="w-full  rounded-3xl bg-white/80 dark:bg-zinc-900/80 shadow-xl border border-gray-100 dark:border-zinc-800 flex flex-col items-center py-10 px-6">
            <span className="text-lg font-medium text-gray-500 dark:text-zinc-400 mb-2 tracking-wide">
              Estimated Revenue (60 days)
            </span>
            <span className="text-5xl md:text-6xl font-extrabold tabular-nums bg-gradient-to-r from-green-400 to-yellow-400 dark:from-green-300 dark:to-yellow-300 bg-clip-text text-transparent py-2 mb-2 select-text">
              ${q1_60.toLocaleString()} – ${median_60.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-400 dark:text-zinc-500 mt-12 text-center">
        * Estimates are based on industry data and may vary.
      </p>
    </div>
  );
}
