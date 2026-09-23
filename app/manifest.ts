import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'افرا شاپ',
    short_name: 'افرا شاپ',
    description: 'فروشگاه محصولات دیجیتال افرا شاپ',
    start_url: '/',
    display: 'standalone',
    background_color: '#eceef2',
    theme_color: '#2196F3',
    lang: 'fa',
    dir: 'rtl',
    icons: [
      { src: '/icon.png', sizes: '840x800', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '840x800', type: 'image/png' },
    ],
  }
}
