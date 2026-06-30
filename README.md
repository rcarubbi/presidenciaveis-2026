# Presidenciáveis 2026

Comparativo apartidário dos 5 principais candidatos à Presidência do Brasil
em 2026 — Lula (PT), Flávio Bolsonaro (PL), Renan Santos (Missão),
Ronaldo Caiado (PSD) e Romeu Zema (NOVO).

Código-fonte: [github.com/rcarubbi/presidenciaveis-2026](https://github.com/rcarubbi/presidenciaveis-2026)  
Site: [presidenciaveis-2026.vercel.app](https://presidenciaveis-2026.vercel.app)

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Recharts** (gráficos)
- **TypeScript ~6**
- **Oxlint** (linter)
- **lucide-react** (ícones)
- **sonner** (notificações)

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Visão geral dos 5 candidatos |
| `/candidato/[id]` | Perfil individual (lula, flavio, renan, caiado, zema) |
| `/pesquisas` | Pesquisas eleitorais (institutos + TSE) |
| `/comparar?ids=lula,flavio` | Comparativo lado a lado |

## Scripts

```bash
npm run dev       # desenvolvimento
npm run build     # build produção
npm run start     # servidor produção
npm run lint      # oxlint
npm run typecheck # tsc --noEmit
```

## Variáveis de ambiente

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `NEXT_PUBLIC_GA_ID` | Não | Google Tag Manager ID (ex: GTM-...) |
| `NEXT_PUBLIC_BASE_URL` | Não | URL base para sitemap/OG (fallback: presidenciaveis-2026.vercel.app) |

## Dados

### Candidate data
Perfis, carreira, posicionamento, escândalos e financiamento estão em
arquivos TypeScript estáticos em `src/data/`. Cada campo inclui referência
(URL + data) via `DataValue<T>`.

### Cobertura jornalística (SapiensLabs)
Série histórica de sentimento, artigos, top fontes e tópicos vindos da API
[eleicoes2026.sapienslabs.com.br](https://eleicoes2026.sapienslabs.com.br/api/v1),
acessada via proxy em `/api/sapiens/[...path]` com cache de 5 minutos.
O slug de cada candidato na API está mapeado em `src/lib/sapiens/slugs.ts`.

### Pesquisas eleitorais
Duas fontes:
- **Institutos** — Datafolha, Quaest, AtlasIntel, Real Time Big Data
  (dados estáticos em `src/data/polls/`)
- **TSE** — CSV oficial de pesquisas registradas, parseado em
  `src/lib/tse/client.ts`

### Mídia
95+ vídeos do YouTube embedados por categoria (entrevistas, debates,
campanha), organizados em `src/data/media/`.

## Licença

MIT no código. Conteúdos (dados dos candidatos, textos, imagens) seguem
suas respectivas licenças originais.

Site informativo sem fins eleitorais. Art. 57-B Lei 9.504/97.
