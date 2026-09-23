'use client'

import { Button } from '@/components/Shared/Button'
import { useToast } from '@/components/Shared/ToastContext'

export function ArticleShare({ title }: { title: string }) {
  const { showToast } = useToast()
  async function share() {
    const url = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ title, url })
        return
      }
      if (navigator.clipboard) await navigator.clipboard.writeText(url)
      else {
        const input = document.createElement('textarea')
        input.value = url; input.setAttribute('readonly', ''); input.style.position = 'fixed'; input.style.opacity = '0'; document.body.appendChild(input); input.select(); document.execCommand('copy'); input.remove()
      }
      showToast('لینک مقاله کپی شد.', 'success')
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      showToast('کپی لینک انجام نشد؛ دوباره تلاش کن.', 'error')
    }
  }
  return <Button type="button" variant="ghost" className="min-h-10 rounded-full border border-line bg-surface px-[15px] py-[9px] text-gold" onClick={share}>کپی لینک</Button>
}
