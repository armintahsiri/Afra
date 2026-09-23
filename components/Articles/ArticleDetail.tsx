import Link from 'next/link'
import type { ArticleBlock } from '@/types'
import { ROUTES } from '@/constants/routes'

export function ArticleContent({ blocks }: { blocks: ArticleBlock[] }) {
  return <div className="mt-[34px] rounded-[22px] border border-line bg-surface px-[clamp(20px,4vw,44px)] py-[30px] text-[15px] leading-[2.2] text-text shadow-[0_18px_38px_-30px_var(--shadow-soft)]">{blocks.map((block, index) => {
    if (block.type === 'heading') return <h2 className="mb-2.5 mt-7 text-[21px] text-text first:mt-0" key={index}>{block.text}</h2>
    if (block.type === 'list') return <ul className="mb-[22px] ps-[22px]" key={index}>{block.items.map((item) => <li className="my-1" key={item}>{item}</li>)}</ul>
    if (block.type === 'note') return <div className="mt-6 rounded-xl border-s-[3px] border-gold bg-gold/10 px-4 py-3.5 text-muted" key={index}><strong className="text-gold">{block.label}: </strong>{block.text}</div>
    return <p className="mb-[22px] last:mb-0" key={index}>{block.text}</p>
  })}</div>
}

export function ArticleBackLink() {
  return <Link href={ROUTES.ARTICLES} className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-[11px] text-[13px] font-bold text-gold transition-[transform,border-color,background] duration-200 hover:-translate-x-1 hover:border-gold hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2196F3]">← بازگشت به مقالات</Link>
}

export { ArticleShare } from './ArticleShare'
