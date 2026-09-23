import { describe, expect, it } from 'vitest'
import { calculateCartItemCount, calculateCartSubtotal } from '../components/Shared/CartContext'
import { parsePriceInThousands } from '../lib/format'
import type { CartItem, CartLine } from '../types'

const line = (price: string, quantity: number): CartLine => ({ productId: 'test', quantity, product: { id: 'test', art: 'T', title: 'Test', category: 'بازی‌ها', displayCategory: 'بازی', price, description: 'تست', status: 'in_stock', art1: '#000', art2: '#111' } })

describe('cart calculations', () => {
  it('parses Persian prices and calculates subtotal', () => {
    expect(parsePriceInThousands('۱٬۱۵۰ هزار تومان')).toBe(1150)
    expect(calculateCartSubtotal([line('۴۸۰ هزار', 2), line('۲۲۰ هزار', 1)])).toBe(1180)
  })

  it('counts quantities', () => {
    const items: CartItem[] = [{ productId: 'a', quantity: 2 }, { productId: 'b', quantity: 3 }]
    expect(calculateCartItemCount(items)).toBe(5)
  })
})
