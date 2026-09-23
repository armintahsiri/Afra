import type { Product } from '@/types'

export function normalizeCatalogText(value: string) { return value.toLocaleLowerCase('fa-IR').replace(/[يى]/g, 'ی').replace(/ك/g, 'ک').replace(/[\u200c\u200e\u200f]/g, ' ').replace(/\s+/g, ' ').trim() }

export function filterProducts(items: Product[], category: string, query = '') {
  const normalizedQuery = normalizeCatalogText(query)
  return items.filter((product) => (category === 'همه' || product.category === category) && (!normalizedQuery || normalizeCatalogText(`${product.title} ${product.displayCategory} ${product.category}`).includes(normalizedQuery)))
}

export function paginate<T>(items: T[], page: number, pageSize: number) {
  const totalPages = Math.ceil(items.length / pageSize)
  return { totalPages, visible: items.slice((page - 1) * pageSize, page * pageSize) }
}
