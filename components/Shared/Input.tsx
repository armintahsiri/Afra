import { useId, type InputHTMLAttributes, type ReactNode } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  error?: string
  valid?: boolean
  hint?: string
  inputClassName?: string
}

export function Input({ label, error, valid = false, hint, inputClassName = '', className = '', id, ...props }: InputProps) {
  const generatedId = useId(); const inputId = id || `input-${generatedId.replace(/:/g, '')}`; const messageId = `${inputId}-message`; const describedBy = [props['aria-describedby'], error || hint ? messageId : undefined].filter(Boolean).join(' ') || undefined
  const stateClass = error ? 'border-[#e76a73]' : valid ? 'border-[color-mix(in_srgb,var(--teal)_55%,var(--line))]' : 'border-line'
  return <label className={`flex flex-col gap-[7px] text-xs font-bold text-text ${className}`.trim()} data-field-error={error ? 'true' : undefined} data-field-valid={valid ? 'true' : undefined} htmlFor={inputId}>{label && <span className="font-bold text-text">{label}</span>}<input id={inputId} className={`min-h-11 w-full rounded-xl border bg-surface-2 px-3 py-[9px] text-xs text-text outline-none transition-[border-color,box-shadow,background] duration-200 placeholder:text-muted focus:border-gold focus:bg-surface focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--gold)_16%,transparent)] ${stateClass} ${inputClassName}`.trim()} {...props} aria-invalid={error ? true : undefined} aria-describedby={describedBy} />{error ? <small id={messageId} className="text-[10.5px] font-medium text-[#d95d68]">{error}</small> : hint ? <small id={messageId} className="text-[10.5px] font-medium text-muted">{hint}</small> : null}</label>
}
