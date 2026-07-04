import Link from 'next/link'
import type { Metadata } from 'next'

// oxlint-disable-next-line react/only-export-components
export const metadata: Metadata = {
  title: '404 — Página não encontrada | Presidenciáveis 2026',
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="bento-card p-10 max-w-md">
        <h1 className="text-6xl font-black tracking-tight text-slate-200 dark:text-slate-700 mb-4">404</h1>
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
          Página não encontrada
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="civic-button"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  )
}
