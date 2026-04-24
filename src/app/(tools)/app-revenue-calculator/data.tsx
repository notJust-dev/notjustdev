export const categories = [
  'Business',
  'Education',
  'Gaming',
  'Health & Fitness',
  'Media & Entertainment',
  'Photo & Video',
  'Productivity',
  'Shopping',
  'Social & Lifestyle',
  'Travel',
  'Utilities',
  'All Categories',
] as const;

export type Category = (typeof categories)[number];
// [Q1, Median, Q3, P90] — revenue per install (RPI) in USD
type revenueDataPoint = [number, number, number, number];

export const revenueByCategory: {
  [key in Category]: { day14: revenueDataPoint; day60: revenueDataPoint };
} = {
  Business: {
    day14: [0.1, 0.31, 0.78, 1.83],
    day60: [0.19, 0.5, 1.25, 2.82],
  },
  Education: {
    day14: [0.08, 0.3, 0.89, 2.24],
    day60: [0.12, 0.44, 1.26, 3.31],
  },
  Gaming: {
    day14: [0.02, 0.08, 0.23, 0.51],
    day60: [0.03, 0.14, 0.38, 0.81],
  },
  'Health & Fitness': {
    day14: [0.16, 0.48, 1.3, 2.93],
    day60: [0.23, 0.66, 1.74, 3.93],
  },
  'Media & Entertainment': {
    day14: [0.04, 0.15, 0.45, 1.22],
    day60: [0.06, 0.23, 0.65, 1.79],
  },
  'Photo & Video': {
    day14: [0.08, 0.23, 0.54, 1.12],
    day60: [0.12, 0.32, 0.73, 1.52],
  },
  Productivity: {
    day14: [0.07, 0.22, 0.54, 1.16],
    day60: [0.11, 0.32, 0.78, 1.6],
  },
  Shopping: {
    day14: [0.03, 0.14, 0.42, 1.33],
    day60: [0.04, 0.22, 0.58, 1.72],
  },
  'Social & Lifestyle': {
    day14: [0.06, 0.22, 0.62, 1.64],
    day60: [0.1, 0.33, 0.86, 2.27],
  },
  Travel: {
    day14: [0.06, 0.27, 0.71, 1.5],
    day60: [0.11, 0.36, 0.88, 2.08],
  },
  Utilities: {
    day14: [0.05, 0.18, 0.51, 1.24],
    day60: [0.08, 0.27, 0.77, 1.75],
  },
  'All Categories': {
    day14: [0.07, 0.23, 0.65, 1.64],
    day60: [0.1, 0.34, 0.93, 2.28],
  },
};
