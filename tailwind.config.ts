import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './constants/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './types/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector', 'html[data-theme="dark"]'],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        line: 'var(--line)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        gold: 'var(--gold)',
        'gold-2': 'var(--gold-2)',
        violet: 'var(--violet)',
        'violet-2': 'var(--violet-2)',
        teal: 'var(--teal)',
        'header-bg': 'var(--header-bg)',
        'dropdown-bg': 'var(--dropdown-bg)',
        'shadow-soft': 'var(--shadow-soft)',
        discord: 'var(--discord)',
        telegram: 'var(--telegram)',
        'telegram-channel': 'var(--telegram-channel)',
        email: 'var(--email)',
        error: 'var(--error)',
        success: 'var(--success)',
        info: 'var(--info)',
        art1: 'var(--art1)',
        art2: 'var(--art2)',
        neon: 'var(--neon-color)',
      },
      borderRadius: {
        brand: 'var(--radius)',
      },
      boxShadow: {
        soft: '0 8px 30px -12px var(--shadow-soft)',
        'soft-card': '0 18px 38px -30px var(--shadow-soft)',
      },
      fontFamily: {
        sans: ['var(--font-vazirmatn)', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'var(--font-vazirmatn)', 'monospace'],
      },
      spacing: {
        brand: 'var(--radius)',
      },
      transitionDelay: {
        reveal: 'var(--reveal-delay)',
      },
      keyframes: {
        'hero-float': {
          from: { transform: 'translate3d(-10px, 8px, 0) scale(1)' },
          to: { transform: 'translate3d(16px, -12px, 0) scale(1.08)' },
        },
        'ui-spin': {
          to: { transform: 'rotate(360deg)' },
        },
        'cart-drawer-in': {
          from: { opacity: '0', transform: 'translateX(24px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'skeleton-shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'contact-neon-flicker': {
          '0%, 18%, 22%, 62%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '20%, 64%': { opacity: '.86', filter: 'brightness(.92)' },
          '66%': { opacity: '1', filter: 'brightness(1.12)' },
        },
        'toast-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'cta-pulse': {
          '0%, 72%, 100%': { boxShadow: '0 0 0 0 color-mix(in srgb, var(--gold) 0%, transparent)' },
          '84%': { boxShadow: '0 0 0 7px color-mix(in srgb, var(--gold) 18%, transparent)' },
        },
      },
      animation: {
        'hero-float': 'hero-float 14s ease-in-out infinite alternate',
        'ui-spin': 'ui-spin .7s linear infinite',
        'cart-drawer-in': 'cart-drawer-in .24s cubic-bezier(.16,1,.3,1)',
        'skeleton-shimmer': 'skeleton-shimmer 1.5s ease-in-out infinite',
        'contact-neon-flicker': 'contact-neon-flicker 3.6s ease-in-out infinite',
        'toast-in': 'toast-in .24s ease both',
        'cta-pulse': 'cta-pulse 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
