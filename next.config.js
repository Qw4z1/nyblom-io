module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/naas',
        destination: '/nyblom-as-a-service',
        permanent: true,
      },
    ]
  },
};