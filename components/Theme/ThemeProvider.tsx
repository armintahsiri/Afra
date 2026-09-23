'use client'

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextValue = { theme: Theme; toggleTheme: () => void }

const ThemeContext = createContext<ThemeContextValue>({ theme: 'light', toggleTheme: () => undefined })

function getStoredTheme(): Theme {
  let saved: string | null = null
  try { saved = window.localStorage.getItem('afrashop-theme') } catch { /* local preview storage can be blocked */ }
  return saved === 'dark' || saved === 'light' ? saved : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Keep the server and hydration render deterministic. The blocking theme
  // script sets the document attribute before paint; we sync React state
  // immediately after hydration to avoid text mismatches in the header.
  const [theme, setTheme] = useState<Theme>('light')
  const didCommitRef = useRef(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : getStoredTheme())
    }, 0)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!didCommitRef.current) {
      didCommitRef.current = true
      return
    }
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try { window.localStorage.setItem('afrashop-theme', next) } catch { /* keep the toggle working without storage */ }
      return next
    })
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
