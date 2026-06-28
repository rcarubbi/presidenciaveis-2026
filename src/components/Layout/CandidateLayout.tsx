'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { Candidate, CandidateSubTab } from '../../types'
import { ArrowLeft, GitCompare } from 'lucide-react'
import { DadosPessoais } from '../sections/DadosPessoais'
import { Carreira } from '../sections/Carreira'
import { PlanoGoverno } from '../sections/PlanoGoverno'
import { Escandalos } from '../sections/Escandalos'
import { Financiamento } from '../sections/Financiamento'
import { Posicionamento } from '../sections/Posicionamento'
import { HeroBanner } from './HeroBanner'
import { CandidateTabs } from './CandidateTabs'
import { CandidateHeroFull } from './CandidateHeroFull'

interface CandidateLayoutProps {
  candidate: Candidate
  initialTab?: string
}

const validTabs: CandidateSubTab[] = ['hero', 'dados', 'carreira', 'plano', 'escandalos', 'financiamento', 'posicionamento']

export function CandidateLayout({ candidate, initialTab }: CandidateLayoutProps) {
  const router = useRouter()
  const c = candidate
  const [activeSubTab, setActiveSubTab] = useState<CandidateSubTab>(
    validTabs.includes(initialTab as CandidateSubTab) ? (initialTab as CandidateSubTab) : 'hero'
  )

  const handleTabChange = (tab: CandidateSubTab) => {
    setActiveSubTab(tab)
    router.replace(`/candidato/${c.id}?tab=${tab}`, { scroll: false })
  }

  const renderSubContent = () => {
    switch (activeSubTab) {
      case 'hero': return <CandidateHeroFull candidate={c} />
      case 'dados': return <DadosPessoais candidates={[c]} />
      case 'carreira': return <Carreira candidates={[c]} />
      case 'plano': return <PlanoGoverno candidates={[c]} />
      case 'escandalos': return <Escandalos candidates={[c]} />
      case 'financiamento': return <Financiamento candidates={[c]} />
      case 'posicionamento': return <Posicionamento candidates={[c]} />
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          <ArrowLeft size={16} />
          Visão Geral
        </Link>
        <Link
          href="/comparar"
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl glass hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200"
        >
          <GitCompare size={16} />
          Comparativo
        </Link>
      </div>

      <HeroBanner candidate={c} />

      <CandidateTabs candidateId={c.id} activeTab={activeSubTab} onTabChange={handleTabChange} />

      <div className="tab-enter" key={activeSubTab} role="tabpanel" id={`subpanel-${c.id}-${activeSubTab}`} aria-labelledby={`subtab-${c.id}-${activeSubTab}`}>
        {renderSubContent()}
      </div>
    </div>
  )
}




