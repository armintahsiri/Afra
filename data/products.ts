import type { KeyProduct, Product, ProductCategory, ProductDetail } from '@/types'
import { presaleProducts } from './presale'
import { offerProducts } from './offers'
import { PRODUCT_CATEGORIES } from '@/constants/categories'
export type { ArtColors, KeyProduct, OfferProduct, PresaleProduct, Product, ProductCategory, ProductDetail, ProductStatus } from '@/types'
export { presaleProducts } from './presale'
export { offerProducts } from './offers'

// قیمت‌ها به «هزار تومان» نگه‌داری می‌شوند؛ برای به‌روزرسانی قیمت بازار
// فقط همین فایل (و در صورت لزوم offers.ts و mockOrders.ts) را تغییر بده.
export const keyProducts: KeyProduct[] = [
  { id: 'samsung-rt55', tag: 'یخچال و فریزر', art: 'SF', title: 'یخچال فریزر سامسونگ RT55', description: 'یخچال فریزر دوقلو', price: '۸۷٬۵۰۰', brand: 'سامسونگ', kind: 'یخچال فریزر دوقلو', art1: '#3a2f6b', art2: '#171338' },
  { id: 'lg-washer-9', tag: 'لباسشویی و ظرفشویی', art: 'LW', title: 'لباسشویی ال‌جی ۹ کیلویی', description: 'ماشین لباسشویی فول اتوماتیک', price: '۴۲٬۵۰۰', brand: 'ال‌جی', kind: 'ماشین لباسشویی', art1: '#1f5c52', art2: '#12241f' },
  { id: 'roborock-s8', tag: 'جاروبرقی', art: 'RR', title: 'جاروبرقی رباتیک روبوراک S8', description: 'جاروبرقی هوشمند مکش خشک و تر', price: '۴۷٬۰۰۰', brand: 'روبوراک', kind: 'جاروبرقی رباتیک', art1: '#5c3a68', art2: '#211729' },
  { id: 'bosch-sms14', tag: 'لباسشویی و ظرفشویی', art: 'BD', title: 'ظرفشویی بوش ۱۴ نفره', description: 'ماشین ظرفشویی', price: '۸۸٬۰۰۰', brand: 'بوش', kind: 'ماشین ظرفشویی', art1: '#6b4a1f', art2: '#231a0c' },
  { id: 'philips-airfryer', tag: 'پخت‌وپز', art: 'AF', title: 'سرخ‌کن بدون روغن فیلیپس', description: 'سرخ‌کن هوایی', price: '۱۲٬۴۰۰', brand: 'فیلیپس', kind: 'سرخ‌کن هوایی', art1: '#1f4a3d', art2: '#0f201a' },
  { id: 'panasonic-microwave', tag: 'پخت‌وپز', art: 'MV', title: 'مایکروویو پاناسونیک ۳۲ لیتری', description: 'مایکروویو', price: '۲۱٬۵۰۰', brand: 'پاناسونیک', kind: 'مایکروویو', art1: '#236b83', art2: '#102b38' },
]

