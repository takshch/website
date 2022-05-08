const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/website' : '',
  assetPrefix: isProd ? '/website/' : '',
  images: {
    loader: "imgix",
    path: "",
  },
}

module.exports = nextConfig
