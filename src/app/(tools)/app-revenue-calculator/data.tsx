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
type revenueDataPoint = [number, number, number, number];

export const revenueByCategory: {
  [key in Category]: { day14: revenueDataPoint; day60: revenueDataPoint };
} = {
  Business: {
    day14: [0.1, 0.29, 0.79, 1.78],
    day60: [0.17, 0.48, 1.2, 2.55],
  },
  Education: {
    day14: [0.07, 0.27, 0.77, 2.17],
    day60: [0.1, 0.4, 1.1, 3.13],
  },
  Gaming: {
    day14: [0.02, 0.08, 0.22, 0.49],
    day60: [0.03, 0.13, 0.36, 0.77],
  },
  'Health & Fitness': {
    day14: [0.13, 0.44, 1.31, 2.97],
    day60: [0.2, 0.63, 1.79, 4.19],
  },
  'Media & Entertainment': {
    day14: [0.13, 0.13, 0.43, 1.19],
    day60: [0.05, 0.2, 0.63, 1.72],
  },
  'Photo & Video': {
    day14: [0.07, 0.19, 0.41, 0.9],
    day60: [0.11, 0.27, 0.61, 1.24],
  },
  Productivity: {
    day14: [0.07, 0.2, 0.49, 1.07],
    day60: [0.1, 0.3, 0.69, 1.51],
  },
  Shopping: {
    day14: [0.02, 0.13, 0.32, 0.7],
    day60: [0.04, 0.2, 0.48, 1.25],
  },
  'Social & Lifestyle': {
    day14: [0.05, 0.15, 0.48, 1.37],
    day60: [0.07, 0.23, 0.72, 1.98],
  },
  Travel: {
    day14: [0.06, 0.2, 0.55, 1.24],
    day60: [0.12, 0.32, 0.73, 1.66],
  },
  Utilities: {
    day14: [0.04, 0.16, 0.43, 1.0],
    day60: [0.07, 0.25, 0.65, 1.49],
  },
  'All Categories': {
    day14: [0.06, 0.2, 0.56, 1.35],
    day60: [0.1, 0.31, 0.81, 1.95],
  },
};