export const newestProducts: Product[] = [
  { id: 'lg-washer-new', art: 'LW', title: 'لباسشویی ال‌جی ۱۴ کیلویی', brand: 'ال‌جی', kind: 'ماشین لباسشویی', category: PRODUCT_CATEGORIES[1], displayCategory: 'ماشین لباسشویی', description: 'لباسشویی ال‌جی با موتور دایرکت‌درایو و برنامه‌های شست‌وشوی سریع.', price: '۴۸٬۹۰۰ هزار', status: 'in_stock', isNew: true, art1: '#345c68', art2: '#132329' },
  { id: 'bosch-fridge-new', art: 'BF', title: 'یخچال فریزر بوش سری ۴', brand: 'بوش', kind: 'یخچال فریزر دوقلو', category: PRODUCT_CATEGORIES[0], displayCategory: 'یخچال فریزر دوقلو', description: 'یخچال فریزر بوش با مصرف انرژی کم و سردکننده آنتی‌فریز.', price: '۱۰۵٬۰۰۰ هزار', status: 'in_stock', isNew: true, art1: '#4a3a2f', art2: '#201811' },
  { id: 'samsung-robot-new', art: 'SR', title: 'جاروبرقی رباتیک سامسونگ میگا', brand: 'سامسونگ', kind: 'جاروبرقی رباتیک', category: PRODUCT_CATEGORIES[2], displayCategory: 'جاروبرقی رباتیک', description: 'جاروبرقی رباتیک سامسونگ با نقشه‌برداری هوشمند خانه.', price: '۵۲٬۰۰۰ هزار', status: 'in_stock', isNew: true, art1: '#1f4a3d', art2: '#0f201a' },
  { id: 'bosch-tea-maker', art: 'TM', title: 'چای‌ساز و کتری بوش', brand: 'بوش', kind: 'چای‌ساز', category: PRODUCT_CATEGORIES[3], displayCategory: 'چای‌ساز', description: 'چای‌ساز بوش با ظرف استیل ضد زنگ و گرم‌نگه‌دارنده.', price: '۹٬۱۵۰ هزار', status: 'in_stock', isNew: true, art1: '#6b2f5c', art2: '#241129' },
  { id: 'diplomat-dishwasher', art: 'DD', title: 'ظرفشویی دیپلومات ۱۲ نفره', brand: 'دیپلومات', kind: 'ماشین ظرفشویی', category: PRODUCT_CATEGORIES[1], displayCategory: 'ماشین ظرفشویی', description: 'ظرفشویی دیپلومات با برنامه اقتصادی و نیمه‌بار.', price: '۵۸٬۰۰۰ هزار', status: 'coming_soon', isNew: true, art1: '#2f6b5e', art2: '#132420' },
]

