'use client'

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react'

type Theme = 'light' | 'dark'
type FontSize = 'normal' | 'large' | 'xlarge'

interface AppContextType {
  theme: Theme
  toggleTheme: () => void
  fontSize: FontSize
  toggleFontSize: () => void
}

const AppContext = createContext<AppContextType>({
  theme: 'light',
  toggleTheme: () => {},
  fontSize: 'normal',
  toggleFontSize: () => {},
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [fontSize, setFontSize] = useState<FontSize>('normal')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)

    const savedFont = (localStorage.getItem('fontSize') as FontSize) || 'normal'
    setFontSize(savedFont)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', next)
      document.documentElement.classList.toggle('dark', next === 'dark')
      return next
    })
  }, [])

  const toggleFontSize = useCallback(() => {
    setFontSize(prev => {
      const next = prev === 'normal' ? 'large' : prev === 'large' ? 'xlarge' : 'normal'
      localStorage.setItem('fontSize', next)
      document.documentElement.classList.remove('text-large', 'text-xlarge')
      if (next !== 'normal') document.documentElement.classList.add(`text-${next}`)
      return next
    })
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme, fontSize, toggleFontSize }), [theme, toggleTheme, fontSize, toggleFontSize])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
