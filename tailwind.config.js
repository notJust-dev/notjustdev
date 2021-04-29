module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ffe031',
        secondary: '#8bd2bd',
        'custom-blue-500': '#29313D',
        orange: '#E89736',
      },
      textColor: {
        primary: '#ffe031',
        secondary: '#8bd2bd',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
