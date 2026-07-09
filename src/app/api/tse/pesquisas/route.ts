import { unstable_cache } from 'next/cache'
import { NextResponse } from 'next/server'
import { downloadCsvZip } from '@/lib/tse/client'
import { parsePesquisas } from '@/lib/tse/parsers/pesquisas'

const CDN_URL =
  'https://cdn.tse.jus.br/estatistica/sead/odsele/pesquisa_eleitoral/pesquisa_eleitoral_2026.zip'

const getCachedData = unstable_cache(
  async () => {
    const rows = await downloadCsvZip(CDN_URL)
    return parsePesquisas(rows)
  },
  ['tse-pesquisas'],
  { revalidate: 3600 }
)

export async function GET() {
  try {
    const data = await getCachedData()
    return NextResponse.json({ data })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[tse/api]', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
