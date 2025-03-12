const { hostname } = require('os');

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'notjustdev-media.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'embed.filekitcdn.com', // convertkit,
      },
    ],
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
      {
        source: '/hack',
        destination: 'https://www.notjusthack.com/',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/VpURUN2',
        permanent: true,
      },
      {
        source: '/accelerator',
        destination: '/incubator',
        permanent: true,
      },
      {
        source: '/stickersheet',
        destination: 'https://bit.ly/3KrjgEz',
        permanent: false,
      },
      {
        source: '/sketchbook',
        destination: 'https://bit.ly/3KrjgEz',
        permanent: false,
      },
      {
        source: '/02-25-business-card',
        destination: 'https://www.notjust.dev/partnerships',
        permanent: false,
      },
    ];
  },
};
