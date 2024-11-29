/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: false,
  i18n,
  images: {
    domains: [
      'source.unsplash.com',
      'images.unsplash.com',
      'preview.colorlib.com',
      'music.youtube.com',
      'encrypted-tbn0.gstatic.com',
      'rjp-v2-prod.s3.ap-southeast-1.amazonaws.com',
    ],
  },
}

module.exports = nextConfig
