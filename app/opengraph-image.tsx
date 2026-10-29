import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'ونوس؛ فروشگاه لوازم خانگی'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  const fontData = await readFile(path.join(process.cwd(), 'public/fonts/vazirmatn-700.ttf'))
  return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', background: 'linear-gradient(135deg, #0D47A1 0%, #2196F3 55%, #90CAF9 100%)', fontFamily: 'Vazirmatn' }}><div style={{ fontSize: 74, fontWeight: 700 }}>ونوس</div><div style={{ marginTop: 18, fontSize: 30, opacity: .9 }}>یخچال، لباسشویی و لوازم خانگی با گارانتی مطمئن</div></div>, { ...size, fonts: [{ name: 'Vazirmatn', data: fontData, weight: 700, style: 'normal' }] })
}
