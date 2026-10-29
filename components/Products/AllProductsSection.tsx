'use client'

import { useEffect, useMemo, useState } from 'react'
import { products } from '@/data/products'
import { FadeInOnScroll } from '@/components/Shared/FadeInOnScroll'
import { ProductCard } from './ProductCard'
import { FilterChips } from './FilterChips'
import { Pagination } from './Pagination'
import { EmptyState } from '@/components/Shared/EmptyState'
import { PRODUCT_FILTERS } from '@/constants/categories'
import { ROUTES } from '@/constants/routes'
import { allBrands, filterProducts, kindsForCategory, normalizeCatalogText, paginate } from '@/lib/catalog'

const filters = PRODUCT_FILTERS
const STILL = 'همه'
const pageSize = 8

export function AllProductsSection({ isListingPage = false }: { isListingPage?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState<(typeof filters)[number]>(STILL)
  const [selectedBrand, setSelectedBrand] = useState(STILL)
  const [selectedKind, setSelectedKind] = useState(STILL)
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const initialSearch = params.get('search')
    const initialCategory = params.get('category') as (typeof filters)[number] | null
    const initialTimer = window.setTimeout(() => {
      if (initialSearch) setSearchQuery(normalizeCatalogText(initialSearch))
      if (initialCategory && filters.includes(initialCategory)) setSelectedCategory(initialCategory)
    }, 0)
    return () => window.clearTimeout(initialTimer)
  }, [])

  const brandOptions = useMemo(() => [STILL, ...allBrands(products)], [])
  const kindOptions = useMemo(() => [STILL, ...kindsForCategory(products, selectedCategory)], [selectedCategory])

  // اگر دسته عوض شود و نوع انتخابی در دسته جدید وجود نداشته باشد، به «همه» برمی‌گردیم.
  const effectiveKind = kindOptions.includes(selectedKind) ? selectedKind : STILL

  const filtered = useMemo(() => filterProducts(products, selectedCategory, searchQuery, { brand: selectedBrand, kind: effectiveKind }), [selectedCategory, selectedBrand, effectiveKind, searchQuery])
  const { totalPages, visible: visibleProducts } = paginate(filtered, page, pageSize)

  function selectCategory(category: (typeof filters)[number]) { setSelectedCategory(category); setPage(1) }
  function goToPage(nextPage: number) {
    if (nextPage < 1 || nextPage > totalPages) return
    setPage(nextPage)
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <section className="mx-auto max-w-[1240px] px-7 py-16 max-[768px]:px-4 max-[768px]:py-11 max-[480px]:px-3.5 max-[480px]:py-9" id="products"><div className="mb-[26px] flex flex-wrap items-end justify-between gap-3.5 max-[768px]:mb-5 max-[768px]:items-start"><div>{isListingPage ? <h1 className="m-0 text-2xl font-extrabold text-text max-[768px]:text-[21px] max-[768px]:leading-[1.55]">همه محصولات</h1> : <h2 className="m-0 text-2xl font-extrabold text-text max-[768px]:text-[21px] max-[768px]:leading-[1.55]">همه محصولات</h2>}<p className="m-0 mt-1.5 text-[14.5px] text-muted max-[768px]:text-[13.5px] max-[768px]:leading-[1.8]">فیلتر کن و همون چیزی که می‌خوای رو پیدا کن</p></div><FilterChips options={filters} value={selectedCategory} onChange={selectCategory} /></div>
    <div className="mb-[22px] flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2"><span className="min-w-[38px] text-xs font-bold text-muted">برند</span><FilterChips options={brandOptions} value={selectedBrand} onChange={(brand) => { setSelectedBrand(brand); setPage(1) }} /></div>
      <div className="flex flex-wrap items-center gap-2"><span className="min-w-[38px] text-xs font-bold text-muted">نوع</span><FilterChips options={kindOptions} value={selectedKind} onChange={(kind) => { setSelectedKind(kind); setPage(1) }} /></div>
    </div>
    {filtered.length ? <div className="grid grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-[480px]:grid-cols-1 max-[768px]:gap-3.5">{visibleProducts.map((product, index) => <FadeInOnScroll key={product.id} delay={(index % 4) * 70}><ProductCard product={product} /></FadeInOnScroll>)}</div> : <EmptyState icon="⌕" title="محصولی با این فیلترها یافت نشد" description="ترکیب دیگری از دسته، برند و نوع را امتحان کن یا به همه محصولات برگرد." href={ROUTES.PRODUCTS} action="نمایش همه محصولات" />}
    <Pagination page={page} totalPages={totalPages} onChange={goToPage} label="صفحه‌بندی محصولات" />
  </section>
}
