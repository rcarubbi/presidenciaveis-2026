import { unstable_cache } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

const API_BASE = 'https://eleicoes2026.sapienslabs.com.br/api/v1'

const getCachedJson = unstable_cache(
  async (url: string) => {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
    })
    if (!res.ok) throw new Error(`Upstream ${res.status}`)
    return res.json()
  },
  ['sapiens-proxy'],
  { revalidate: 300 }
)

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params
    const search = req.nextUrl.search
    const url = `${API_BASE}/${path.join('/')}${search}`

    const data = await getCachedJson(url)
    return NextResponse.json(data)
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') {
      return NextResponse.json({ error: 'aborted' }, { status: 499 })
    }
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[sapiens/api]', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
