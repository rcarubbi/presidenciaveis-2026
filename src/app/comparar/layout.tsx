import type { Metadata } from 'next'

// oxlint-disable-next-line react/only-export-components
export const metadata: Metadata = {
  title: 'Comparar Presidenciáveis 2026 — Lula, Flávio, Renan, Caiado, Zema',
  description:
    'Compare lado a lado os presidenciáveis 2026: dados pessoais, carreira, posicionamento político, escândalos, financiamento e plano de governo.',
  openGraph: {
    title: 'Comparar Presidenciáveis 2026',
    description:
      'Compare lado a lado os candidatos à Presidência do Brasil em 2026.',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/comparar' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
