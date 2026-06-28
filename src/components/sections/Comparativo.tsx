'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { toast } from 'sonner'
import type { Candidate, CandidateSubTab } from '../../types'
import { X, Eye } from 'lucide-react'
import { DadosPessoais } from './DadosPessoais'
import { Carreira } from './Carreira'
import { Escandalos } from './Escandalos'
import { Financiamento } from './Financiamento'
import { Posicionamento } from './Posicionamento'
import { PlanoGoverno } from './PlanoGoverno'
import { ComparisonSelector } from './ComparisonSelector'
import { ComparisonTabs } from './ComparisonTabs'
import { ComparisonLegend } from './ComparisonLegend'

interface ComparativoProps {
  candidates: Candidate[]
  initialIds?: string[]
  initialTab?: string
}

const validCmpTabs: CandidateSubTab[] = ['dados', 'carreira', 'escandalos', 'financiamento', 'posicionamento', 'plano']

export function Comparativo({ candidates, initialIds = ['lula', 'flavio', 'renan'], initialTab }: ComparativoProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedIds, setSelectedIds] = useState<string[]>(initialIds)
  const [cmpTab, setCmpTab] = useState<CandidateSubTab>(
    validCmpTabs.includes(initialTab as CandidateSubTab) ? (initialTab as CandidateSubTab) : 'dados'
  )

  const syncUrl = (tab: CandidateSubTab, ids: string[]) => {
    const params = new URLSearchParams()
    params.set('tab', tab)
    params.set('ids', ids.join(','))
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const handleTabChange = (tab: CandidateSubTab) => {
    setCmpTab(tab)
    syncUrl(tab, selectedIds)
  }

  const toggleCandidateSelection = (id: string) => {
    let next: string[]
    if (selectedIds.includes(id)) {
      if (selectedIds.length <= 2) {
        toast.error('Mínimo de 2 candidatos para comparação')
        return
      }
      next = selectedIds.filter((x) => x !== id)
    } else {
      next = [...selectedIds, id]
    }
    setSelectedIds(next)
    syncUrl(cmpTab, next)
  }

  const filtered = candidates.filter((c) => selectedIds.includes(c.id))

  const renderCmpContent = () => {
    switch (cmpTab) {
      case 'dados': return <DadosPessoais candidates={filtered} />
      case 'carreira': return <Carreira candidates={filtered} />
      case 'escandalos': return <Escandalos candidates={filtered} />
      case 'financiamento': return <Financiamento candidates={filtered} />
      case 'posicionamento': return <Posicionamento candidates={filtered} />
      case 'plano': return <PlanoGoverno candidates={filtered} />
      default: return null
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
          <Eye size={20} />
          Comparativo
        </h2>
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl glass hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all"
        >
          <X size={16} />
          Fechar
        </button>
      </div>

      <ComparisonSelector candidates={candidates} selectedIds={selectedIds} onToggle={toggleCandidateSelection} />

      <ComparisonTabs activeTab={cmpTab} onTabChange={handleTabChange} />

      <ComparisonLegend candidates={filtered} />

      <div className="tab-enter" key={cmpTab} role="tabpanel" id={`cmp-panel-${cmpTab}`} aria-labelledby={`cmp-tab-${cmpTab}`}>
        {renderCmpContent()}
      </div>
    </div>
  )
}
