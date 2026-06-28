import { NextResponse } from 'next/server'
import { downloadCsvZip } from '@/lib/tse/client'
import { parsePesquisas } from '@/lib/tse/parsers/pesquisas'
import type { TseAggregate } from '@/lib/tse/parsers/pesquisas'

const CDN_URL =
  'https://cdn.tse.jus.br/estatistica/sead/odsele/pesquisa_eleitoral/pesquisa_eleitoral_2026.zip'

let cache: { data: TseAggregate; ts: number } | null = null
const CACHE_TTL = 5 * 60 * 1000

export async function GET() {
  try {
    if (cache && Date.now() - cache.ts < CACHE_TTL) {
      return NextResponse.json({ data: cache.data, cached: true })
    }

    const rows = await downloadCsvZip(CDN_URL)
    const data = parsePesquisas(rows)

    cache = { data, ts: Date.now() }

    return NextResponse.json({ data, cached: false })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[tse/api]', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
