module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/nyblom-as-a-service',
        destination: '/naas',
        permanent: true,
      },
      {
        source: '/coffee',
        destination: 'https://cal.com/nyblomio/30min',
        permanent: true,
      },
    ]
  },
};