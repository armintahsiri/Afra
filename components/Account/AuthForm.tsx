'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from './AuthContext'
import { Button } from '@/components/Shared/Button'
import { Input } from '@/components/Shared/Input'
import { useToast } from '@/components/Shared/ToastContext'
import { ROUTES } from '@/constants/routes'
import { validateAuth } from '@/lib/validation'

type AuthMode = 'login' | 'signup'
type AuthValues = { name: string; identifier: string; password: string; confirmPassword: string }


export function AuthForm({ mode }: { mode: AuthMode }) {
  const router = useRouter(); const { login, signup } = useAuth(); const { showToast } = useToast(); const isSignup = mode === 'signup'
  const [values, setValues] = useState<AuthValues>({ name: '', identifier: '', password: '', confirmPassword: '' }); const [errors, setErrors] = useState<Record<string, string>>({}); const [touched, setTouched] = useState<Record<string, boolean>>({}); const [submitting, setSubmitting] = useState(false)
  function update(field: keyof AuthValues, value: string) { const nextValues = { ...values, [field]: value }; setValues(nextValues); if (touched[field]) setErrors(validateAuth(nextValues, isSignup)) }
  function touch(field: keyof AuthValues) { setTouched((current) => ({ ...current, [field]: true })); setErrors(validateAuth(values, isSignup)) }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const nextErrors = validateAuth(values, isSignup); setErrors(nextErrors); setTouched({ name: true, identifier: true, password: true, confirmPassword: true })
    if (Object.keys(nextErrors).length) { showToast('لطفاً خطاهای فرم را برطرف کنید.', 'error'); window.setTimeout(() => document.querySelector<HTMLElement>('.auth-form [data-field-error="true"] input')?.focus(), 0); return }
    setSubmitting(true)
    try { if (isSignup) await signup({ name: values.name.trim(), phone: values.identifier.startsWith('09') ? values.identifier : '۰۹۱۲۰۰۰۰۰۰۰', email: values.identifier.includes('@') ? values.identifier : undefined, password: values.password }); else await login(values.identifier, values.password); showToast(isSignup ? 'حساب کاربری با موفقیت ساخته شد.' : 'با موفقیت وارد شدی.', 'success'); router.push(ROUTES.ACCOUNT) } catch { showToast('عملیات انجام نشد؛ دوباره تلاش کن.', 'error') } finally { setSubmitting(false) }
  }
  const fieldError = (field: string) => touched[field] ? errors[field] : undefined
  const fieldValid = (field: keyof AuthValues) => Boolean(touched[field] && !errors[field] && values[field])
  return <div className="w-full max-w-[470px] rounded-[24px] border border-line bg-surface p-[30px] shadow-[0_22px_48px_-34px_var(--shadow-soft)] max-[480px]:px-4 max-[480px]:py-5"><span className="mb-2 inline-block text-xs font-extrabold text-gold">afrashop</span><h1 className="mb-2 mt-0 text-[28px] text-text">{isSignup ? 'ساخت حساب کاربری' : 'خوش برگشتی'}</h1><p className="mb-[22px] mt-0 text-[13px] text-muted">{isSignup ? 'برای پیگیری سفارش‌ها و خرید سریع‌تر ثبت‌نام کن.' : 'وارد حساب کاربری‌ات شو و سفارش‌ها را ببین.'}</p><form className="auth-form flex flex-col gap-3.5" onSubmit={submit} noValidate>
    {isSignup && <Input id="auth-name" label="نام و نام خانوادگی" value={values.name} onChange={(event) => update('name', event.target.value)} onBlur={() => touch('name')} placeholder="علی رضایی" error={fieldError('name')} valid={fieldValid('name')} required />}
    <Input id="auth-identifier" label="ایمیل یا شماره موبایل" dir="ltr" value={values.identifier} onChange={(event) => update('identifier', event.target.value)} onBlur={() => touch('identifier')} placeholder="09120000000 یا you@example.com" error={fieldError('identifier')} valid={fieldValid('identifier')} required />
    <Input id="auth-password" label="رمز عبور" dir="ltr" type="password" value={values.password} onChange={(event) => update('password', event.target.value)} onBlur={() => touch('password')} placeholder="حداقل ۶ کاراکتر" error={fieldError('password')} valid={fieldValid('password')} required minLength={6} />
    {isSignup && <Input id="auth-confirm-password" label="تکرار رمز عبور" dir="ltr" type="password" value={values.confirmPassword} onChange={(event) => update('confirmPassword', event.target.value)} onBlur={() => touch('confirmPassword')} placeholder="رمز عبور را دوباره وارد کن" error={fieldError('confirmPassword')} valid={fieldValid('confirmPassword')} required />}
    <Button variant="gold" className="mt-1 w-full disabled:animate-none disabled:opacity-[.48]" type="submit" disabled={submitting} loading={submitting}>{isSignup ? 'ثبت‌نام mock' : 'ورود mock'}</Button><p className="m-0 text-[11px] leading-[1.7] text-muted">این ورود/ثبت‌نام نمایشی است و به سرور واقعی متصل نیست.</p></form><div className="mt-5 text-center text-xs text-muted">{isSignup ? <>قبلاً ثبت‌نام کردی؟ <Link className="font-extrabold text-gold" href={ROUTES.ACCOUNT_LOGIN}>وارد شو</Link></> : <>حساب نداری؟ <Link className="font-extrabold text-gold" href={ROUTES.ACCOUNT_SIGNUP}>ثبت‌نام کن</Link></>}</div></div>
}
