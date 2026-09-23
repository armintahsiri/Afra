import { articles } from '@/data/articles'
import { FadeInOnScroll } from '@/components/Shared/FadeInOnScroll'
import { ArticleCard } from './ArticleCard'

export function ArticlesSection() {
  return <section className="mx-auto max-w-[1240px] px-7 pb-16 pt-0 max-[768px]:px-4 max-[768px]:pb-11 max-[480px]:px-3.5 max-[480px]:pb-9" id="articles"><div className="mb-[26px] flex flex-wrap items-end justify-between gap-3.5 max-[768px]:items-start"><div><h2 className="m-0 text-2xl font-extrabold text-text max-[768px]:text-[21px] max-[768px]:leading-[1.55]">جدیدترین مقالات</h2><p className="m-0 mt-1.5 text-[14.5px] text-muted max-[768px]:text-[13.5px] max-[768px]:leading-[1.8]">آموزش و اخبار دنیای بازی و هوش مصنوعی</p></div></div><div className="grid grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-[768px]:gap-3.5 max-[480px]:grid-cols-1">{articles.map((article, index) => <FadeInOnScroll key={article.id} delay={(index % 4) * 70}><ArticleCard article={article} /></FadeInOnScroll>)}</div></section>
  
}
