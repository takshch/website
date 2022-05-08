const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/website/' : '',
  images: {
    loader: "imgix",
    path: "",
  },
}

module.exports = nextConfig
