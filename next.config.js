/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cr74317-wordpress-9m57d.tw1.ru',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
