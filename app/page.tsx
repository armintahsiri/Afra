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

export const metadata: Metadata = createPageMetadata({ title: 'فروشگاه محصولات دیجیتال', description: 'خرید اکانت بازی، اشتراک هوش مصنوعی و گیفت‌کارت با تحویل سریع و پشتیبانی مطمئن.', path: '/', keywords: ['فروشگاه دیجیتال', 'خرید اکانت بازی', 'ChatGPT Plus', 'گیفت‌کارت'] })

export default function HomePage() {
  return <><AnnouncementBar /><Header /><main><Hero /><PresaleSection /><OffersSection /><NewestItemsSection /><AllProductsSection /><SubscriptionsSection /><TrustSection /><ContactNeonSection /><ArticlesSection /></main><BackToTop /><Footer /></>
}
import type { Metadata } from 'next'
