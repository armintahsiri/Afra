type FilterChipsProps<T extends string> = {
  options: readonly T[]
  value: T
  onChange: (value: T) => void
}
import { Chip } from '@/components/Shared/Chip'

export function FilterChips<T extends string>({ options, value, onChange }: FilterChipsProps<T>) {
  return <div className="flex flex-wrap gap-2 max-[768px]:flex-nowrap max-[768px]:overflow-x-auto max-[768px]:pb-1 max-[768px]:[scrollbar-width:none] max-[768px]:[&::-webkit-scrollbar]:hidden" role="group" aria-label="فیلتر دسته‌بندی">{options.map((option) => <Chip key={option} active={value === option} aria-pressed={value === option} onClick={() => onChange(option)}>{option}</Chip>)}</div>
}
