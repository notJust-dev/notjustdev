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
      {
        source: '/masterclass-guide',
        destination: 'https://notjust.notion.site/Masterclass-Build-a-SM-app-in-2-days-a531dd6e786c491692e1f24c965538ad',
      },
    ];
  },
};
