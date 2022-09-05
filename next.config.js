module.exports = {
  images: {
    domains: [],
  },
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/CodeForUkraine',
        destination: '/blog/2022-03-01-codeforukraine-hackathon',
      },
      {
        source: '/masterclass',
        destination: 'https://assets.notjust.dev/masterclass',
      },
    ];
  },
};
