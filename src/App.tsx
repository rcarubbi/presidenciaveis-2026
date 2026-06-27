import { useState, useEffect, useCallback } from 'react'
import { candidates } from './data/candidates'
import type { Tab, CandidateSubTab } from './types'
import { Header } from './components/Layout/Header'
import { VisaoGeral } from './components/sections/VisaoGeral'
import { Pesquisas } from './components/sections/Pesquisas'
import { CandidateLayout } from './components/Layout/CandidateLayout'
import { Comparativo } from './components/sections/Comparativo'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Share2, GitCompare } from 'lucide-react'

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
  const [compareTargets, setCompareTargets] = useState<string[]>([])
  const [copiedLink, setCopiedLink] = useState(false)
  const [fontSize, setFontSize] = useState(() => {
    if (typeof window === 'undefined') return 'normal' as const
    return (localStorage.getItem('fontSize') as 'normal' | 'large' | 'xlarge') || 'normal'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    document.documentElement.classList.remove('text-large', 'text-xlarge')
    if (fontSize !== 'normal') document.documentElement.classList.add(`text-${fontSize}`)
    localStorage.setItem('fontSize', fontSize)
  }, [fontSize])

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

  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2000)
    })
  }, [])

  const handleCompareFromCard = useCallback((id: string) => {
    setCompareTargets((prev) => {
      if (prev.includes(id)) {
        const next = prev.filter((x) => x !== id)
        if (next.length === 0) return next
        if (next.length >= 1) {
          setComparisonMode(true)
          setComparisonSelection(next)
        }
        return next
      }
      const next = [...prev, id]
      if (next.length >= 2) {
        setComparisonMode(true)
        setComparisonSelection(next)
        return []
      }
      return next
    })
  }, [])

  const toggleFontSize = useCallback(() => {
    setFontSize((prev) => prev === 'normal' ? 'large' : prev === 'large' ? 'xlarge' : 'normal')
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

    return <VisaoGeral candidates={candidates} onSelectCandidate={handleSelectCandidate} compareTargets={compareTargets} onCompareFromCard={handleCompareFromCard} />
  }

  return (
    <div className="min-h-screen relative">
      <div className="blob-bg no-print" aria-hidden="true">
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
      </div>

      <div className="relative z-10">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-white focus:text-gray-900 focus:shadow-lg focus:text-sm focus:font-medium"
        >
          Pular para conteúdo
        </a>

        <Header dark={dark} onToggleDark={toggleDark} tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} fontSize={fontSize} onToggleFontSize={toggleFontSize} />

        <ErrorBoundary>
          <main className="max-w-7xl mx-auto px-4 py-8" id="main-content">
          <div key={`${activeTab}-${selectedCandidateId ?? 'overview'}-${comparisonMode ? 'cmp' : 'single'}`} className="tab-enter">
            <section aria-label={activeTab === 'pesquisas' ? 'Pesquisas' : 'Candidatos'}
              role="tabpanel" id={`tabpanel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
              {renderContent()}
            </section>
          </div>

          <footer className="mt-16 pt-6 border-t border-gray-200/60 dark:border-gray-800/60 text-center text-xs text-gray-400/80 space-y-1">
            <p>Site independente, sem vínculo com partidos ou campanhas eleitorais.</p>
            <p>Dados compilados de fontes públicas (TSE, Câmara, Senado, Folha, G1, O Globo, UOL, Metrópoles, Veja, Poder360).</p>
            <p>Conteúdo comparativo para fins informativos. Direito de resposta garantido aos candidatos.</p>
            <p>Última atualização: 26/06/2026.</p>
            <button
              onClick={handleCopyLink}
              className="no-print inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-200"
            >
              <Share2 size={12} />
              {copiedLink ? 'Link copiado!' : 'Copiar link'}
            </button>
          </footer>
        </main>
        </ErrorBoundary>
      </div>
    </div>
  )
}
