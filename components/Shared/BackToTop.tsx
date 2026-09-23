'use client'

import { useEffect, useState } from 'react'
import { Button } from './Button'

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const onScroll = () => setVisible(window.scrollY > 500); window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); return () => window.removeEventListener('scroll', onScroll) }, [])
  if (!visible) return null
  return <Button type="button" variant="ghost" className="fixed bottom-[22px] end-[22px] z-[35] h-11 min-h-11 w-11 min-w-11 rounded-full border border-line bg-surface p-0 text-xl text-gold shadow-[0_14px_28px_-18px_var(--shadow-soft)] transition-[transform,border-color] duration-150 hover:-translate-y-1 hover:border-gold max-[768px]:bottom-4 max-[768px]:end-4" aria-label="بازگشت به بالای صفحه" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</Button>
}
