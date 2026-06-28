'use client'

import { usePollsData } from '../../hooks/usePollsData'
import { SourceToggle } from './SourceToggle'
import { InstituteFilter } from './InstituteFilter'
import { InstituteCharts } from './InstituteCharts'
import { TseDataSection } from './TseDataSection'
import { Spinner } from '../ui/Spinner'

const institutes = ['AtlasIntel', 'Datafolha', 'Quaest', 'Real Time Big Data']

export function Pesquisas() {
  const {
    source, setSource,
    selected, setSelected,
    tseData, tseLoading, tseError,
    firstRoundData, secondRoundData,
    rejectionData, spontaneousData, regionalData,
    filtered,
  } = usePollsData()

  const dates = filtered.map((p) => p.date).join(', ')
  const noData = source === 'institutes' ? filtered.length === 0 : (!tseData || tseData.totalPolls === 0)

  if (noData && source === 'institutes') {
    return (
      <div className="space-y-6">
        <SourceToggle source={source} onChange={setSource} />
        <InstituteFilter institutes={institutes} selected={selected} onSelect={setSelected} />
        <div className="glass p-10 text-center">
          <p className="text-gray-500">Nenhuma pesquisa disponível para {selected}</p>
        </div>
      </div>
    )
  }

  if (source === 'tse' && tseLoading) {
    return (
      <div className="space-y-6">
        <SourceToggle source={source} onChange={setSource} />
        <div className="glass p-10 text-center flex justify-center">
          <Spinner size={32} />
        </div>
      </div>
    )
  }

  if (source === 'tse' && tseError) {
    return (
      <div className="space-y-6">
        <SourceToggle source={source} onChange={setSource} />
        <div className="glass p-10 text-center">
          <p className="text-red-500">Erro ao carregar dados do TSE: {tseError}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <SourceToggle source={source} onChange={setSource} />

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
    </div>
  )
}
