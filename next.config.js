/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,

  // You’re exporting a static site
  output: 'export',

  // Disable Image Optimization API for static export
  images: {
    unoptimized: true,
  },

  // Explicit Turbopack config (even empty) tells Next "yes, this is intentional"
  turbopack: {},

  // If you ever want these redirects again, you can re-enable them,
  // but they don't affect Turbopack itself.
  /*
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'www.hockeyacademy.com',
          },
        ],
        destination: 'https://hockeyacademy.cl/:path*',
        permanent: true,
      },
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'hockeyacademy.cl',
          },
        ],
        destination: 'https://www.hockeyacademy.cl/:path*',
        permanent: true,
      },
    ];
  },
  */
};

module.exports = nextConfig;
