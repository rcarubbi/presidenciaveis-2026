import { NextRequest, NextResponse } from 'next/server'

const API_BASE = 'https://eleicoes2026.sapienslabs.com.br/api/v1'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params
    const search = req.nextUrl.search
    const url = `${API_BASE}/${path.join('/')}${search}`

    const res = await fetch(url, {
      next: { revalidate: 300 },
      headers: { Accept: 'application/json' },
    })

    if (!res.ok) {
      return NextResponse.json(
        { error: `Upstream ${res.status}` },
        { status: res.status }
      )
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[sapiens/api]', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
