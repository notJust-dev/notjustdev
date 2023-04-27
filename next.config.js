module.exports = {
  images: {
    domains: ['notjustdev-media.s3.amazonaws.com'],
  },
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
        source: '/hack',
        destination: '/blog/2022-11-03-notJust-Hack',
      },
      {
        source: '/banner/appjs2023',
        destination: '/links',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/masterclass-guide',
        destination:
          'https://notjust.notion.site/Masterclass-Build-a-SM-app-in-2-days-a531dd6e786c491692e1f24c965538ad',
        permanent: false,
      },
      {
        source: '/shop',
        destination: 'https://my-store-11437346.creator-spring.com/',
        permanent: false,
      },
      {
        source: '/hack-event',
        destination:
          'https://events.zoom.us/ev/Ajc5bJBZEl2f2uhIDg-bt7cHDY4mqF1eFudjFVJuXnDqRCteHPvC~AggLXsr32QYFjq8BlYLZ5I06Dg',
        permanent: false,
      },
    ];
  },
};