export const products: Product[] = [
  // یخچال و فریزر
  { id: 'samsung-rt46', art: 'SF', title: 'یخچال فریزر سامسونگ RT46', brand: 'سامسونگ', kind: 'یخچال فریزر دوقلو', category: PRODUCT_CATEGORIES[0], displayCategory: 'یخچال فریزر دوقلو', description: 'یخچال فریزر دوقلو سامسونگ با نورپردازی داخلی LED و قفسه‌های مقاوم.', price: '۷۹٬۰۰۰ هزار', status: 'in_stock', art1: '#3a2f6b', art2: '#171338' },
  { id: 'snowa-fridge', art: 'SW', title: 'یخچال فریزر دوقلو اسنوا', brand: 'اسنوا', kind: 'یخچال فریزر دوقلو', category: PRODUCT_CATEGORIES[0], displayCategory: 'یخچال فریزر دوقلو', description: 'یخچال فریزر اسنوا با آبسردکن داخلی و خدمات پس از فروش گسترده.', price: '۵۹٬۵۰۰ هزار', status: 'in_stock', art1: '#4a3a2f', art2: '#201811' },
  { id: 'lg-side-by-side', art: 'LG', title: 'یخچال فریزر ساید بای ساید ال‌جی', brand: 'ال‌جی', kind: 'یخچال فریزر ساید بای ساید', category: PRODUCT_CATEGORIES[0], displayCategory: 'یخچال فریزر ساید بای ساید', description: 'یخچال ساید بای ساید ال‌جی با آبسردکن و یخ‌ساز داخلی.', price: '۱۳۸٬۰۰۰ هزار', status: 'in_stock', art1: '#2f4f6b', art2: '#141f2b' },
  { id: 'hisense-french-door', art: 'HF', title: 'یخچال فریزر فرنچ‌داور هایسنس', brand: 'هایسنس', kind: 'یخچال فریزر فرنچ‌داور', category: PRODUCT_CATEGORIES[0], displayCategory: 'یخچال فریزر فرنچ‌داور', description: 'یخچال فرنچ‌داور هایسنس با ظرفیت بزرگ و فریزر کشویی.', price: '۱۶۵٬۰۰۰ هزار', status: 'in_stock', art1: '#2f6b4f', art2: '#132419' },
  { id: 'daewoo-fridge', art: 'DF', title: 'یخچال فریزر دوو ۲۰ فوت', brand: 'دوو', kind: 'یخچال فریزر دوقلو', category: PRODUCT_CATEGORIES[0], displayCategory: 'یخچال فریزر دوقلو', description: 'یخچال دوقلو دوو با طراحی کلاسیک و مصرف انرژی بهینه.', price: '۴۴٬۰۰۰ هزار', status: 'in_stock', art1: '#6b521f', art2: '#29200c' },
  { id: 'emersun-fridge-45', art: 'EF', title: 'یخچال فریزر امرسان مدل ۴۵', brand: 'امرسان', kind: 'یخچال فریزر دوقلو', category: PRODUCT_CATEGORIES[0], displayCategory: 'یخچال فریزر دوقلو', description: 'یخچال فریزر امرسان با ظرفیت ۴۵۰ لیتر، مناسب خانواده‌های پرجمعیت.', price: '۵۴٬۰۰۰ هزار', status: 'out_of_stock', art1: '#1f5c52', art2: '#12241f' },
  // لباسشویی و ظرفشویی
  { id: 'lg-washer-9-p', art: 'LW', title: 'لباسشویی ال‌جی ۹ کیلویی', brand: 'ال‌جی', kind: 'ماشین لباسشویی', category: PRODUCT_CATEGORIES[1], displayCategory: 'ماشین لباسشویی', description: 'لباسشویی ال‌جی با استوانه‌ی بارگیری از جلو و برنامه‌های شست‌وشو متنوع.', price: '۴۲٬۵۰۰ هزار', status: 'in_stock', art1: '#1f5c52', art2: '#12241f' },
  { id: 'pars-washer', art: 'PW', title: 'لباسشویی پارس ۷ کیلویی', brand: 'پارس', kind: 'ماشین لباسشویی', category: PRODUCT_CATEGORIES[1], displayCategory: 'ماشین لباسشویی', description: 'لباسشویی پارس با طراحی کم‌ارتفاع و موتور کم‌صدا.', price: '۲۴٬۸۰۰ هزار', status: 'in_stock', art1: '#5c3a68', art2: '#211729' },
  { id: 'samsung-washer-14', art: 'SG', title: 'لباسشویی سامسونگ ۱۴ کیلویی', brand: 'سامسونگ', kind: 'ماشین لباسشویی', category: PRODUCT_CATEGORIES[1], displayCategory: 'ماشین لباسشویی', description: 'لباسشویی سامسونگ با حداکثر ظرفیت و برنامه‌های کم‌مصرف.', price: '۶۱٬۰۰۰ هزار', status: 'in_stock', art1: '#345c68', art2: '#132329' },
  { id: 'snowa-washer', art: 'SN', title: 'لباسشویی اسنوا ۸ کیلویی', brand: 'اسنوا', kind: 'ماشین لباسشویی', category: PRODUCT_CATEGORIES[1], displayCategory: 'ماشین لباسشویی', description: 'لباسشویی اسنوا با گارانتی رسمی و خدمات پس از فروش گسترده.', price: '۳۴٬۵۰۰ هزار', status: 'in_stock', art1: '#2f6b5e', art2: '#132420' },
  { id: 'bosch-dishwasher', art: 'BD', title: 'ظرفشویی بوش ۱۴ نفره', brand: 'بوش', kind: 'ماشین ظرفشویی', category: PRODUCT_CATEGORIES[1], displayCategory: 'ماشین ظرفشویی', description: 'ظرفشویی بوش با رده‌ی انرژی A و سبد قاشق چنگال اضافه.', price: '۸۸٬۰۰۰ هزار', status: 'out_of_stock', art1: '#6b4a1f', art2: '#231a0c' },
  { id: 'ema-dishwasher', art: 'ED', title: 'ظرفشویی ائما ۱۲ نفره', brand: 'ائما', kind: 'ماشین ظرفشویی', category: PRODUCT_CATEGORIES[1], displayCategory: 'ماشین ظرفشویی', description: 'ظرفشویی ائما با برنامه اقتصادی و شست‌وشوی نیمه‌بار.', price: '۵۲٬۰۰۰ هزار', status: 'in_stock', art1: '#236b83', art2: '#102b38' },
  // جاروبرقی
  { id: 'philips-vacuum', art: 'PV', title: 'جاروبرقی فیلیپس ۲۰۰۰ وات', brand: 'فیلیپس', kind: 'جاروبرقی چرخشی', category: PRODUCT_CATEGORIES[2], displayCategory: 'جاروبرقی چرخشی', description: 'جاروبرقی فیلیپس با قدرت مکش بالا و فیلتر HEPA.', price: '۱۷٬۸۰۰ هزار', status: 'in_stock', art1: '#236b83', art2: '#102b38' },
  { id: 'pars-khazar-vacuum', art: 'PK', title: 'جاروبرقی پارس خزر ۲۲۰۰ وات', brand: 'پارس خزر', kind: 'جاروبرقی چرخشی', category: PRODUCT_CATEGORIES[2], displayCategory: 'جاروبرقی چرخشی', description: 'جاروبرقی پارس خزر با کیسه‌ی گردوغبار بزرگ و قدرت مکش بالا.', price: '۱۳٬۲۰۰ هزار', status: 'coming_soon', art1: '#7b2f5c', art2: '#2a1023' },
  { id: 'xiaomi-robot-vacuum', art: 'XR', title: 'جاروبرقی رباتیک شیائومی S20', brand: 'شیائومی', kind: 'جاروبرقی رباتیک', category: PRODUCT_CATEGORIES[2], displayCategory: 'جاروبرقی رباتیک', description: 'جاروبرقی رباتیک شیائومی با برس چرخان و کنترل از طریق اپلیکیشن موبایل.', price: '۲۸٬۶۰۰ هزار', status: 'in_stock', art1: '#6b521f', art2: '#29200c' },
  { id: 'lg-cordless-vacuum', art: 'LA', title: 'جاروبرقی بی‌سیم ال‌جی A9', brand: 'ال‌جی', kind: 'جاروبرقی بی‌سیم', category: PRODUCT_CATEGORIES[2], displayCategory: 'جاروبرقی بی‌سیم', description: 'جاروبرقی بی‌سیم ال‌جی A9 با باتری قابل تعویض و دسته‌ی قابل تنظیم.', price: '۳۹٬۵۰۰ هزار', status: 'in_stock', art1: '#2f4f6b', art2: '#141f2b' },
  { id: 'bosch-vacuum', art: 'BV', title: 'جاروبرقی بوش مدل ProAnimal', brand: 'بوش', kind: 'جاروبرقی چرخشی', category: PRODUCT_CATEGORIES[2], displayCategory: 'جاروبرقی چرخشی', description: 'جاروبرقی بوش با برس مخصوص موی حیوانات و فیلتر هوای تمیز.', price: '۲۱٬۵۰۰ هزار', status: 'in_stock', art1: '#6b4a1f', art2: '#231a0c' },
  { id: 'samsung-jet-vacuum', art: 'SJ', title: 'جاروبرقی بی‌سیم سامسونگ Jet', brand: 'سامسونگ', kind: 'جاروبرقی بی‌سیم', category: PRODUCT_CATEGORIES[2], displayCategory: 'جاروبرقی بی‌سیم', description: 'جاروبرقی بی‌سیم سامسونگ با طراحی سبک و شارژ سریع باتری.', price: '۳۱٬۰۰۰ هزار', status: 'out_of_stock', art1: '#345c68', art2: '#132329' },
  // پخت‌وپز
  { id: 'tefal-fryer', art: 'AF', title: 'سرخ‌کن بدون روغن تفال', brand: 'تفال', kind: 'سرخ‌کن هوایی', category: PRODUCT_CATEGORIES[3], displayCategory: 'سرخ‌کن هوایی', description: 'سرخ‌کن هوایی تفال با ظرفیتی پهن و شست‌وشوی آسان.', price: '۱۱٬۹۰۰ هزار', status: 'in_stock', art1: '#9a3d2f', art2: '#32120e' },
  { id: 'bosch-blender', art: 'BB', title: 'ماشین مخلوط‌کن بوش', brand: 'بوش', kind: 'مخلوط‌کن', category: PRODUCT_CATEGORIES[3], displayCategory: 'مخلوط‌کن', description: 'مخلوط‌کن بوش با موتور مقاوم و تیغه‌ی چهارپَر.', price: '۱۲٬۴۰۰ هزار', status: 'in_stock', art1: '#345c68', art2: '#132329' },
  { id: 'panasonic-microwave-p', art: 'MV', title: 'مایکروویو پاناسونیک ۳۲ لیتری', brand: 'پاناسونیک', kind: 'مایکروویو', category: PRODUCT_CATEGORIES[3], displayCategory: 'مایکروویو', description: 'مایکروویو پاناسونیک با برنامه‌های آماده و حالت گرم‌نگه‌دارنده.', price: '۲۱٬۵۰۰ هزار', status: 'in_stock', art1: '#236b83', art2: '#102b38' },
  { id: 'braun-kettle', art: 'BK', title: 'کتری برقی براون', brand: 'براون', kind: 'کتری برقی', category: PRODUCT_CATEGORIES[3], displayCategory: 'کتری برقی', description: 'کتری برقی براون با جوشش سریع آب و بدنه استیل.', price: '۶٬۸۰۰ هزار', status: 'in_stock', art1: '#5c3a68', art2: '#211729' },
  { id: 'akhavan-stove', art: 'AD', title: 'اجاق گاز اخوان مدل GS29', brand: 'اخوان', kind: 'اجاق گاز رومیزی', category: PRODUCT_CATEGORIES[3], displayCategory: 'اجاق گاز رومیزی', description: 'اجاق گاز رومیزی اخوان با مشعل توکار و بدنه استیل.', price: '۹٬۴۰۰ هزار', status: 'in_stock', art1: '#9a3d2f', art2: '#32120e' },
  { id: 'tefal-tea-maker', art: 'TF', title: 'چای‌ساز تفال مدل Express', brand: 'تفال', kind: 'چای‌ساز', category: PRODUCT_CATEGORIES[3], displayCategory: 'چای‌ساز', description: 'چای‌ساز تفال با کتری استیل و قوری پیرکس.', price: '۷٬۸۰۰ هزار', status: 'coming_soon', art1: '#6b521f', art2: '#29200c' },
]

