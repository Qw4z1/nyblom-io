module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
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