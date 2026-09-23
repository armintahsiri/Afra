import { AnnouncementBar } from '@/components/Header/AnnouncementBar'
import { AuthForm } from '@/components/Account/AuthForm'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({ title: 'ثبت‌نام', description: 'ساخت حساب کاربری افرا شاپ برای تجربه خرید سریع‌تر و پیگیری سفارش‌ها.', path: '/account/signup', noIndex: true })

export default function SignupPage() { return <><AnnouncementBar /><Header /><main><section className="grid grid-cols-1 min-h-[650px] place-items-center px-7 pb-16 pt-[70px] max-[768px]:px-4 max-[480px]:px-3.5"><AuthForm mode="signup" /></section></main><Footer /></> }
