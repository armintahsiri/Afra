import { describe, expect, it } from 'vitest'
import { filterProducts, paginate } from '../lib/catalog'
import type { Product } from '../types'

const products: Product[] = [
  { id: 'fridge', art: 'F', title: 'یخچال آزمایشی', category: 'یخچال و فریزر', displayCategory: 'یخچال فریزر', description: 'توضیح محصول آزمایشی یخچال.', price: '۱۰۰ هزار', status: 'in_stock', art1: '#000', art2: '#111' },
  { id: 'washer', art: 'A', title: 'لباسشویی آزمایشی', category: 'لباسشویی و ظرفشویی', displayCategory: 'ماشین لباسشویی', description: 'توضیح محصول آزمایشی لباسشویی.', price: '۲۰۰ هزار', status: 'in_stock', art1: '#000', art2: '#111' },
]

describe('catalog filtering and pagination', () => {
  it('filters by category and normalized query', () => {
    expect(filterProducts(products, 'یخچال و فریزر')).toHaveLength(1)
    expect(filterProducts(products, 'همه', 'لباسشویی')[0]?.id).toBe('washer')
  })

  it('filters by brand and kind', () => {
    const extrasCatalog: Product[] = [
      ...products,
      { id: 'fridge-bosch', art: 'F2', title: 'یخچال آزمایشی بوش', brand: 'بوش', kind: 'یخچال فریزر دوقلو', category: 'یخچال و فریزر', displayCategory: 'یخچال فریزر بوش', description: 'توضیح آزمایشی.', price: '۱۵۰ هزار', status: 'in_stock', art1: '#000', art2: '#111' },
      { id: 'dishwasher-bosch', art: 'D2', title: 'ظرفشویی آزمایشی بوش', brand: 'بوش', kind: 'ماشین ظرفشویی', category: 'لباسشویی و ظرفشویی', displayCategory: 'ظرفشویی بوش', description: 'توضیح آزمایشی.', price: '۱۶۰ هزار', status: 'in_stock', art1: '#000', art2: '#111' },
      { id: 'dishwasher-lg', art: 'D3', title: 'ظرفشویی آزمایشی ال‌جی', brand: 'ال‌جی', kind: 'ماشین ظرفشویی', category: 'لباسشویی و ظرفشویی', displayCategory: 'ظرفشویی ال‌جی', description: 'توضیح آزمایشی.', price: '۱۷۰ هزار', status: 'in_stock', art1: '#000', art2: '#111' },
    ]
    expect(filterProducts(extrasCatalog, 'همه', '', { brand: 'بوش' }).map((item) => item.id)).toEqual(['fridge-bosch', 'dishwasher-bosch'])
    expect(filterProducts(extrasCatalog, 'همه', '', { kind: 'ماشین ظرفشویی' })).toHaveLength(2)
    expect(filterProducts(extrasCatalog, 'همه', '', { brand: 'بوش', kind: 'ماشین ظرفشویی' })[0]?.id).toBe('dishwasher-bosch')
    expect(filterProducts(extrasCatalog, 'همه', '', { brand: 'بوش', kind: 'جاروبرقی رباتیک' })).toHaveLength(0)
  })

  it('returns the requested page and total page count', () => {
    expect(paginate([1, 2, 3, 4, 5], 2, 2)).toEqual({ totalPages: 3, visible: [3, 4] })
  })
})
