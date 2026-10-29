import type { Subscription } from '@/types'
export type { Subscription } from '@/types'

export const subscriptions: Subscription[] = [
  { id: 'venus-warranty', variant: 'xbox', icon: 'G', title: 'گارانتی طلایی ونوس', description: 'گارانتی اصالت و سلامت کالا با تعویض قطعه در نمایندگی مجاز؛ برای همه سفارش‌های فروشگاه فعال است.', plans: [{ name: '۱ ساله', price: 'رایگان' }, { name: '۳ ساله', price: '۲٬۹۰۰ هزار تومان' }, { name: '۵ ساله', price: '۴٬۹۰۰ هزار تومان' }] },
  { id: 'venus-install', variant: 'ps', icon: 'S', title: 'نصب و راه‌اندازی حرفه‌ای', description: 'تیم تخصصی ونوس کالای شما را در منزل تحویل می‌دهد و نصب و راه‌اندازی اولیه را انجام می‌دهد.', plans: [{ name: 'یخچال و فریزر', price: 'رایگان' }, { name: 'لباسشویی و ظرفشویی', price: 'رایگان' }, { name: 'سایر لوازم', price: 'رایگان' }] },
]
