'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { CartIcon } from '@/components/Shared/icons'
import { EmptyState } from '@/components/Shared/EmptyState'
import { ProductArt } from '@/components/Shared/ProductArt'
import { Button, goldButtonClass } from '@/components/Shared/Button'
import { Modal } from '@/components/Shared/Modal'
import { useCart } from '@/components/Shared/CartContext'
import { useToast } from '@/components/Shared/ToastContext'
import { COPY } from '@/constants/copy'
import { ROUTES } from '@/constants/routes'
import { formatThousands, formatQuantity } from '@/lib/format'

const compactButtonClass = '!h-6 !min-h-6 !w-6 !min-w-6 !rounded-md !border-0 !p-0 text-[17px] leading-none'

export function CartWidget() {
  const { lines, totalItems, subtotal, increment, decrement, remove } = useCart()
  const { showToast } = useToast()
  const [open, setOpen] = useState(false)
  const [pendingRemove, setPendingRemove] = useState<string | null>(null)
  const cartRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pendingLine = lines.find((line) => line.productId === pendingRemove)

  const closeCart = useCallback(() => {
    setOpen(false)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  useEffect(() => {
    if (!open) return
    const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    requestAnimationFrame(() => dropdownRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus())
    const onOutside = (event: MouseEvent) => {
      if (pendingLine) return
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) closeCart()
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); closeCart(); return }
      if (event.key !== 'Tab' || !dropdownRef.current) return
      const focusable = Array.from(dropdownRef.current.querySelectorAll<HTMLElement>(focusableSelector)).filter((item) => item.getClientRects().length > 0)
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('mousedown', onOutside)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onOutside)
      document.removeEventListener('keydown', onKey)
    }
  }, [closeCart, open, pendingLine])

  function confirmRemove() {
    if (!pendingRemove) return
    remove(pendingRemove)
    setOpen(true)
    setPendingRemove(null)
    showToast('محصول از سبد خرید حذف شد.', 'success')
  }

  return (
    <div ref={cartRef} className="relative z-[65]">
      <Button ref={triggerRef} type="button" variant="ghost" className="relative !h-[38px] !min-h-[38px] !w-[38px] !min-w-[38px] rounded-[11px] border border-line bg-surface !p-0 text-muted hover:border-black/16 hover:text-text max-[768px]:!h-[42px] max-[768px]:!min-h-[42px] max-[768px]:!w-[42px] max-[768px]:!min-w-[42px]" aria-label={`سبد خرید؛ ${formatQuantity(totalItems)} کالا`} aria-expanded={open} aria-controls="cart-dropdown" onClick={() => open ? closeCart() : setOpen(true)}>
        <CartIcon className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true" />
        <span className="absolute -start-0.5 -top-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full border-2 border-surface bg-gold px-1 text-[10px] font-extrabold leading-none text-white" aria-live="polite">{totalItems > 99 ? '۹۹+' : formatQuantity(totalItems)}</span>
      </Button>

      {open && <div ref={dropdownRef} id="cart-dropdown" role="dialog" aria-label="سبد خرید" aria-modal="false" className="absolute left-0 right-auto top-[calc(100%+10px)] z-[80] flex max-h-[min(620px,calc(100dvh-96px))] w-[min(420px,calc(100vw-24px))] min-w-0 flex-col overflow-hidden rounded-[20px] border border-line bg-surface p-[22px_20px_18px] text-text shadow-[0_24px_54px_-24px_rgba(0,0,0,.32),inset_0_1px_0_rgba(255,255,255,.7)] motion-safe:animate-cart-drawer-in dark:shadow-[0_24px_58px_-24px_rgba(0,0,0,.72),inset_0_1px_0_rgba(255,255,255,.1)] max-[480px]:left-1/2 max-[480px]:top-[calc(100%+8px)] max-[480px]:w-[calc(100vw-24px)] max-[480px]:-translate-x-1/2">
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-line pb-4">
          <div><span className="mb-1.5 inline-block text-xs font-extrabold text-gold">خرید من</span><h2 className="m-0 text-xl text-text">سبد خرید</h2></div>
          <Button type="button" variant="ghost" className="!h-9 !min-h-9 !w-9 !min-w-9 rounded-xl border border-line bg-surface-2 !p-0 text-[22px] leading-none text-text" aria-label="بستن سبد خرید" onClick={closeCart}>×</Button>
        </div>

        {lines.length ? <>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-0.5 py-3" aria-label="محصولات سبد خرید">
            {lines.map((line) => <div className="flex items-start gap-2.5 border-b border-line py-3 last:border-b-0" key={line.productId}>
              <ProductArt art={line.product.art} art1={line.product.art1} art2={line.product.art2} className="h-[58px] w-[58px] shrink-0 rounded-xl text-lg font-extrabold" />
              <div className="min-w-0 flex-1"><strong className="block overflow-hidden text-ellipsis whitespace-nowrap text-[12.5px] text-text">{line.product.title}</strong><span className="mt-1 block text-[11.5px] font-bold text-gold">{line.product.price}</span><div className="mt-[9px] flex items-center justify-between gap-2"><div className="inline-flex min-h-[30px] items-center gap-2.5 rounded-[9px] border border-line bg-surface-2 px-1.5 py-0.5" aria-label={`تعداد ${line.product.title}`}><Button type="button" variant="ghost" className={`${compactButtonClass} bg-transparent text-text hover:bg-gold/12 hover:text-gold`} aria-label={`کاهش تعداد ${line.product.title}`} onClick={() => decrement(line.productId)}>−</Button><b className="min-w-[15px] text-center text-xs text-text" aria-live="polite">{formatQuantity(line.quantity)}</b><Button type="button" variant="ghost" className={`${compactButtonClass} bg-transparent text-text hover:bg-gold/12 hover:text-gold`} aria-label={`افزایش تعداد ${line.product.title}`} onClick={() => increment(line.productId)}>+</Button></div><Button type="button" variant="ghost" className="!min-h-7 !border-0 !bg-transparent !p-0 text-[11px] text-muted hover:text-[#e85d68]" onClick={() => setPendingRemove(line.productId)}>حذف</Button></div></div>
            </div>)}
          </div>
          <div className="shrink-0 border-t border-line pt-3.5"><div className="mb-3 flex items-center justify-between gap-3 text-xs text-muted"><span>جمع سبد</span><strong className="text-[15px] text-text" aria-live="polite">{formatThousands(subtotal)}</strong></div><Link href={ROUTES.CHECKOUT} className={`${goldButtonClass} flex min-h-11 w-full items-center justify-center`} onClick={closeCart}>{COPY.cart.checkout}</Link></div>
        </> : <div className="min-h-[300px] flex-1 [&_.empty-state]:m-0 [&_.empty-state]:min-h-[300px] [&_.empty-state]:border-0 [&_.empty-state]:bg-transparent"><EmptyState icon="🛒" title={COPY.cart.emptyTitle} description={COPY.cart.emptyDescription} href={ROUTES.PRODUCTS} action="مشاهده محصولات" /></div>}
      </div>}

      <Modal open={Boolean(pendingLine)} onClose={() => setPendingRemove(null)} ariaLabel="تأیید حذف محصول" ariaLabelledBy="remove-cart-modal-title" ariaDescribedBy="remove-cart-modal-description" role="alertdialog" overlayClassName="!bg-transparent !backdrop-blur-0" className="!fixed !left-1/2 !right-auto !top-1/2 z-[100] !-translate-x-1/2 !-translate-y-1/2 max-h-[calc(100dvh-32px)] w-[min(360px,calc(100vw-32px))] overflow-y-auto rounded-[20px] border border-line bg-surface p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,.5)]"><h2 id="remove-cart-modal-title" className="m-0 mb-2 text-lg text-text">حذف از سبد خرید</h2><p id="remove-cart-modal-description" className="m-0 text-[13px] leading-[1.8] text-muted">آیا از حذف «{pendingLine?.product.title}» مطمئنی؟</p><div className="mt-5 flex justify-end gap-2"><Button type="button" variant="ghost" onClick={() => setPendingRemove(null)}>انصراف</Button><Button type="button" variant="gold" onClick={confirmRemove}>حذف محصول</Button></div></Modal>
    </div>
  )
}
