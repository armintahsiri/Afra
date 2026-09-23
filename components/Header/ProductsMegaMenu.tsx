'use client'

import Link from 'next/link'
import type { KeyboardEventHandler } from 'react'
import { GamepadIcon, GiftIcon, SparkIcon } from '@/components/Shared/icons'
import { Badge } from '@/components/Shared/Badge'
import { productMenuColumns, featuredMenu } from '@/data/navigation'
import { ROUTES } from '@/constants/routes'

export interface ProductsMegaMenuProps {
  mobile?: boolean
  open?: boolean
  id?: string
  onNavigate?: () => void
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>
  onMouseEnter?: () => void
}

export function ProductsMegaMenu({ mobile = false, open = false, id, onNavigate, onKeyDown, onMouseEnter }: ProductsMegaMenuProps) {
  const icons = { games: GamepadIcon, ai: SparkIcon, gift: GiftIcon }
  const mobileVisibility = open ? 'grid' : 'hidden'
  const desktopVisibility = open
    ? 'visible translate-y-0 scale-100 opacity-100'
    : ''

  return (
    <div
      id={id}
      className={`${mobile ? `static order-3 mt-2 ${mobileVisibility} w-full basis-full grid-cols-1 gap-2.5 rounded-[13px] border border-line bg-surface-2 p-2.5 shadow-none` : 'absolute right-0 top-[calc(100%+10px)] grid min-w-[780px] grid-cols-[repeat(3,minmax(130px,1fr))_minmax(170px,.9fr)] rounded-2xl border border-line bg-dropdown-bg p-[18px] opacity-0 invisible -translate-y-2 scale-[.97] gap-0 shadow-[0_24px_50px_-22px_rgba(0,0,0,.24)] backdrop-blur-[20px] backdrop-saturate-[180%] [background-image:radial-gradient(260px_150px_at_8%_0%,rgba(33,150,243,.1),transparent_72%),linear-gradient(135deg,var(--dropdown-bg),var(--surface-2))] transition-[opacity,transform,visibility] duration-[220ms] ease-[cubic-bezier(.16,1,.3,1)] origin-top-right max-[980px]:min-w-[min(780px,calc(100vw-40px))] dark:border-white/[.16] dark:shadow-[0_24px_52px_-20px_rgba(0,0,0,.65),inset_0_1px_0_rgba(255,255,255,.1)] dark:[background-image:radial-gradient(260px_150px_at_8%_0%,rgba(144,202,249,.12),transparent_72%),linear-gradient(135deg,var(--dropdown-bg),var(--surface-2))]'} ${!mobile ? `min-[769px]:group-hover:visible min-[769px]:group-hover:translate-y-0 min-[769px]:group-hover:scale-100 min-[769px]:group-hover:opacity-100 min-[769px]:group-focus-within:visible min-[769px]:group-focus-within:translate-y-0 min-[769px]:group-focus-within:scale-100 min-[769px]:group-focus-within:opacity-100 ${desktopVisibility}` : ''}`}
      role="menu"
      aria-label="دسته‌بندی محصولات"
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
    >
      {productMenuColumns.map((column, index) => {
        const Icon = icons[column.icon]
        return (
          <div key={column.title} className={`${index > 0 ? 'border-s border-line' : ''} px-4 max-[768px]:border-0 max-[768px]:border-t max-[768px]:px-0 max-[768px]:pt-2.5 first:max-[768px]:border-t-0 first:max-[768px]:pt-0`}>
            <h4 className="mb-2.5 flex items-center gap-1.5 text-xs font-bold tracking-[.03em] text-gold">
              <Icon className="h-[18px] w-[18px] shrink-0 fill-none stroke-current stroke-[1.6]" aria-hidden="true" />
              {column.title}
            </h4>
            <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
              {column.links.map((item) => (
                <li key={item.label}>
                  <Link className="flex items-center justify-between gap-1.5 rounded-lg px-2 py-1.5 text-sm text-muted transition-colors hover:bg-black/[.045] hover:text-text max-[768px]:min-h-10 max-[768px]:px-2.5 max-[768px]:py-[9px]" href={ROUTES.PRODUCTS_CATEGORY(column.category)} role="menuitem" onClick={onNavigate}>
                    {item.label}
                    {item.badge && <Badge tone="popular" className="px-1.5 py-0.5 text-[9px] leading-[1.4]">{item.badge}</Badge>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
      <div className="ms-4 flex min-h-[150px] flex-col items-start rounded-[14px] border-s border-line bg-[radial-gradient(130%_120%_at_15%_0%,#2997ff,#0D47A1)] p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.22),0_12px_26px_-18px_rgba(13,71,161,.7)] max-[768px]:ms-0 max-[768px]:mt-2 max-[768px]:border-s-0 max-[768px]:border-t max-[768px]:border-line">
        <span className="mb-2.5 text-[10px] font-bold text-[#E3F2FD]">{featuredMenu.kicker}</span>
        <strong className="mb-1 text-base">{featuredMenu.title}</strong>
        <p className="m-0 mb-3.5 text-[11px] leading-[1.7] text-white/75">{featuredMenu.description}</p>
        <div className="mt-auto text-xs font-extrabold">{featuredMenu.price}</div>
        <Link className="mt-3 px-0 py-1.5 text-[11px] text-white" href={ROUTES.PRODUCTS} role="menuitem" onClick={onNavigate}>{featuredMenu.action} <span aria-hidden="true">←</span></Link>
      </div>
    </div>
  )
}
