import { PRODUCT_CATEGORIES } from '@/constants/categories'
import { ROUTES } from '@/constants/routes'
import type { ProductCategory } from '@/types'
import type { Route } from 'next'

export interface MenuColumn { title: string; category: ProductCategory; icon: 'fridge' | 'washer' | 'kitchen'; links: { label: string; badge?: string }[] }
export const productMenuColumns: MenuColumn[] = [
  { title: PRODUCT_CATEGORIES[0], category: PRODUCT_CATEGORIES[0], icon: 'fridge', links: [{ label: 'یخچال فریزر سامسونگ RT55' }, { label: 'یخچال ساید بای ساید ال‌جی' }, { label: 'یخچال فریزر بوش سری ۴' }] },
  { title: PRODUCT_CATEGORIES[1], category: PRODUCT_CATEGORIES[1], icon: 'washer', links: [{ label: 'لباسشویی ال‌جی', badge: 'پرطرفدار' }, { label: 'لباسشویی پارس' }, { label: 'ظرفشویی بوش' }, { label: 'ظرفشویی دیپلومات' }] },
  { title: PRODUCT_CATEGORIES[2], category: PRODUCT_CATEGORIES[2], icon: 'kitchen', links: [{ label: 'جاروبرقی فیلیپس', badge: 'پرطرفدار' }, { label: 'رباتیک روبوراک S8' }, { label: 'رباتیک شیائومی S20' }, { label: 'جاروبرقی پارس خزر' }] },
]
export const footerProductLinks = [...PRODUCT_CATEGORIES]
export const footerAboutLinks: { label: string; href: Route }[] = [{ label: 'مقالات و آموزش', href: ROUTES.ARTICLES }, { label: 'درباره ما', href: ROUTES.ABOUT }, { label: 'حساب کاربری', href: ROUTES.ACCOUNT }]
export const featuredMenu = { kicker: 'پیشنهاد هفته', title: 'یخچال فریزر سامسونگ RT55', description: 'با ۱۷٪ تخفیف، گارانتی رسمی و نصب رایگان', price: '۷۲٬۶۰۰ هزار تومان', action: 'مشاهده پیشنهاد' }
export const communityLinks = [{ label: 'کانال تلگرام', icon: 'telegram' as const, disabled: true }, { label: 'سرور دیسکورد', icon: 'discord' as const, disabled: true }, { label: 'hello@venusshop.ir', href: 'mailto:hello@venusshop.ir', icon: 'email' as const }]
