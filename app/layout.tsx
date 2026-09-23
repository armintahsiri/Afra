import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { ReactNode } from 'react'
import './globals.css'
import { ThemeProvider } from '@/components/Theme/ThemeProvider'
import { AuthProvider } from '@/components/Account/AuthContext'
import { CartProvider } from '@/components/Shared/CartContext'
import { ToastProvider } from '@/components/Shared/ToastContext'
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/seo'

const vazirmatn = localFont({
  src: [
    { path: '../public/fonts/vazirmatn-400.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/vazirmatn-500.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/vazirmatn-600.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/vazirmatn-700.ttf', weight: '700', style: 'normal' },
    { path: '../public/fonts/vazirmatn-800.ttf', weight: '800', style: 'normal' },
    { path: '../public/fonts/vazirmatn-900.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-vazirmatn',
  display: 'swap',
  // The page uses multiple weights; let the browser request only the weights it needs.
  preload: false,
})

const ibmPlexMono = localFont({
  src: [
    { path: '../public/fonts/ibm-plex-mono-500.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/ibm-plex-mono-600.ttf', weight: '600', style: 'normal' },
  ],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  keywords: ['افرا شاپ', 'اکانت بازی', 'اکانت هوش مصنوعی', 'گیفت‌کارت', 'اشتراک دیجیتال'],
  alternates: { canonical: '/' },
  openGraph: { title: SITE_NAME, description: DEFAULT_DESCRIPTION, type: 'website', url: '/', siteName: SITE_NAME, locale: 'fa_IR', images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME}؛ فروشگاه محصولات دیجیتال` }] },
  twitter: { card: 'summary_large_image', title: SITE_NAME, description: DEFAULT_DESCRIPTION, images: [DEFAULT_OG_IMAGE] },
}

const themeScript = `(() => { try { document.documentElement.classList.add('js-ready'); const saved = localStorage.getItem('afrashop-theme'); const theme = saved === 'dark' || saved === 'light' ? saved : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.setAttribute('data-theme', theme); } catch (_) {} })()`

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><ThemeProvider><AuthProvider><CartProvider><ToastProvider>{children}</ToastProvider></CartProvider></AuthProvider></ThemeProvider></body></html>
}
