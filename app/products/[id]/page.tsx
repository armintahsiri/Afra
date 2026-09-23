import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AnnouncementBar } from '@/components/Header/AnnouncementBar'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { ProductCard } from '@/components/Products/ProductCard'
import { ProductArt } from '@/components/Shared/ProductArt'
import { ProductPurchase } from '@/components/Products/ProductPurchase'
import { ROUTES } from '@/constants/routes'
import { productDetails } from '@/data/products'
import { absoluteUrl, createPageMetadata, priceInIrt, schemaAvailability } from '@/lib/seo'
import { Breadcrumbs } from '@/components/Shared/Breadcrumbs'

type ProductPageProps = { params: Promise<{ id: string }> }

export function generateStaticParams() { return productDetails.map((product) => ({ id: product.id })) }

async function getProduct(params: ProductPageProps['params']) {
  const { id } = await params
  return productDetails.find((product) => product.id === id)
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params)
  if (!product) return createPageMetadata({ title: 'محصول پیدا نشد', description: 'محصول موردنظر در افرا شاپ پیدا نشد.', path: ROUTES.PRODUCTS, noIndex: true })
  return createPageMetadata({ title: product.title, description: `${product.title}؛ ${product.description}`, path: ROUTES.PRODUCT(product.id), keywords: [product.title, product.displayCategory, 'خرید محصول دیجیتال'], image: `${ROUTES.PRODUCT(product.id)}/opengraph-image` })
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params)
  if (!product) notFound()
  const related = productDetails.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 4)
  const productJsonLd = { '@context': 'https://schema.org', '@type': 'Product', name: product.title, description: product.description, image: absoluteUrl(`${ROUTES.PRODUCT(product.id)}/opengraph-image`), category: product.displayCategory, offers: { '@type': 'Offer', url: absoluteUrl(ROUTES.PRODUCT(product.id)), price: priceInIrt(product.price), priceCurrency: 'IRT', availability: schemaAvailability(product.status) } }
  return <><AnnouncementBar /><Header /><main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd).replace(/</g, '\\u003c') }} /><section className="mx-auto max-w-[1240px] px-7 pb-16 pt-[72px] max-[768px]:px-4 max-[768px]:pb-11 max-[768px]:pt-11 max-[480px]:px-3.5 max-[480px]:pt-[42px]"><Breadcrumbs items={[{ label: 'خانه', href: ROUTES.HOME }, { label: 'محصولات', href: ROUTES.PRODUCTS }, { label: product.title }]} /><div className="grid grid-cols-[.9fr_1.1fr] items-center gap-[46px] max-[980px]:grid-cols-1 max-[768px]:gap-6"><div className="min-h-[360px] rounded-[28px] border border-line bg-surface p-7 shadow-[0_22px_44px_-32px_var(--shadow-soft)] max-[480px]:min-h-[240px] max-[480px]:p-4"><ProductArt art={product.art} art1={product.art1} art2={product.art2} className="grid h-[304px] w-full place-items-center rounded-[22px] text-[76px] font-black text-white/[.95] shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_20px_38px_-25px_rgba(0,0,0,.38)] max-[480px]:h-[205px] max-[480px]:text-[56px]" /></div><div className="min-w-0"><span className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold text-gold"><span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(33,150,243,.12)]" aria-hidden="true" /> {product.displayCategory}</span><h1 className="mb-2.5 mt-3.5 text-[clamp(30px,5vw,52px)] leading-[1.35] text-text">{product.title}</h1><p className="m-0 max-w-[570px] text-[15px] leading-[2] text-muted">{product.description}</p><ProductPurchase productId={product.id} status={product.status} price={product.price} /></div></div><div className="mt-11 rounded-[22px] border border-line bg-surface px-[30px] py-[26px] max-[480px]:p-5"><h2 className="mb-2 mt-0 text-xl text-text">درباره این محصول</h2><p className="m-0 text-sm leading-[2] text-muted">{product.description} این محصول با راهنمای فعال‌سازی و پشتیبانی پس از خرید ارائه می‌شود تا شروع استفاده برایت راحت باشد.</p></div><Link href={ROUTES.PRODUCTS} className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-[11px] text-[13px] font-bold text-gold transition-[transform,border-color,background] duration-150 hover:-translate-x-1 hover:border-gold hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2196F3]">← بازگشت به محصولات</Link></section>{related.length > 0 && <section className="mx-auto max-w-[1240px] px-7 pb-16 pt-5 max-[768px]:px-4 max-[768px]:pb-11 max-[480px]:px-3.5"><div className="mb-[26px] flex items-end justify-between gap-3.5 max-[768px]:items-start"><div><span className="mb-2 inline-block text-xs font-extrabold text-gold">انتخاب‌های مشابه</span><h2 className="m-0 text-2xl font-extrabold text-text max-[768px]:text-[21px]">محصولات مشابه</h2></div></div><div className="grid grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-[480px]:grid-cols-1">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div></section>}</main><Footer /></>
}
