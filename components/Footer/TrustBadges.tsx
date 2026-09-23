const trustBadges = [
  { icon: '✓', label: 'پرداخت امن با زرین‌پال' },
  { icon: '↻', label: 'پشتیبانی ۲۴ ساعته' },
  { icon: '◆', label: 'تحویل آنی' },
] as const

export function TrustBadges() {
  return <div className="mt-3.5 flex flex-wrap items-center gap-2 border-t border-line py-[30px] pb-7 max-[768px]:items-stretch max-[768px]:flex-col max-[768px]:py-6" aria-label="مزیت‌های afrashop">{trustBadges.map((badge) => <span className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-line bg-surface px-[11px] py-1.5 text-[11.5px] text-muted" key={badge.label}><i className="grid h-5 w-5 place-items-center rounded-full bg-gold/12 text-xs not-italic text-gold" aria-hidden="true">{badge.icon}</i>{badge.label}</span>)}</div>
}
