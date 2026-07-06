'use client'

import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { usePollsData } from '../../hooks/usePollsData'
import { SourceToggle } from './SourceToggle'
import { InstituteFilter } from './InstituteFilter'
import { InstituteCharts } from './InstituteCharts'
import { TseDataSection } from './TseDataSection'
import { Spinner } from '../ui/Spinner'
import { polls } from '../../data/polls'

interface PesquisasProps {
  initialSource?: 'institutes' | 'tse'
}

export function Pesquisas({ initialSource }: PesquisasProps) {
  const router = useRouter()
  const institutes = useMemo(() => [...new Set(polls.map((p) => p.institute))].sort(), [])
  const {
    source, setSource,
    selected, setSelected,
    tseData, tseLoading, tseError,
    firstRoundData, secondRoundData,
    rejectionData, spontaneousData, regionalData,
    filtered,
  } = usePollsData(initialSource)

  const handleSourceChange = (s: 'institutes' | 'tse') => {
    setSource(s)
    router.replace(`/pesquisas?source=${s}`, { scroll: false })
  }

  const dates = filtered.map((p) => p.date).join(', ')
  const noData = source === 'institutes' ? filtered.length === 0 : (!tseData || tseData.totalPolls === 0)

  return (
    <div className="space-y-8">
      <section className="bento-panel overflow-hidden px-6 py-8 sm:px-10 sm:py-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <span className="civic-chip mb-4 w-fit">Pesquisas</span>
            <h1 className="text-[clamp(1.75rem,5vw,3.25rem)] font-black tracking-tight text-slate-950 dark:text-white leading-[1.08]">
              Pesquisas Eleitorais{' '}
              <span className="bg-gradient-to-r from-blue-800 to-amber-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-amber-400">2026</span>
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Acompanhe as intenções de voto para Presidente da República. Os dados podem ser visualizados por instituto de pesquisa ou pelos registros oficiais do Tribunal Superior Eleitoral.
            </p>
          </div>
        </div>
      </section>
      <SourceToggle source={source} onChange={handleSourceChange} />

      {noData && source === 'institutes' ? (
        <>
          <InstituteFilter institutes={institutes} selected={selected} onSelect={setSelected} />
          <div className="bento-card p-10 text-center">
            <p className="text-slate-500">Nenhuma pesquisa disponível para {selected}</p>
          </div>
        </>
      ) : source === 'tse' && tseLoading ? (
        <div className="bento-card p-10 text-center flex justify-center">
          <Spinner size={32} />
        </div>
      ) : source === 'tse' && tseError ? (
        <div className="bento-card p-10 text-center">
          <p className="text-red-500">Erro ao carregar dados do TSE: {tseError}</p>
        </div>
      ) : (
        <>
          {source === 'institutes' && (
            <InstituteFilter institutes={institutes} selected={selected} onSelect={setSelected} />
          )}
          {source === 'institutes' && (
            <InstituteCharts
              firstRoundData={firstRoundData}
              secondRoundData={secondRoundData}
              rejectionData={rejectionData}
              spontaneousData={spontaneousData}
              regionalData={regionalData}
            />
          )}
          {source === 'tse' && tseData && (
            <TseDataSection
              pollsByInstitute={tseData.pollsByInstitute}
              sampleByInstitute={tseData.sampleByInstitute}
              totalPolls={tseData.totalPolls}
              totalInstitutes={tseData.totalInstitutes}
              lastUpdated={tseData.lastUpdated}
            />
          )}
          <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
            {source === 'institutes'
              ? `Fonte: ${selected} (${dates}).`
              : `Fonte: Tribunal Superior Eleitoral — Pesquisas Eleitorais 2026. Dados oficiais registrados no TSE.`
            }
          </p>
        </>
      )}
    </div>
  )
}
