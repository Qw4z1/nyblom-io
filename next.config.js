module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/nyblom-as-a-service',
        destination: '/naas',
        permanent: true,
      },
    ]
  },
};