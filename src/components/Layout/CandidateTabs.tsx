'use client'

import type { CandidateSubTab } from '../../types'
import { Eye, User, Briefcase, FileText, Shield, DollarSign, Grid3X3 } from 'lucide-react'

interface CandidateTabsProps {
  candidateId: string
  activeTab: CandidateSubTab
  onTabChange: (tab: CandidateSubTab) => void
}

const tabs: { id: CandidateSubTab; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { id: 'hero', label: 'Visão Geral', icon: Eye },
  { id: 'dados', label: 'Dados Pessoais', icon: User },
  { id: 'carreira', label: 'Carreira', icon: Briefcase },
  { id: 'plano', label: 'Plano Governo', icon: FileText },
  { id: 'escandalos', label: 'Escândalos', icon: Shield },
  { id: 'financiamento', label: 'Financiamento', icon: DollarSign },
  { id: 'posicionamento', label: 'Posicionamento', icon: Grid3X3 },
]

export function CandidateTabs({ candidateId, activeTab, onTabChange }: CandidateTabsProps) {
  return (
    <nav className="flex gap-1 overflow-x-auto glass p-1 rounded-xl" aria-label="Seções do candidato" role="tablist">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            role="tab"
            id={`subtab-${candidateId}-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`subpanel-${candidateId}-${tab.id}`}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex items-center gap-2 px-3 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-200 flex-1 justify-center ${
              isActive
                ? 'text-gray-900 dark:text-gray-100'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            <Icon size={14} />
            <span className="hidden sm:inline text-xs">{tab.label}</span>
            {isActive && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gray-900 dark:bg-gray-100 rounded-full" />
            )}
          </button>
        )
      })}
    </nav>
  )
}
