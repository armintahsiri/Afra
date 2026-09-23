import Image from 'next/image'
import Link from 'next/link'
import { DiscordIcon, MailIcon, TelegramIcon } from '@/components/Shared/icons'
import { NewsletterForm } from './NewsletterForm'
import { TrustBadges } from './TrustBadges'
import { communityLinks, footerAboutLinks, footerProductLinks } from '@/data/navigation'
import { ROUTES } from '@/constants/routes'

function CommunityLinks() {
  const icons = { telegram: TelegramIcon, discord: DiscordIcon, email: MailIcon }
  return <div className="flex flex-col gap-2.5">{communityLinks.map((link) => { const Icon = icons[link.icon]; const iconTone = link.icon === 'telegram' ? 'group-hover:text-[#26A5E4] group-hover:[filter:drop-shadow(0_0_3px_rgba(38,165,228,.35))]' : link.icon === 'discord' ? 'group-hover:text-[#5865F2] group-hover:[filter:drop-shadow(0_0_3px_rgba(88,101,242,.35))]' : 'group-hover:text-gold group-hover:[filter:drop-shadow(0_0_3px_color-mix(in_srgb,var(--gold)_40%,transparent))]'; const content = <><span className={`inline-flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[7px] text-muted transition-[color,transform,filter] duration-200 group-hover:scale-[1.06] ${iconTone}`} aria-hidden="true"><Icon className="block h-[19px] w-[19px] fill-current" /></span>{link.label}{link.disabled && <small className="ms-auto whitespace-nowrap text-[10px] text-gold">به‌زودی</small>}</>; return link.disabled ? <span key={link.label} className="flex items-center gap-2.5 rounded-[11px] border border-dashed border-line px-3 py-2.5 text-muted opacity-[.78]" aria-disabled="true">{content}</span> : <a key={link.label} className="group flex items-center gap-2.5 rounded-[11px] border border-line bg-surface-2 px-3 py-2.5 text-[13.5px] text-text transition-[border-color,transform] duration-150 hover:-translate-x-1 hover:border-gold/35" href={link.href} aria-label={link.label}>{content}</a> })}</div>
}

function BrandLogo() {
  return <Link href={ROUTES.HOME} className="flex items-center gap-2.5 text-[22px] font-bold text-text" aria-label="صفحه اصلی afrashop"><Image className="h-[38px] w-[38px] shrink-0 rounded-[9px] object-contain object-center" src="/logo-mark-transparent.png" alt="نشان افرا شاپ" width={38} height={38} />afrashop</Link>
}

export function Footer() {
  return <footer id="about" className="mt-10 border-t border-line bg-bg-2 [background-image:radial-gradient(520px_260px_at_8%_0%,rgba(33,150,243,.08),transparent_72%)] dark:[background-image:radial-gradient(520px_260px_at_8%_0%,rgba(144,202,249,.09),transparent_72%)]"><div className="mx-auto max-w-[1240px] px-7 pb-[30px] pt-[52px] max-[768px]:px-[18px] max-[768px]:pb-6 max-[768px]:pt-10 max-[480px]:px-3.5">
    <div className="mb-[38px] flex items-center justify-between gap-7 rounded-[20px] border border-line bg-surface/[.72] p-[22px_24px] shadow-[inset_0_1px_0_rgba(255,255,255,.5)] dark:bg-surface/[.82] dark:shadow-[inset_0_1px_0_rgba(255,255,255,.12)] max-[768px]:mb-7 max-[768px]:flex-col max-[768px]:items-stretch max-[768px]:gap-4 max-[768px]:p-5 max-[480px]:px-4"><div><span className="text-[11px] font-extrabold text-gold">باخبر بمون</span><h3 className="m-[5px_0_3px] text-[17px] text-text max-[480px]:text-[15px]">از تخفیف‌ها و محصولات جدید باخبر شو</h3><p className="m-0 text-[12.5px] text-muted">خبرهای مهم و پیشنهادهای ویژه را مستقیم دریافت کن.</p></div><NewsletterForm /></div>
    <div className="grid grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-9 pb-9 max-[980px]:grid-cols-2 max-[768px]:grid-cols-1 max-[768px]:gap-[26px]">
      <div><BrandLogo /><p className="m-[14px_0_0] max-w-[290px] text-[13.5px] leading-[1.9] text-muted">فروشگاه اکانت بازی، اشتراک هوش مصنوعی و گیفت‌کارت — برای گیمرها و کاربران دیجیتال ایران.</p><div className="mt-4 max-w-[290px]"><CommunityLinks /></div></div>
      <div><h5 className="m-0 mb-3.5 text-[13px] font-bold text-text">محصولات</h5><ul className="m-0 flex list-none flex-col gap-2.5 p-0">{footerProductLinks.map((label) => <li key={label}><Link className="text-[13.5px] text-muted transition-colors hover:text-text" href={ROUTES.PRODUCTS_CATEGORY(label)}>{label}</Link></li>)}</ul></div>
      <div><h5 className="m-0 mb-3.5 text-[13px] font-bold text-text">درباره</h5><ul className="m-0 flex list-none flex-col gap-2.5 p-0">{footerAboutLinks.map((link) => <li key={link.label}><Link className="text-[13.5px] text-muted transition-colors hover:text-text" href={link.href}>{link.label}</Link></li>)}</ul></div>
      <div><h5 className="m-0 mb-3.5 text-[13px] font-bold text-text">ارتباط با ما</h5><CommunityLinks /></div>
    </div>
    <TrustBadges />
    <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-line pt-[22px] text-[12.5px] text-muted max-[768px]:flex-col max-[768px]:items-start"><span>© ۱۴۰۴ afrashop. تمامی حقوق محفوظ است.</span><span className="flex flex-wrap items-center gap-3.5"><Link className="text-muted transition-colors hover:text-gold" href={ROUTES.TERMS}>قوانین و مقررات</Link><Link className="text-muted transition-colors hover:text-gold" href={ROUTES.PRIVACY}>حریم خصوصی</Link></span></div>
  </div></footer>
}
