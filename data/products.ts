import type { KeyProduct, Product, ProductCategory, ProductDetail } from '@/types'
import { presaleProducts } from './presale'
import { offerProducts } from './offers'
import { PRODUCT_CATEGORIES } from '@/constants/categories'
export type { ArtColors, KeyProduct, OfferProduct, PresaleProduct, Product, ProductCategory, ProductDetail, ProductStatus } from '@/types'
export { presaleProducts } from './presale'
export { offerProducts } from './offers'

export const keyProducts: KeyProduct[] = [
  { id: 'midnight', tag: 'بازی', art: 'M', title: 'میدنایت — نسخه استاندارد', description: 'اکانت اختصاصی بازی', price: '۴۸۰', art1: '#3a2f6b', art2: '#171338' },
  { id: 'claude-pro', tag: 'هوش مصنوعی', art: 'C', title: 'Claude Pro — یک ماهه', description: 'اکانت هوش مصنوعی', price: '۳۹۰', art1: '#1f5c52', art2: '#12241f' },
  { id: 'playstation-card', tag: 'گیفت‌کارت', art: 'PS', title: 'گیفت‌کارت پلی‌استیشن ۲۰$', description: 'گیفت‌کارت', price: '۱٬۱۵۰', art1: '#6b4a1f', art2: '#231a0c' },
  { id: 'wuthering-waves', tag: 'بازی', art: 'W', title: 'Wuthering Waves — پک الماس', description: 'اکانت اختصاصی بازی', price: '۲۲۰', art1: '#2f4f6b', art2: '#141f2b' },
  { id: 'chatgpt-plus-key', tag: 'هوش مصنوعی', art: 'G', title: 'ChatGPT Plus — یک ماهه', description: 'اکانت هوش مصنوعی', price: '۴۲۰', art1: '#5c3a68', art2: '#211729' },
  { id: 'google-play-key', tag: 'گیفت‌کارت', art: 'GP', title: 'گیفت‌کارت گوگل پلی ۱۰$', description: 'گیفت‌کارت', price: '۵۸۰', art1: '#1f4a3d', art2: '#0f201a' },
]

export const newestProducts: Product[] = [
  { id: 'gemini-new', art: 'Gm', title: 'Gemini Advanced', category: PRODUCT_CATEGORIES[1], displayCategory: 'اکانت هوش مصنوعی', description: 'اشتراک Gemini Advanced با فعال‌سازی سریع و پشتیبانی کامل.', price: '۳۶۰ هزار', status: 'in_stock', isNew: true, art1: '#345c68', art2: '#132329' },
  { id: 'pandaria-new', art: 'P', title: 'پانداریا', category: PRODUCT_CATEGORIES[0], displayCategory: 'بازی', description: 'اکانت بازی پانداریا با تحویل سریع و راهنمای فعال‌سازی.', price: '۳۱۰ هزار', status: 'in_stock', isNew: true, art1: '#4a3a2f', art2: '#201811' },
  { id: 'google-play-new', art: 'GP', title: 'گیفت‌کارت گوگل پلی', category: PRODUCT_CATEGORIES[3], displayCategory: 'گیفت‌کارت', description: 'گیفت‌کارت گوگل پلی با تحویل کد و پشتیبانی فعال‌سازی.', price: '۵۸۰ هزار', status: 'in_stock', isNew: true, art1: '#1f4a3d', art2: '#0f201a' },
  { id: 'deepseek-new', art: 'DS', title: 'DeepSeek Pro', category: PRODUCT_CATEGORIES[1], displayCategory: 'اکانت هوش مصنوعی', description: 'اشتراک DeepSeek Pro؛ به‌زودی با فعال‌سازی مطمئن عرضه می‌شود.', price: '۲۹۰ هزار', status: 'coming_soon', isNew: true, art1: '#6b2f5c', art2: '#241129' },
  { id: 'copilot-new', art: 'CP', title: 'Copilot Pro', category: PRODUCT_CATEGORIES[1], displayCategory: 'اکانت هوش مصنوعی', description: 'اشتراک Copilot Pro با پشتیبانی و راهنمای استفاده.', price: '۳۴۰ هزار', status: 'out_of_stock', isNew: true, art1: '#2f6b5e', art2: '#132420' },
]

