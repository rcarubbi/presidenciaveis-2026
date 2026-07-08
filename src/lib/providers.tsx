'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { AppContext } from './app-context'
import type { Theme } from './app-context'

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [settingsOpen, setSettingsOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', next)
      document.documentElement.classList.toggle('dark', next === 'dark')
      return next
    })
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme, settingsOpen, setSettingsOpen }), [theme, toggleTheme, settingsOpen])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
