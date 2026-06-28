'use client'

import { useState, useEffect } from 'react'
import { polls } from '../data/polls'

export interface TseResponse {
  pollsByInstitute: { name: string; value: number }[]
  sampleByInstitute: { name: string; value: number }[]
  totalPolls: number
  totalInstitutes: number
  lastUpdated: string
}

function sortDate(a: string, b: string) {
  const parse = (s: string) => {
    const [d, m] = s.split('/').map(Number)
    return new Date(2026, m - 1, d).getTime()
  }
  return parse(b) - parse(a)
}

export function usePollsData() {
  const [source, setSource] = useState<'institutes' | 'tse'>('institutes')
  const [selected, setSelected] = useState('AtlasIntel')
  const [tseData, setTseData] = useState<TseResponse | null>(null)
  const [tseLoading, setTseLoading] = useState(false)
  const [tseError, setTseError] = useState('')

  useEffect(() => {
    if (source !== 'tse') return
    setTseLoading(true)
    setTseError('')
    fetch('/api/tse/pesquisas')
      .then((r) => r.json())
      .then((json) => {
        if (json.error) throw new Error(json.error)
        setTseData(json.data)
      })
      .catch((err) => setTseError(err.message))
      .finally(() => setTseLoading(false))
  }, [source])

  const filtered = polls.filter((p) => p.institute === selected)

  const firstRoundData = filtered
    .filter((p) => p.firstRound.length > 0)
    .map((p) => {
      const row: { name: string; [key: string]: string | number } = { name: filtered.length > 1 ? p.date : p.institute }
      p.firstRound.forEach((c) => { row[c.name] = c.value })
      return row
    })

  const secondRoundData = source === 'institutes'
    ? filtered
        .filter((p) => p.secondRound)
        .flatMap((p) =>
          p.secondRound!.map((s) => ({
            name: filtered.length > 1 ? p.date : s.label,
            matchup: s.label,
            [s.adversarioNome]: s.adversario,
            Lula: s.lula,
          }))
        )
    : []

  const rejectionData = source === 'institutes'
    ? filtered
        .filter((p) => p.rejection)
        .toSorted((a, b) => sortDate(a.date, b.date))
        .at(0)?.rejection
        ?.toSorted((a, b) => b.value - a.value) ?? []
    : []

  const spontaneousData = source === 'institutes'
    ? filtered
        .filter((p) => p.spontaneous)
        .toSorted((a, b) => sortDate(a.date, b.date))
        .at(0)?.spontaneous
        ?.toSorted((a, b) => b.value - a.value) ?? []
    : []

  const regionalData = source === 'institutes'
    ? filtered
        .filter((p) => p.regional)
        .toSorted((a, b) => sortDate(a.date, b.date))
        .at(0)?.regional
        ?.map((r) => ({
          name: r.region,
          Lula: r.lula,
          Flávio: r.flavio,
          Renan: r.renan ?? 0,
        })) ?? []
    : []

  return {
    source,
    setSource,
    selected,
    setSelected,
    tseData,
    tseLoading,
    tseError,
    firstRoundData,
    secondRoundData,
    rejectionData,
    spontaneousData,
    regionalData,
    filtered,
  }
}
