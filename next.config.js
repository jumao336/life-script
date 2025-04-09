/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 添加自定义服务器配置，允许从所有IP访问
  webpack: (config, { isServer }) => {
    return config;
  },
  // 设置为允许所有主机访问
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig 