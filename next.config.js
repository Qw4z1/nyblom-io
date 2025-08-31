module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/naas',
        destination: '/cto-coaching',
        permanent: true,
      },
      {
        source: '/nyblom-as-a-service',
        destination: '/cto-coaching',
        permanent: true,
      },
      {
        source: '/cto-coaching/clarity-call',
        destination: '/clarity-call',
        permanent: true,
      },
      {
        source: '/workshops',
        destination: '/cto-coaching/workshops',
        permanent: true,
      },
      {
        source: '/nyblom-as-a-service/workshop',
        destination: '/cto-coaching/workshops',
        permanent: true,
      },
      {
        source: '/coffee',
        destination: 'https://cal.com/nyblomio/30min',
        permanent: true,
      },
      {
        source: '/45',
        destination: 'https://cal.com/nyblomio/45',
        permanent: true,
      },
      {
        source: '/bsky',
        destination: 'https://bsky.app/profile/nyblom.io',
        permanent: true,
      },
    ]
  },
};