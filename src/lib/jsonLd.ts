import type { Candidate } from '@/types'

export function generateCandidateJsonLd(
  candidate: Candidate,
  baseUrl: string,
): Record<string, unknown> {
  const url = `${baseUrl}/candidato/${candidate.id}`

  const ld: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: candidate.fullName.value,
    givenName: candidate.name.value,
    description: `Candidato à Presidência do Brasil em 2026 pelo ${candidate.party.name.value}`,
    url,
    image: `${baseUrl}${candidate.photo}`,
    nationality: { '@type': 'Country', name: 'Brasil' },
    affiliation: {
      '@type': 'PoliticalParty',
      name: candidate.party.name.value,
    },
    jobTitle: candidate.currentPosition?.value || 'Candidato à Presidência',
  }

  if (candidate.naturalidade?.value) {
    ld.birthPlace = { '@type': 'Place', name: candidate.naturalidade.value }
  }

  if (candidate.birthYear?.value) {
    ld.birthDate = candidate.birthYear.value.toString()
  }

  if (candidate.formacao?.value && candidate.formacao.value !== '—') {
    ld.alumniOf = candidate.formacao.value
  }

  if (candidate.positions?.length) {
    ld.knowsAbout = candidate.positions.map((p) => p.issue.value)
  }

  return ld
}

export function generateWebsiteJsonLd(baseUrl: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Presidenciáveis 2026 — Comparativo',
    url: baseUrl,
    description:
      'Comparativo dos presidenciáveis 2026 — Lula, Flávio Bolsonaro, Renan Santos, Ronaldo Caiado e Romeu Zema',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/candidato/{candidate_id}`,
      },
      'query-input': 'required name=candidate_id',
    },
  }
}
