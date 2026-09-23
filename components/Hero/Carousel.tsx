'use client'

import { useRef, type ReactNode } from 'react'
import { Button } from '@/components/Shared/Button'

interface CarouselProps {
  children: ReactNode
}

export function Carousel({ children }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const scrollCarousel = (direction: number) => {
    carouselRef.current?.scrollBy({ left: direction * 270, behavior: 'smooth' })
  }

  return <div className="relative mt-2">
    <div className="mb-4 flex items-baseline justify-between max-[768px]:items-center">
      <h2 className="m-0 flex items-center gap-2.5 text-[19px] font-bold text-white max-[768px]:text-[17px]"><span className="text-gold" aria-hidden="true">◆</span> پرطرفدارترین‌ها</h2>
      <div className="flex gap-2">
        <Button type="button" variant="ghost" className="h-9 min-h-9 w-9 min-w-9 rounded-[10px] border border-white/35 bg-white/[.14] p-0 text-base text-white backdrop-blur-[8px] hover:border-white/50 hover:bg-white/[.24] max-[768px]:h-[42px] max-[768px]:min-h-[42px] max-[768px]:w-[42px] max-[768px]:min-w-[42px]" onClick={() => scrollCarousel(-1)} aria-label="قبلی">›</Button>
        <Button type="button" variant="ghost" className="h-9 min-h-9 w-9 min-w-9 rounded-[10px] border border-white/35 bg-white/[.14] p-0 text-base text-white backdrop-blur-[8px] hover:border-white/50 hover:bg-white/[.24] max-[768px]:h-[42px] max-[768px]:min-h-[42px] max-[768px]:w-[42px] max-[768px]:min-w-[42px]" onClick={() => scrollCarousel(1)} aria-label="بعدی">‹</Button>
      </div>
    </div>
    <div id="carousel" ref={carouselRef} className="flex snap-x snap-mandatory gap-[18px] overflow-x-auto overscroll-contain px-0.5 pb-[22px] pt-1.5 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden max-[768px]:gap-3 max-[768px]:pb-[18px]">
      {children}
    </div>
  </div>
}