export const products: Product[] = [
  { id: 'midnight-product', art: 'M', title: 'میدنایت', category: PRODUCT_CATEGORIES[0], displayCategory: 'بازی', description: 'اکانت اختصاصی میدنایت با تحویل سریع و پشتیبانی فعال‌سازی.', price: '۴۸۰ هزار', status: 'in_stock', art1: '#3a2f6b', art2: '#171338' },
  { id: 'wuthering-product', art: 'W', title: 'Wuthering Waves', category: PRODUCT_CATEGORIES[0], displayCategory: 'بازی', description: 'پک الماس Wuthering Waves با تحویل سریع و پشتیبانی پاسخ‌گو.', price: '۲۲۰ هزار', status: 'in_stock', art1: '#2f4f6b', art2: '#141f2b' },
  { id: 'pandaria-product', art: 'P', title: 'پانداریا', category: PRODUCT_CATEGORIES[0], displayCategory: 'بازی', description: 'اکانت بازی پانداریا با راهنمای فعال‌سازی و تحویل مطمئن.', price: '۳۱۰ هزار', status: 'in_stock', art1: '#4a3a2f', art2: '#201811' },
  { id: 'claude-product', art: 'C', title: 'Claude Pro', category: PRODUCT_CATEGORIES[1], displayCategory: 'هوش مصنوعی', description: 'اشتراک Claude Pro یک‌ماهه با فعال‌سازی سریع و پشتیبانی کامل.', price: '۳۹۰ هزار', status: 'in_stock', art1: '#1f5c52', art2: '#12241f' },
  { id: 'chatgpt-product', art: 'G', title: 'ChatGPT Plus', category: PRODUCT_CATEGORIES[1], displayCategory: 'هوش مصنوعی', description: 'اشتراک ChatGPT Plus یک‌ماهه با تحویل سریع و راهنمای استفاده.', price: '۴۲۰ هزار', status: 'in_stock', art1: '#5c3a68', art2: '#211729' },
  { id: 'gemini-product', art: 'Gm', title: 'Gemini Advanced', category: PRODUCT_CATEGORIES[1], displayCategory: 'هوش مصنوعی', description: 'اشتراک Gemini Advanced با فعال‌سازی مطمئن و پشتیبانی پس از خرید.', price: '۳۶۰ هزار', status: 'in_stock', art1: '#345c68', art2: '#132329' },
  { id: 'playstation-product', art: 'PS', title: 'گیفت‌کارت پلی‌استیشن', category: PRODUCT_CATEGORIES[3], displayCategory: 'گیفت‌کارت', description: 'گیفت‌کارت پلی‌استیشن با تحویل کد و راهنمای فعال‌سازی.', price: '۱٬۱۵۰ هزار', status: 'in_stock', art1: '#6b4a1f', art2: '#231a0c' },
  { id: 'google-play-product', art: 'GP', title: 'گیفت‌کارت گوگل پلی', category: PRODUCT_CATEGORIES[3], displayCategory: 'گیفت‌کارت', description: 'گیفت‌کارت گوگل پلی با تحویل سریع کد و پشتیبانی فعال‌سازی.', price: '۵۸۰ هزار', status: 'in_stock', art1: '#1f4a3d', art2: '#0f201a' },
  { id: 'instagram-product', art: 'IG', title: 'Instagram Premium', category: PRODUCT_CATEGORIES[2], displayCategory: 'شبکه‌های اجتماعی', description: 'اشتراک Instagram Premium برای تجربه‌ای کامل‌تر در شبکه‌های اجتماعی.', price: '۲۶۰ هزار', status: 'coming_soon', art1: '#7b2f5c', art2: '#2a1023' },
  { id: 'telegram-product', art: 'TG', title: 'Telegram Premium', category: PRODUCT_CATEGORIES[2], displayCategory: 'شبکه‌های اجتماعی', description: 'اشتراک Telegram Premium با فعال‌سازی آسان و پشتیبانی کامل.', price: '۱۸۰ هزار', status: 'in_stock', art1: '#236b83', art2: '#102b38' },
  { id: 'nintendo-product', art: 'NS', title: 'گیفت‌کارت Nintendo eShop', category: PRODUCT_CATEGORIES[3], displayCategory: 'گیفت‌کارت', description: 'گیفت‌کارت Nintendo eShop با تحویل کد و راهنمای استفاده.', price: '۷۸۰ هزار', status: 'out_of_stock', art1: '#6b521f', art2: '#29200c' },
  { id: 'valorant-product', art: 'VP', title: 'Valorant Points', category: PRODUCT_CATEGORIES[0], displayCategory: 'بازی', description: 'Valorant Points برای خرید آیتم‌های بازی با تحویل سریع.', price: '۳۴۰ هزار', status: 'in_stock', art1: '#9a3d2f', art2: '#32120e' },
]

export const searchableProducts = [...keyProducts, ...presaleProducts, ...offerProducts, ...newestProducts, ...products]

const categoryFromLabel = (label: string): ProductCategory => label.includes('بازی') ? PRODUCT_CATEGORIES[0] : label.includes('گیفت') ? PRODUCT_CATEGORIES[3] : PRODUCT_CATEGORIES[1]

export const productDetails: ProductDetail[] = [
  ...products.map((product) => ({ ...product, description: `خرید ${product.title} با تحویل سریع، پشتیبانی پاسخ‌گو و فعال‌سازی مطمئن در افرا شاپ.` })),
  ...newestProducts.map((product) => ({ ...product, description: `جدیدترین نسخه ${product.title} با تحویل سریع و پشتیبانی کامل افرا شاپ.` })),
  ...keyProducts.map((product) => ({ id: product.id, art: product.art, title: product.title, category: categoryFromLabel(product.tag), displayCategory: product.description, price: `${product.price} هزار تومان`, description: `${product.description} با تحویل سریع و پشتیبانی کامل افرا شاپ.`, status: 'in_stock' as const, art1: product.art1, art2: product.art2 })),
  ...presaleProducts.map((product) => ({ id: product.id, art: product.art, title: product.title, category: categoryFromLabel(product.description), displayCategory: product.description, price: `${product.price} هزار تومان`, description: `این محصول در پیش‌فروش قرار دارد و پس از انتشار، در اولین فرصت برایت تحویل می‌شود.`, status: 'coming_soon' as const, art1: product.art1, art2: product.art2 })),
  ...offerProducts.map((product) => ({ id: product.id, art: product.art, title: product.title, category: categoryFromLabel(product.category), displayCategory: product.category, price: product.newPrice, description: `پیشنهاد ویژه ${product.title} با قیمت محدود و فعال‌سازی سریع.`, status: 'in_stock' as const, art1: product.art1, art2: product.art2 })),
]
