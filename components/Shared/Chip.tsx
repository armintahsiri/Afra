import type { ButtonHTMLAttributes } from 'react'

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> { active?: boolean }
export function Chip({ active = false, className = '', children, ...props }: ChipProps) {
  return <button type="button" className={`chip inline-flex min-h-10 items-center justify-center rounded-full border px-[15px] py-2 text-[13.5px] font-semibold transition-[background,color,border-color,transform] duration-150 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2196F3] ${active ? 'border-transparent bg-gold text-white dark:text-[#0D47A1]' : 'border-line bg-surface text-muted hover:border-black/20 hover:text-text'} ${className}`.trim()} {...props}>{children}</button>
}
