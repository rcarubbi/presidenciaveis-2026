interface SapiensArticle {
  id: number
  title: string
  url: string
  source: string
  source_canonical: string
  published_at: string
  editorial_lean: string
  genre: string
}

interface SapiensResponse {
  data: SapiensArticle[]
  meta: { total: number; page: number; pages: number }
}

const CANDIDATES: { slug: string; name: string }[] = [
  { slug: "lula-silva", name: "Lula" },
  { slug: "flavio-bolsonaro", name: "Flávio Bolsonaro" },
  { slug: "renan-santos", name: "Renan Santos" },
  { slug: "ronaldo-caiado", name: "Ronaldo Caiado" },
  { slug: "romeu-zema", name: "Romeu Zema" },
]

interface ArticleMatch {
  candidate: string
  article: SapiensArticle
  matchedKeywords: string[]
  relevance: "proposta" | "posicao" | "escandalo" | "timeline" | "financas"
}

const KEYWORD_RULES: { keywords: RegExp[]; relevance: ArticleMatch["relevance"] }[] = [
  {
    keywords: [/proposta/i, /plano de governo/i, /promessa/i, /programa de governo/i, /projetos?/i, /meta/i],
    relevance: "proposta",
  },
  {
    keywords: [/defende/i, /declara/i, /posição/i, /a favor/i, /contra/i, /apoia/i, /critica/i, /ataque/i, /elogia/i],
    relevance: "posicao",
  },
  {
    keywords: [/escândalo/i, /investiga/i, /corrupção/i, /denúncia/i, /propina/i, /suspeita/i, /desvio/i, /operação/i, /justiça/i, /stf/i, /inquérito/i],
    relevance: "escandalo",
  },
  {
    keywords: [/candidatura/i, /vice/i, /aliança/i, /apoio político/i, /convenção/i, /registro/i, /lança/i],
    relevance: "timeline",
  },
  {
    keywords: [/patrimônio/i, /financeiro/i, /arrecadação/i, /gasto/i, /orçamento/i, /fundo eleitoral/i, /declaração de bens/i],
    relevance: "financas",
  },
]

function getDaysAgo(days: number): string {
  const d = new Date()
  d.setDate(d.getDate() - days)
  return d.toISOString().slice(0, 10)
}

function cleanRegexSource(source: string): string {
  return source.replace(/\\\//g, "/").replace(/i$/, "")
}

function matchArticle(article: SapiensArticle): { matchedKeywords: string[]; relevance: ArticleMatch["relevance"] } | null {
  const text = `${article.title}`

  for (const rule of KEYWORD_RULES) {
    const matchedKeywords: string[] = []
    for (const re of rule.keywords) {
      if (re.test(text)) {
        matchedKeywords.push(cleanRegexSource(re.source))
      }
    }
    if (matchedKeywords.length > 0) {
      return { matchedKeywords, relevance: rule.relevance }
    }
  }

  return null
}

async function fetchArticles(slug: string, fromDate: string): Promise<SapiensArticle[]> {
  const allArticles: SapiensArticle[] = []
  let page = 1
  let totalPages = 1

  while (page <= totalPages) {
    const url = `https://eleicoes2026.sapienslabs.com.br/api/v1/articles?candidate=${slug}&from=${fromDate}&page=${page}&limit=50`
    const resp = await fetch(url)

    if (!resp.ok) {
      console.error(`  [WARN] HTTP ${resp.status} for ${slug} page ${page}`)
      break
    }

    const json = (await resp.json()) as SapiensResponse
    allArticles.push(...json.data)
    totalPages = json.meta.pages
    page++
  }

  return allArticles
}

async function main() {
  const args = process.argv.slice(2)
  const verbose = args.includes("--verbose") || args.includes("-v")
  const fromDays = parseInt(args.find((a) => !a.startsWith("-")) || "7", 10)
  const fromDate = getDaysAgo(fromDays)

  console.log(`[candidate-news] ${fromDays}d from ${fromDate}\n`)

  for (const candidate of CANDIDATES) {
    const articles = await fetchArticles(candidate.slug, fromDate)

    const matches: ArticleMatch[] = []
    for (const article of articles) {
      const match = matchArticle(article)
      if (match) matches.push({ candidate: candidate.name, article, ...match })
    }

    const byRel: Record<string, ArticleMatch[]> = {}
    for (const m of matches) {
      if (!byRel[m.relevance]) byRel[m.relevance] = []
      byRel[m.relevance].push(m)
    }

    const summaries = Object.entries(byRel)
      .map(([rel, items]) => `${rel}(${items.length})`)
      .join(" ")

    if (summaries) {
      console.log(`${candidate.name}: ${articles.length} artigos → ${summaries}`)
    } else {
      console.log(`${candidate.name}: ${articles.length} artigos (0 relevantes)`)
    }

    if (verbose && matches.length > 0) {
      for (const m of matches) {
        const date = m.article.published_at.slice(0, 10)
        const kw = m.matchedKeywords.slice(0, 3).join(", ")
        console.log(`  [${m.relevance}] ${date} — ${m.article.title}`)
        console.log(`    ${m.article.url}`)
      }
    }
  }

  console.log(`\n[candidate-news] Done.`)
}

main()
