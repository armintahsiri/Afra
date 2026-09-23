import { offerProducts } from '@/data/offers'
import { FadeInOnScroll } from '@/components/Shared/FadeInOnScroll'
import { OfferCard } from './OfferCard'

export function OffersSection() {
  return <section className="mx-auto max-w-[1240px] px-7 py-16 max-[768px]:px-4 max-[768px]:py-11 max-[480px]:px-3.5 max-[480px]:py-9"><div className="mb-[26px] flex flex-wrap items-end justify-between gap-3.5 max-[768px]:items-start"><div><h2 className="m-0 text-2xl font-extrabold text-text max-[768px]:text-[21px] max-[768px]:leading-[1.55]">پیشنهادهای فروشگاه</h2><p className="m-0 mt-1.5 text-[14.5px] text-muted max-[768px]:text-[13.5px] max-[768px]:leading-[1.8]">تخفیف‌های محدود، تا وقتی موجودی هست</p></div></div><div className="grid grid-cols-3 gap-[18px] max-[980px]:grid-cols-2 max-[768px]:grid-cols-1 max-[768px]:gap-3.5">
    {offerProducts.map((product, index) => <FadeInOnScroll key={product.id} delay={(index % 4) * 70}><OfferCard product={product} /></FadeInOnScroll>)}
  </div></section>
}
