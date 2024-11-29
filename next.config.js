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
        source: '/coffee',
        destination: 'https://cal.com/nyblomio/30min',
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