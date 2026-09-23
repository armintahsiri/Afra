import type { OrderSnapshot } from '@/types'

export function isOrderSnapshot(value: unknown): value is OrderSnapshot {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Record<string, unknown>
  if (!candidate.buyer || typeof candidate.buyer !== 'object' || typeof candidate.subtotal !== 'number' || !Number.isFinite(candidate.subtotal) || typeof candidate.createdAt !== 'string' || Number.isNaN(Date.parse(candidate.createdAt)) || !Array.isArray(candidate.items)) return false
  return candidate.items.every((item) => {
    if (!item || typeof item !== 'object') return false
    const line = item as Record<string, unknown>
    return typeof line.title === 'string' && typeof line.art === 'string' && typeof line.price === 'string' && typeof line.quantity === 'number' && Number.isInteger(line.quantity) && line.quantity > 0
  })
}
