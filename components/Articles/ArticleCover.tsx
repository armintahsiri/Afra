import type { CSSProperties } from 'react'
import type { Article } from '@/types'

interface ArticleCoverProps {
  article: Pick<Article, 'number' | 'art1' | 'art2'>
  detail?: boolean
  className?: string
}

export function ArticleCover({ article, detail = false, className = '' }: ArticleCoverProps) {
  return <div className={`relative isolate flex items-center justify-center overflow-hidden bg-[radial-gradient(120%_140%_at_20%_0%,var(--art1),var(--art2))] text-[26px] font-extrabold text-white/[.95] ${detail ? 'mt-[34px] h-[260px] rounded-[24px] text-[64px] max-[480px]:h-[180px] max-[480px]:text-[48px]' : 'h-[120px]'} ${className}`.trim()} style={{ '--art1': article.art1, '--art2': article.art2 } as CSSProperties} aria-hidden="true">
    <svg className="pointer-events-none absolute inset-0 h-full w-full text-white/[.18]" viewBox={detail ? '0 0 500 260' : '0 0 180 120'} preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth={detail ? 2 : 1.5}>
        {detail ? <><path d="M-20 210L150 40l100 100L520-30" /><path d="M-20 260L180 60l100 100L520 0" /><circle cx="390" cy="65" r="42" /><path d="M70 26h70M105-10v70" /></> : <><path d="M-20 95L55 20l45 45 65-65" /><path d="M-10 120L70 40l36 36 70-70" /><circle cx="142" cy="28" r="19" /><path d="M22 8h36M40-10v36" /></>}
      </g>
    </svg>
    <span className="relative z-10">{article.number}</span>
  </div>
}
