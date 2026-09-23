import type { Subscription } from '@/types'
export type { Subscription } from '@/types'

export const subscriptions: Subscription[] = [
  { id: 'xbox-pass', variant: 'xbox', icon: 'X', title: 'Xbox Game Pass Ultimate', description: 'دسترسی به صدها بازی روی کنسول، پی‌سی و کلاود، همراه با EA Play', plans: [{ name: '۱ ماهه', price: '۳۸۰ هزار تومان' }, { name: '۳ ماهه', price: '۱٬۰۵۰ هزار تومان' }, { name: '۱۲ ماهه', price: '۳٬۸۰۰ هزار تومان' }] },
  { id: 'playstation-plus', variant: 'ps', icon: 'PS', title: 'PlayStation Plus', description: 'پلن‌های Essential، Extra و Premium با فعال‌سازی روی اکانت شما', plans: [{ name: 'Essential', price: '۳۲۰ هزار تومان' }, { name: 'Extra', price: '۵۹۰ هزار تومان' }, { name: 'Premium', price: '۸۲۰ هزار تومان' }] },
]
