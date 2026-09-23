import { articles } from './articles'
import { searchableProducts } from './products'
import { ROUTES } from '@/constants/routes'
import type { Route } from 'next'

export interface SearchItem { id: string; title: string; searchText: string; href: Route; type: 'product' | 'article' }

function productSearchText(item: (typeof searchableProducts)[number]) {
  const fields = [item.title]
  if ('description' in item) fields.push(item.description)
  if ('displayCategory' in item) fields.push(item.displayCategory)
  if ('category' in item) fields.push(item.category)
  if ('tag' in item) fields.push(item.tag)
  return fields.join(' ')
}

export const searchItems: SearchItem[] = [
  ...searchableProducts.map((item) => ({ id: `product-${item.id}`, title: item.title, searchText: productSearchText(item), href: ROUTES.PRODUCT(item.id), type: 'product' as const })),
  ...articles.map((article) => ({ id: `article-${article.id}`, title: article.title, searchText: `${article.title} ${article.excerpt} ${article.category}`, href: ROUTES.ARTICLE(article.slug), type: 'article' as const })),
]
