import type { BuyerInfo } from '@/types'
import { normalizeDigits } from '@/lib/format'

export type BuyerInfoErrors = Partial<Record<keyof BuyerInfo, string>>
export type AuthValidationValues = { name: string; identifier: string; password: string; confirmPassword: string }

export function isValidIranianPhone(value: string) { return /^09\d{9}$/.test(normalizeDigits(value.trim())) }
export function isValidEmail(value: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) }

export function validateBuyerInfo(values: BuyerInfo): BuyerInfoErrors {
  const errors: BuyerInfoErrors = {}
  if (values.fullName.trim().length < 3) errors.fullName = 'نام و نام خانوادگی را وارد کن.'
  if (!isValidIranianPhone(values.phone)) errors.phone = 'شماره موبایل باید با 09 و ۱۱ رقم وارد شود.'
  if (values.email && !isValidEmail(values.email)) errors.email = 'فرمت ایمیل درست نیست.'
  if (values.deliveryContact.trim().length < 3) errors.deliveryContact = values.deliveryMethod === 'telegram' ? 'آیدی تلگرام را وارد کن.' : 'ایمیل تحویل را وارد کن.'
  if (values.deliveryMethod === 'email' && !isValidEmail(values.deliveryContact)) errors.deliveryContact = 'ایمیل تحویل معتبر نیست.'
  return errors
}

export function validateAuth(values: AuthValidationValues, isSignup: boolean) {
  const errors: Record<string, string> = {}
  if (isSignup && values.name.trim().length < 3) errors.name = 'نام را وارد کن.'
  if (!values.identifier.trim()) errors.identifier = 'ایمیل یا شماره موبایل را وارد کن.'
  else if (values.identifier.includes('@') ? !isValidEmail(values.identifier) : !isValidIranianPhone(values.identifier)) errors.identifier = 'ایمیل یا شماره موبایل معتبر نیست.'
  if (values.password.length < 6) errors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد.'
  if (isSignup && values.password !== values.confirmPassword) errors.confirmPassword = 'تکرار رمز عبور یکسان نیست.'
  return errors
}
