import { describe, expect, it } from 'vitest'
import { filterProducts, paginate } from '../lib/catalog'
import type { Product } from '../types'

const products: Product[] = [
  { id: 'game', art: 'G', title: 'بازی آزمایشی', category: 'بازی‌ها', displayCategory: 'بازی', description: 'توضیح محصول آزمایشی بازی.', price: '۱۰۰ هزار', status: 'in_stock', art1: '#000', art2: '#111' },
  { id: 'ai', art: 'A', title: 'اکانت هوش مصنوعی', category: 'هوش مصنوعی', displayCategory: 'هوش مصنوعی', description: 'توضیح محصول آزمایشی هوش مصنوعی.', price: '۲۰۰ هزار', status: 'in_stock', art1: '#000', art2: '#111' },
]

describe('catalog filtering and pagination', () => {
  it('filters by category and normalized query', () => {
    expect(filterProducts(products, 'بازی‌ها')).toHaveLength(1)
    expect(filterProducts(products, 'همه', 'هوش مصنوعی')[0]?.id).toBe('ai')
  })

  it('returns the requested page and total page count', () => {
    expect(paginate([1, 2, 3, 4, 5], 2, 2)).toEqual({ totalPages: 3, visible: [3, 4] })
  })
})
