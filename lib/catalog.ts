import type { Product } from '@/types'

export function normalizeCatalogText(value: string) { return value.toLocaleLowerCase('fa-IR').replace(/[يى]/g, 'ی').replace(/ك/g, 'ک').replace(/[\u200c\u200e\u200f]/g, ' ').replace(/\s+/g, ' ').trim() }

export interface CatalogExtras { brand?: string; kind?: string }

export function filterProducts(items: Product[], category: string, query = '', extras: CatalogExtras = {}) {
  const normalizedQuery = normalizeCatalogText(query)
  return items.filter((product) => {
    if (category !== 'همه' && product.category !== category) return false
    if (extras.brand && extras.brand !== 'همه' && product.brand !== extras.brand) return false
    if (extras.kind && extras.kind !== 'همه' && product.kind !== extras.kind) return false
    if (normalizedQuery && !normalizeCatalogText(`${product.title} ${product.displayCategory} ${product.category} ${product.brand ?? ''} ${product.kind ?? ''}`).includes(normalizedQuery)) return false
    return true
  })
}

// لیست برندها از کل کاتالوگ (برای چیپ «برند»).
export function allBrands(items: Product[]) {
  return [...new Set(items.map((product) => product.brand).filter((brand): brand is string => Boolean(brand)))].sort((a, b) => a.localeCompare(b, 'fa'))
}

// انواع محصول فقط از میان محصولات دسته انتخاب‌شده، تا چیپ‌ها همیشه مرتبط بمانند.
export function kindsForCategory(items: Product[], category: string) {
  const scoped = category === 'همه' ? items : items.filter((product) => product.category === category)
  return [...new Set(scoped.map((product) => product.kind).filter((kind): kind is string => Boolean(kind)))].sort((a, b) => a.localeCompare(b, 'fa'))
}

export function paginate<T>(items: T[], page: number, pageSize: number) {
  const totalPages = Math.ceil(items.length / pageSize)
  return { totalPages, visible: items.slice((page - 1) * pageSize, page * pageSize) }
}
