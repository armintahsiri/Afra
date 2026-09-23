import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'
import { productDetails } from '@/data/products'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// These are generated gradient placeholders because real product photography is not available yet.
// Revisit this once real images exist; photography generally performs better for social-share click-through.

type ProductImageProps = { params: Promise<{ id: string }> }

export default async function ProductOpenGraphImage({ params }: ProductImageProps) {
  const { id } = await params
  const fontData = await readFile(path.join(process.cwd(), 'public/fonts/vazirmatn-700.ttf'))
  const product = productDetails.find((item) => item.id === id)
  const title = product?.title || 'محصولات افرا شاپ'
  const category = product?.displayCategory || 'محصول دیجیتال'
  const art1 = product?.art1 || '#2196F3'
  const art2 = product?.art2 || '#0D47A1'
  return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '70px', color: 'white', background: `radial-gradient(circle at 15% 15%, ${art1}, transparent 45%), linear-gradient(135deg, ${art2}, #0D47A1)`, fontFamily: 'Vazirmatn' }}><div style={{ display: 'flex', fontSize: 26, opacity: .85 }}>افرا شاپ · {category}</div><div style={{ display: 'flex', marginTop: 24, fontSize: 62, fontWeight: 700, maxWidth: 1000 }}>{title}</div><div style={{ display: 'flex', marginTop: 24, fontSize: 28, color: '#E3F2FD' }}>تحویل سریع و پشتیبانی مطمئن</div></div>, { ...size, fonts: [{ name: 'Vazirmatn', data: fontData, weight: 700, style: 'normal' }] })
}
