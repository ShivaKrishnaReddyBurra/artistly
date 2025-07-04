/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['placeholder.svg'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
          },
        ],
        unoptimized: true,
      }
};

export default nextConfig;
