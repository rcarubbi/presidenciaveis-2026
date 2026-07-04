'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { Candidate, CandidateSubTab } from '../../types'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { DadosPessoais } from '../sections/DadosPessoais'
import { Carreira } from '../sections/Carreira'
import { PlanoGoverno } from '../sections/PlanoGoverno'
import { Escandalos } from '../sections/Escandalos'
import { Financiamento } from '../sections/Financiamento'
import { Posicionamento } from '../sections/Posicionamento'
import { Midia } from '../sections/Midia'
import { Cobertura } from '../sections/Cobertura'
import { HeroBanner } from './HeroBanner'
import { CandidateTabs } from './CandidateTabs'
import { CandidateHeroFull } from './CandidateHeroFull'

interface CandidateLayoutProps {
  candidate: Candidate
  initialTab?: string
}

const validTabs: CandidateSubTab[] = ['hero', 'dados', 'carreira', 'plano', 'cobertura', 'escandalos', 'financiamento', 'midia', 'posicionamento']

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

  const subContentMap: Record<CandidateSubTab, React.ReactNode> = {
    hero: <CandidateHeroFull candidate={c} />,
    dados: <DadosPessoais candidates={[c]} />,
    carreira: <Carreira candidates={[c]} />,
    plano: <PlanoGoverno candidates={[c]} />,
    cobertura: <Cobertura candidates={[c]} />,
    escandalos: <Escandalos candidates={[c]} />,
    financiamento: <Financiamento candidates={[c]} />,
    midia: <Midia candidates={[c]} />,
    posicionamento: <Posicionamento candidates={[c]} />,
  }

  const renderSubContent = () => subContentMap[activeSubTab]

  return (
    <div className="space-y-6 animate-fade-in">
      <Link
        href="/"
        transitionTypes={['nav-back']}
        className="flex min-h-11 w-fit items-center gap-2 rounded-full border border-blue-100/80 bg-white/70 px-4 text-sm font-bold text-slate-600 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-blue-900/50 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
      >
        <ArrowLeft size={16} />
        Voltar
      </Link>

      <HeroBanner candidate={c} />

      <div className="flex items-center gap-1.5 sm:hidden text-[11px] font-medium text-slate-400 dark:text-slate-500">
        <span>Deslize para ver mais</span>
        <ChevronRight size={14} className="-ml-0.5 animate-slide-x" />
      </div>
      <CandidateTabs candidateId={c.id} activeTab={activeSubTab} onTabChange={handleTabChange} />

      <div className="tab-enter" key={activeSubTab} role="tabpanel" id={`subpanel-${c.id}-${activeSubTab}`} aria-labelledby={`subtab-${c.id}-${activeSubTab}`}>
        {renderSubContent()}
      </div>

      <Link
        href="/"
        transitionTypes={['nav-back']}
        className="flex min-h-11 w-fit items-center gap-2 rounded-full border border-blue-100/80 bg-white/70 px-4 text-sm font-bold text-slate-600 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:text-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-blue-900/50 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
      >
        <ArrowLeft size={16} />
        Voltar
      </Link>
    </div>
  )
}
