import { mkdirSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'
import { downloadCsvZip } from '../src/lib/tse/client.js'
import { parsePesquisas } from '../src/lib/tse/parsers/pesquisas.js'

const CDN_URL =
  'https://cdn.tse.jus.br/estatistica/sead/odsele/pesquisa_eleitoral/pesquisa_eleitoral_2026.zip'
const OUT_DIR = join(import.meta.dirname, '..', 'src', 'data', 'tse')

async function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })

  console.log(`[tse] Downloading TSE pesquisa data...`)

  try {
    const rows = await downloadCsvZip(CDN_URL)
    console.log(`[tse]   ${rows.length} rows parsed`)

    const data = parsePesquisas(rows)
    const outPath = join(OUT_DIR, 'pesquisas.json')
    writeFileSync(
      outPath,
      JSON.stringify(
        {
          source: 'pesquisas-eleitorais-2026',
          fetchedAt: new Date().toISOString(),
          data,
        },
        null,
        2,
      ),
    )
    console.log(
      `[tse]   Written ${data.totalPolls} polls (${data.totalInstitutes} institutes) to ${outPath}`,
    )
  } catch (err) {
    console.error(
      `[tse]   Error:`,
      err instanceof Error ? err.message : err,
    )
    process.exit(1)
  }

  console.log('[tse] Done.')
}

main()
