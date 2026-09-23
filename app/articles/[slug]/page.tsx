import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AnnouncementBar } from '@/components/Header/AnnouncementBar'
import { ArticleBackLink, ArticleContent, ArticleShare } from '@/components/Articles/ArticleDetail'
import { ArticleCard } from '@/components/Articles/ArticleCard'
import { ArticleCover } from '@/components/Articles/ArticleCover'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { articles } from '@/data/articles'
import { absoluteUrl, createPageMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/Shared/Breadcrumbs'
import { BackToTop } from '@/components/Shared/BackToTop'
import { ROUTES } from '@/constants/routes'

type ArticlePageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })) }

async function getArticle(params: ArticlePageProps['params']) {
  const { slug } = await params
  return articles.find((article) => article.slug === slug)
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticle(params)
  if (!article) return createPageMetadata({ title: 'مقاله پیدا نشد', description: 'مقاله موردنظر در افرا شاپ پیدا نشد.', path: ROUTES.ARTICLES, noIndex: true })
  return createPageMetadata({ title: article.title, description: `${article.title}؛ ${article.excerpt}`, path: ROUTES.ARTICLE(article.slug), keywords: [article.category, article.title, 'راهنمای دیجیتال'], image: `${ROUTES.ARTICLE(article.slug)}/opengraph-image`, type: 'article' })
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticle(params)
  if (!article) notFound()
  const related = articles.filter((item) => item.id !== article.id && item.category === article.category).slice(0, 3)
  const fallbackRelated = related.length >= 3 ? related : articles.filter((item) => item.id !== article.id).slice(0, 3)
  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: article.title, description: article.excerpt, datePublished: article.publishedAt, dateModified: article.updatedAt, author: { '@type': 'Organization', name: 'افرا شاپ' }, image: absoluteUrl(`${ROUTES.ARTICLE(article.slug)}/opengraph-image`), mainEntityOfPage: absoluteUrl(ROUTES.ARTICLE(article.slug)) }
  return <><AnnouncementBar /><Header /><main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }} /><article className="mx-auto max-w-[900px] px-7 pb-16 pt-[72px] max-[768px]:px-4 max-[768px]:pb-11 max-[768px]:pt-11 max-[480px]:px-3.5 max-[480px]:pt-[42px]"><Breadcrumbs items={[{ label: 'خانه', href: ROUTES.HOME }, { label: 'مقالات', href: ROUTES.ARTICLES }, { label: article.title }]} /><span className="text-[13px] font-extrabold text-gold">{article.category} · {article.readTime} · {article.date}</span><h1 className="mb-4 mt-3 max-w-[760px] text-[clamp(30px,5vw,52px)] leading-[1.35] tracking-[-.03em] text-text">{article.title}</h1><p className="m-0 max-w-[720px] text-[17px] leading-[2] text-muted max-[480px]:text-sm max-[480px]:leading-[1.9]">{article.excerpt}</p><ArticleCover article={article} detail /><div className="mt-[18px] flex justify-start"><ArticleShare title={article.title} /></div><ArticleContent blocks={article.content} /><ArticleBackLink /></article><section className="mx-auto max-w-[1240px] px-7 pb-16 pt-5 max-[768px]:px-4 max-[768px]:pb-11 max-[480px]:px-3.5"><div className="mb-[26px] flex items-end justify-between gap-3.5 max-[768px]:items-start"><div><span className="mb-2 inline-block text-xs font-extrabold text-gold">برای مطالعه بیشتر</span><h2 className="m-0 text-2xl font-extrabold text-text max-[768px]:text-[21px]">مقالات مرتبط</h2></div></div><div className="grid grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-[768px]:gap-3.5 max-[480px]:grid-cols-1">{fallbackRelated.map((item) => <ArticleCard key={item.id} article={item} />)}</div></section></main><BackToTop /><Footer /></>
}
