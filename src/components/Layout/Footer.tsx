'use client'

import Link from 'next/link'
import { GitCompare, Users, BarChart3 } from 'lucide-react'
import { FooterActions } from '../FooterActions'

const navLinks = [
  { href: '/', label: 'Candidatos', icon: Users },
  { href: '/pesquisas', label: 'Pesquisas', icon: BarChart3 },
  { href: '/comparar', label: 'Comparativo', icon: GitCompare },
]

export function Footer() {
  return (
    <footer className="mt-20 pt-8 pb-6 border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-800 dark:text-gray-100">
            <GitCompare size={16} />
            Presidenciáveis 2026
          </div>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
            Site informativo com perfis, planos de governo, escândalos, financiamento e posicionamento dos candidatos à Presidência da República.
          </p>
          <p className="text-xs text-gray-400/70">
            Art. 57-B Lei 9.504/97 — Sem fins eleitorais.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Navegue</h3>
          <nav className="flex flex-col gap-2">
            {navLinks.map((l) => {
              const Icon = l.icon
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  <Icon size={14} />
                  {l.label}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="space-y-3 md:text-right">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Fonte</h3>
          <p className="text-xs text-gray-400">
            Dados oficiais:{' '}
            <a
              href="https://dadosabertos.tse.jus.br"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-gray-300 dark:decoration-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Tribunal Superior Eleitoral
            </a>
          </p>
          <FooterActions />
        </div>
      </div>
    </footer>
  )
}
