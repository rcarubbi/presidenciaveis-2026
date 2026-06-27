import { useState } from 'react'
import type { Candidate, CandidateSubTab } from '../../types'
import { X, User, Briefcase, Shield, DollarSign, Grid3X3, Eye, FileText } from 'lucide-react'
import { DadosPessoais } from './DadosPessoais'
import { Carreira } from './Carreira'
import { Escandalos } from './Escandalos'
import { Financiamento } from './Financiamento'
import { Posicionamento } from './Posicionamento'
import { PlanoGoverno } from './PlanoGoverno'

interface ComparativoProps {
  candidates: Candidate[]
  selectedIds: string[]
  onSelectionChange: (ids: string[]) => void
  onClose: () => void
}

const cmpTabs: { id: CandidateSubTab; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { id: 'dados', label: 'Dados Pessoais', icon: User },
  { id: 'carreira', label: 'Carreira', icon: Briefcase },
  { id: 'escandalos', label: 'Escândalos', icon: Shield },
  { id: 'financiamento', label: 'Financiamento', icon: DollarSign },
  { id: 'posicionamento', label: 'Posicionamento', icon: Grid3X3 },
  { id: 'plano', label: 'Plano de Governo', icon: FileText },
]

export function Comparativo({ candidates, selectedIds, onSelectionChange, onClose }: ComparativoProps) {
  const [cmpTab, setCmpTab] = useState<CandidateSubTab>('dados')
  const [minWarning, setMinWarning] = useState(false)

  const toggleCandidateSelection = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length <= 2) {
        setMinWarning(true)
        setTimeout(() => setMinWarning(false), 2000)
        return
      }
      onSelectionChange(selectedIds.filter((x) => x !== id))
    } else {
      onSelectionChange([...selectedIds, id])
    }
  }

  const filtered = candidates.filter((c) => selectedIds.includes(c.id))

  const renderCmpContent = () => {
    switch (cmpTab) {
      case 'dados': return <DadosPessoais candidates={filtered} />
      case 'carreira': return <Carreira candidates={filtered} />
      case 'escandalos': return <Escandalos candidates={filtered} />
      case 'financiamento': return <Financiamento candidates={filtered} />
      case 'posicionamento': return <Posicionamento candidates={filtered} />
      case 'plano': return <PlanoGoverno candidates={filtered} />
      default: return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
          <Eye size={20} />
          Comparativo
        </h2>
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl glass hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all"
        >
          <X size={16} />
          Fechar
        </button>
      </div>

      {/* Candidate selector */}
      <div className="glass p-4">
        <p className="text-sm font-medium text-gray-500 mb-3">Selecione candidatos para comparar (mín. 2):</p>
        {minWarning && (
          <p className="text-xs text-red-500 mb-2 animate-pulse" role="alert">Mínimo de 2 candidatos para comparação</p>
        )}
        <div className="flex gap-3 flex-wrap">
          {candidates.map((c) => {
            const selected = selectedIds.includes(c.id)
            return (
              <button
                key={c.id}
                onClick={() => toggleCandidateSelection(c.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selected
                    ? 'text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 bg-gray-100/50 dark:bg-gray-800/50'
                }`}
                style={selected ? { backgroundColor: c.party.color } : undefined}
              >
                <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                  <img src={c.photo} alt="" className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                {c.name}
                {selected && <X size={12} />}
              </button>
            )
          })}
        </div>
      </div>

      {/* Sub-tabs */}
      <nav className="flex gap-1 overflow-x-auto glass p-1 rounded-xl" aria-label="Seções comparativas" role="tablist">
        {cmpTabs.map((tab) => {
          const Icon = tab.icon
          const isActive = cmpTab === tab.id
          return (
            <button
              key={tab.id}
              role="tab"
              id={`cmp-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`cmp-panel-${tab.id}`}
              onClick={() => setCmpTab(tab.id)}
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

      {/* Legend */}
      <div className="flex gap-4 text-xs text-gray-500">
        {filtered.map((c) => (
          <span key={c.id} className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c.party.color }} />
            {c.name}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="tab-enter" key={cmpTab} role="tabpanel" id={`cmp-panel-${cmpTab}`} aria-labelledby={`cmp-tab-${cmpTab}`}>
        {renderCmpContent()}
      </div>
    </div>
  )
}
