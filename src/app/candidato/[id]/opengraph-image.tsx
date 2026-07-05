import { ImageResponse } from 'next/og'
import { candidates } from '@/data'

export const runtime = 'edge'

export const alt = 'Candidato à Presidência — Presidenciáveis 2026'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const candidate = candidates.find((c) => c.id === id)
  if (!candidate) {
    return new ImageResponse(
      (
        <div
          style={{
            width: 1200,
            height: 630,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0f172a',
            color: '#f1f5f9',
            fontSize: 32,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          Presidenciáveis 2026
        </div>
      ),
      { width: 1200, height: 630 }
    )
  }

  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL ||
    'https://presidenciaveis-2026.vercel.app'
  const photoUrl = `${BASE_URL}${candidate.photo}`
  const logoUrl = `${BASE_URL}${candidate.party.logo}`
  const partyColor = candidate.party.color

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: 4,
            height: 630,
            background: partyColor,
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 48,
            padding: '0 80px',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 320,
              height: 400,
              borderRadius: 24,
              overflow: 'hidden',
              border: '2px solid rgba(255,255,255,0.15)',
              flexShrink: 0,
            }}
          >
            <img
              src={photoUrl}
              alt={candidate.fullName.value}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              flex: 1,
            }}
          >
            <h1
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: '#f1f5f9',
                lineHeight: 1.1,
                margin: 0,
                padding: 0,
              }}
            >
              {candidate.fullName.value}
            </h1>
            <p
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: partyColor,
                margin: 0,
                padding: 0,
              }}
            >
              {candidate.party.name.value}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginTop: 20,
                marginBottom: 32,
              }}
            >
              <img
                src={logoUrl}
                alt={candidate.party.name.value}
                style={{ width: 44, height: 44, objectFit: 'contain' }}
              />
              <span
                style={{
                  fontSize: 18,
                  color: '#64748b',
                  fontWeight: 400,
                }}
              >
                Presidenciáveis 2026
              </span>
            </div>

            <div
              style={{
                width: '60%',
                height: 2,
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0.15) 0%, transparent 100%)',
              }}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 16,
              }}
            >
              <span style={{ fontSize: 18, color: '#64748b' }}>
                Comparativo completo dos candidatos à Presidência
              </span>
              <span style={{ fontSize: 14, color: '#475569' }}>
                presidenciaveis-2026.vercel.app
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
