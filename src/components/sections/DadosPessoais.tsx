import type { Candidate } from '../../types'
import { DataLink } from '../DataLink'
import { User } from 'lucide-react'
import { CandidateNameHeading } from '../ui/CandidateNameHeading'

interface DadosPessoaisProps {
  candidates: Candidate[]
}

export function DadosPessoais({ candidates }: DadosPessoaisProps) {
  const rows = [
    { label: 'Nome completo', render: (c: Candidate) => <DataLink data={c.fullName} /> },
    { label: 'Data de nascimento', render: (c: Candidate) => <><DataLink data={c.birthYear} /> (<DataLink data={c.age} /> anos)</> },
    { label: 'Naturalidade', render: (c: Candidate) => <DataLink data={c.naturalidade} /> },
    { label: 'Estado civil', render: (c: Candidate) => <DataLink data={c.estadoCivil} /> },
    { label: 'Cônjuges anteriores', render: (c: Candidate) => <DataLink data={c.conjugesAnteriores} /> },
    { label: 'Filhos', render: (c: Candidate) => <DataLink data={c.filhos} /> },
    { label: 'Formação', render: (c: Candidate) => <DataLink data={c.formacao} /> },
    { label: 'Profissão', render: (c: Candidate) => <DataLink data={c.profissao} /> },
    { label: 'Religião', render: (c: Candidate) => <DataLink data={c.religiao} /> },
    { label: 'Residência', render: (c: Candidate) => <DataLink data={c.residencia} /> },
    { label: 'Patrimônio declarado', render: (c: Candidate) => c.patrimonio ? <DataLink data={c.patrimonio} format={(v) => fmtMoney(v as number)} /> : 'N/D' },
  ]

  return (
    <div className="space-y-4">
      <CandidateNameHeading candidates={candidates} icon={User} title="DADOS PESSOAIS" />
      <div className="bento-card overflow-x-auto">
        <table className="w-full text-base">
          <caption className="sr-only">Dados pessoais dos candidatos</caption>
        <thead>
          <tr className="border-b border-gray-200/60 dark:border-gray-700/40">
            <th className="text-left py-4 px-5 font-medium text-gray-500 dark:text-gray-400 w-40"></th>
            {candidates.map((c) => (
              <th key={c.id} className="text-left py-4 px-5 font-semibold text-base" style={{ color: c.party.color }}>
                {candidates.length > 1 && <DataLink data={c.name} />}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i < rows.length - 1 ? 'border-b border-gray-100/50 dark:border-gray-800/30' : ''}>
              <td className="py-3 px-5 text-gray-500 dark:text-gray-400 text-sm">{row.label}</td>
              {candidates.map((c) => (
                <td key={c.id} className="py-3 px-5 text-gray-900 dark:text-gray-100 text-sm">
                  {row.render(c)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

function fmtMoney(v: number): string {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })
}
