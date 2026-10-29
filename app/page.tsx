import { AnnouncementBar } from '@/components/Header/AnnouncementBar'
import { ArticlesSection } from '@/components/Articles/ArticlesSection'
import { AllProductsSection } from '@/components/Products/AllProductsSection'
import { ContactNeonSection } from '@/components/Contact/ContactNeonSection'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { NewestItemsSection } from '@/components/Products/NewestItemsSection'
import { OffersSection } from '@/components/Products/OffersSection'
import { PresaleSection } from '@/components/Products/PresaleSection'
import { SubscriptionsSection } from '@/components/Products/SubscriptionsSection'
import { TrustSection } from '@/components/Trust/TrustSection'
import { createPageMetadata } from '@/lib/seo'
import { BackToTop } from '@/components/Shared/BackToTop'

export const metadata: Metadata = createPageMetadata({ title: 'فروشگاه لوازم خانگی', description: 'خرید یخچال فریزر، ماشین لباسشویی، جاروبرقی و لوازم پخت‌وپز با گارانتی معتبر، ارسال سریع و نصب رایگان.', path: '/', keywords: ['فروشگاه لوازم خانگی', 'خرید یخچال فریزر', 'ماشین لباسشویی', 'جاروبرقی'] })

export default function HomePage() {
  return <><AnnouncementBar /><Header /><main><Hero /><PresaleSection /><OffersSection /><NewestItemsSection /><AllProductsSection /><SubscriptionsSection /><TrustSection /><ContactNeonSection /><ArticlesSection /></main><BackToTop /><Footer /></>
}
import type { Metadata } from 'next'
