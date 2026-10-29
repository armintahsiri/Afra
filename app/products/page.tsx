import type { Metadata } from 'next'
import { AnnouncementBar } from '@/components/Header/AnnouncementBar'
import { AllProductsSection } from '@/components/Products/AllProductsSection'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { createPageMetadata } from '@/lib/seo'
import { PRODUCT_FILTERS } from '@/constants/categories'
import { ROUTES } from '@/constants/routes'

type ProductsPageProps = { searchParams: Promise<{ category?: string }> }

export async function generateMetadata({ searchParams }: ProductsPageProps): Promise<Metadata> {
  const { category } = await searchParams
  const selectedCategory = PRODUCT_FILTERS.includes(category as (typeof PRODUCT_FILTERS)[number]) ? category : undefined
  const title = selectedCategory && selectedCategory !== 'همه' ? `محصولات ${selectedCategory}` : 'همه محصولات'
  const description = selectedCategory && selectedCategory !== 'همه'
    ? `مشاهده محصولات دسته ${selectedCategory} در ونوس؛ با گارانتی رسمی، ارسال سریع و نصب رایگان.`
    : 'مشاهده و فیلتر همه محصولات لوازم خانگی ونوس؛ از یخچال فریزر و ماشین لباسشویی تا جاروبرقی.'
  return createPageMetadata({ title, description, path: ROUTES.PRODUCTS, keywords: ['محصولات ونوس', 'خرید لوازم خانگی', 'خرید یخچال فریزر', ...(selectedCategory && selectedCategory !== 'همه' ? [selectedCategory] : [])] })
}

export default function ProductsPage() {
  return <><AnnouncementBar /><Header /><main><AllProductsSection isListingPage /></main><Footer /></>
}
