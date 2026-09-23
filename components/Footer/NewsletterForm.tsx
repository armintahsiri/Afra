'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/Shared/Button'
import { Input } from '@/components/Shared/Input'
import { useToast } from '@/components/Shared/ToastContext'
import { isValidEmail } from '@/lib/validation'

export function NewsletterForm() {
  const [email, setEmail] = useState(''); const [touched, setTouched] = useState(false); const [submitted, setSubmitted] = useState(false); const [submitting, setSubmitting] = useState(false); const { showToast } = useToast()
  const error = touched ? (!email.trim() ? 'ایمیل را وارد کن.' : !isValidEmail(email) ? 'فرمت ایمیل درست نیست.' : undefined) : undefined
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setTouched(true); if (!email.trim() || error) { showToast('لطفاً ایمیل معتبر وارد کن.', 'error'); return } setSubmitting(true); window.setTimeout(() => { setSubmitting(false); setSubmitted(true); setEmail(''); showToast('عضویت در خبرنامه با موفقیت انجام شد.', 'success') }, 500) }
  return <form className={`flex min-w-[330px] items-center gap-1.5 rounded-full border border-line bg-surface p-1 max-[768px]:min-w-0 max-[768px]:w-full ${submitted ? 'opacity-90' : ''}`} onSubmit={submit} noValidate>
    <Input id="newsletter-email" label="ایمیل شما" className="contents [&>span]:sr-only" inputClassName="h-[34px] min-w-0 flex-1 border-0 bg-transparent px-3 text-xs text-text outline-0 placeholder:text-muted" type="email" value={email} onChange={(event) => setEmail(event.target.value)} onBlur={() => setTouched(true)} placeholder="ایمیل شما" error={error} valid={touched && !error && Boolean(email)} />
    <Button type="submit" variant="primary" className="min-h-[34px] rounded-full border-0 px-4 py-1.5 text-xs max-[480px]:px-[13px]" disabled={submitting || Boolean(error) || !email.trim()} loading={submitting}>عضویت</Button>
    <span className="min-w-0 whitespace-nowrap text-[11px] text-teal" role="status" aria-live="polite">{submitted ? 'با تشکر!' : ''}</span>
  </form>
}
