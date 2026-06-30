import type { Metadata } from 'next'

// oxlint-disable-next-line react/only-export-components
export const metadata: Metadata = {
  title: 'Pesquisas Eleitorais 2026 — Presidenciáveis',
  description:
    'Pesquisas de intenção de voto para as eleições presidenciais de 2026. Dados do TSE e institutos: Datafolha, Quaest, AtlasIntel, Real Time Big Data.',
  openGraph: {
    title: 'Pesquisas Eleitorais 2026',
    description:
      'Acompanhe a evolução das pesquisas de intenção de voto para Presidente do Brasil em 2026.',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/pesquisas' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
