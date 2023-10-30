/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    //experimental:{appDir: true},
    async redirects() {
        return [
            {
                source: '/buy',
                destination: 'https://www.instagram.com/yanina_popesko/',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
