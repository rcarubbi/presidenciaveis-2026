import { NextResponse } from 'next/server'
import { downloadCsvZip, getDataset } from '@/lib/tse/client'
import { parsePesquisas } from '@/lib/tse/parsers/pesquisas'
import type { TseAggregate } from '@/lib/tse/parsers/pesquisas'

const DATASET = 'pesquisas-eleitorais-2026'

let cache: { data: TseAggregate; ts: number } | null = null
const CACHE_TTL = 5 * 60 * 1000

export async function GET() {
  try {
    if (cache && Date.now() - cache.ts < CACHE_TTL) {
      return NextResponse.json({ data: cache.data, cached: true })
    }

    const dataset = await getDataset(DATASET)

    const pesquisaResource = dataset.resources.find(
      (r) => r.name === 'Pesquisas eleitorais' && r.format === 'CSV',
    )

    if (!pesquisaResource) {
      return NextResponse.json(
        { error: 'Pesquisas resource not found in dataset' },
        { status: 404 },
      )
    }

    const rows = await downloadCsvZip(pesquisaResource.url)
    const data = parsePesquisas(rows)

    cache = { data, ts: Date.now() }

    return NextResponse.json({ data, cached: false })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[tse/api]', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
