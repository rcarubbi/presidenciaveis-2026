'use client'

import type { CandidateSubTab } from '../../types'
import { User, Briefcase, Shield, DollarSign, Grid3X3, FileText } from 'lucide-react'

interface ComparisonTabsProps {
  activeTab: CandidateSubTab
  onTabChange: (tab: CandidateSubTab) => void
}

const cmpTabs: { id: CandidateSubTab; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { id: 'dados', label: 'Dados Pessoais', icon: User },
  { id: 'carreira', label: 'Carreira', icon: Briefcase },
  { id: 'escandalos', label: 'Escândalos', icon: Shield },
  { id: 'financiamento', label: 'Financiamento', icon: DollarSign },
  { id: 'posicionamento', label: 'Posicionamento', icon: Grid3X3 },
  { id: 'plano', label: 'Plano de Governo', icon: FileText },
]

export function ComparisonTabs({ activeTab, onTabChange }: ComparisonTabsProps) {
  return (
    <nav className="flex gap-1 overflow-x-auto glass p-1 rounded-xl" aria-label="Seções comparativas" role="tablist">
      {cmpTabs.map((tab) => {
        const Icon = tab.icon
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            role="tab"
            id={`cmp-tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`cmp-panel-${tab.id}`}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-200 flex-1 justify-center ${isActive
              ? 'bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 shadow-sm'
              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30'
              }`}
          >
            <Icon size={14} />
            <span className="hidden sm:inline text-xs">{tab.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
