/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|avi)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[ext]',
          },
        },
      });
  
      return config;
    },
};

module.exports = nextConfig;
