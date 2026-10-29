import type { OfferProduct } from '@/types'
// نکته: oldPrice هر پیشنهاد باید با قیمت همان محصول در products.ts هماهنگ بماند.
export const offerProducts: OfferProduct[] = [
  { id: 'rt55-offer', art: 'SF', title: 'یخچال فریزر سامسونگ RT55', category: 'یخچال و فریزر', brand: 'سامسونگ', kind: 'یخچال فریزر دوقلو', discount: '٪۱۷-', oldPrice: '۸۷٬۵۰۰', newPrice: '۷۲٬۶۰۰ هزار تومان', art1: '#3a2f6b', art2: '#171338' },
  { id: 'washer-offer', art: 'LW', title: 'لباسشویی ال‌جی ۹ کیلویی', category: 'لباسشویی و ظرفشویی', brand: 'ال‌جی', kind: 'ماشین لباسشویی', discount: '٪۲۰-', oldPrice: '۴۲٬۵۰۰', newPrice: '۳۴٬۰۰۰ هزار تومان', art1: '#1f5c52', art2: '#12241f' },
  { id: 'fryer-offer', art: 'AF', title: 'سرخ‌کن بدون روغن فیلیپس', category: 'پخت‌وپز', brand: 'فیلیپس', kind: 'سرخ‌کن هوایی', discount: '٪۲۵-', oldPrice: '۱۲٬۴۰۰', newPrice: '۹٬۳۰۰ هزار تومان', art1: '#1f4a3d', art2: '#0f201a' },
]
