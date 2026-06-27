import type { Candidate } from '../../types'

interface DadosPessoaisProps {
  candidates: Candidate[]
}

export function DadosPessoais({ candidates }: DadosPessoaisProps) {
  const rows = [
    { label: 'Nome completo', key: 'fullName' as const },
    { label: 'Data de nascimento', key: 'age' as const, render: (c: Candidate) => `${c.birthYear} (${c.age} anos)` },
    { label: 'Naturalidade', key: 'naturalidade' as const },
    { label: 'Estado civil', key: 'estadoCivil' as const },
    { label: 'Cônjuges anteriores', key: 'conjugesAnteriores' as const },
    { label: 'Filhos', key: 'filhos' as const },
    { label: 'Formação', key: 'formacao' as const },
    { label: 'Profissão', key: 'profissao' as const },
    { label: 'Religião', key: 'religiao' as const },
    { label: 'Residência', key: 'residencia' as const },
    { label: 'Patrimônio declarado', key: 'patrimonio' as const, render: (c: Candidate) => c.patrimonio === null ? 'N/D' : fmtMoney(c.patrimonio) },
  ]

  return (
    <div className="glass overflow-x-auto">
      <table className="w-full text-base">
        <thead>
          <tr className="border-b border-gray-200/60 dark:border-gray-700/40">
            <th className="text-left py-4 px-5 font-medium text-gray-500 dark:text-gray-400 w-40"></th>
            {candidates.map((c) => (
              <th key={c.id} className="text-left py-4 px-5 font-semibold text-base" style={{ color: c.party.color }}>
                {c.name}
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
                  {row.render ? row.render(c) : String(c[row.key] ?? '—')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function fmtMoney(v: number): string {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })
}
