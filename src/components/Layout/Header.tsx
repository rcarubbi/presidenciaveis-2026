'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, GitCompare, Users, BarChart3, Menu, X, Landmark } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useApp } from '@/lib/app-context'

const tabs = [
  { id: 'candidatos', label: 'Candidatos', href: '/', icon: Users },
  { id: 'pesquisas', label: 'Pesquisas', href: '/pesquisas', icon: BarChart3 },
  { id: 'comparativo', label: 'Comparativo', href: '/comparar', icon: GitCompare },
]

export function Header() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', esc)
    return () => document.removeEventListener('keydown', esc)
  }, [menuOpen])

  const activeTab = pathname === '/pesquisas' ? 'pesquisas' : pathname.startsWith('/comparar') ? 'comparativo' : 'candidatos'

  return (
    <header className="sticky top-0 z-50 glass-strong border-b no-print" style={{ viewTransitionName: 'persistent-header' }}>
      <div className="px-8">
        <div className="flex min-h-16 items-center justify-between gap-3">
          <Link href="/" className="group flex min-h-11 items-center gap-3 rounded-full pr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-blue-800 text-white shadow-lg shadow-blue-900/20 transition-transform group-hover:-rotate-3 dark:bg-blue-500 dark:text-slate-950">
              <Landmark size={18} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-black tracking-tight text-slate-950 dark:text-white">Presidenciáveis</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-800 dark:text-blue-300">2026 radar público</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 rounded-full border border-blue-100/80 bg-white/70 p-1 shadow-sm dark:border-blue-900/50 dark:bg-slate-900/70 md:flex" aria-label="Seções">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <Link
                  key={tab.id}
                  href={tab.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative flex min-h-10 items-center gap-2 rounded-full px-4 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? 'bg-blue-800 text-white shadow-md shadow-blue-900/15 dark:bg-blue-500 dark:text-slate-950'
                      : 'text-slate-600 hover:bg-blue-50 hover:text-blue-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  }`}
                >
                  <Icon size={15} />
                  {tab.label}
                </Link>
              )
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/comparar" className="hidden civic-button md:inline-flex">
              <GitCompare size={16} />
              Comparar
            </Link>
            <button
              onClick={toggleTheme}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-blue-100/80 bg-white/70 text-slate-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-blue-900/50 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-blue-100/80 bg-white/70 text-slate-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-blue-900/50 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        <div
          className={`overflow-hidden border-t border-blue-100/70 transition-all duration-300 ease-out dark:border-blue-900/40 md:hidden ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 py-3">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <Link
                  key={tab.id}
                  href={tab.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex min-h-11 items-center gap-3 rounded-2xl px-4 text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-800 text-white dark:bg-blue-500 dark:text-slate-950'
                      : 'text-slate-600 hover:bg-blue-50 hover:text-blue-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
