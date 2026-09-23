import type { CSSProperties } from 'react'

export function ProductArt({ art, art1, art2, className = '' }: { art: string; art1: string; art2: string; className?: string }) {
  const style = { '--art1': art1, '--art2': art2 } as CSSProperties
  return <div className={`art grid place-items-center bg-[radial-gradient(120%_140%_at_20%_0%,var(--art1),var(--art2))] text-[rgba(255,255,255,.95)] ${className}`} style={style} aria-hidden="true">{art}</div>
}
