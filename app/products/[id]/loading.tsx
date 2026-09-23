import { ProductCardSkeleton } from '@/components/Shared/Skeletons'

export default function Loading() {
  const shimmer = 'rounded-[10px] bg-[linear-gradient(100deg,color-mix(in_srgb,var(--surface-2)_80%,var(--line)),var(--surface-2),color-mix(in_srgb,var(--surface-2)_80%,var(--line)))] bg-[length:200%_100%] motion-reduce:animate-none animate-skeleton-shimmer'
  return <main><section className="mx-auto min-h-[520px] max-w-[1240px] px-7 pb-16 pt-[72px] max-[768px]:px-4 max-[768px]:pb-11 max-[768px]:pt-11 max-[480px]:px-3.5 max-[480px]:pt-[42px]"><div className="grid grid-cols-[.9fr_1.1fr] items-center gap-[46px] max-[980px]:grid-cols-1 max-[768px]:gap-6"><div className={`${shimmer} min-h-[360px] rounded-[28px] max-[480px]:min-h-[240px]`} /><div><div className={`${shimmer} h-3.5 w-[180px]`} /><div className={`${shimmer} mt-[18px] h-12 w-[min(620px,80%)]`} /><div className={`${shimmer} mt-[18px] h-6 w-[min(620px,85%)]`} /></div></div><div className="mt-7 grid grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-[480px]:grid-cols-1"><ProductCardSkeleton /><ProductCardSkeleton /><ProductCardSkeleton /></div></section></main>
}
