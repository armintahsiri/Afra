'use client'

import { useState } from 'react'
import type { ProductStatus } from '@/types'
import { useCart } from '@/components/Shared/CartContext'
import { Button } from '@/components/Shared/Button'
import { COPY } from '@/constants/copy'
import { useToast } from '@/components/Shared/ToastContext'

export function AddToCartButton({ productId, status = 'in_stock', compact = false }: { productId: string; status?: ProductStatus; compact?: boolean }) {
  const { addToCart } = useCart(); const { showToast } = useToast()
  const [feedback, setFeedback] = useState('')
  function handleClick() {
    if (status === 'out_of_stock') { setFeedback('ثبت شد'); showToast('درخواست اطلاع‌رسانی ثبت شد.', 'success'); return }
    if (status === 'coming_soon') return
    if (addToCart(productId)) { setFeedback('اضافه شد ✓'); showToast('به سبد خرید اضافه شد.', 'success'); window.setTimeout(() => setFeedback(''), 1400) }
  }
  const baseClass = `w-full rounded-xl border px-3 py-[9px] text-[12px] font-bold transition-[background,color,border-color,transform] duration-200 hover:-translate-y-0.5 motion-reduce:transition-none ${compact ? 'min-h-[34px] rounded-[10px] px-2 py-1.5 text-[11px]' : 'min-h-[42px]'} ${feedback ? 'border-teal bg-teal/15 text-teal' : ''}`
  if (status === 'coming_soon') return <Button type="button" className={`${baseClass} border-line bg-surface-2 text-muted opacity-[.58]`} disabled>{COPY.products.comingSoon}</Button>
  if (status === 'out_of_stock') return <Button type="button" className={`${baseClass} ${feedback ? '' : 'border-line bg-transparent text-muted'}`} onClick={handleClick}>{feedback || COPY.products.notify}</Button>
  return <Button type="button" className={`${baseClass} border-gold bg-gold text-white hover:bg-gold-2 hover:text-[#0D47A1]`} onClick={handleClick}>{feedback || COPY.products.add}</Button>
}
