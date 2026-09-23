import { PRODUCT_CATEGORIES } from '@/constants/categories'
import { ROUTES } from '@/constants/routes'
import type { ProductCategory } from '@/types'
import type { Route } from 'next'

export interface MenuColumn { title: string; category: ProductCategory; icon: 'games' | 'ai' | 'gift'; links: { label: string; badge?: string }[] }
export const productMenuColumns: MenuColumn[] = [
  { title: PRODUCT_CATEGORIES[0], category: PRODUCT_CATEGORIES[0], icon: 'games', links: [{ label: 'میدنایت' }, { label: 'Wuthering Waves' }, { label: 'پانداریا' }] },
  { title: PRODUCT_CATEGORIES[1], category: PRODUCT_CATEGORIES[1], icon: 'ai', links: [{ label: 'Gemini' }, { label: 'ChatGPT', badge: 'پرطرفدار' }, { label: 'Claude', badge: 'پرطرفدار' }, { label: 'Copilot' }, { label: 'Grok' }, { label: 'DeepSeek' }] },
  { title: PRODUCT_CATEGORIES[3], category: PRODUCT_CATEGORIES[3], icon: 'gift', links: [{ label: 'گوگل پلی' }, { label: 'اپ استور' }, { label: 'پلی‌استیشن' }, { label: 'ایکس‌باکس' }] },
]
export const footerProductLinks = [...PRODUCT_CATEGORIES]
export const footerAboutLinks: { label: string; href: Route }[] = [{ label: 'مقالات و آموزش', href: ROUTES.ARTICLES }, { label: 'درباره ما', href: ROUTES.ABOUT }, { label: 'حساب کاربری', href: ROUTES.ACCOUNT }]
export const featuredMenu = { kicker: 'پیشنهاد هفته', title: 'ChatGPT Plus', description: 'یک ماه اشتراک با فعال‌سازی سریع', price: '۳۹۰ هزار تومان', action: 'مشاهده پیشنهاد' }
export const communityLinks = [{ label: 'کانال تلگرام', icon: 'telegram' as const, disabled: true }, { label: 'سرور دیسکورد', icon: 'discord' as const, disabled: true }, { label: 'hello@afrashop.ir', href: 'mailto:hello@afrashop.ir', icon: 'email' as const }]
