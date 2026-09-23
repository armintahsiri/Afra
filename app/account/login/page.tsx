import { AnnouncementBar } from '@/components/Header/AnnouncementBar'
import { AuthForm } from '@/components/Account/AuthForm'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({ title: 'ورود به حساب', description: 'ورود به حساب کاربری افرا شاپ برای پیگیری سفارش‌ها و خرید سریع‌تر.', path: '/account/login', noIndex: true })

export default function LoginPage() { return <><AnnouncementBar /><Header /><main><section className="grid grid-cols-1 min-h-[650px] place-items-center px-7 pb-16 pt-[70px] max-[768px]:px-4 max-[480px]:px-3.5"><AuthForm mode="login" /></section></main><Footer /></> }
