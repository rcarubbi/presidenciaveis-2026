'use client'

import { Toaster } from 'sonner'

export function ToasterProvider() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        duration: 2500,
        className: 'text-sm',
        style: {
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.3)',
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          color: '#111827',
          fontSize: '14px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        },
      }}
    />
  )
}
