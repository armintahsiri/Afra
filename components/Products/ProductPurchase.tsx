'use client'

import { useState } from 'react'
import type { ProductStatus } from '@/types'
import { AddToCartButton } from './AddToCartButton'
import { Button } from '@/components/Shared/Button'
import { useToast } from '@/components/Shared/ToastContext'

export function ProductPurchase({ productId, status, price }: { productId: string; status: ProductStatus; price: string }) {
  const [notified, setNotified] = useState(false); const { showToast } = useToast()
  function notify() { setNotified(true); showToast('درخواست اطلاع‌رسانی ثبت شد.', 'success') }
  if (status === 'out_of_stock') return <div className="mt-7 flex flex-wrap items-center gap-3.5 max-[480px]:items-start max-[480px]:flex-col"><strong className="text-[22px] text-gold">{price}</strong><span className="text-[12px] font-bold text-[#ff6b6b]">ناموجود</span><Button type="button" className="min-h-11 rounded-xl border border-line bg-transparent px-4 py-2.5 text-[13px] font-bold text-muted transition-[background,color,border-color,transform] duration-200 hover:border-teal hover:bg-teal/10 hover:text-teal" onClick={notify}>{notified ? 'ثبت شد ✓' : 'اطلاع‌رسانی موجود شدن'}</Button></div>
  if (status === 'coming_soon') return <div className="mt-7 flex flex-wrap items-center gap-3.5 max-[480px]:items-start max-[480px]:flex-col"><strong className="text-[22px] text-gold">{price}</strong><span className="text-[12px] font-bold text-gold-2">به‌زودی</span><AddToCartButton productId={productId} status={status} /></div>
  return <div className="mt-7 flex flex-wrap items-center gap-3.5 max-[480px]:items-start max-[480px]:flex-col"><strong className="text-[22px] text-gold">{price}</strong><span className="text-[12px] font-bold text-teal">موجود و آماده تحویل</span><AddToCartButton productId={productId} status={status} /></div>
}
