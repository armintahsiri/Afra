import Link from 'next/link'
import type { ReactNode } from 'react'
import type { Route } from 'next'

type EmptyStateProps = {
  icon?: ReactNode
  title: string
  description?: string
  href?: Route
  action?: string
}

export function EmptyState({ icon = '⌕', title, description, href, action }: EmptyStateProps) {
  return <div className="mt-2 flex min-h-[210px] flex-col items-center justify-center rounded-[20px] border border-dashed border-line bg-surface/70 p-7 text-center" role="status" aria-live="polite"><div className="mb-3 grid h-[52px] w-[52px] place-items-center rounded-2xl bg-gold/12 text-[26px] text-gold shadow-[0_0_22px_color-mix(in_srgb,var(--gold)_20%,transparent)]" aria-hidden="true">{icon}</div><h3 className="mb-1.5 mt-0 text-[17px] text-text">{title}</h3>{description && <p className="m-0 text-[13px] text-muted">{description}</p>}{href && action && <Link className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full bg-gold px-[15px] py-[9px] text-xs font-semibold text-white transition-[background,transform] duration-150 hover:-translate-y-px hover:bg-gold-2 hover:text-[#0D47A1] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2196F3]" href={href}>{action}</Link>}</div>
}
