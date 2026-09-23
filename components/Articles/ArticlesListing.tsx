'use client'

import { useMemo, useState } from 'react'
import { articleCategories, articles } from '@/data/articles'
import { ArticleCard } from './ArticleCard'
import { EmptyState } from '@/components/Shared/EmptyState'
import { FadeInOnScroll } from '@/components/Shared/FadeInOnScroll'
import { FilterChips } from '@/components/Products/FilterChips'
import { Pagination } from '@/components/Products/Pagination'
import { ROUTES } from '@/constants/routes'
import { paginate } from '@/lib/catalog'

const pageSize = 6

export function ArticlesListing() {
  const [category, setCategory] = useState<(typeof articleCategories)[number]>('همه')
  const [page, setPage] = useState(1)
  const filtered = useMemo(() => articles.filter((article) => category === 'همه' || article.category === category), [category])
  const { totalPages, visible } = paginate(filtered, page, pageSize)
  function changeCategory(value: (typeof articleCategories)[number]) { setCategory(value); setPage(1) }
  function changePage(value: number) { setPage(value); document.getElementById('articles-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }

  return <section className="mx-auto max-w-[1240px] px-7 pb-16 pt-[72px] max-[768px]:px-4 max-[768px]:pb-11 max-[768px]:pt-11 max-[480px]:px-3.5 max-[480px]:pb-9 max-[480px]:pt-9" id="articles-list"><div className="mb-[30px] flex items-end justify-between gap-6 rounded-[24px] border border-line bg-surface p-[30px] shadow-[0_18px_38px_-30px_var(--shadow-soft)] [background-image:radial-gradient(520px_220px_at_12%_0%,rgba(33,150,243,.12),transparent_72%)] max-[768px]:items-start max-[768px]:flex-col max-[768px]:p-6 max-[480px]:mb-6 max-[480px]:rounded-[20px] max-[480px]:p-[22px_18px]"><div><span className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold text-gold"><span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(33,150,243,.12)]" aria-hidden="true" />مجله افرا شاپ</span><h1 className="mb-2 text-[clamp(28px,5vw,46px)] leading-[1.35] text-text">مقالات و آموزش</h1><p className="m-0 max-w-[620px] leading-[1.9] text-muted">راهنماهای کاربردی، اخبار بازی و نکته‌های دنیای دیجیتال را اینجا دنبال کن.</p></div><div className="shrink-0 max-[480px]:w-full"><FilterChips options={articleCategories} value={category} onChange={changeCategory} /></div></div>{visible.length ? <div className="grid grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-[768px]:gap-3.5 max-[480px]:grid-cols-1">{visible.map((article, index) => <FadeInOnScroll key={article.id} delay={(index % 4) * 70}><ArticleCard article={article} /></FadeInOnScroll>)}</div> : <EmptyState icon="▤" title="مقاله‌ای در این دسته موجود نیست" description="دسته‌ی دیگری را برای مطالعه انتخاب کن." href={ROUTES.ARTICLES} action="نمایش همه مقالات" />}<Pagination page={page} totalPages={totalPages} onChange={changePage} label="صفحه‌بندی مقالات" /></section>
}
