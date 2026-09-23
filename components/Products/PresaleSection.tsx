import { presaleProducts } from '@/data/presale'
import { FadeInOnScroll } from '@/components/Shared/FadeInOnScroll'
import { PresaleCard } from './PresaleCard'

export function PresaleSection() {
  return <section className="mx-auto max-w-[1240px] px-7 pb-0 pt-16 max-[768px]:px-4 max-[768px]:pt-11 max-[480px]:px-3.5 max-[480px]:pt-9"><div className="relative overflow-hidden rounded-[28px] border border-line bg-[radial-gradient(600px_300px_at_85%_-10%,rgba(33,150,243,.12),transparent_70%),linear-gradient(180deg,var(--surface-2),var(--bg-2))] p-[44px_28px] shadow-[0_18px_42px_-32px_var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,.7)] dark:border-white/10 dark:bg-[linear-gradient(180deg,#12141c_0%,#1a1d29_100%)] dark:shadow-[0_24px_52px_-30px_rgba(0,0,0,.72),inset_0_1px_0_rgba(255,255,255,.08)] max-[768px]:mx-4 max-[768px]:rounded-[22px] max-[768px]:p-8 max-[480px]:mx-3.5 max-[480px]:p-[28px_14px]"><div className="mb-[26px] flex flex-wrap items-end justify-between gap-3.5 max-[768px]:items-start"><div><h2 className="m-0 text-2xl font-extrabold text-text max-[768px]:text-[21px] max-[768px]:leading-[1.55]">پیش‌فروش</h2><p className="m-0 mt-1.5 text-[14.5px] text-muted max-[768px]:text-[13.5px] max-[768px]:leading-[1.8]">این محصولات هنوز منتشر نشدن، الان پیش‌خرید کن و اول از همه تحویل بگیر</p></div></div><div className="relative grid grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-[768px]:grid-cols-1">
    {presaleProducts.map((product, index) => <FadeInOnScroll key={product.id} delay={(index % 4) * 70}><PresaleCard product={product} /></FadeInOnScroll>)}
  </div></div></section>
}
