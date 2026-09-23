import type { Metadata } from 'next'
import { parsePriceInThousands } from '@/lib/format'

export const SITE_NAME = 'افرا شاپ'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://afrashop.ir'
export const DEFAULT_DESCRIPTION = 'فروشگاه اکانت بازی، اشتراک هوش مصنوعی و گیفت‌کارت با تحویل سریع و پشتیبانی مطمئن.'
export const DEFAULT_OG_IMAGE = '/opengraph-image'

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString()
}

export function priceInIrt(value: string) {
  // Product prices are stored/displayed as thousands of toman; IRT uses toman.
  return parsePriceInThousands(value) * 1000
}

export function schemaAvailability(status: 'in_stock' | 'out_of_stock' | 'coming_soon') {
  return status === 'in_stock' ? 'https://schema.org/InStock' : status === 'out_of_stock' ? 'https://schema.org/OutOfStock' : 'https://schema.org/PreOrder'
}

export interface PageSeoOptions {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export function createPageMetadata({ title, description, path, keywords = [], image = DEFAULT_OG_IMAGE, type = 'website', noIndex = false }: PageSeoOptions): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      type,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      locale: 'fa_IR',
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  }
}
