import { Moon, Sun, GitCompare, Eye, BarChart3 } from 'lucide-react'
import type { Tab } from '../../types'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  visao: Eye,
  pesquisas: BarChart3,
}

interface HeaderProps {
  dark: boolean
  onToggleDark: () => void
  tabs: Tab[]
  activeTab: string
  onTabChange: (id: string) => void
}

export function Header({ dark, onToggleDark, tabs, activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-gray-200/30 dark:border-gray-700/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-11">
          <div className="flex items-center gap-2">
            <GitCompare size={18} className="text-gray-700 dark:text-gray-200" />
            <h1 className="text-sm font-bold text-gray-800 dark:text-gray-100">
              Presidenciáveis <span className="text-gray-400 font-normal">2026</span>
            </h1>
          </div>
          <button
            onClick={onToggleDark}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gray-400"
            aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
        <nav className="flex gap-1 pb-3" aria-label="Seções">
          {tabs.map((tab) => {
            const Icon = iconMap[tab.icon] || Eye
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-gray-800/10 dark:bg-white/15 text-gray-900 dark:text-gray-100 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-800/5 dark:hover:bg-white/10'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
