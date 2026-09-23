import type { Metadata } from 'next'
import { Suspense } from 'react'
import { AnnouncementBar } from '@/components/Header/AnnouncementBar'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { SearchResults } from '@/components/Search/SearchResults'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({ title: 'جست‌وجو', description: 'جست‌وجوی محصولات دیجیتال و مقالات افرا شاپ.', path: '/search', noIndex: true })

export default function SearchPage() {
  return <><AnnouncementBar /><Header /><main><Suspense fallback={<section className="mx-auto max-w-[1240px] px-7 py-16 max-[768px]:px-4 max-[768px]:py-11 max-[480px]:px-3.5"><h1 className="m-0 text-[clamp(28px,5vw,46px)] text-text">در حال آماده‌سازی جست‌وجو...</h1></section>}><SearchResults /></Suspense></main><Footer /></>
}
