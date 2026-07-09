interface YouTubeVideo {
  title: string
  description: string
  youtubeId: string
  publishedAt: string
  channelTitle: string
}

interface YouTubeSearchItem {
  id: { videoId: string }
  snippet: {
    title: string
    description: string
    publishedAt: string
    channelTitle: string
  }
}

interface YouTubeSearchResponse {
  items: YouTubeSearchItem[]
  error?: { message: string }
}

function parseArgs(): Record<string, string> {
  const args = process.argv.slice(2)
  const result: Record<string, string> = {}
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2)
      result[key] = args[i + 1] || ''
      i++
    }
  }
  return result
}

async function main() {
  const { candidate, after, before, query: customQuery } = parseArgs()

  if (!candidate) {
    console.error('[youtube] Error: --candidate is required')
    process.exit(1)
  }

  const apiKey = process.env.YOUTUBE_API_KEY
  if (!apiKey) {
    console.error('[youtube] Error: YOUTUBE_API_KEY env var not set')
    process.exit(1)
  }

  const query = customQuery || `${candidate}`
  const publishedAfter = after ? `${after}T00:00:00Z` : ''

  const params = new URLSearchParams({
    part: 'snippet',
    q: query,
    type: 'video',
    maxResults: '10',
    order: 'date',
    regionCode: 'BR',
    relevanceLanguage: 'pt',
    key: apiKey,
  })

  if (publishedAfter) {
    params.set('publishedAfter', publishedAfter)
  }

  const publishedBefore = before ? `${before}T23:59:59Z` : ''
  if (publishedBefore) {
    params.set('publishedBefore', publishedBefore)
  }

  const url = `https://www.googleapis.com/youtube/v3/search?${params}`

  const response = await fetch(url)
  if (!response.ok) {
    const errorBody = await response.text()
    console.error(`[youtube] API error ${response.status}: ${errorBody}`)
    process.exit(1)
  }

  const data = (await response.json()) as YouTubeSearchResponse

  if (data.error) {
    console.error(`[youtube] API error: ${data.error.message}`)
    process.exit(1)
  }

  const videos: YouTubeVideo[] = (data.items || []).map((item) => ({
    title: item.snippet.title,
    description: item.snippet.description.slice(0, 200),
    youtubeId: item.id.videoId,
    publishedAt: item.snippet.publishedAt,
    channelTitle: item.snippet.channelTitle,
  }))

  console.log(JSON.stringify(videos, null, 2))
}

main()
