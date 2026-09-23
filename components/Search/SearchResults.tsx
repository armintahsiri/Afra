'use client'

import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArticleCard } from '@/components/Articles/ArticleCard'
import { ProductCard } from '@/components/Products/ProductCard'
import { EmptyState } from '@/components/Shared/EmptyState'
import { FadeInOnScroll } from '@/components/Shared/FadeInOnScroll'
import { articles } from '@/data/articles'
import { products } from '@/data/products'
import { ROUTES } from '@/constants/routes'
import { matchesSearch } from '@/lib/search'

export function SearchResults() {
  const params = useSearchParams()
  const query = params.get('q')?.trim() ?? ''
  const normalizedQuery = query.trim()
  const matchedProducts = useMemo(() => products.filter((product) => matchesSearch(normalizedQuery, `${product.title} ${product.displayCategory} ${product.category}`)), [normalizedQuery])
  const matchedArticles = useMemo(() => articles.filter((article) => matchesSearch(normalizedQuery, `${article.title} ${article.excerpt} ${article.category}`)), [normalizedQuery])

  if (!normalizedQuery) return <section className="mx-auto max-w-[1240px] px-7 pb-16 pt-[72px] max-[768px]:px-4 max-[768px]:pb-11 max-[768px]:pt-11 max-[480px]:px-3.5 max-[480px]:pt-9"><div className="mb-[30px] flex items-end justify-between gap-6 rounded-[24px] border border-line bg-surface p-[30px] shadow-[0_18px_38px_-30px_var(--shadow-soft)] [background-image:radial-gradient(520px_220px_at_12%_0%,rgba(33,150,243,.12),transparent_72%)] max-[768px]:items-start max-[768px]:flex-col max-[768px]:p-6 max-[480px]:rounded-[20px] max-[480px]:p-[22px_18px]"><div><span className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold text-gold"><span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(33,150,243,.12)]" aria-hidden="true" /> جست‌وجوی افرا شاپ</span><h1 className="mb-2 text-[clamp(28px,5vw,46px)] leading-[1.35] text-text">جست‌وجوی محصولات و مقالات</h1><p className="m-0 max-w-[620px] leading-[1.9] text-muted">نام محصول یا موضوعی که دنبالش هستی را از نوار جست‌وجو وارد کن.</p></div></div><EmptyState icon="⌕" title="عبارت جست‌وجو وارد نشده" description="برای شروع، یک عبارت را در جست‌وجوی هدر وارد کن." href={ROUTES.PRODUCTS} action="مشاهده محصولات" /></section>

  const hasResults = matchedProducts.length > 0 || matchedArticles.length > 0
  return <section className="mx-auto max-w-[1240px] px-7 pb-16 pt-[72px] max-[768px]:px-4 max-[768px]:pb-11 max-[768px]:pt-11 max-[480px]:px-3.5 max-[480px]:pt-9"><div className="mb-[30px] flex items-end justify-between gap-6 rounded-[24px] border border-line bg-surface p-[30px] shadow-[0_18px_38px_-30px_var(--shadow-soft)] [background-image:radial-gradient(520px_220px_at_12%_0%,rgba(33,150,243,.12),transparent_72%)] max-[768px]:items-start max-[768px]:flex-col max-[768px]:p-6 max-[480px]:rounded-[20px] max-[480px]:p-[22px_18px]"><div><span className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold text-gold"><span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(33,150,243,.12)]" aria-hidden="true" /> نتیجه جست‌وجو</span><h1 className="mb-2 text-[clamp(28px,5vw,46px)] leading-[1.35] text-text">نتایج برای «{query}»</h1><p className="m-0 max-w-[620px] leading-[1.9] text-muted">{hasResults ? `${matchedProducts.length + matchedArticles.length} نتیجه پیدا شد.` : 'نتیجه‌ای با این عبارت پیدا نشد.'}</p></div></div>{!hasResults ? <EmptyState icon="⌕" title="نتیجه‌ای پیدا نشد" description="عبارت دیگری را امتحان کن یا از بین دسته‌بندی‌ها انتخاب کن." href={ROUTES.PRODUCTS} action="مشاهده محصولات" /> : <>{matchedProducts.length > 0 && <><div className="mb-6 mt-8 flex items-end justify-between gap-3.5"><div><span className="mb-2 inline-block text-xs font-extrabold text-gold">محصولات</span><h2 className="m-0 text-xl font-extrabold text-text">محصولات مرتبط</h2></div></div><div className="grid grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-[480px]:grid-cols-1">{matchedProducts.map((product, index) => <FadeInOnScroll key={product.id} delay={(index % 4) * 70}><ProductCard product={product} /></FadeInOnScroll>)}</div></>}{matchedArticles.length > 0 && <><div className="mb-6 mt-8 flex items-end justify-between gap-3.5"><div><span className="mb-2 inline-block text-xs font-extrabold text-gold">مجله</span><h2 className="m-0 text-xl font-extrabold text-text">مقالات مرتبط</h2></div></div><div className="grid grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-[768px]:gap-3.5 max-[480px]:grid-cols-1">{matchedArticles.map((article, index) => <FadeInOnScroll key={article.id} delay={(index % 4) * 70}><ArticleCard article={article} /></FadeInOnScroll>)}</div></>}</>}</section>
}
