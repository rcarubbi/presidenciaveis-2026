'use client'

import { Moon, Sun, GitCompare, Users, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useApp } from '@/lib/providers'

const tabs = [
  { id: 'candidatos', label: 'Candidatos', href: '/', icon: Users },
  { id: 'pesquisas', label: 'Pesquisas', href: '/pesquisas', icon: BarChart3 },
  { id: 'comparativo', label: 'Comparativo', href: '/comparar', icon: GitCompare },
]

export function Header() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useApp()

  const activeTab = pathname === '/pesquisas' ? 'pesquisas' : pathname.startsWith('/comparar') ? 'comparativo' : 'candidatos'

  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-gray-200/30 dark:border-gray-700/30 shadow-sm no-print" style={{ viewTransitionName: 'persistent-header' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-11">
          <div className="flex items-center gap-2">
            <GitCompare size={18} className="text-gray-700 dark:text-gray-200" />
            <h1 className="text-sm font-bold text-gray-800 dark:text-gray-100">
              Presidenciáveis <span className="text-gray-400 font-normal">2026</span>
            </h1>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gray-400"
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
        <nav className="flex gap-2 pb-3" aria-label="Seções" role="tablist">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <Link
                key={tab.id}
                href={tab.href}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`tabpanel-${tab.id}`}
                className={`relative flex items-center gap-1.5 px-4 py-2 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <Icon size={14} />
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gray-900 dark:bg-gray-100 rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
