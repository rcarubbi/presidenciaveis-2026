import { useState, useEffect, useCallback } from 'react'
import { candidates } from './data/candidates'
import type { Tab, CandidateSubTab } from './types'
import { Header } from './components/Layout/Header'
import { VisaoGeral } from './components/sections/VisaoGeral'
import { Pesquisas } from './components/sections/Pesquisas'
import { CandidateLayout } from './components/Layout/CandidateLayout'
import { Comparativo } from './components/sections/Comparativo'

const tabs: Tab[] = [
  { id: 'visao', label: 'Visão Geral', icon: 'visao' },
  { id: 'pesquisas', label: 'Pesquisas', icon: 'pesquisas' },
]

function getInitialState() {
  if (typeof window === 'undefined') return { tab: 'visao' as const, cand: null as string | null, sub: 'hero' as CandidateSubTab, cmp: false }
  const params = new URLSearchParams(window.location.search)
  const tab = params.get('tab')
  const validTabs = new Set(tabs.map((t) => t.id))
  if (tab && validTabs.has(tab)) {
    const cand = params.get('cand')
    const cmp = params.get('cmp') === '1'
    if (cand && candidates.some((c) => c.id === cand)) {
      const sub = (params.get('sub') ?? 'hero') as CandidateSubTab
      return { tab: tab as 'visao' | 'pesquisas', cand, sub, cmp }
    }
    if (cmp) return { tab: tab as 'visao' | 'pesquisas', cand: null, sub: 'hero' as CandidateSubTab, cmp: true }
    return { tab: tab as 'visao' | 'pesquisas', cand: null, sub: 'hero' as CandidateSubTab, cmp: false }
  }
  return { tab: 'visao' as const, cand: null, sub: 'hero' as CandidateSubTab, cmp: false }
}

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  const initial = getInitialState()
  const [activeTab, setActiveTab] = useState<'visao' | 'pesquisas'>(initial.tab)
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(initial.cand)
  const [candidateSubTab, setCandidateSubTab] = useState<CandidateSubTab>(initial.sub)
  const [comparisonMode, setComparisonMode] = useState(initial.cmp)
  const [comparisonSelection, setComparisonSelection] = useState<string[]>(['lula', 'flavio', 'renan'])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const toggleDark = useCallback(() => setDark((d) => !d), [])

  const syncUrl = useCallback((tab: string, cand: string | null, sub: string, cmp: boolean) => {
    const url = new URL(window.location.href)
    url.searchParams.set('tab', tab)
    if (cand) { url.searchParams.set('cand', cand) } else { url.searchParams.delete('cand') }
    if (sub !== 'hero' && cand) { url.searchParams.set('sub', sub) } else { url.searchParams.delete('sub') }
    if (cmp) { url.searchParams.set('cmp', '1') } else { url.searchParams.delete('cmp') }
    window.history.replaceState({}, '', url.toString())
  }, [])

  const handleTabChange = useCallback((id: string) => {
    setActiveTab(id as 'visao' | 'pesquisas')
    setSelectedCandidateId(null)
    setComparisonMode(false)
    syncUrl(id, null, 'hero', false)
  }, [syncUrl])

  const handleSelectCandidate = useCallback((id: string) => {
    setSelectedCandidateId(id)
    setCandidateSubTab('hero')
    setComparisonMode(false)
    syncUrl(activeTab, id, 'hero', false)
  }, [activeTab, syncUrl])

  const handleBackToOverview = useCallback(() => {
    setSelectedCandidateId(null)
    setComparisonMode(false)
    syncUrl(activeTab, null, 'hero', false)
  }, [activeTab, syncUrl])

  const handleCandidateSubTabChange = useCallback((sub: CandidateSubTab) => {
    setCandidateSubTab(sub)
    syncUrl(activeTab, selectedCandidateId, sub, comparisonMode)
  }, [activeTab, selectedCandidateId, comparisonMode, syncUrl])

  const handleToggleComparison = useCallback(() => {
    setComparisonMode((prev) => !prev)
    setComparisonSelection(['lula', 'flavio', 'renan'])
    syncUrl(activeTab, selectedCandidateId, candidateSubTab, !comparisonMode)
  }, [activeTab, selectedCandidateId, candidateSubTab, syncUrl, comparisonMode])

  const handleComparisonSelectionChange = useCallback((ids: string[]) => {
    setComparisonSelection(ids)
  }, [])

  const selectedCandidate = selectedCandidateId
    ? candidates.find((c) => c.id === selectedCandidateId) ?? null
    : null

  const renderContent = () => {
    if (activeTab === 'pesquisas') {
      return <Pesquisas />
    }

    if (comparisonMode) {
      return (
        <Comparativo
          candidates={candidates}
          selectedIds={comparisonSelection}
          onSelectionChange={handleComparisonSelectionChange}
          onClose={handleToggleComparison}
        />
      )
    }

    if (selectedCandidate) {
      return (
        <CandidateLayout
          candidate={selectedCandidate}
          activeSubTab={candidateSubTab}
          onSubTabChange={handleCandidateSubTabChange}
          onBack={handleBackToOverview}
          onCompare={handleToggleComparison}
        />
      )
    }

    return <VisaoGeral candidates={candidates} onSelectCandidate={handleSelectCandidate} />
  }

  return (
    <div className="min-h-screen relative">
      <div className="blob-bg" aria-hidden="true">
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
      </div>

      <div className="relative z-10">
        <Header dark={dark} onToggleDark={toggleDark} tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

        <main className="max-w-7xl mx-auto px-4 py-8" id="main-content">
          <div key={`${activeTab}-${selectedCandidateId ?? 'overview'}-${comparisonMode ? 'cmp' : 'single'}`} className="tab-enter">
            <section aria-label={activeTab === 'pesquisas' ? 'Pesquisas' : 'Candidatos'}>
              {renderContent()}
            </section>
          </div>

          <footer className="mt-16 pt-6 border-t border-gray-200/60 dark:border-gray-800/60 text-center text-xs text-gray-400/80">
            <p>Dados compilados em 26/06/2026. Fontes públicas referenciadas nas fichas individuais.</p>
            <p className="mt-1">Fonte pesquisa: AtlasIntel/Bloomberg (19/mai/2026). Margem ±1 p.p.</p>
          </footer>
        </main>
      </div>
    </div>
  )
}
