'use client'

import Link from 'next/link'
import { GitCompare, Users, BarChart3, Landmark } from 'lucide-react'
import { FooterActions } from '../FooterActions'

const navLinks = [
  { href: '/', label: 'Candidatos', icon: Users },
  { href: '/pesquisas', label: 'Pesquisas', icon: BarChart3 },
  { href: '/comparar', label: 'Comparativo', icon: GitCompare },
]

export function Footer() {
  return (
    <footer className="mt-16 border-t border-blue-100/80 pb-6 pt-10 dark:border-blue-900/40">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-blue-800 text-white shadow-lg shadow-blue-900/20 dark:bg-blue-500 dark:text-slate-950">
              <Landmark size={18} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-black tracking-tight text-slate-950 dark:text-white">Presidenciáveis</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-800 dark:text-blue-300">2026 radar público</span>
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-400 dark:text-slate-500">
            Site informativo com perfis, planos de governo, escândalos, financiamento e posicionamento dos candidatos à Presidência da República.
          </p>
          <p className="text-xs text-slate-400/70">
            Art. 57-B Lei 9.504/97 — Sem fins eleitorais.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">Navegue</h3>
          <nav className="flex flex-col gap-2">
            {navLinks.map((l) => {
              const Icon = l.icon
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex min-h-10 w-fit items-center gap-2.5 rounded-xl px-3 text-sm font-bold text-slate-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  <Icon size={16} />
                  {l.label}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="space-y-3 md:text-right md:flex md:flex-col md:items-end">
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">Fonte</h3>
          <p className="text-sm text-slate-400 dark:text-slate-500">
            Dados oficiais:{' '}
            <a
              href="https://dadosabertos.tse.jus.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-800 underline decoration-blue-200 underline-offset-2 transition-colors hover:text-blue-950 dark:text-blue-400 dark:decoration-blue-800 dark:hover:text-blue-300"
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
