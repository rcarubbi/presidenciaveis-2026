'use client'

import { useState, useEffect, useMemo } from 'react'
import { polls } from '../data/polls'

export interface TseResponse {
  pollsByInstitute: { name: string; value: number }[]
  sampleByInstitute: { name: string; value: number }[]
  totalPolls: number
  totalInstitutes: number
  lastUpdated: string
}

const MONTHS: Record<string, number> = {
  jan: 0, fev: 1, mar: 2, abr: 3, mai: 4, jun: 5,
  jul: 6, ago: 7, set: 8, out: 9, nov: 10, dez: 11,
}

function parseDate(s: string) {
  const [d, m] = s.split('/')
  return new Date(2026, MONTHS[m.toLowerCase()], Number(d)).getTime()
}

function sortDateDesc(a: string, b: string) {
  return parseDate(b) - parseDate(a)
}

function sortDateAsc(a: string, b: string) {
  return parseDate(a) - parseDate(b)
}

export function usePollsData(initialSource?: 'institutes' | 'tse') {
  const [source, setSource] = useState<'institutes' | 'tse'>(initialSource ?? 'institutes')
  const [selected, setSelected] = useState(polls[0]?.institute ?? 'AtlasIntel')
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

  const filtered = useMemo(() => polls.filter((p) => p.institute === selected), [selected])

  const firstRoundData = useMemo(() => filtered
    .filter((p) => p.firstRound.length > 0)
    .toSorted((a, b) => sortDateAsc(a.date, b.date))
    .map((p) => {
      const row: { name: string; [key: string]: string | number } = { name: filtered.length > 1 ? p.date : p.institute }
      p.firstRound.forEach((c) => { row[c.name] = c.value })
      return row
    }), [filtered])

  const secondRoundData = useMemo(() => source === 'institutes'
    ? filtered
        .filter((p) => p.secondRound)
        .toSorted((a, b) => sortDateAsc(a.date, b.date))
        .flatMap((p) =>
          p.secondRound!.map((s) => ({
            name: filtered.length > 1 ? p.date : s.label,
            matchup: s.label,
            [s.adversarioNome]: s.adversario,
            Lula: s.lula,
          }))
        )
    : [], [source, filtered])

  const rejectionData = useMemo(() => source === 'institutes'
    ? filtered
        .filter((p) => p.rejection)
        .toSorted((a, b) => sortDateDesc(a.date, b.date))
        .at(0)?.rejection
        ?.toSorted((a, b) => b.value - a.value) ?? []
    : [], [source, filtered])

  const spontaneousData = useMemo(() => source === 'institutes'
    ? filtered
        .filter((p) => p.spontaneous)
        .toSorted((a, b) => sortDateDesc(a.date, b.date))
        .at(0)?.spontaneous
        ?.toSorted((a, b) => b.value - a.value) ?? []
    : [], [source, filtered])

  const regionalData = useMemo(() => source === 'institutes'
    ? filtered
        .filter((p) => p.regional)
        .toSorted((a, b) => sortDateDesc(a.date, b.date))
        .at(0)?.regional
        ?.map((r) => ({
          name: r.region,
          Lula: r.lula,
          Flávio: r.flavio,
          Renan: r.renan ?? 0,
        })) ?? []
    : [], [source, filtered])

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
