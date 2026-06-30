import { candidates } from '@/data/candidates'
import { notFound } from 'next/navigation'
import { CandidateLayout } from '@/components/Layout/CandidateLayout'
import { generateCandidateJsonLd } from '@/lib/jsonLd'
import type { Metadata } from 'next'

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://presidenciaveis-2026.vercel.app'

// oxlint-disable-next-line react/only-export-components
export function generateStaticParams() {
  return candidates.map((c) => ({ id: c.id }))
}

// oxlint-disable-next-line react/only-export-components
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const candidate = candidates.find((c) => c.id === id)
  if (!candidate) return {}

  const url = `${BASE_URL}/candidato/${candidate.id}`

  return {
    title: `${candidate.fullName.value} — Presidenciáveis 2026`,
    description: `Perfil completo de ${candidate.fullName.value}, candidato à Presidência do Brasil em 2026 pelo ${candidate.party.name.value}. Dados pessoais, carreira, posicionamento político, escândalos e financiamento.`,
    openGraph: {
      title: `${candidate.fullName.value} — Presidenciáveis 2026`,
      description: `Perfil completo de ${candidate.fullName.value}, candidato à Presidência do Brasil em 2026 pelo ${candidate.party.name.value}.`,
      url,
      type: 'profile',
    },
    twitter: {
      title: `${candidate.fullName.value} — Presidenciáveis 2026`,
      description: `Perfil completo de ${candidate.fullName.value}, candidato à Presidência do Brasil em 2026.`,
    },
    alternates: { canonical: url },
  }
}

export default async function CandidatePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ tab?: string }>
}) {
  const { id } = await params
  const { tab } = await searchParams
  const candidate = candidates.find((c) => c.id === id)
  if (!candidate) notFound()

  const jsonLd = generateCandidateJsonLd(candidate, BASE_URL)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CandidateLayout candidate={candidate} initialTab={tab} />
    </>
  )
}
