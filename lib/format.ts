export function normalizeDigits(value: string) { return value.replace(/[۰-۹]/g, (digit) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit))) }
export function parsePriceInThousands(value: string) { return Number(normalizeDigits(value).replace(/[^0-9]/g, '')) || 0 }
export function formatThousands(value: number) { return `${value.toLocaleString('fa-IR')} هزار تومان` }
export function formatQuantity(value: number) { return value.toLocaleString('fa-IR') }
