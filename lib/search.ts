export function normalizeSearchText(value: string) {
  return value.toLocaleLowerCase('fa-IR').replace(/[يى]/g, 'ی').replace(/ك/g, 'ک').replace(/[\u200c\u200e\u200f]/g, ' ').replace(/\s+/g, ' ').trim()
}

export function matchesSearch(query: string, searchableText: string) {
  const normalizedQuery = normalizeSearchText(query)
  return !normalizedQuery || normalizeSearchText(searchableText).includes(normalizedQuery)
}
