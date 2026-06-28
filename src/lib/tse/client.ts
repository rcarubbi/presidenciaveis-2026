import { execSync } from 'child_process'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'fs'
import { tmpdir } from 'os'
import { join, basename } from 'path'

const CKAN_BASE = 'https://dadosabertos.tse.jus.br/api/3/action'

export interface CkanResource {
  id: string
  name: string
  format: string
  url: string
  description?: string
}

export interface CkanDataset {
  id: string
  name: string
  title: string
  resources: CkanResource[]
}

export async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`GET ${url} failed: ${res.status}`)
  return res.json() as Promise<T>
}

export async function getDataset(name: string): Promise<CkanDataset> {
  const json = await fetchJson<{
    success: boolean
    result: CkanDataset
  }>(`${CKAN_BASE}/package_show?id=${name}`)
  if (!json.success) throw new Error(`CKAN package_show failed for ${name}`)
  return json.result
}

export function parseCsv(text: string): Record<string, string>[] {
  const lines: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (ch === '\n' && !inQuotes) {
      if (current.length > 0) lines.push(current)
      current = ''
    } else if (ch === '\r') {
    } else {
      current += ch
    }
  }
  if (current.length > 0) lines.push(current)

  if (lines.length < 2) return []

  const headers = parseCsvLine(lines[0])
  const result: Record<string, string>[] = []

  for (let i = 1; i < lines.length; i++) {
    const values = parseCsvLine(lines[i])
    if (values.length === 0) continue
    if (values.length !== headers.length) continue
    const row: Record<string, string> = {}
    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = values[j]
    }
    result.push(row)
  }

  return result
}

function parseCsvLine(line: string): string[] {
  const values: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const ch = line[i]

    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (ch === ';' && !inQuotes) {
      values.push(current.trim())
      current = ''
    } else {
      current += ch
    }
  }
  values.push(current.trim())

  return values
}

function unzip(zipPath: string, destDir: string): void {
  if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true })
  if (process.platform === 'win32') {
    execSync(
      `powershell -Command "Expand-Archive -LiteralPath '${zipPath}' -DestinationPath '${destDir}' -Force"`,
      { stdio: 'pipe' },
    )
  } else {
    execSync(
      `python3 -c "import zipfile,sys; zipfile.ZipFile(sys.argv[1]).extractall(sys.argv[2])" "${zipPath}" "${destDir}"`,
      { stdio: 'pipe' },
    )
  }
}

export async function downloadCsvZip(
  url: string,
): Promise<Record<string, string>[]> {
  const tmpDir = join(tmpdir(), 'tse-download')
  if (!existsSync(tmpDir)) mkdirSync(tmpDir, { recursive: true })

  const zipName = basename(url)
  const zipPath = join(tmpDir, zipName)

  const res = await fetch(url)
  if (!res.ok) throw new Error(`Download ${url} failed: ${res.status}`)
  const buffer = Buffer.from(await res.arrayBuffer())
  writeFileSync(zipPath, buffer)

  const extractDir = join(tmpDir, zipName.replace(/\.zip$/, ''))
  if (existsSync(extractDir)) rmSync(extractDir, { recursive: true })

  unzip(zipPath, extractDir)

  const { readdirSync } = await import('fs')
  const files = readdirSync(extractDir)
  const csvFile =
    files.find(
      (f) =>
        f.includes('BRASIL') && (f.endsWith('.csv') || f.endsWith('.txt')),
    ) ??
    files.find((f) => f.endsWith('.csv') || f.endsWith('.txt'))
  if (!csvFile) throw new Error(`No CSV found in ${extractDir}`)

  const csvPath = join(extractDir, csvFile)
  const raw = readFileSync(csvPath, 'latin1')

  rmSync(zipPath)
  rmSync(extractDir, { recursive: true })

  return parseCsv(raw)
}
