/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/como-funciona",
        destination: "/ahorrar",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
