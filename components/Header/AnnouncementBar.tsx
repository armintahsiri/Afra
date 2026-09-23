'use client'

import { useState } from 'react'
import { Button } from '@/components/Shared/Button'

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false)
  const stateClass = dismissed
    ? 'pointer-events-none max-h-0 min-h-0 overflow-hidden py-0 opacity-0'
    : 'max-h-12 min-h-8'

  return (
    <div className={`relative flex w-full items-center justify-center gap-3 px-[42px] py-1.5 text-center text-xs font-semibold leading-[1.5] text-white transition-[opacity,max-height,min-height,padding] duration-200 max-[768px]:px-[42px] max-[768px]:py-[7px] max-[768px]:text-[11px] max-[480px]:justify-start max-[480px]:px-[38px] ${stateClass} bg-[linear-gradient(90deg,#0D47A1,#2196F3,#0D47A1)]`} role="status">
      <span>ارسال آنی بعد از پرداخت</span>
      <Button type="button" variant="ghost" className="!absolute end-3.5 top-1/2 !grid !h-6 !min-h-6 !w-6 !min-w-6 !-translate-y-1/2 !transform place-items-center !rounded-full !border-0 bg-white/20 !p-0 text-lg leading-none !text-white hover:!translate-y-[-50%] hover:!border-0 hover:!bg-white/20 hover:!text-white max-[480px]:end-3" aria-label="بستن اعلان" onClick={() => setDismissed(true)}>×</Button>
    </div>
  )
}
