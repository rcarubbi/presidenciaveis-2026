'use client'

import { toast } from 'sonner'
import { Share2 } from 'lucide-react'

export function FooterActions() {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    toast.success('Link copiado!')
  }

  return (
    <button
      onClick={handleCopyLink}
      className="no-print inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-200"
    >
      <Share2 size={12} />
      Copiar link
    </button>
  )
}
