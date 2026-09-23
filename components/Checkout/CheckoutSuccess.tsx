'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ROUTES } from '@/constants/routes'
import { formatThousands, formatQuantity } from '@/lib/format'
import { goldButtonClass } from '@/components/Shared/Button'
import type { OrderSnapshot } from '@/types'
import { isOrderSnapshot } from '@/lib/order'

export function CheckoutSuccess() {
  const [order, setOrder] = useState<OrderSnapshot | null>(null)
  useEffect(() => { const timer = window.setTimeout(() => { try { const value = window.localStorage.getItem('afrashop-last-order'); const parsed: unknown = value ? JSON.parse(value) : null; if (isOrderSnapshot(parsed)) setOrder(parsed) } catch { /* mock order remains empty when storage is unavailable */ } }, 0); return () => window.clearTimeout(timer) }, [])
  return <section className="mx-auto flex min-h-[620px] max-w-[1240px] flex-col items-center justify-center px-7 pb-16 pt-16 text-center max-[768px]:px-4 max-[480px]:px-3.5"><div className="mb-4 grid h-[76px] w-[76px] place-items-center rounded-[24px] bg-teal/14 text-[40px] font-black text-teal shadow-[0_0_26px_color-mix(in_srgb,var(--teal)_24%,transparent)]" aria-hidden="true">✓</div><span className="mb-2 inline-block text-xs font-extrabold text-gold">سفارش نمایشی ثبت شد</span><h1 className="m-0 mb-2.5 text-[clamp(26px,5vw,44px)] text-text">خریدت با موفقیت انجام شد</h1><p className="m-0 max-w-[550px] leading-[1.9] text-muted">این صفحه شبیه‌سازی پرداخت است؛ در نسخه نهایی اینجا نتیجه واقعی زرین‌پال نمایش داده می‌شود.</p>{order && <div className="my-6 flex w-full max-w-[580px] flex-col gap-2.5 rounded-[18px] border border-line bg-surface px-5 py-[18px] text-start text-xs text-muted"><span className="flex justify-between gap-3">شماره سفارش <b className="text-text">AF-{new Date(order.createdAt).getTime().toString().slice(-6)}</b></span>{order.items.map((item) => <span className="flex justify-between gap-3" key={item.title}>{item.title} × {formatQuantity(item.quantity)} <b className="text-text">{item.price}</b></span>)}<strong className="flex justify-between gap-3 border-t border-line pt-2.5 text-text">مجموع <b className="text-gold">{formatThousands(order.subtotal)}</b></strong></div>}<Link href={ROUTES.HOME} className={goldButtonClass}>بازگشت به فروشگاه</Link></section>
}
