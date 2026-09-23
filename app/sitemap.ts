import type { MetadataRoute } from 'next'
import { articles } from '@/data/articles'
import { productDetails } from '@/data/products'
import { ROUTES } from '@/constants/routes'
import { absoluteUrl } from '@/lib/seo'

type SitemapSourceItem = { id?: string; slug?: string; updatedAt?: string }

function lastModified(value: string | undefined, buildTime: Date) {
  if (!value || Number.isNaN(Date.parse(value))) return buildTime
  return value
}

export function getSitemapData() {
  return { products: productDetails as SitemapSourceItem[], articles: articles as SitemapSourceItem[] }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date()
  const { products, articles: articleItems } = getSitemapData()
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl(ROUTES.HOME), lastModified: buildTime, changeFrequency: 'daily', priority: 1 },
    { url: absoluteUrl(ROUTES.PRODUCTS), lastModified: buildTime, changeFrequency: 'daily', priority: .8 },
    { url: absoluteUrl(ROUTES.ARTICLES), lastModified: buildTime, changeFrequency: 'weekly', priority: .8 },
    { url: absoluteUrl(ROUTES.ABOUT), lastModified: buildTime, changeFrequency: 'monthly', priority: .5 },
    { url: absoluteUrl(ROUTES.TERMS), lastModified: buildTime, changeFrequency: 'monthly', priority: .3 },
    { url: absoluteUrl(ROUTES.PRIVACY), lastModified: buildTime, changeFrequency: 'monthly', priority: .3 },
  ]
  const productPages = products.map((product) => ({ url: absoluteUrl(ROUTES.PRODUCT(product.id!)), lastModified: lastModified(product.updatedAt, buildTime), changeFrequency: 'weekly' as const, priority: .7 }))
  const articlePages = articleItems.map((article) => ({ url: absoluteUrl(ROUTES.ARTICLE(article.slug!)), lastModified: lastModified(article.updatedAt, buildTime), changeFrequency: 'monthly' as const, priority: .6 }))
  return [...staticPages, ...productPages, ...articlePages]
}
