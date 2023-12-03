/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/main-pages/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/extra/:path*',
        destination: '/error',
        permanent: true,
      },
      {
        source: '/utility-pages/:path*',
        destination: '/error',
        permanent: true,
      },
      {
        source: '/extra/:path*',
        destination: '/error',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/#faq',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/docs/privacy',
        permanent: true,
      },
      {
        source: '/fr/booking',
        destination: '/booking',
        permanent: true,
      },
      {
        source: '/fr/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
