import type { ReactNode } from 'react'
import { Button } from '@/components/Shared/Button'
import { Modal } from '@/components/Shared/Modal'

export interface MobileNavProps {
  open: boolean
  onClose: () => void
  children: ReactNode
}

export function MobileNav({ open, onClose, children }: MobileNavProps) {
  return <Modal open={open} onClose={onClose} ariaLabel="منوی موبایل" id="mobile-nav-panel" overlayClassName="!bg-transparent !backdrop-blur-0" className="fixed inset-0 z-[100] overflow-y-auto bg-[linear-gradient(160deg,var(--surface-2),var(--bg)_72%)] p-5 pb-8 max-[480px]:px-[18px] max-[480px]:pb-8 motion-reduce:transition-none">
    <div className="mx-auto mb-5 flex max-w-[520px] items-center justify-between text-lg text-text">
      <strong>afrashop</strong>
      <Button type="button" variant="ghost" className="h-11 min-h-11 w-11 min-w-11 rounded-xl border border-line bg-surface p-0 text-[28px] leading-none text-text" aria-label="بستن منو" onClick={onClose}>×</Button>
    </div>
    <nav className="mx-auto flex max-w-[520px] flex-col items-stretch gap-1.5" aria-label="ناوبری موبایل">{children}</nav>
  </Modal>
}
