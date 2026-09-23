'use client'

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { Button } from './Button'

export type ToastTone = 'success' | 'error' | 'info'
export interface ToastItem { id: number; tone: ToastTone; message: string }
interface ToastContextValue { showToast: (message: string, tone?: ToastTone) => void; dismissToast: (id: number) => void }

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const dismissToast = useCallback((id: number) => setToasts((current) => current.filter((toast) => toast.id !== id)), [])
  const showToast = useCallback((message: string, tone: ToastTone = 'info') => {
    const id = Date.now() + Math.floor(Math.random() * 1000)
    setToasts((current) => [...current, { id, message, tone }].slice(-4))
    window.setTimeout(() => dismissToast(id), 3600)
  }, [dismissToast])
  const value = useMemo(() => ({ showToast, dismissToast }), [dismissToast, showToast])
  return <ToastContext.Provider value={value}>{children}<div className="pointer-events-none fixed bottom-5 start-5 z-[120] flex w-[min(360px,calc(100vw-32px))] flex-col items-start gap-2.5 max-[768px]:bottom-4 max-[768px]:start-4" aria-live="polite" aria-atomic="false">{toasts.map((toast) => <div key={toast.id} className={`pointer-events-auto flex w-full items-center gap-2.5 rounded-[14px] border border-line border-s-[4px] bg-surface px-[13px] py-3 text-text shadow-[0_16px_34px_-20px_var(--shadow-soft)] animate-[toast-in_.24s_ease_both] motion-reduce:animate-none ${toast.tone === "success" ? "border-s-teal" : toast.tone === "error" ? "border-s-[#d95d68]" : "border-s-gold"}`} role={toast.tone === 'error' ? 'alert' : 'status'}><span className={`grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full font-extrabold ${toast.tone === "success" ? "bg-teal/14 text-teal" : toast.tone === "error" ? "bg-[#d95d68]/[.13] text-[#d95d68]" : "bg-gold/14 text-gold"}`} aria-hidden="true">{toast.tone === 'success' ? '✓' : toast.tone === 'error' ? '!' : 'i'}</span><span className="flex-1 text-xs leading-[1.7]">{toast.message}</span><Button type="button" variant="ghost" className="h-7 min-h-7 w-7 min-w-7 rounded-lg border-0 bg-transparent p-0 text-lg text-muted hover:bg-surface-2 hover:text-text" aria-label="بستن پیام" onClick={() => dismissToast(toast.id)}>×</Button></div>)}</div></ToastContext.Provider>
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast must be used inside ToastProvider')
  return context
}
