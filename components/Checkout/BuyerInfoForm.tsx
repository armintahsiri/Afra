'use client'

import { useMemo, useState, type FormEvent } from 'react'
import { Button } from '@/components/Shared/Button'
import { Input } from '@/components/Shared/Input'
import { COPY } from '@/constants/copy'
import type { BuyerInfo } from '@/types'
import { useToast } from '@/components/Shared/ToastContext'
import { validateBuyerInfo } from '@/lib/validation'
export type { BuyerInfo } from '@/types'

export interface BuyerInfoFormProps { onSubmit: (data: BuyerInfo) => Promise<void> }
const initial: BuyerInfo = { fullName: '', phone: '', email: '', deliveryMethod: 'telegram', deliveryContact: '' }
export { validateBuyerInfo } from '@/lib/validation'

export function BuyerInfoForm({ onSubmit }: BuyerInfoFormProps) {
  const [values, setValues] = useState<BuyerInfo>(initial); const [touched, setTouched] = useState<Partial<Record<keyof BuyerInfo, boolean>>>({}); const [submitting, setSubmitting] = useState(false); const { showToast } = useToast()
  const errors = useMemo(() => validateBuyerInfo(values), [values]); const valid = Object.keys(errors).length === 0
  const update = (field: keyof BuyerInfo, value: string) => setValues((current) => ({ ...current, [field]: value }))
  const showError = (field: keyof BuyerInfo) => touched[field] ? errors[field] : undefined
  const isValid = (field: keyof BuyerInfo) => Boolean(touched[field] && !errors[field] && values[field])
  const touch = (field: keyof BuyerInfo) => setTouched((current) => ({ ...current, [field]: true }))
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setTouched({ fullName: true, phone: true, email: true, deliveryMethod: true, deliveryContact: true }); if (!valid) { showToast('لطفاً خطاهای فرم را برطرف کنید.', 'error'); window.setTimeout(() => document.querySelector<HTMLElement>('.buyer-form [data-field-error="true"] input')?.focus(), 0); return } setSubmitting(true); try { await onSubmit(values) } catch { showToast('ثبت سفارش انجام نشد؛ دوباره تلاش کن.', 'error') } finally { setSubmitting(false) } }
  return <form className="flex flex-col gap-3.5" onSubmit={submit} noValidate><div className="grid grid-cols-2 gap-3.5 max-[768px]:grid-cols-1">
    <Input id="buyer-full-name" label="نام و نام خانوادگی" value={values.fullName} onChange={(event) => update('fullName', event.target.value)} onBlur={() => touch('fullName')} placeholder="مثلاً علی رضایی" error={showError('fullName')} valid={isValid('fullName')} required />
    <Input id="buyer-phone" label="شماره موبایل" dir="ltr" inputMode="tel" value={values.phone} onChange={(event) => update('phone', event.target.value)} onBlur={() => touch('phone')} placeholder="09120000000" error={showError('phone')} valid={isValid('phone')} required />
    <Input id="buyer-email" label={<>ایمیل <span>(اختیاری)</span></>} dir="ltr" type="email" value={values.email} onChange={(event) => update('email', event.target.value)} onBlur={() => touch('email')} placeholder="you@example.com" error={showError('email')} valid={isValid('email')} />
    <label className="flex flex-col gap-[7px] text-xs font-bold text-text" htmlFor="delivery-method">روش تحویل<select className="min-h-11 w-full rounded-xl border border-line bg-surface-2 px-3 py-[9px] text-xs text-text outline-none transition-[border-color,box-shadow,background] duration-200 focus:border-gold focus:bg-surface focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--gold)_16%,transparent)]" id="delivery-method" value={values.deliveryMethod} onChange={(event) => update('deliveryMethod', event.target.value as BuyerInfo['deliveryMethod'])}><option value="telegram">تلگرام</option><option value="email">ایمیل</option></select></label>
    <Input id="buyer-delivery-contact" className="col-span-full max-[768px]:col-auto" label={values.deliveryMethod === 'telegram' ? 'آیدی تلگرام برای تحویل' : 'ایمیل برای تحویل'} dir="ltr" value={values.deliveryContact} onChange={(event) => update('deliveryContact', event.target.value)} onBlur={() => touch('deliveryContact')} placeholder={values.deliveryMethod === 'telegram' ? '@username' : 'delivery@example.com'} error={showError('deliveryContact')} valid={isValid('deliveryContact')} required />
  </div><Button type="submit" variant="gold" className="mt-[5px] min-h-[46px] w-full disabled:animate-none disabled:opacity-[.48]" disabled={!valid} loading={submitting}>ادامه و پرداخت با زرین‌پال</Button><p className="m-0 text-[11px] leading-[1.7] text-muted">{COPY.forms.paymentMock}</p></form>
}
