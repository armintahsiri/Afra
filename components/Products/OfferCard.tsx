import Link from 'next/link'
import type { OfferProduct } from '@/types'
import { ROUTES } from '@/constants/routes'
import { Badge } from '@/components/Shared/Badge'
import { ProductArt } from '@/components/Shared/ProductArt'

export interface OfferCardProps { product: OfferProduct }
export function OfferCard({ product }: OfferCardProps) {
  return <Link href={ROUTES.PRODUCT(product.id)} className="group relative flex items-center gap-4 overflow-hidden rounded-[18px] border border-line bg-surface p-5 transition-[transform,box-shadow] duration-[220ms] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_22px_40px_-16px_rgba(0,0,0,.22)] motion-reduce:transition-none" id={product.id}><Badge tone="discount" className="absolute start-3.5 top-3.5 bg-[#ff3b30] px-[9px] py-1 text-[11px] font-bold text-white">{product.discount}</Badge><ProductArt art={product.art} art1={product.art1} art2={product.art2} className="h-[76px] w-[76px] shrink-0 rounded-[14px] text-[26px] font-extrabold" /><div><h4 className="m-0 mb-1 text-[15px] font-bold text-text">{product.title}</h4><p className="m-0 mb-2 text-[12px] text-muted">{product.category}</p><div className="flex items-center gap-2"><span className="text-[12.5px] text-muted line-through">{product.oldPrice}</span><span className="text-[15px] font-bold text-text">{product.newPrice}</span></div></div></Link>
}
