'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Candidate, CandidateSubTab } from '../../types'
import { DataLink } from '../DataLink'
import { ArrowLeft, GitCompare } from 'lucide-react'
import { DadosPessoais } from '../sections/DadosPessoais'
import { Carreira } from '../sections/Carreira'
import { PlanoGoverno } from '../sections/PlanoGoverno'
import { Escandalos } from '../sections/Escandalos'
import { Financiamento } from '../sections/Financiamento'
import { Posicionamento } from '../sections/Posicionamento'
import { HeroBanner } from './HeroBanner'
import { CandidateTabs } from './CandidateTabs'

interface CandidateLayoutProps {
  candidate: Candidate
}

export function CandidateLayout({ candidate }: CandidateLayoutProps) {
  const c = candidate
  const [activeSubTab, setActiveSubTab] = useState<CandidateSubTab>('hero')

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
    <div className="space-y-6">
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

      <CandidateTabs candidateId={c.id} activeTab={activeSubTab} onTabChange={setActiveSubTab} />

      <div className="tab-enter" key={activeSubTab} role="tabpanel" id={`subpanel-${c.id}-${activeSubTab}`} aria-labelledby={`subtab-${c.id}-${activeSubTab}`}>
        {renderSubContent()}
      </div>
    </div>
  )
}

function CandidateHeroFull({ candidate: c }: { candidate: Candidate }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="glass p-6 space-y-4">
        <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300" style={{ color: c.party.color }}>Dados Pessoais</h3>
        <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Nome completo:</span> <DataLink data={c.fullName} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Naturalidade:</span> <DataLink data={c.naturalidade} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Estado civil:</span> <DataLink data={c.estadoCivil} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Filhos:</span> <DataLink data={c.filhos} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Formação:</span> <DataLink data={c.formacao} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Religião:</span> <DataLink data={c.religiao} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Residência:</span> <DataLink data={c.residencia} /></p>
        </div>
      </div>
      <div className="glass p-6 space-y-4">
        <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300" style={{ color: c.party.color }}>Posicionamento</h3>
        <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Ideologia:</span> <DataLink data={c.ideologicalPosition} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Partido atual:</span> <DataLink data={c.currentParty} /></p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Histórico partidos:</span> {c.partyHistory.map((dv) => dv.value).join(', ')}</p>
          <p><span className="font-semibold text-gray-700 dark:text-gray-300">Cargo atual:</span> <DataLink data={c.currentPosition} /></p>
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Coligação:</span>
            <ul className="mt-1 space-y-0.5">
              {c.coalition.map((co, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${co.status.value === 'confirmado' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                  <DataLink data={co.party} /> (<DataLink data={co.status} />)
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


