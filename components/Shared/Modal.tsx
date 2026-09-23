'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Button } from './Button'

export interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  ariaLabel: string
  ariaLabelledBy?: string
  ariaDescribedBy?: string
  className?: string
  overlayClassName?: string
  id?: string
  role?: 'dialog' | 'alertdialog'
}

export function Modal({ open, onClose, children, ariaLabel, ariaLabelledBy, ariaDescribedBy, className = '', overlayClassName = '', id, role = 'dialog' }: ModalProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const onCloseRef = useRef(onClose)
  useEffect(() => { onCloseRef.current = onClose }, [onClose])
  useEffect(() => {
    if (!open) return
    previousFocusRef.current = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusableSelector = 'a[href], area[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), iframe, object, embed, [contenteditable="true"], [tabindex]:not([tabindex="-1"])'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { if (contentRef.current && !contentRef.current.contains(document.activeElement)) return; event.preventDefault(); onCloseRef.current() }
      if (event.key !== 'Tab' || !contentRef.current) return
      const focusable = Array.from(contentRef.current.querySelectorAll<HTMLElement>(focusableSelector)).filter((item) => !item.hasAttribute('disabled') && item.getClientRects().length > 0)
      if (!focusable.length) return
      const first = focusable[0]; const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKeyDown)
    contentRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus()
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = previousOverflow; previousFocusRef.current?.focus?.() }
  }, [open])
  if (!open) return null
  if (typeof document === 'undefined') return null
  return createPortal(<><Button type="button" variant="ghost" className={`fixed inset-0 z-[40] cursor-default border-0 bg-[rgba(8,12,23,.28)] p-0 backdrop-blur-[3px] ${overlayClassName}`.trim()} aria-label={`بستن ${ariaLabel}`} onClick={onClose}> </Button><div id={id} ref={contentRef} className={`z-[100] ${className}`.trim()} role={role} aria-modal="true" aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} aria-describedby={ariaDescribedBy}>{children}</div></>, document.body)
}
