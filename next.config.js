/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'audiophile-wp.local',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
