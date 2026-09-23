import Image from 'next/image'
import { preload } from 'react-dom'
import { keyProducts } from '@/data/products'
import { FadeInOnScroll } from '@/components/Shared/FadeInOnScroll'
import { ProductCard } from '@/components/Products/ProductCard'
import { Carousel } from './Carousel'

const mobileHeroImage = '/_next/image?url=%2Fhero-bg-mobile.jpg&w=640&q=45'

export function Hero() {
  // The mobile picture source is custom because the hero uses a responsive <picture>.
  // Preload the exact optimizer URL so mobile can start it before image parsing completes.
  preload(mobileHeroImage, { as: 'image', media: '(max-width: 768px)', fetchPriority: 'high' })

  return <section className="relative mx-auto mt-[18px] max-w-[1240px] overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(10,14,26,.55)_0%,rgba(10,14,26,.72)_55%,var(--bg)_100%)] px-7 pb-10 pt-16 before:pointer-events-none before:absolute before:-left-[8%] before:-top-[150px] before:z-0 before:h-[360px] before:w-[360px] before:rounded-full before:bg-[radial-gradient(circle,var(--violet),transparent_68%)] before:opacity-[.38] before:blur-[8px] before:animate-hero-float after:pointer-events-none after:absolute after:-bottom-[150px] after:right-[5%] after:z-0 after:h-[300px] after:w-[300px] after:rounded-full after:bg-[radial-gradient(circle,var(--teal),transparent_68%)] after:opacity-30 after:blur-[8px] after:animate-hero-float after:[animation-delay:-6s] motion-reduce:before:animate-none motion-reduce:after:animate-none max-[768px]:mt-3 max-[768px]:rounded-[22px] max-[768px]:px-4 max-[768px]:pb-6 max-[768px]:pt-[38px] max-[480px]:px-3.5 max-[480px]:pb-[18px] max-[480px]:pt-[30px]">
    <picture className="pointer-events-none absolute inset-0 z-0 block"><source media="(max-width: 768px)" srcSet={mobileHeroImage} sizes="100vw" /><Image className="absolute inset-0 h-full w-full object-cover object-[center_30%]" src="/hero-bg.jpg" alt="پس‌زمینه فروشگاه افرا شاپ" fill loading="eager" fetchPriority="high" quality={45} sizes="(max-width: 768px) 100vw, 1240px" /></picture>
    <span className="relative z-[1] inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/[.14] px-3 py-1.5 text-[12.5px] font-semibold tracking-[.02em] text-[#eafff4] backdrop-blur-[8px]"><span className="h-1.5 w-1.5 rounded-full bg-[#3ee08a]" aria-hidden="true" /> تحویل سریع، پرداخت امن با زرین‌پال</span>
    <h1 className="relative z-[1] m-[18px_0_12px] max-w-[760px] text-[clamp(30px,4.4vw,50px)] font-extrabold leading-[1.18] text-white [text-shadow:0_2px_20px_rgba(0,0,0,.35)] max-[768px]:mt-3.5 max-[768px]:text-[clamp(29px,7vw,40px)] max-[480px]:text-[30px]">اکانت، بازی و گیفت‌کارت با <em className="not-italic text-gold">تحویل مطمئن</em></h1>
    <p className="relative z-[1] m-0 mb-[30px] max-w-[560px] text-[16.5px] leading-[1.9] text-white/[.9] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] max-[768px]:mb-6 max-[768px]:text-[14.5px] max-[768px]:leading-[1.85] max-[480px]:text-[14px]">از اکانت‌های هوش مصنوعی تا گیفت‌کارت فروشگاه‌های جهانی — هر چیزی که برای دنیای دیجیتالت لازم داری، همین‌جا.</p>
    <div className="relative z-[1]"><Carousel>{keyProducts.map((product, index) => <FadeInOnScroll key={product.id} delay={(index % 4) * 70}><ProductCard product={product} variant="featured" /></FadeInOnScroll>)}</Carousel></div>
  </section>
}
