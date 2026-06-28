'use client'

import { useRouter } from 'next/navigation'
import { usePollsData } from '../../hooks/usePollsData'
import { SourceToggle } from './SourceToggle'
import { InstituteFilter } from './InstituteFilter'
import { InstituteCharts } from './InstituteCharts'
import { TseDataSection } from './TseDataSection'
import { Spinner } from '../ui/Spinner'

const institutes = ['AtlasIntel', 'Datafolha', 'Quaest', 'Real Time Big Data']

interface PesquisasProps {
  initialSource?: 'institutes' | 'tse'
}

export function Pesquisas({ initialSource }: PesquisasProps) {
  const router = useRouter()
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
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-2xl glass p-8 md:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#cc2222]/5 via-[#1a4fa0]/5 to-[#d97706]/5" />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            Pesquisas Eleitorais 2026
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
            Acompanhe as intenções de voto para Presidente da República. Os dados podem ser visualizados por instituto de pesquisa (Datafolha, Quaest, AtlasIntel, Real Time Big Data) ou pelos registros oficiais do Tribunal Superior Eleitoral. Selecione a fonte abaixo.
          </p>
        </div>
      </section>
      <SourceToggle source={source} onChange={handleSourceChange} />

      {noData && source === 'institutes' ? (
        <>
          <InstituteFilter institutes={institutes} selected={selected} onSelect={setSelected} />
          <div className="glass p-10 text-center">
            <p className="text-gray-500">Nenhuma pesquisa disponível para {selected}</p>
          </div>
        </>
      ) : source === 'tse' && tseLoading ? (
        <div className="glass p-10 text-center flex justify-center">
          <Spinner size={32} />
        </div>
      ) : source === 'tse' && tseError ? (
        <div className="glass p-10 text-center">
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
          <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
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
