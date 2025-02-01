module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/naas',
        destination: '/nyblom-as-a-service',
        permanent: true,
      },
      {
        source: '/clarity-call',
        destination: '/nyblom-as-a-service/clarity-call',
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