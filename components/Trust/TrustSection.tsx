import { FadeInOnScroll } from '@/components/Shared/FadeInOnScroll'
import { trustItems } from '@/data/trustItems'

export function TrustSection() {
  return <section className="mx-auto max-w-[1240px] px-7 pb-16 max-[768px]:px-4 max-[768px]:pb-11 max-[480px]:px-3.5 max-[480px]:pb-9"><div className="grid grid-cols-3 gap-4 max-[980px]:grid-cols-1 max-[768px]:gap-3">{trustItems.map((item, index) => <FadeInOnScroll key={item.title} delay={index * 70}><div className="flex items-start gap-3.5 rounded-2xl border border-line bg-surface p-5 shadow-[0_1px_2px_rgba(0,0,0,.03)] max-[768px]:p-4"><div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-violet/10 text-[17px] text-violet" aria-hidden="true">{item.icon}</div><div><h5 className="mb-1 mt-0 text-[14.5px] font-bold text-text">{item.title}</h5><p className="m-0 text-[13px] leading-[1.7] text-muted">{item.description}</p></div></div></FadeInOnScroll>)}</div></section>
}
