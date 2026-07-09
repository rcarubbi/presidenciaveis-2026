import { ImageResponse } from 'next/og'
import { candidates } from '@/data'

export const runtime = 'edge'

export const alt = 'Presidenciáveis 2026 — Comparativo dos candidatos à Presidência'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '60px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            marginBottom: 40,
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#f1f5f9',
              margin: 0,
              padding: 0,
              lineHeight: 1.1,
            }}
          >
            Presidenciáveis 2026
          </h1>
          <p
            style={{
              fontSize: 22,
              color: '#94a3b8',
              margin: 0,
              padding: 0,
            }}
          >
            Comparativo apartidário dos candidatos à Presidência do Brasil
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            width: '100%',
            maxWidth: 700,
            margin: '0 auto',
          }}
        >
          {candidates.map((c) => (
            <div
              key={c.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '12px 20px',
                borderRadius: 12,
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: c.party.color,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: '#f1f5f9',
                  flex: 1,
                }}
              >
                {c.fullName.value}
              </span>
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#64748b',
                }}
              >
                {c.party.name.value}
              </span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: c.party.color,
                  opacity: 0.6,
                }}
              >
                {c.party.number}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            width: '60%',
            height: 2,
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.15) 0%, transparent 100%)',
            margin: '32px auto 20px',
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 32,
          }}
        >
          {['Dados oficiais', 'Posicionamentos', 'Pesquisas', 'Propostas'].map(
            (item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#3b82f6',
                  }}
                />
                <span style={{ fontSize: 15, color: '#94a3b8' }}>{item}</span>
              </div>
            )
          )}
        </div>

        <div style={{ flex: 1 }} />

        <div
          style={{
            textAlign: 'center',
            fontSize: 14,
            color: '#475569',
          }}
        >
          presidenciaveis-2026.vercel.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