export const searchableProducts = [...keyProducts, ...presaleProducts, ...offerProducts, ...newestProducts, ...products]

const categoryFromLabel = (label: string): ProductCategory => label.includes('یخچال') ? PRODUCT_CATEGORIES[0] : label.includes('لباسشویی') || label.includes('ظرفشویی') ? PRODUCT_CATEGORIES[1] : label.includes('جارو') ? PRODUCT_CATEGORIES[2] : PRODUCT_CATEGORIES[3]

export const productDetails: ProductDetail[] = [
  ...products.map((product) => ({ ...product, description: `خرید ${product.title} با گارانتی رسمی، ارسال سریع و خدمات نصب در ونوس.` })),
  ...newestProducts.map((product) => ({ ...product, description: `جدیدترین مدل ${product.title} با گارانتی رسمی و خدمات نصب ونوس.` })),
  ...keyProducts.map((product) => ({ id: product.id, art: product.art, title: product.title, brand: product.brand, kind: product.kind, category: categoryFromLabel(product.tag), displayCategory: product.description, price: `${product.price} هزار تومان`, description: `${product.description} با گارانتی رسمی، ارسال سریع و خدمات نصب در ونوس.`, status: 'in_stock' as const, art1: product.art1, art2: product.art2 })),
  ...presaleProducts.map((product) => ({ id: product.id, art: product.art, title: product.title, brand: product.brand, kind: product.kind, category: categoryFromLabel(product.description), displayCategory: product.description, price: `${product.price} هزار تومان`, description: `این محصول در پیش‌فروش ونوس قرار دارد و پس از عرضه، در اولین فرصت برایتان ارسال می‌شود.`, status: 'coming_soon' as const, art1: product.art1, art2: product.art2 })),
  ...offerProducts.map((product) => ({ id: product.id, art: product.art, title: product.title, brand: product.brand, kind: product.kind, category: categoryFromLabel(product.category), displayCategory: product.category, price: product.newPrice, description: `پیشنهاد ویژه ${product.title} با قیمت محدود و گارانتی رسمی حتی با تخفیف.`, status: 'in_stock' as const, art1: product.art1, art2: product.art2 })),
]
