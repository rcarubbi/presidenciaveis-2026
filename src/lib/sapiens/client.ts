const BASE_URL = 'https://eleicoes2026.sapienslabs.com.br/api/v1'

export async function sapiensFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      ...options?.headers,
    },
  })
  if (!res.ok) throw new Error(`Sapiens API ${path} failed: ${res.status}`)
  return res.json()
}
