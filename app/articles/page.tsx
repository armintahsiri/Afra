import { AnnouncementBar } from '@/components/Header/AnnouncementBar'
import { ArticlesListing } from '@/components/Articles/ArticlesListing'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { createPageMetadata } from '@/lib/seo'
import { BackToTop } from '@/components/Shared/BackToTop'
import { ARTICLE_FILTERS } from '@/constants/categories'
import { ROUTES } from '@/constants/routes'

type ArticlesPageProps = { searchParams: Promise<{ category?: string }> }

export async function generateMetadata({ searchParams }: ArticlesPageProps): Promise<Metadata> {
  const { category } = await searchParams
  const selectedCategory = ARTICLE_FILTERS.includes(category as (typeof ARTICLE_FILTERS)[number]) ? category : undefined
  const title = selectedCategory && selectedCategory !== 'همه' ? `مقالات ${selectedCategory}` : 'مقالات و آموزش'
  const description = selectedCategory && selectedCategory !== 'همه'
    ? `مطالعه مقاله‌های دسته ${selectedCategory} در مجله ونوس؛ راهنماها و نکته‌های دنیای لوازم خانگی.`
    : 'راهنماهای خرید، نکات نگهداری و اخبار لوازم خانگی را در مجله ونوس دنبال کن.'
  return createPageMetadata({ title, description, path: ROUTES.ARTICLES, keywords: ['مقالات لوازم خانگی', 'راهنمای خرید لوازم خانگی', 'نگهداری لوازم خانگی', ...(selectedCategory && selectedCategory !== 'همه' ? [selectedCategory] : [])] })
}

export default function ArticlesPage() {
  return <><AnnouncementBar /><Header /><main><ArticlesListing /></main><BackToTop /><Footer /></>
}
import type { Metadata } from 'next'
