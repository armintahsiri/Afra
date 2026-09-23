'use client'

import { useRouter } from 'next/navigation'
import { EmptyState } from '@/components/Shared/EmptyState'
import { BuyerInfoForm, type BuyerInfo } from './BuyerInfoForm'
import { useCart } from '@/components/Shared/CartContext'
import { ProductArt } from '@/components/Shared/ProductArt'
import { ROUTES } from '@/constants/routes'
import { useToast } from '@/components/Shared/ToastContext'
import { productDetails } from '@/data/products'
import { useState } from 'react'
import { formatThousands, formatQuantity, parsePriceInThousands } from '@/lib/format'
import type { OrderSnapshot } from '@/types'


export function CheckoutClient() {
  const router = useRouter()
  const { lines, subtotal, clearCart } = useCart()
  const { showToast } = useToast()
  const [checkoutError, setCheckoutError] = useState('')
  async function complete(data: BuyerInfo) {
    // Mock checkout only: replace this timeout and localStorage order snapshot with the real payment callback later.
    const changedLines = lines.filter((line) => {
      const current = productDetails.find((product) => product.id === line.productId)
      return !current || current.status !== 'in_stock' || current.price !== line.product.price
    })
    if (changedLines.length) {
      setCheckoutError('وضعیت یا قیمت یکی از محصولات تغییر کرده است. سبد خرید را بررسی و دوباره تلاش کن.')
      showToast('سبد خرید به‌روزرسانی شده است.', 'error')
      return
    }
    setCheckoutError('')
    await new Promise((resolve) => window.setTimeout(resolve, 900))
    try {
      const snapshot: OrderSnapshot = { buyer: data, items: lines.map((line) => ({ title: line.product.title, art: line.product.art, price: line.product.price, quantity: line.quantity })), subtotal, createdAt: new Date().toISOString() }
      window.localStorage.setItem('afrashop-last-order', JSON.stringify(snapshot))
    } catch {
      showToast('سفارش ثبت شد، اما در این مرورگر ذخیره نشد.', 'info')
    }
    clearCart()
    showToast('پرداخت نمایشی با موفقیت انجام شد.', 'success')
    router.push(ROUTES.CHECKOUT_SUCCESS)
  }
  if (!lines.length) return <section className="mx-auto max-w-[1240px] px-7 pb-16 pt-[100px] max-[768px]:px-4 max-[480px]:px-3.5"><EmptyState icon="🛒" title="سبد خرید شما خالیه" description="برای تکمیل خرید، ابتدا محصولی را به سبد اضافه کن." href={ROUTES.PRODUCTS} action="مشاهده محصولات" /></section>
  return <section className="mx-auto max-w-[1240px] px-7 pb-16 pt-[72px] max-[768px]:px-4 max-[768px]:pb-11 max-[768px]:pt-11 max-[480px]:px-3.5"><div className="mb-[26px]"><span className="mb-2 inline-block text-xs font-extrabold text-gold">خرید امن</span><h1 className="m-0 mb-2 text-[clamp(28px,5vw,44px)] text-text">تکمیل خرید</h1><p className="m-0 text-muted">اطلاعات تحویل دیجیتال را وارد کن تا سفارش نمایشی‌ات ثبت شود.</p></div>{checkoutError && <p className="mx-auto mb-[18px] max-w-[1200px] rounded-xl border border-[rgba(217,93,104,.35)] bg-[rgba(217,93,104,.08)] px-3.5 py-3 text-[#b94753]" role="alert" aria-live="polite">{checkoutError}</p>}<div className="grid grid-cols-[.9fr_1.1fr] items-start gap-[22px] max-[768px]:grid-cols-1"><div className="rounded-[22px] border border-line bg-surface p-6 shadow-[0_18px_40px_-32px_var(--shadow-soft)]"><h2 className="m-0 mb-[18px] text-[19px] text-text">خلاصه سفارش</h2><div className="flex flex-col gap-3">{lines.map((line) => <div className="flex items-center gap-2.5 border-b border-line pb-3" key={line.productId}><ProductArt art={line.product.art} art1={line.product.art1} art2={line.product.art2} className="h-12 w-12 shrink-0 rounded-[10px] font-extrabold" /><div className="min-w-0 flex-1"><strong className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs text-text">{line.product.title}</strong><span className="mt-[3px] block overflow-hidden text-ellipsis whitespace-nowrap text-[11px] text-muted">{formatQuantity(line.quantity)} × {line.product.price}</span></div><b className="whitespace-nowrap text-[11px] text-gold">{formatThousands(parsePriceInThousands(line.product.price) * line.quantity)}</b></div>)}</div><div className="mt-[18px] flex flex-col gap-[9px] text-xs text-muted"><span className="flex justify-between gap-3">جمع محصولات <b className="text-text">{formatThousands(subtotal)}</b></span><span className="flex justify-between gap-3">هزینه ارسال <b className="text-text">رایگان</b></span><strong className="flex justify-between gap-3 border-t border-line pt-3.5 text-sm text-text">مبلغ قابل پرداخت <b className="text-base text-gold">{formatThousands(subtotal)}</b></strong></div><div className="mt-5 flex items-center gap-3.5 rounded-[14px] border border-[color-mix(in_srgb,var(--gold)_42%,var(--line))] bg-gold/10 p-3.5"><span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[9px] bg-gold font-extrabold text-white" aria-hidden="true">✓</span><div><strong className="text-[13px] text-text">پرداخت با زرین‌پال</strong><p className="m-[3px_0_0] text-[11px] text-muted">درگاه امن پرداخت آنلاین — نسخه نمایشی</p></div></div></div><div className="rounded-[22px] border border-line bg-surface p-6 shadow-[0_18px_40px_-32px_var(--shadow-soft)] max-[480px]:px-4"><h2 className="m-0 mb-[18px] text-[19px] text-text">اطلاعات خریدار و تحویل</h2><BuyerInfoForm onSubmit={complete} /></div></div></section>
}
