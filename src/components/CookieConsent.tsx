'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'cookie-consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) setVisible(true)
  }, [])

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    if (gaId && typeof window !== 'undefined') {
      ;(window as unknown as Record<string, boolean>)[`ga-disable-${gaId}`] = false
    }
    setDismissed(true)
    setTimeout(() => setVisible(false), 300)
  }

  function handleRefuse() {
    localStorage.setItem(STORAGE_KEY, 'refused')
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    if (gaId && typeof window !== 'undefined') {
      ;(window as unknown as Record<string, boolean>)[`ga-disable-${gaId}`] = true
    }
    setDismissed(true)
    setTimeout(() => setVisible(false), 300)
  }

  if (!visible) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
        dismissed ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="max-w-7xl mx-auto glass p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <p className="text-xs text-gray-500 dark:text-gray-400 flex-1">
          Este site utiliza cookies do Google Analytics para análise de audiência. Nenhum dado pessoal é coletado.
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={handleRefuse}
            className="px-4 py-1.5 text-xs font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all"
          >
            Recusar
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 text-xs font-medium rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 transition-opacity"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}
