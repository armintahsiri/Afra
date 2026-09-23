export type ContactChannel = { id: string; label: string; href?: string; icon: 'discord' | 'telegram' | 'email'; variant: 'discord' | 'telegram' | 'telegram-channel' | 'email'; disabled?: boolean }
export const contactChannels: ContactChannel[] = [
  { id: 'discord', label: 'سرور دیسکورد', icon: 'discord', variant: 'discord', disabled: true },
  { id: 'telegram-group', label: 'گروه تلگرام', icon: 'telegram', variant: 'telegram', disabled: true },
  { id: 'telegram-channel', label: 'کانال تلگرام', icon: 'telegram', variant: 'telegram-channel', disabled: true },
  { id: 'email', label: 'ایمیل پشتیبانی', href: 'mailto:hello@afrashop.ir', icon: 'email', variant: 'email' },
]
