'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { MockUser } from '@/types'
export type { MockUser } from '@/types'

interface AuthContextValue {
  user: MockUser | null
  ready: boolean
  login: (identifier: string, password: string) => Promise<void>
  signup: (user: Omit<MockUser, 'id'> & { password: string }) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)
const storageKey = 'afrashop-mock-user'

function isMockUser(value: unknown): value is MockUser {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Record<string, unknown>
  return typeof candidate.id === 'string' && typeof candidate.name === 'string' && typeof candidate.phone === 'string' && (candidate.email === undefined || typeof candidate.email === 'string')
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => { try { const value = window.localStorage.getItem(storageKey); const parsed: unknown = value ? JSON.parse(value) : null; setUser(isMockUser(parsed) ? parsed : null) } catch { setUser(null) } setReady(true) }, 0)
    return () => window.clearTimeout(timer)
  }, [])

  function persist(nextUser: MockUser) {
    setUser(nextUser)
    try { window.localStorage.setItem(storageKey, JSON.stringify(nextUser)) } catch { /* mock auth still works for the current session */ }
  }
  async function login(identifier: string, password: string) { void password; await new Promise((resolve) => window.setTimeout(resolve, 700)); persist({ id: 'mock-user-1', name: 'کاربر افرا', phone: identifier.startsWith('09') ? identifier : '۰۹۱۲۰۰۰۰۰۰۰', email: identifier.includes('@') ? identifier : undefined }) }
  async function signup(nextUser: Omit<MockUser, 'id'> & { password: string }) { await new Promise((resolve) => window.setTimeout(resolve, 800)); persist({ id: `mock-user-${Date.now()}`, name: nextUser.name, phone: nextUser.phone, email: nextUser.email }) }
  function logout() {
    setUser(null)
    try { window.localStorage.removeItem(storageKey) } catch { /* ignore unavailable storage */ }
  }

  return <AuthContext.Provider value={{ user, ready, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}
