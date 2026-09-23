type PaginationProps = {
  page: number
  totalPages: number
  onChange: (page: number) => void
  label?: string
}
import { Button } from '@/components/Shared/Button'

export function Pagination({ page, totalPages, onChange, label = 'صفحه‌بندی' }: PaginationProps) {
  if (totalPages <= 1) return null
 return <nav className="mt-7 flex flex-wrap items-center justify-center gap-2" aria-label={label}><Button variant="ghost" className="min-h-10 min-w-10 rounded-full border border-line bg-surface px-3 py-2 text-[13px] font-bold text-muted transition-[background,color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-text disabled:cursor-not-allowed disabled:opacity-40" disabled={page === 1} onClick={() => onChange(page - 1)}>قبلی</Button>{Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => <Button variant="ghost" key={pageNumber} className={`min-h-10 min-w-10 rounded-full border border-line bg-surface px-3 py-2 text-[13px] font-bold text-muted transition-[background,color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-text ${page === pageNumber ? '!border-gold !bg-gold !text-white dark:!text-[#0D47A1]' : ''}`} aria-current={page === pageNumber ? 'page' : undefined} onClick={() => onChange(pageNumber)}>{pageNumber}</Button>)}<Button variant="ghost" className="min-h-10 min-w-10 rounded-full border border-line bg-surface px-3 py-2 text-[13px] font-bold text-muted transition-[background,color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-text disabled:cursor-not-allowed disabled:opacity-40" disabled={page === totalPages} onClick={() => onChange(page + 1)}>بعدی</Button></nav>
}
