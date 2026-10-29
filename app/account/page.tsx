import { AnnouncementBar } from '@/components/Header/AnnouncementBar'
import { AccountDashboard } from '@/components/Account/AccountDashboard'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({ title: 'حساب کاربری', description: 'داشبورد حساب کاربری و سفارش‌های ونوس.', path: '/account', noIndex: true })

export default function AccountPage() { return <><AnnouncementBar /><Header /><main><AccountDashboard /></main><Footer /></> }
