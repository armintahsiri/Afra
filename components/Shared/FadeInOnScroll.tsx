'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

export function FadeInOnScroll({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = wrapperRef.current?.firstElementChild
    if (!element) return
    if (!('IntersectionObserver' in window)) {
      const timer = setTimeout(() => setVisible(true), 0)
      return () => clearTimeout(timer)
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -32px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties
  return <div ref={wrapperRef} className={`fade-in-on-scroll ${className}`.trim()} data-visible={visible} style={style}>{children}</div>
}
