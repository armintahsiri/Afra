import type { ReactNode } from 'react'

export type BadgeTone = 'default' | 'new' | 'popular' | 'discount' | 'stock'
export interface BadgeProps { children: ReactNode; tone?: BadgeTone; className?: string }
export function Badge({ children, tone = 'default', className = '' }: BadgeProps) {
  const toneClass = tone === 'new' ? 'border border-[#90CAF9] bg-[#E3F2FD] text-gold dark:border-gold-2/55 dark:bg-gold-2/12 dark:text-gold-2' : tone === 'popular' ? 'border border-gold/20 bg-gold/10 text-gold' : tone === 'discount' ? 'bg-[#ff3b30] text-white' : tone === 'stock' ? 'text-teal' : 'border border-line bg-surface-2 text-muted'
  return <span className={`badge inline-flex items-center rounded-full px-2 py-1 text-[11px] font-semibold ${toneClass} ${className}`.trim()}>{children}</span>
}
