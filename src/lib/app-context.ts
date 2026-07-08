'use client'

import { createContext, use } from 'react'

export type Theme = 'light' | 'dark'

interface AppContextType {
  theme: Theme
  toggleTheme: () => void
  settingsOpen: boolean
  setSettingsOpen: (open: boolean) => void
}

const AppContext = createContext<AppContextType>({
  theme: 'light',
  toggleTheme: () => {},
  settingsOpen: false,
  setSettingsOpen: () => {},
})

export function useApp() {
  return use(AppContext)
}

export { AppContext }
