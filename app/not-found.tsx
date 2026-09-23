import Link from 'next/link'
import type { Metadata } from 'next'
import { AnnouncementBar } from '@/components/Header/AnnouncementBar'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { ROUTES } from '@/constants/routes'

export const metadata: Metadata = { title: 'صفحه پیدا نشد', description: 'صفحه‌ای که دنبالش بودی در افرا شاپ پیدا نشد.', robots: { index: false, follow: false } }

export default function NotFound() {
  return <><AnnouncementBar /><Header /><main><section className="mx-auto flex min-h-[580px] max-w-[1240px] flex-col items-center justify-center px-7 py-16 text-center max-[768px]:min-h-[500px] max-[768px]:px-4 max-[480px]:px-3.5"><div className="mb-2.5 grid h-24 w-24 place-items-center rounded-[30px] border border-[color-mix(in_srgb,var(--gold)_55%,var(--line))] text-[52px] text-gold shadow-[0_0_8px_var(--gold),0_0_34px_color-mix(in_srgb,var(--gold)_34%,transparent),inset_0_0_22px_color-mix(in_srgb,var(--gold)_14%,transparent)] motion-safe:animate-contact-neon-flicker motion-reduce:animate-none" aria-hidden="true">⌕</div><strong className="text-[clamp(46px,9vw,92px)] leading-none text-gold">۴۰۴</strong><h1 className="mb-2 mt-3.5 text-[clamp(22px,4vw,32px)] text-text">صفحه‌ای که دنبالش بودی پیدا نشد</h1><p className="m-0 text-muted">ممکن است لینک تغییر کرده باشد یا صفحه دیگر در دسترس نباشد.</p><div className="mt-[22px] flex flex-wrap items-center justify-center gap-4"><Link href={ROUTES.HOME} className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-[17px] py-[11px] text-sm font-semibold text-white shadow-[0_8px_18px_-12px_var(--shadow-soft)] transition-[background,transform] duration-150 hover:-translate-y-px hover:bg-gold-2 hover:text-[#0D47A1] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2196F3]">بازگشت به صفحه اصلی</Link><Link href={ROUTES.PRODUCTS} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-[11px] text-[13px] font-bold text-gold transition-[transform,border-color,background] duration-150 hover:-translate-x-1 hover:border-gold hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2196F3]">مشاهده محصولات</Link></div></section></main><Footer /></>
}
