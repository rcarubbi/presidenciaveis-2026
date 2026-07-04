'use client'

import type { CandidateSubTab } from '../../types'
import { Eye, User, Briefcase, FileText, Shield, DollarSign, Grid3X3, Video, Newspaper } from 'lucide-react'

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
  { id: 'cobertura', label: 'Cobertura', icon: Newspaper },
  { id: 'escandalos', label: 'Escândalos', icon: Shield },
  { id: 'financiamento', label: 'Financiamento', icon: DollarSign },
  { id: 'midia', label: 'Mídia', icon: Video },
  { id: 'posicionamento', label: 'Posicionamento', icon: Grid3X3 },
]

export function CandidateTabs({ candidateId, activeTab, onTabChange }: CandidateTabsProps) {
  return (
    <nav className="flex gap-1.5 overflow-x-auto rounded-2xl border border-blue-100/80 bg-white/70 p-1.5 shadow-sm dark:border-blue-900/50 dark:bg-slate-900/70" aria-label="Seções do candidato" role="tablist">
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
            className={`flex min-h-11 items-center gap-2 rounded-xl px-3.5 text-sm font-bold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              isActive
                ? 'bg-blue-800 text-white shadow-sm dark:bg-blue-500 dark:text-slate-950'
                : 'text-slate-600 hover:bg-blue-50 hover:text-blue-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
            }`}
          >
            <Icon size={16} />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
