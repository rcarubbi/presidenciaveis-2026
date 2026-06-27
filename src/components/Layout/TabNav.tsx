import type { Tab } from '../../types'
import { Eye, BarChart3 } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  visao: Eye,
  pesquisas: BarChart3,
}

interface TabNavProps {
  tabs: Tab[]
  active: string
  onTabChange: (id: string) => void
}

export function TabNav({ tabs, active, onTabChange }: TabNavProps) {
  return (
    <nav className="sticky top-16 z-40 glass-tab overflow-x-auto" aria-label="Seções">
      <div className="max-w-7xl mx-auto flex gap-1 px-2">
        {tabs.map((tab) => {
          const Icon = iconMap[tab.icon] || Eye
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-400 ${
                isActive
                  ? 'bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30'
              }`}
              aria-current={isActive ? 'true' : undefined}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
