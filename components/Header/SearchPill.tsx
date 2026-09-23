'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Shared/Button'
import { SearchIcon } from '@/components/Shared/icons'
import type { SearchItem } from '@/data/search'
import { matchesSearch } from '@/lib/search'
import { ROUTES } from '@/constants/routes'

export function SearchPill({ items }: { items: SearchItem[] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const [query, setQuery] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const results = useMemo(() => {
    return query.trim() ? items.filter((item) => matchesSearch(query, item.searchText)).slice(0, 6) : []
  }, [items, query])

  function openSearch() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setClosing(false)
    setOpen(true)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  const closeSearch = useCallback((restoreFocus = true) => {
    if (!open || closing) return
    setClosing(true)
    setQuery('')
    closeTimerRef.current = setTimeout(() => {
      setClosing(false)
      setOpen(false)
      if (restoreFocus) requestAnimationFrame(() => triggerRef.current?.focus())
    }, 160)
  }, [closing, open])

  useEffect(() => {
    const onOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) closeSearch(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        event.preventDefault()
        closeSearch(true)
      }
    }
    document.addEventListener('mousedown', onOutside)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onOutside)
      document.removeEventListener('keydown', onKey)
    }
  }, [closeSearch, open])

  useEffect(() => () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
  }, [])

  function submitSearch(value = query) {
    if (!value.trim()) return
    setOpen(false)
    router.push(ROUTES.SEARCH(value.trim()))
  }

  function navigateToResult(href: Parameters<typeof router.push>[0]) {
    setOpen(false)
    setQuery('')
    router.push(href)
  }

  return (
    <div className={`relative flex h-[38px] w-[38px] shrink-0 items-center transition-[flex-basis,width] duration-300 ease-[cubic-bezier(.2,.8,.2,1)] max-[768px]:h-[42px] max-[768px]:w-[42px] ${open || closing ? 'w-[260px] basis-[260px] max-[768px]:absolute max-[768px]:inset-x-2.5 max-[768px]:top-2 max-[768px]:z-[4] max-[768px]:w-auto max-[768px]:basis-auto' : ''}`} data-header-search ref={searchRef}>
      <Button ref={triggerRef} tabIndex={open ? -1 : 0} className={`!h-[38px] !min-h-[38px] !w-[38px] !min-w-[38px] rounded-[11px] border border-line bg-surface !p-0 text-muted shadow-[0_5px_12px_-10px_var(--shadow-soft)] hover:border-gold/50 hover:bg-surface-2 hover:text-gold focus-visible:!outline-none max-[768px]:!h-[42px] max-[768px]:!min-h-[42px] max-[768px]:!w-[42px] max-[768px]:!min-w-[42px] ${open ? 'pointer-events-none opacity-0' : ''}`} variant="ghost" type="button" aria-label="جست‌وجو" aria-expanded={open} aria-controls="header-search-input" onClick={openSearch}>
        <SearchIcon className="h-[17px] w-[17px]" />
      </Button>

      <form className={`pointer-events-none absolute inset-0 flex min-h-[38px] w-0 origin-center items-center gap-2 overflow-hidden rounded-full border border-line bg-surface/95 px-0 opacity-0 shadow-[0_12px_28px_-18px_var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,.6)] backdrop-blur-[14px] transition-[width,opacity,padding,box-shadow,transform] duration-300 ease-[cubic-bezier(.2,.8,.2,1)] focus-within:border-gold/45 focus-within:ring-2 focus-within:ring-gold/15 dark:bg-surface-2/95 dark:shadow-[0_14px_32px_-16px_rgba(0,0,0,.65),inset_0_1px_0_rgba(255,255,255,.14)] ${closing ? 'pointer-events-none w-full scale-[.985] px-2 ps-[7px] opacity-0' : open ? 'pointer-events-auto w-full px-2 ps-[7px] opacity-100 scale-100' : ''}`} dir="rtl" aria-hidden={!open || closing} onSubmit={(event) => { event.preventDefault(); submitSearch() }}>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold" aria-hidden="true">
          <SearchIcon className="h-[16px] w-[16px]" />
        </span>
        <input id="header-search-input" ref={inputRef} tabIndex={open && !closing ? 0 : -1} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === 'Escape') closeSearch(true) }} type="text" placeholder="جستجوی محصولات..." aria-label="جستجوی محصولات" aria-controls="header-search-results" className="h-[34px] min-w-0 flex-1 border-0 bg-transparent text-[13px] text-text !outline-none focus:!outline-none focus-visible:!outline-none focus:ring-0 focus-visible:ring-0 placeholder:text-muted" />
        <Button tabIndex={open && !closing ? 0 : -1} className="!grid !h-7 !min-h-7 !w-7 !min-w-7 shrink-0 place-items-center !rounded-full border-0 bg-surface-2 !p-0 text-[18px] font-normal leading-none text-muted hover:scale-[1.06] hover:bg-line hover:text-text focus-visible:!outline-none" variant="ghost" type="button" aria-label="بستن جست‌وجو" onClick={() => closeSearch(true)}>×</Button>
      </form>

      {open && <div id="header-search-results" className={`absolute end-0 top-[calc(100%+8px)] z-[8] hidden w-[320px] max-w-[calc(100vw-28px)] flex-col gap-[3px] rounded-2xl border border-line bg-surface p-1.5 shadow-[0_18px_34px_-18px_var(--shadow-soft)] backdrop-blur-[18px] motion-safe:animate-toast-in dark:bg-surface-2 dark:shadow-[0_18px_36px_-18px_rgba(0,0,0,.72),inset_0_1px_0_rgba(255,255,255,.1)] ${results.length || query ? 'flex' : ''} max-[768px]:inset-x-0 max-[768px]:top-[calc(100%+7px)] max-[768px]:w-full max-[768px]:max-w-none`} role="listbox" aria-label="نتایج جست‌وجو" aria-live="polite">
        {results.length ? results.map((item) => <Button key={item.id} className="flex w-full flex-col items-start rounded-[10px] border-0 bg-transparent px-3 py-2.5 text-right text-xs leading-[1.7] text-text hover:bg-gold/12 hover:text-gold" variant="ghost" type="button" role="option" aria-selected="false" onClick={() => navigateToResult(item.href)}>{item.title}<small className="text-[10px] font-medium text-muted">{item.type === 'article' ? 'مقاله' : 'محصول'}</small></Button>) : <div className="w-full px-3 py-2.5 text-right text-xs leading-[1.7] text-muted">{query ? 'نتیجه‌ای پیدا نشد' : 'نام محصول را جست‌وجو کن'}</div>}
      </div>}
    </div>
  )
}
