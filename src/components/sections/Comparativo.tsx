'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { toast } from 'sonner'
import type { Candidate, CandidateSubTab } from '../../types'
import { ArrowLeft } from 'lucide-react'
import { DadosPessoais } from './DadosPessoais'
import { Carreira } from './Carreira'
import { Escandalos } from './Escandalos'
import { Financiamento } from './Financiamento'
import { Posicionamento } from './Posicionamento'
import { PlanoGoverno } from './PlanoGoverno'
import { ComparisonSelector } from './ComparisonSelector'
import { ComparisonTabs } from './ComparisonTabs'

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
      <Link
        href="/"
        className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        <ArrowLeft size={16} />
        Voltar
      </Link>
      <section className="relative overflow-hidden rounded-2xl glass p-8 md:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#cc2222]/5 via-[#1a4fa0]/5 to-[#d97706]/5" />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            Compare os Presidenciáveis 2026
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
            Selecione dois ou mais candidatos e veja lado a lado dados pessoais, carreira, planos de governo, escândalos, financiamento e posicionamento político. Escolha os candidatos e as categorias abaixo para iniciar a comparação.
          </p>
        </div>
      </section>

      <ComparisonSelector candidates={candidates} selectedIds={selectedIds} onToggle={toggleCandidateSelection} />

      <ComparisonTabs activeTab={cmpTab} onTabChange={handleTabChange} />


      <div className="tab-enter" key={cmpTab} role="tabpanel" id={`cmp-panel-${cmpTab}`} aria-labelledby={`cmp-tab-${cmpTab}`}>
        {renderCmpContent()}
      </div>
    </div>
  )
}
