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
import { ComparativoCobertura } from './ComparativoCobertura'

interface ComparativoProps {
  candidates: Candidate[]
  initialIds?: string[]
  initialTab?: string
}

const validCmpTabs: CandidateSubTab[] = ['dados', 'carreira', 'plano', 'cobertura', 'escandalos', 'financiamento', 'posicionamento']

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
      case 'plano': return <PlanoGoverno candidates={filtered} />
      case 'cobertura': return <ComparativoCobertura candidates={filtered} />
      case 'escandalos': return <Escandalos candidates={filtered} />
      case 'financiamento': return <Financiamento candidates={filtered} />
      case 'posicionamento': return <Posicionamento candidates={filtered} />
      default: return null
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <Link
        href="/"
        className="flex min-h-11 w-fit items-center gap-2 rounded-full border border-blue-100/80 bg-white/70 px-4 text-sm font-bold text-slate-600 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-blue-900/50 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
      >
        <ArrowLeft size={16} />
        Voltar
      </Link>
      <section className="bento-panel overflow-hidden px-6 py-8 sm:px-10 sm:py-12">
        <div className="max-w-2xl">
          <span className="civic-chip mb-4 w-fit">Comparativo</span>
          <h1 className="text-[clamp(1.75rem,5vw,3.25rem)] font-black tracking-tight text-slate-950 dark:text-white leading-[1.08]">
            Compare os Presidenciáveis{' '}
            <span className="bg-gradient-to-r from-blue-800 to-amber-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-amber-400">2026</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Selecione dois ou mais candidatos e veja lado a lado dados pessoais, carreira, planos de governo, escândalos, financiamento e posicionamento político.
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
