'use client'

import { Toaster } from 'sonner'
import { useApp } from '@/lib/app-context'

export function ToasterProvider() {
  const { theme } = useApp()

  return (
    <Toaster
      position="top-right"
      theme={theme}
      toastOptions={{
        duration: 2500,
        className: 'text-sm',
        style: {
          borderRadius: '12px',
          border: theme === 'dark' ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.3)',
          background: theme === 'dark' ? 'rgba(15,23,42,0.92)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          color: theme === 'dark' ? '#f1f5f9' : '#111827',
          fontSize: '14px',
          boxShadow: theme === 'dark' ? '0 4px 24px rgba(0,0,0,0.3)' : '0 4px 24px rgba(0,0,0,0.08)',
        },
      }}
    />
  )
}
