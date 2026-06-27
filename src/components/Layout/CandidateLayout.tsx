'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import type { Candidate, CandidateSubTab, DataValue } from '../../types'
import { DataLink } from '../DataLink'
import { ArrowLeft, GitCompare, Eye, User, Briefcase, FileText, Shield, DollarSign, Grid3X3 } from 'lucide-react'
import { DadosPessoais } from '../sections/DadosPessoais'
import { Carreira } from '../sections/Carreira'
import { PlanoGoverno } from '../sections/PlanoGoverno'
import { Escandalos } from '../sections/Escandalos'
import { Financiamento } from '../sections/Financiamento'
import { Posicionamento } from '../sections/Posicionamento'
import { Spinner } from '../ui/Spinner'

interface CandidateLayoutProps {
  candidate: Candidate
}

const subTabs: { id: CandidateSubTab; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { id: 'hero', label: 'Visão Geral', icon: Eye },
  { id: 'dados', label: 'Dados Pessoais', icon: User },
  { id: 'carreira', label: 'Carreira', icon: Briefcase },
  { id: 'plano', label: 'Plano Governo', icon: FileText },
  { id: 'escandalos', label: 'Escândalos', icon: Shield },
  { id: 'financiamento', label: 'Financiamento', icon: DollarSign },
  { id: 'posicionamento', label: 'Posicionamento', icon: Grid3X3 },
]

export function CandidateLayout({ candidate }: CandidateLayoutProps) {
  const c = candidate
  const color = c.party.color
  const [activeSubTab, setActiveSubTab] = useState<CandidateSubTab>('hero')
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)
  const photoRef = useRef<HTMLImageElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (photoRef.current?.complete) setPhotoLoaded(true)
  }, [])

  useEffect(() => {
    if (logoRef.current?.complete) setLogoLoaded(true)
  }, [])

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

      <div className="glass overflow-hidden rounded-xl">
        <div className="aspect-[3/2] md:aspect-[2/1] grid grid-cols-1 grid-rows-1 overflow-hidden relative" style={{ backgroundColor: color }}>
          {!photoLoaded && (
            <div className="col-span-full row-span-full flex items-center justify-center z-20">
              <Spinner size={32} className="text-white/60" />
            </div>
          )}
          <img
            ref={photoRef}
            src={c.photo}
            alt={c.fullName.value}
            className="col-span-full row-span-full w-full h-full object-contain"
            onLoad={() => setPhotoLoaded(true)}
            onError={(e) => { setPhotoLoaded(true); (e.target as HTMLImageElement).style.display = 'none' }}
          />
          <div
            className="col-span-full row-span-full"
            style={{
              background: `linear-gradient(to right, ${color}ee 0%, ${color}88 50%, ${color}44 100%)`,
            }}
          />
          <div className="col-span-full row-span-full flex flex-col justify-end p-6 md:p-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative h-10 md:h-14 w-auto min-w-[40px] flex items-center justify-center">
                {!logoLoaded && <Spinner size={20} className="text-white/60 absolute" />}
                <img
                  ref={logoRef}
                  src={c.party.logo}
                  alt={c.party.name.value}
                  className="h-10 md:h-14 object-contain"
                  onLoad={() => setLogoLoaded(true)}
                  onError={(e) => { setLogoLoaded(true); (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-bold text-white bg-black/30 backdrop-blur-sm">
                {c.party.name.value} — {c.party.number}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg"><DataLink data={c.fullName} /></h1>
            <p className="text-base md:text-lg text-white/80 mt-1 drop-shadow"><DataLink data={c.currentPosition} /></p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color }}><DataLink data={c.age} /></p>
            <p className="text-xs text-gray-500">anos</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color }}><DataLink data={c.careerYears} /></p>
            <p className="text-xs text-gray-500">anos na política</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color }}>{fmtPatSimple(c.patrimonio)}</p>
            <p className="text-xs text-gray-500">patrimônio</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color }}>{c.proposalsCoverage.value}/12</p>
            <p className="text-xs text-gray-500">propostas</p>
          </div>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto glass p-1 rounded-xl" aria-label="Seções do candidato" role="tablist">
        {subTabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeSubTab === tab.id
          return (
            <button
              key={tab.id}
              role="tab"
              id={`subtab-${c.id}-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`subpanel-${c.id}-${tab.id}`}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-200 flex-1 justify-center ${
                isActive
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

function fmtPatSimple(v: DataValue<number> | null): string {
  if (v === null) return 'N/D'
  if (v.value >= 1_000_000) return `R$ ${(v.value / 1_000_000).toFixed(1)} mi`
  return `R$ ${(v.value / 1000).toFixed(0)} mil`
}
