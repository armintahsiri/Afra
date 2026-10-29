import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: { formats: ['image/avif', 'image/webp'], qualities: [45, 55, 75] },
  allowedDevOrigins: ['10.105.140.153'],
}

export default nextConfig
