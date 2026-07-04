'use client'

import { Share2, Check } from 'lucide-react'
import { useState, useCallback } from 'react'

export function ShareButton() {
  const [copied, setCopied] = useState(false)

  const share = useCallback(async () => {
    const url = window.location.href
    if (navigator.share) {
      await navigator.share({ url })
    } else {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [])

  return (
    <button
      onClick={share}
      className="flex min-h-11 w-fit items-center gap-2 rounded-full border border-blue-100/80 bg-white/70 px-4 text-sm font-bold text-slate-600 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-blue-900/50 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
      aria-label={copied ? 'Link copiado' : 'Compartilhar'}
    >
      {copied ? <Check size={16} /> : <Share2 size={16} />}
      {copied ? 'Copiado' : 'Compartilhar'}
    </button>
  )
}
