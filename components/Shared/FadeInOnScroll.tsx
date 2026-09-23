'use client'

import { cloneElement, type CSSProperties, type ReactElement } from 'react'
import { useEffect, useRef, useState } from 'react'

type FadeChildProps = { className?: string; style?: CSSProperties }

export function FadeInOnScroll({ children, className = '', delay = 0 }: { children: ReactElement<FadeChildProps>; className?: string; delay?: number }) {
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

  const revealState = visible
    ? '!opacity-100 !translate-y-0'
    : '[html.js-ready_&]:opacity-0 [html.js-ready_&]:translate-y-4'
  const childClassName = [children.props.className, 'transition-[opacity,transform] duration-500 delay-[var(--reveal-delay)]', revealState].filter(Boolean).join(' ')
  const childStyle = { ...children.props.style, '--reveal-delay': `${delay}ms` } as CSSProperties
  return <div ref={wrapperRef} className={`contents ${className}`.trim()}>{cloneElement(children, { className: childClassName, style: childStyle })}</div>
}
