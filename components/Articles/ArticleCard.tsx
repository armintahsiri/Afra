import Link from 'next/link'
import type { Article } from '@/types'
import { ROUTES } from '@/constants/routes'
import { ArticleCover } from './ArticleCover'

export function ArticleCard({ article }: { article: Article }) {
  return <article className="overflow-hidden rounded-[18px] border border-line bg-surface transition-[transform,box-shadow] duration-[220ms] hover:-translate-y-1 hover:shadow-[0_16px_32px_-18px_rgba(0,0,0,.18)]"><Link href={ROUTES.ARTICLE(article.slug)} className="block text-inherit no-underline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2196F3]"><ArticleCover article={article} /><div className="p-4"><p className="mb-2 flex items-center gap-1.5 text-[11px] text-muted"><span className="font-semibold text-gold">{article.category}</span><span aria-hidden="true">·</span><span>{article.readTime}</span></p><h3 className="mb-2 text-[14.5px] font-bold leading-[1.6] text-text">{article.title}</h3><p className="m-0 text-[12.5px] leading-[1.8] text-muted">{article.excerpt}</p><span className="mt-2.5 inline-block text-[12.5px] font-semibold text-gold">ادامه مطلب ←</span></div></Link></article>
}
