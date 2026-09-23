import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'
import { articles } from '@/data/articles'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// These are generated gradient placeholders because real article photography is not available yet.
// Revisit this once real images exist; photography generally performs better for social-share click-through.

type ArticleImageProps = { params: Promise<{ slug: string }> }

export default async function ArticleOpenGraphImage({ params }: ArticleImageProps) {
  const { slug } = await params
  const fontData = await readFile(path.join(process.cwd(), 'public/fonts/vazirmatn-700.ttf'))
  const article = articles.find((item) => item.slug === slug)
  const title = article?.title || 'مقالات افرا شاپ'
  const category = article?.category || 'مجله افرا شاپ'
  const art1 = article?.art1 || '#5e5ce6'
  const art2 = article?.art2 || '#171338'
  return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '70px', color: 'white', background: `radial-gradient(circle at 15% 15%, ${art1}, transparent 45%), linear-gradient(135deg, ${art2}, #0D47A1)`, fontFamily: 'Vazirmatn' }}><div style={{ display: 'flex', fontSize: 26, opacity: .85 }}>افرا شاپ · {category}</div><div style={{ display: 'flex', marginTop: 24, fontSize: 58, fontWeight: 700, maxWidth: 1000 }}>{title}</div><div style={{ display: 'flex', marginTop: 24, fontSize: 28, color: '#E3F2FD' }}>راهنما و اخبار دنیای دیجیتال</div></div>, { ...size, fonts: [{ name: 'Vazirmatn', data: fontData, weight: 700, style: 'normal' }] })
}
