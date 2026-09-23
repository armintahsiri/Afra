import { ArticleCardSkeleton } from '@/components/Shared/Skeletons'

export default function Loading() {
  const shimmer = 'rounded-[10px] bg-[linear-gradient(100deg,color-mix(in_srgb,var(--surface-2)_80%,var(--line)),var(--surface-2),color-mix(in_srgb,var(--surface-2)_80%,var(--line)))] bg-[length:200%_100%] motion-reduce:animate-none animate-skeleton-shimmer'
  return <main><section className="mx-auto min-h-[520px] max-w-[900px] px-7 pb-16 pt-[72px] max-[768px]:px-4 max-[768px]:pb-11 max-[768px]:pt-11 max-[480px]:px-3.5 max-[480px]:pt-[42px]"><div className={`${shimmer} h-3.5 w-[180px]`} /><div className={`${shimmer} mt-[18px] h-12 w-[min(620px,80%)]`} /><div className={`${shimmer} mt-[18px] h-6 w-[min(620px,85%)]`} /><div className={`${shimmer} mt-8 h-[260px] w-full rounded-[24px]`} /><div className="mt-[34px] rounded-[22px] border border-line bg-surface p-[30px]"><ArticleCardSkeleton /></div></section></main>
}
