import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'gold' | 'ghost' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  children: ReactNode
}

export const goldButtonClass = 'inline-flex items-center justify-center gap-1.5 rounded-full border-0 bg-gold px-[18px] py-2.5 text-sm font-semibold text-white transition-[background,transform] duration-150 motion-safe:animate-cta-pulse hover:bg-gold-2 hover:text-[#0D47A1] dark:text-[#0D47A1] dark:hover:text-white'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ variant = 'primary', size = 'md', loading = false, className = '', children, disabled, type = 'button', ...props }, ref) {
  const variantClass = variant === 'gold'
    ? goldButtonClass
    : variant === 'primary'
      ? 'rounded-xl border border-gold bg-gold text-white hover:bg-gold-2 hover:text-[#0D47A1]'
      : 'rounded-xl border border-line bg-surface text-muted hover:border-gold hover:text-text'
  const sizeClass = size === 'sm' ? 'min-h-9 px-3 py-1.5 text-xs' : size === 'lg' ? 'min-h-12 px-5 py-3 text-[15px]' : 'min-h-10 px-4 py-2 text-[13px]'
  return <button ref={ref} type={type} className={`inline-flex cursor-pointer items-center justify-center gap-1.5 font-inherit font-semibold transition-[background,color,border-color,transform] duration-200 hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2196F3] disabled:cursor-not-allowed ${variantClass} ${sizeClass} ${className}`.trim()} disabled={disabled || loading} aria-busy={loading || undefined} {...props}>{loading ? <><span className="h-3.5 w-3.5 animate-ui-spin rounded-full border-2 border-current border-s-start-transparent" aria-hidden="true" /> <span>در حال پردازش...</span></> : children}</button>
})
