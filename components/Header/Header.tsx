'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { usePathname } from 'next/navigation'
import { UserIcon } from '@/components/Shared/icons'
import { Button, goldButtonClass } from '@/components/Shared/Button'
import { useTheme } from '@/components/Theme/ThemeProvider'
import { useAuth } from '@/components/Account/AuthContext'
import { CartWidget } from './CartWidget'
import { ProductsMegaMenu } from './ProductsMegaMenu'
import { SearchPill } from './SearchPill'
import { MobileNav } from './MobileNav'
import { searchItems } from '@/data/search'
import { ROUTES } from '@/constants/routes'

const iconButtonClass = 'h-[38px] min-h-[38px] w-[38px] min-w-[38px] rounded-[11px] border border-line bg-surface p-0 text-muted hover:border-black/16 hover:text-text max-[768px]:h-[42px] max-[768px]:min-h-[42px] max-[768px]:w-[42px] max-[768px]:min-w-[42px]'

export function Header() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const { user } = useAuth()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const megaTriggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', mobileOpen)
    return () => document.body.classList.remove('mobile-menu-open')
  }, [mobileOpen])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && megaOpen) {
        setMegaOpen(false)
        megaTriggerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [megaOpen])

  function scheduleMenuClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMegaOpen(false), 240)
  }

  function cancelMenuClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }

  function focusMenuItem(mobile: boolean, direction = 1) {
    const menu = document.getElementById(mobile ? 'mobile-products-megamenu' : 'products-megamenu')
    const links = menu ? Array.from(menu.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]')) : []
    if (!links.length) return
    const current = links.indexOf(document.activeElement as HTMLAnchorElement)
    links[(current + direction + links.length) % links.length]?.focus()
  }

  function handleMegaKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>, mobile: boolean) {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault()
      setMegaOpen(true)
      window.setTimeout(() => focusMenuItem(mobile), 0)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setMegaOpen(true)
      window.setTimeout(() => focusMenuItem(mobile, -1), 0)
    } else if (event.key === 'Escape') {
      event.preventDefault()
      setMegaOpen(false)
      event.currentTarget.focus()
    }
  }

  function handleMenuKeyDown(event: ReactKeyboardEvent<HTMLDivElement>, mobile: boolean) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      focusMenuItem(mobile, event.key === 'ArrowDown' ? 1 : -1)
    } else if (event.key === 'Escape') {
      event.preventDefault()
      setMegaOpen(false)
      megaTriggerRef.current?.focus()
    }
  }

  function isCurrent(route: string) {
    return pathname === route || (route !== ROUTES.HOME && pathname.startsWith(`${route}/`))
  }

  const nav = (mobile = false) => (
    <>
      <div className={`${mobile ? '' : 'group'} relative flex items-center gap-1.5 rounded-[10px] px-3.5 py-2.5 text-[15px] font-medium text-muted transition-[color,background] duration-150 hover:bg-black/[.045] hover:text-text max-[768px]:min-h-12 max-[768px]:w-full max-[768px]:flex-wrap max-[768px]:justify-between max-[768px]:rounded-[13px] max-[768px]:border max-[768px]:border-line max-[768px]:bg-surface max-[768px]:px-3.5 max-[768px]:py-3 max-[768px]:text-text`} onMouseEnter={cancelMenuClose} onMouseLeave={scheduleMenuClose}>
        <button ref={megaTriggerRef} type="button" className="inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 font-inherit text-inherit max-[768px]:min-h-6 max-[768px]:w-full max-[768px]:justify-between" aria-haspopup="menu" aria-expanded={megaOpen} aria-controls={mobile ? 'mobile-products-megamenu' : 'products-megamenu'} aria-current={isCurrent(ROUTES.PRODUCTS) ? 'page' : undefined} onClick={() => setMegaOpen((value) => (mobile ? !value : true))} onKeyDown={(event) => handleMegaKeyDown(event, mobile)}>
          <span>محصولات</span>
          <span className="h-[9px] w-[9px] rotate-45 border-b-[1.5px] border-e-[1.5px] border-current opacity-70" aria-hidden="true" />
        </button>
        <ProductsMegaMenu id={mobile ? 'mobile-products-megamenu' : 'products-megamenu'} mobile={mobile} open={megaOpen} onNavigate={() => { setMobileOpen(false); setMegaOpen(false) }} onKeyDown={(event) => handleMenuKeyDown(event, mobile)} onMouseEnter={cancelMenuClose} />
      </div>
      <Link className="relative rounded-[10px] px-3.5 py-2.5 text-[15px] font-medium text-muted transition-[color,background] duration-150 hover:bg-black/[.045] hover:text-text max-[768px]:flex max-[768px]:min-h-12 max-[768px]:w-full max-[768px]:items-center max-[768px]:rounded-[13px] max-[768px]:border max-[768px]:border-line max-[768px]:bg-surface max-[768px]:px-3.5 max-[768px]:py-3 max-[768px]:text-text" href={ROUTES.ARTICLES} aria-current={isCurrent(ROUTES.ARTICLES) ? 'page' : undefined} onClick={() => setMobileOpen(false)}>مقالات</Link>
      <Link className="relative rounded-[10px] px-3.5 py-2.5 text-[15px] font-medium text-muted transition-[color,background] duration-150 hover:bg-black/[.045] hover:text-text max-[768px]:flex max-[768px]:min-h-12 max-[768px]:w-full max-[768px]:items-center max-[768px]:rounded-[13px] max-[768px]:border max-[768px]:border-line max-[768px]:bg-surface max-[768px]:px-3.5 max-[768px]:py-3 max-[768px]:text-text" href={ROUTES.ABOUT} aria-current={isCurrent(ROUTES.ABOUT) ? 'page' : undefined} onClick={() => setMobileOpen(false)}>درباره ما</Link>
    </>
  )

  const headerShadowClass = scrolled
    ? 'shadow-[0_14px_36px_-12px_rgba(0,0,0,.22),inset_0_1px_0_rgba(255,255,255,.68)] dark:shadow-[0_14px_36px_-12px_rgba(0,0,0,.58),inset_0_1px_0_rgba(255,255,255,.18),inset_0_-1px_0_rgba(255,255,255,.05)]'
    : 'shadow-[0_8px_30px_-12px_rgba(0,0,0,.12),inset_0_1px_0_rgba(255,255,255,.6)] dark:shadow-[0_10px_34px_-12px_rgba(0,0,0,.58),inset_0_1px_0_rgba(255,255,255,.16),inset_0_-1px_0_rgba(255,255,255,.04)]'

  return (
    <>
      <header className={`sticky top-3.5 z-50 mx-auto mt-3.5 max-w-[1200px] rounded-[22px] border border-white/[.6] bg-header-bg ${headerShadowClass} backdrop-blur-[24px] backdrop-saturate-[200%] transition-[box-shadow,border-color] duration-200 dark:border-white/[.18] max-[1240px]:mx-3.5 max-[768px]:mx-2 max-[768px]:top-2 max-[768px]:mt-2 max-[768px]:rounded-[18px] after:pointer-events-none after:absolute after:inset-x-3.5 after:bottom-[-1px] after:h-0.5 after:rounded-full after:bg-[linear-gradient(90deg,#0D47A1,#2196F3,#90CAF9)] after:opacity-[.72] after:content-['']`}>
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-[22px] py-3 transition-[padding] duration-200 max-[768px]:gap-2.5 max-[768px]:px-3 max-[768px]:py-[9px] max-[480px]:gap-1 max-[480px]:px-2.5 max-[480px]:py-2">
          <Link href={ROUTES.HOME} className="flex items-center gap-2.5 text-[19px] font-bold text-text max-[768px]:gap-2 max-[768px]:text-[17px] max-[480px]:text-[15px]" aria-label="صفحه اصلی afrashop">
            <Image className="h-[38px] w-[38px] shrink-0 rounded-[9px] object-contain object-center drop-shadow-[0_2px_5px_color-mix(in_srgb,var(--gold)_28%,transparent)] max-[768px]:h-8 max-[768px]:w-8 max-[480px]:h-[30px] max-[480px]:w-[30px]" src="/logo-mark-transparent.png" alt="نشان افرا شاپ" width={38} height={38} priority />
            afrashop
          </Link>
          <nav className="flex items-center gap-1.5 max-[768px]:hidden" aria-label="ناوبری اصلی">{nav()}</nav>
          <div className="flex items-center gap-2.5 max-[768px]:gap-1.5 max-[480px]:gap-1">
            <Button id="theme-toggle" className={`${iconButtonClass} relative overflow-hidden`} variant="ghost" type="button" aria-label={theme === 'dark' ? 'فعال‌سازی حالت روشن' : 'فعال‌سازی حالت تاریک'} aria-pressed={theme === 'dark'} onClick={toggleTheme}>
              <span className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base transition-[opacity,transform] duration-200 ${theme === 'dark' ? 'scale-[.4] rotate-[40deg] opacity-0' : 'scale-100 rotate-0 opacity-100'}`} aria-hidden="true">☀</span>
              <span className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base transition-[opacity,transform] duration-300 ${theme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-[.4] -rotate-[40deg] opacity-0'}`} aria-hidden="true">☾</span>
            </Button>
            <SearchPill items={searchItems} />
            <Button className={`${iconButtonClass} hidden max-[768px]:flex`} variant="ghost" type="button" aria-label={mobileOpen ? 'بستن منوی موبایل' : 'باز کردن منوی موبایل'} aria-expanded={mobileOpen} aria-controls="mobile-nav-panel" onClick={() => { setMobileOpen((value) => !value); setMegaOpen(false) }}>☰</Button>
            <CartWidget />
            <Link href={user ? ROUTES.ACCOUNT : ROUTES.ACCOUNT_LOGIN} className={`${goldButtonClass} account-link shrink-0 whitespace-nowrap max-[768px]:min-h-[42px] max-[768px]:px-3 max-[768px]:py-2 max-[768px]:text-xs max-[480px]:px-[9px] max-[480px]:text-[11px]`}>
              {user ? <span className="grid h-[21px] w-[21px] place-items-center rounded-full bg-white/20 text-[11px] font-black leading-none" aria-hidden="true">{user.name.slice(0, 1)}</span> : <UserIcon className="h-[17px] w-[17px] fill-none stroke-current stroke-[1.8]" aria-hidden="true" />}
              {user ? 'حساب کاربری' : 'ورود / ثبت‌نام'}
            </Link>
          </div>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => { setMobileOpen(false); setMegaOpen(false) }}>{nav(true)}</MobileNav>
    </>
  )
}
