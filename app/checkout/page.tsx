import { AnnouncementBar } from '@/components/Header/AnnouncementBar'
import { CheckoutClient } from '@/components/Checkout/CheckoutClient'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({ title: 'تکمیل خرید', description: 'تکمیل سفارش و ثبت اطلاعات تحویل محصولات دیجیتال افرا شاپ.', path: '/checkout', noIndex: true })

export default function CheckoutPage() { return <><AnnouncementBar /><Header /><main><CheckoutClient /></main><Footer /></> }
