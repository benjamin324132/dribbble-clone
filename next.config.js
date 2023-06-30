/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images:{
        domains: ["cdn.dribbble.com", "uploadthing.com"]
    }
}

module.exports = nextConfig
