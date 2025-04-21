const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
    './content/**/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffe031',
        secondary: '#8bd2bd',
        'custom-blue-500': '#29313D',
        'custom-blue-600': '#242c36',
        'custom-blue-800': '#14181e',
        'brand-orange': '#E89736',

        'gray-900': '#212121',
        'gray-800': '#242424',

        'white-100': '#fff9e0',
        'white-200': '#cfc9b3',
      },
      textColor: {
        primary: '#ffe031',
        secondary: '#8bd2bd',
      },
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
