import { mkdirSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'
import { getDataset, downloadCsvZip } from '../src/lib/tse/client.js'
import { parsePesquisas } from '../src/lib/tse/parsers/pesquisas.js'

const DATASETS = ['pesquisas-eleitorais-2026']
const OUT_DIR = join(import.meta.dirname, '..', 'src', 'data', 'tse')

async function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })

  const dataset = process.argv.find((a) => a.startsWith('--dataset='))
  const datasetsToFetch = dataset
    ? [dataset.replace('--dataset=', '')]
    : DATASETS

  for (const name of datasetsToFetch) {
    console.log(`[tse] Fetching ${name}...`)

    try {
      const info = await getDataset(name)
      console.log(`[tse]   ${info.title} (${info.resources.length} resources)`)

      if (name === 'pesquisas-eleitorais-2026') {
        const pesquisaRes = info.resources.find(
          (r) => r.name === 'Pesquisas eleitorais' && r.format === 'CSV',
        )

        if (!pesquisaRes) {
          console.error(`[tse]   Missing pesquisa resource for ${name}`)
          continue
        }

        console.log(`[tse]   Downloading CSV...`)
        const rows = await downloadCsvZip(pesquisaRes.url)
        console.log(`[tse]   ${rows.length} rows`)

        const data = parsePesquisas(rows)
        const outPath = join(OUT_DIR, 'pesquisas.json')
        writeFileSync(
          outPath,
          JSON.stringify(
            { source: name, fetchedAt: new Date().toISOString(), data },
            null,
            2,
          ),
        )
        console.log(
          `[tse]   Written ${data.totalPolls} polls (${data.totalInstitutes} institutes) to ${outPath}`,
        )
      }
    } catch (err) {
      console.error(
        `[tse]   Error fetching ${name}:`,
        err instanceof Error ? err.message : err,
      )
    }
  }

  console.log('[tse] Done.')
}

main()
