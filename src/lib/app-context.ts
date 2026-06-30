'use client'

import { createContext, use } from 'react'

export type Theme = 'light' | 'dark'

interface AppContextType {
  theme: Theme
  toggleTheme: () => void
}

const AppContext = createContext<AppContextType>({
  theme: 'light',
  toggleTheme: () => {},
})

export function useApp() {
  return use(AppContext)
}

export { AppContext }
