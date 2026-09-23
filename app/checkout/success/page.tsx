import { AnnouncementBar } from '@/components/Header/AnnouncementBar'
import { CheckoutSuccess } from '@/components/Checkout/CheckoutSuccess'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({ title: 'پرداخت موفق', description: 'تأیید ثبت سفارش نمایشی افرا شاپ.', path: '/checkout/success', noIndex: true })

export default function CheckoutSuccessPage() { return <><AnnouncementBar /><Header /><main><CheckoutSuccess /></main><Footer /></> }
