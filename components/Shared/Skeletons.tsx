const shimmer = 'rounded-[10px] bg-[linear-gradient(100deg,color-mix(in_srgb,var(--surface-2)_80%,var(--line)),var(--surface-2),color-mix(in_srgb,var(--surface-2)_80%,var(--line)))] bg-[length:200%_100%] motion-reduce:animate-none animate-skeleton-shimmer'

export function ProductCardSkeleton() {
  return <div className="rounded-2xl border border-line bg-surface p-4 shadow-[0_1px_2px_rgba(0,0,0,.03)]" aria-hidden="true"><div className={`${shimmer} mb-3.5 block h-24`} /><div className={`${shimmer} mb-[11px] block h-[17px] w-[70%]`} /><div className={`${shimmer} mb-2.5 block h-3 w-[88%]`} /><div className={`${shimmer} block h-3.5 w-[42%]`} /></div>
}

export function ArticleCardSkeleton() {
  return <div className="overflow-hidden rounded-[18px] border border-line bg-surface" aria-hidden="true"><div className={`${shimmer} h-[120px] rounded-none`} /><div className="p-4"><div className={`${shimmer} mb-2.5 h-3 w-[42%]`} /><div className={`${shimmer} mb-2.5 h-[17px] w-[70%]`} /><div className={`${shimmer} h-[42px] w-[94%]`} /></div></div>
}

export function ListingSkeleton({ kind = 'products' }: { kind?: 'products' | 'articles' }) {
  const Skeleton = kind === 'articles' ? ArticleCardSkeleton : ProductCardSkeleton
  return <section className="mx-auto min-h-[520px] max-w-[1240px] px-7 py-16 max-[768px]:px-4 max-[768px]:py-11 max-[480px]:px-3.5 max-[480px]:py-9" aria-label="در حال بارگذاری"><div className="mb-[26px] flex items-end justify-between gap-3.5"><div><div className={`${shimmer} mb-2.5 h-[26px] w-[210px]`} /><div className={`${shimmer} h-3.5 w-[300px] max-w-[80vw]`} /></div></div><div className={kind === 'articles' ? 'grid grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-[768px]:gap-3.5 max-[480px]:grid-cols-1' : 'grid grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-[480px]:grid-cols-1'}>{Array.from({ length: kind === 'articles' ? 4 : 8 }, (_, index) => <Skeleton key={index} />)}</div></section>
}
