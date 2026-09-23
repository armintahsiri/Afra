import Link from 'next/link'
import type { Route } from 'next'
import { absoluteUrl } from '@/lib/seo'

export interface BreadcrumbItem { label: string; href?: Route }

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.label, ...(item.href ? { item: absoluteUrl(item.href) } : {}) })) }
  return <><nav className="mb-[18px] text-xs text-muted" aria-label="مسیر صفحه"><ol className="m-0 flex list-none flex-wrap items-center gap-[7px] p-0">{items.map((item, index) => <li className="inline-flex items-center gap-[7px]" key={item.label + index}>{item.href ? <Link className="text-muted transition-colors duration-150 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2196F3]" href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}{index < items.length - 1 && <span className="text-gold" aria-hidden="true">←</span>}</li>)}</ol></nav><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c') }} /></>
}
