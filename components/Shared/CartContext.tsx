'use client'

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { productDetails } from '@/data/products'
import type { CartItem, CartLine } from '@/types'
import { parsePriceInThousands } from '@/lib/format'
export type { CartItem, CartLine } from '@/types'

interface CartContextValue {
  items: CartItem[]
  lines: CartLine[]
  totalItems: number
  subtotal: number
  addToCart: (productId: string) => boolean
  increment: (productId: string) => void
  decrement: (productId: string) => void
  remove: (productId: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)
const storageKey = 'afrashop-cart'

function parseStoredCart(value: string | null): CartItem[] {
  if (!value) return []
  try {
    const parsed: unknown = JSON.parse(value)
    if (!Array.isArray(parsed)) return []
    const validProductIds = new Set(productDetails.map((product) => product.id))
    return parsed.filter((item): item is CartItem => Boolean(item && typeof item === 'object' && 'productId' in item && typeof item.productId === 'string' && validProductIds.has(item.productId) && 'quantity' in item && typeof item.quantity === 'number' && item.quantity > 0)).map((item) => ({ productId: item.productId, quantity: Math.min(99, Math.floor(item.quantity)) }))
  } catch { return [] }
}

export { parsePriceInThousands as priceInThousands } from '@/lib/format'

export function calculateCartSubtotal(lines: CartLine[]) { return lines.reduce((total, line) => total + parsePriceInThousands(line.product.price) * line.quantity, 0) }
export function calculateCartItemCount(items: CartItem[]) { return items.reduce((total, item) => total + item.quantity, 0) }

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try { setItems(parseStoredCart(window.localStorage.getItem(storageKey))) } catch { setItems([]) }
      setHydrated(true)
    }, 0)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (hydrated) {
      try { window.localStorage.setItem(storageKey, JSON.stringify(items)) } catch { /* localStorage may be unavailable in private browsing */ }
    }
  }, [hydrated, items])

  const lines = useMemo(() => items.map((item) => { const product = productDetails.find((candidate) => candidate.id === item.productId); return product ? { ...item, product } : null }).filter((line): line is CartLine => Boolean(line)), [items])
  const totalItems = calculateCartItemCount(lines)
  const subtotal = calculateCartSubtotal(lines)

  function addToCart(productId: string) {
    const product = productDetails.find((candidate) => candidate.id === productId)
    if (!product || product.status !== 'in_stock') return false
    setItems((current) => { const existing = current.find((item) => item.productId === productId); return existing ? current.map((item) => item.productId === productId ? { ...item, quantity: Math.min(99, item.quantity + 1) } : item) : [...current, { productId, quantity: 1 }] })
    return true
  }

  function increment(productId: string) { setItems((current) => current.map((item) => item.productId === productId ? { ...item, quantity: Math.min(99, item.quantity + 1) } : item)) }
  function decrement(productId: string) { setItems((current) => current.flatMap((item) => item.productId !== productId ? [item] : item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : [])) }
  function remove(productId: string) { setItems((current) => current.filter((item) => item.productId !== productId)) }
  function clearCart() { setItems([]) }

  return <CartContext.Provider value={{ items, lines, totalItems, subtotal, addToCart, increment, decrement, remove, clearCart }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider')
  return context
}
