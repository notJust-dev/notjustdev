const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
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
      },
      textColor: {
        primary: '#ffe031',
        secondary: '#8bd2bd',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
