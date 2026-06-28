# Presidenciáveis 2026

Comparativo dos candidatos à Presidência do Brasil em 2026 — Lula, Flávio
Bolsonaro e Renan Santos.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **Recharts** (gráficos)
- **TypeScript ~6**
- **Oxlint** (linter)

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Visão geral dos candidatos |
| `/candidato/[id]` | Perfil individual (lula, flavio, renan) |
| `/pesquisas` | Pesquisas eleitorais |
| `/comparar?ids=...` | Comparativo lado a lado |

## Scripts

```bash
npm run dev      # desenvolvimento
npm run build    # build produção
npm run start    # servidor produção
npm run lint     # oxlint
npm run typecheck # tsc --noEmit
```

## Variáveis de ambiente

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `NEXT_PUBLIC_GA_ID` | Não | Google Tag Manager ID (ex: GTM-...) |
| `NEXT_PUBLIC_BASE_URL` | Não | URL base para sitemap/OG (fallback: presidenciaveis-2026.vercel.app) |

## Dados

Todo conteúdo extraído de fontes oficiais e artigos de imprensa. Cada campo
inclui referência (URL + data) via `DataValue`.

## Licença

Site informativo sem fins eleitorais. Art. 57-B Lei 9.504/97.
