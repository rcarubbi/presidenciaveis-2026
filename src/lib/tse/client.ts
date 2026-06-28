import { inflateRawSync } from 'node:zlib'

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

function extractCsvFromZipBuffer(buf: Buffer): string {
  let offset = 0

  while (offset < buf.length - 30) {
    if (buf.readUInt32LE(offset) !== 0x04034b50) { offset++; continue }

    const flags = buf.readUInt16LE(offset + 6)
    const method = buf.readUInt16LE(offset + 8)
    let compressedSize = buf.readUInt32LE(offset + 18)
    const filenameLen = buf.readUInt16LE(offset + 26)
    const extraLen = buf.readUInt16LE(offset + 28)

    const filename = buf.toString('latin1', offset + 30, offset + 30 + filenameLen)
    const dataOff = offset + 30 + filenameLen + extraLen

    if ((flags & 0x08) !== 0) {
      let next = dataOff
      while (next < buf.length - 4) {
        const sig = buf.readUInt32LE(next)
        if (sig === 0x04034b50 || sig === 0x02014b50) break
        next++
      }
      compressedSize = next - dataOff
    }

    if (filename.includes('BRASIL') && filename.endsWith('.csv')) {
      const data = buf.subarray(dataOff, dataOff + compressedSize)
      if (method === 0) return data.toString('latin1')
      if (method === 8) return inflateRawSync(data).toString('latin1')
      throw new Error(`Unsupported ZIP compression: ${method}`)
    }

    offset = dataOff + compressedSize
  }

  throw new Error('BRASIL.csv not found in ZIP')
}

export async function downloadCsvZip(
  url: string,
): Promise<Record<string, string>[]> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Download ${url} failed: ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  return parseCsv(extractCsvFromZipBuffer(buf))
}
