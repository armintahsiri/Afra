import { DiscordIcon, MailIcon, TelegramIcon } from '@/components/Shared/icons'
import { contactChannels } from '@/data/contactChannels'

export function ContactNeonSection() {
  const icons = { discord: DiscordIcon, telegram: TelegramIcon, email: MailIcon }
  const variantStyles: Record<string, string> = {
    discord: '[--neon-color:#5865F2]',
    telegram: '[--neon-color:#29a9eb]',
    'telegram-channel': '[--neon-color:#26A5E4]',
    email: '[--neon-color:#f4c953]',
  }

  return (
    <section className="relative isolate mx-auto mb-[18px] max-w-[1240px] overflow-hidden rounded-[32px] border border-line bg-surface-2 px-7 pb-14 pt-12 text-center shadow-[0_18px_42px_-30px_var(--shadow-soft),inset_0_1px_0_rgba(255,255,255,.7)] before:pointer-events-none before:absolute before:inset-[14%_20%] before:-z-10 before:rounded-full before:bg-[#5865F2]/[.12] before:blur-[58px] max-[768px]:mx-4 max-[768px]:rounded-3xl max-[768px]:px-4 max-[768px]:pb-10 max-[768px]:pt-[34px] max-[480px]:mx-3.5 max-[480px]:rounded-[24px] max-[480px]:px-3 max-[480px]:pb-[34px] max-[480px]:pt-[30px] dark:border-white/10 dark:bg-[#080c17] dark:bg-[radial-gradient(360px_220px_at_9%_20%,rgba(88,101,242,.26),transparent_72%),radial-gradient(360px_220px_at_91%_22%,rgba(41,169,235,.22),transparent_72%),radial-gradient(340px_220px_at_50%_100%,rgba(244,201,83,.16),transparent_72%)] dark:shadow-[0_24px_60px_-34px_rgba(0,0,0,.72),inset_0_1px_0_rgba(255,255,255,.08)]" aria-labelledby="contact-neon-title">
      <div className="relative z-[1] mx-auto mb-9 max-w-[620px]">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1.5 text-xs font-extrabold text-teal">همیشه در دسترس</span>
        <h2 id="contact-neon-title" className="mb-1.5 mt-0 text-[26px] font-extrabold text-text dark:text-white dark:[text-shadow:0_0_18px_rgba(255,255,255,.15)] max-[480px]:text-[22px]">با ما در ارتباط باش</h2>
        <p className="m-0 text-sm leading-[1.9] text-muted dark:text-white/[.62] max-[480px]:text-[13px]">برای پشتیبانی، خبرها و گفت‌وگو درباره محصولات دیجیتال از راه‌های زیر با ما در تماس باش.</p>
      </div>

      <div className="relative z-[1] grid grid-cols-4 gap-[18px] max-[980px]:grid-cols-2 max-[768px]:gap-3 max-[480px]:gap-2.5">
        {contactChannels.map((channel) => {
          const Icon = icons[channel.icon]
          const variant = variantStyles[channel.variant] ?? variantStyles.email
          const shape = channel.variant === 'telegram'
            ? 'rounded-[50%_24px_50%_24px]'
            : channel.variant === 'telegram-channel'
              ? 'rotate-3 rounded-3xl group-hover:rotate-[7deg]'
              : channel.variant === 'email'
                ? 'rounded-[22px_34px_22px_34px]'
                : 'rounded-[32px_22px_32px_22px]'
          const icon = <span className={`relative grid h-[104px] w-[104px] place-items-center border border-[color-mix(in_srgb,var(--neon-color)_90%,white_10%)] bg-surface text-[color:var(--neon-color)] shadow-[0_0_6px_var(--neon-color),0_0_16px_color-mix(in_srgb,var(--neon-color)_90%,transparent),0_0_38px_color-mix(in_srgb,var(--neon-color)_64%,transparent),inset_0_0_22px_color-mix(in_srgb,var(--neon-color)_30%,transparent)] transition-[transform,box-shadow,background,border-radius] duration-300 motion-safe:animate-contact-neon-flicker motion-reduce:animate-none max-[768px]:h-[92px] max-[768px]:w-[92px] max-[480px]:h-[92px] max-[480px]:w-[92px] dark:bg-[#080c17]/[.84] group-hover:scale-[1.08] group-hover:-rotate-3 group-hover:bg-surface dark:group-hover:bg-[#080c17]/[.98] dark:group-hover:shadow-[0_0_6px_#fff,0_0_16px_var(--neon-color),0_0_38px_var(--neon-color),0_0_76px_color-mix(in_srgb,var(--neon-color)_68%,transparent),inset_0_0_30px_color-mix(in_srgb,var(--neon-color)_44%,transparent)] ${shape}`}>
            <Icon className="block h-[70px] w-[70px] [filter:drop-shadow(0_0_2px_#fff)_drop-shadow(0_0_7px_var(--neon-color))_drop-shadow(0_0_22px_var(--neon-color))] transition-[transform,filter] duration-300 group-hover:scale-[1.08] group-hover:[filter:drop-shadow(0_0_3px_#fff)_drop-shadow(0_0_9px_var(--neon-color))_drop-shadow(0_0_28px_var(--neon-color))] max-[480px]:h-[62px] max-[480px]:w-[62px]" aria-hidden="true" />
          </span>
          const content = <>{icon}<span className="text-sm font-extrabold text-text transition-[color,text-shadow] duration-300 dark:text-white/[.86] group-hover:text-[color:var(--neon-color)] dark:group-hover:text-white dark:group-hover:[text-shadow:0_0_7px_var(--neon-color),0_0_18px_color-mix(in_srgb,var(--neon-color)_70%,transparent)]">{channel.label}</span>{channel.disabled && <span className="text-[10px] font-bold text-gold">به‌زودی</span>}</>
          const cardClass = `group relative flex min-h-[232px] flex-col items-center justify-center gap-[18px] overflow-hidden rounded-3xl border border-white/[.12] bg-white/[.86] px-3.5 pb-[22px] pt-[26px] text-text shadow-[inset_0_1px_0_rgba(255,255,255,.7),0_12px_28px_-24px_var(--shadow-soft)] transition-[transform,border-color,box-shadow,background] duration-300 max-[768px]:min-h-[200px] max-[768px]:px-2 max-[768px]:py-5 max-[480px]:min-h-[184px] dark:bg-white/10 dark:text-white dark:shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_18px_30px_-25px_rgba(0,0,0,.8)] ${variant}`

          return channel.disabled
            ? <span key={channel.id} className={`${cardClass} cursor-not-allowed`} aria-label={`${channel.label}، به‌زودی`} aria-disabled="true">{content}</span>
            : <a key={channel.id} className={`${cardClass} hover:-translate-y-1.5 hover:border-[color-mix(in_srgb,var(--neon-color)_70%,var(--line))] hover:bg-[linear-gradient(145deg,color-mix(in_srgb,var(--neon-color)_12%,var(--surface)),var(--surface))] hover:shadow-[0_0_6px_color-mix(in_srgb,var(--neon-color)_48%,transparent),0_18px_38px_-18px_color-mix(in_srgb,var(--neon-color)_42%,transparent),inset_0_1px_0_rgba(255,255,255,.8)] dark:hover:border-[color-mix(in_srgb,var(--neon-color)_86%,white_8%)] dark:hover:bg-[linear-gradient(145deg,color-mix(in_srgb,var(--neon-color)_20%,transparent),rgba(255,255,255,.04))] dark:hover:shadow-[0_0_6px_color-mix(in_srgb,var(--neon-color)_80%,transparent),0_20px_42px_-18px_color-mix(in_srgb,var(--neon-color)_65%,transparent),inset_0_1px_0_rgba(255,255,255,.16)]`} href={channel.href} aria-label={channel.label}>{content}</a>
        })}
      </div>
    </section>
  )
}
