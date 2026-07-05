---
name: update-content
description: >
  Atualiza dados do site presidenciaveis-2026 para 1 candidato por execucao.
  Busca pesquisas mais recentes, dados de candidatos, videos e propostas de governo.
  Trigger: "update content {candidato}", "atualizar {candidato}", "/update {candidato}",
  "atualizar site {candidato}" (ex: "/update lula").
  Sem candidato: processar pesquisas (polls) + resumo geral.
---

# Update Content Agent (1 candidato)

Projeto: `C:\Users\rcaru\source\repos\eleicoes_benchmark\presidenciaveis-2026`

## Argumento: Candidato (opcional)

Se especificar candidato, processar apenas dados + propostas + videos dele + polls.
Se omitir, processar apenas polls + resumo geral.

| ID | Nome | Arquivo dados | Arquivo propostas | Arquivo media |
|---|---|---|---|---|
| `lula` | Lula | `src/data/lula.ts` | `src/data/proposals-lula.ts` | `src/data/media-lula.ts` |
| `flavio` | Flávio Bolsonaro | `src/data/flavio.ts` | `src/data/proposals-flavio.ts` | `src/data/media-flavio.ts` |
| `renan` | Renan Santos | `src/data/renan.ts` | `src/data/proposals-renan.ts` | `src/data/media-renan.ts` |
| `caiado` | Ronaldo Caiado | `src/data/caiado.ts` | `src/data/proposals-caiado.ts` | `src/data/media-caiado.ts` |
| `zema` | Romeu Zema | `src/data/zema.ts` | `src/data/proposals-zema.ts` | `src/data/media-zema.ts` |

## Regras Obrigatorias

1. **So atualizar se `updatedAt`/`date` novo > existente.** Nao reverter dados.
2. **Toda entrada precisa de `source` URL** que mencione explicitamente o fato exibido.
3. **Usar `dv(valor, source, updatedAt)` ou `dvn(valor, source, updatedAt)`** para novos DataValues.
4. **Nao modificar schemas** (`src/types.ts`). Nao criar arquivos fora de `src/data/`.
5. **Nao modificar package.json, sitemap.ts, ou qualquer config.**
6. **Apenas arquivos alterados: `src/data/candidates.ts`, `src/data/polls.ts`, `src/data/proposals-{CANDIDATE}.ts`, `src/data/media-{CANDIDATE}.ts`, `src/data/{CANDIDATE}.ts`, `src/data/.version.ts`.**
7. **EXECUTE TODOS OS PASSOS DO WORKFLOW (Passo 1 ao 6). NUNCA pular etapas.** Skip e permitido APENAS se a busca nao encontrar dados novos — nunca por omissao.

---

## 1. Pesquisas Eleitorais (Polls) — sempre processar

**File:** `src/data/polls.ts`
**Type:** `PollData[]`

### Estrutura

```typescript
interface PollData {
	institute: string; // "Datafolha" | "Quaest" | "AtlasIntel" | "Real Time Big Data"
	date: string; // "DD/mon" ex: "17/jun"
	firstRound: { name: string; value: number }[];
	secondRound?: { label: string; lula: number; adversario: number; adversarioNome: string }[];
	rejection?: { name: string; value: number }[];
	spontaneous?: { name: string; value: number }[];
	regional?: { region: string; lula: number; flavio: number; renan?: number }[];
}
```

### Institutos e URLs de busca

| Instituto | Search query | Pagina oficial |
|---|---|---|
| Datafolha | `Datafolha pesquisa eleitoral presidente 2026` | `datafolha.folha.uol.com.br` |
| Quaest | `Quaest Genial pesquisa presidente 2026` | `gemaa.quaaest.com.br` |
| AtlasIntel | `AtlasIntel pesquisa Brasil presidente 2026` | `atlasintel.com.br` |
| Real Time Big Data | `Real Time Big Data pesquisa presidente 2026` | (buscar em noticias) |

### Fluxo

1. Web search: `{institute} pesquisa eleitoral presidente 2026 {mes_atual}`
2. Procurar pagina com tabela de intencao de voto 1o turno
3. Se achar pesquisa com data mais recente que ultima entrada do mesmo institute:
   - Extrair firstRound, secondRound, rejection, spontaneous, regional
4. Adicionar nova entrada ao array `polls` em `src/data/polls.ts`
5. Inserir na posicao correta (ordenado por data decrescente)

---

## 2. Dados do Candidato (se CANDIDATE especificado)

**File:** `src/data/{CANDIDATE}.ts`

### Script automatizado de buscas

**Script:** `scripts/fetch-candidate-news.ts`

Usa SAPIENS API para buscar artigos recentes sobre o candidato:

```
npm run fetch:news 14
```

Usar `-v` para ver titulos e URLs.

### Campos que requerem atualizacao periodica

- **patrimonio**: buscar declaracao TSE mais recente
- **timeline**: novos eventos (vice, aliancas, convencoes)
- **scandals**: mudancas de status, novos escandalos
- **campaignFinance**: novas prestacoes de contas
- **positions**: novas declaracoes publicas

### Formato DataValue

```typescript
dv("texto", "https://fonte.url", "2026-07-01");
dvn(1234567.89, "https://fonte.url", "2026-07-01");
```

### Fluxo para o candidato

1. Para cada campo com `updatedAt`, coletar data mais recente
2. Web search por updates desde aquela data
3. Se achar informacao mais recente com fonte verificavel:
   - Atualizar `value`, `source`, `updatedAt`
4. Verificar novos escandalos, timeline events, positions

---

## 3. Videos (Midia) — se CANDIDATE especificado

**File:** `src/data/media-{CANDIDATE}.ts`
**Type:** `MediaCategory[]`

### Estrutura

Agrupado por mes/ano (`YYYY-MM`). Mais recente primeiro. Dentro de cada mes, items ordenados do mais recente ao mais antigo.

```typescript
{
  id: "2026-07",       // YYYY-MM
  label: "Julho de 2026",
  items: MediaItem[]   // ordenado decrescente por updatedAt
}
```

### Estrategia de busca

Usar **YouTube Data API v3** via script `scripts/fetch-youtube-videos.ts`:

```bash
node --env-file .env.local --experimental-strip-types scripts/fetch-youtube-videos.ts --candidate "{NOME_CANDIDATO}" --after "{ULTIMA_DATA}"
```

**ATENCAO:** `pnpm run` NAO funciona — o `--` separador do pnpm engole os argumentos. Chamar `node` diretamente.

Script retorna JSON: `title`, `description`, `youtubeId`, `publishedAt`, `channelTitle`.

#### Queries por candidato

| ID | `--candidate` |
|---|---|
| lula | `"Lula"` |
| flavio | `"Flavio Bolsonaro"` |
| renan | `"Renan Santos"` |
| caiado | `"Caiado"` |
| zema | `"Zema"` |

### Verificacao de duplicatas

- Antes de adicionar, conferir se `youtubeId` ja existe em `items[]`
- Se existir, pular

---

## 4. Propostas de Governo — se CANDIDATE especificado

**File:** `src/data/proposals-{CANDIDATE}.ts`
**Type:** `Record<string, ProposalItem[]>`

### Areas tematicas (11)

`seguranca`, `economia`, `saude`, `educacao`, `previdencia`, `infraestrutura`, `meio-ambiente`, `relacoes-exteriores`, `reforma-politica`, `costumes`, `agricultura`

### Estrategia de busca

- `"{candidato}" proposta {area_label} {ano}`
- `"{candidato}" plano de governo {area_label}`
- Fontes: G1, UOL, Folha, Estadão, sites oficiais

### Verificacao

- Comparar `text.updatedAt` de cada proposta existente
- Se nova proposta com mesma area existe e e mais recente:
  - Texto similar → ignorar
  - Proposta nova → adicionar ao array

---

## 5. Workflow (Passo 1 ao 6)

### Passo 1 — Diagnosticar estado atual

- Ler `src/data/polls.ts` — extrair ultima data por instituto
- Se CANDIDATE especificado:
  - Ler `src/data/{CANDIDATE}.ts` — extrair `updatedAt` de cada campo
  - Ler `src/data/media-{CANDIDATE}.ts` — extrair `updatedAt` dos videos mais recentes
  - Calcular `dataAlvo = (hoje - 14 dias)` no formato `YYYY-MM-DD`
  - Ler `src/data/proposals-{CANDIDATE}.ts` — extrair `updatedAt` das propostas mais recentes por area

Salvar checkpoint apos este passo.

### Passo 2 — Buscar atualizacoes

**IMPORTANTE: Executar TODAS as sub-etapas (2a, 2b, 2c).**

#### 2a. Candidate news — SAPIENS API

Sempre executar para detectar novas propostas, posicoes, escandalos:

```bash
npm run fetch:news 14
```

Usar `-v` para ver os titulos e URLs.

#### 2b. YouTube (se CANDIDATE especificado)

Executar fetch script:

```bash
node --env-file .env.local --experimental-strip-types scripts/fetch-youtube-videos.ts --candidate "{NOME}" --after "{ULTIMA_DATA}"
```

#### 2c. Web search (paralelo)

- **Polls**: `"{instituto}" pesquisa eleitoral presidente 2026`
- **Candidates** (se CANDIDATE): `"{candidato}" proposta/declaracao/escandalo {ano}`
- **Proposals** (se CANDIDATE): `"{candidato}" plano de governo proposta {area}`

Salvar checkpoint apos este passo.

### Passo 3 — Validar

- Data mais recente que registro existente? Senao, pular.
- Fonte URL menciona explicitamente a informacao? Senao, pular.
- Valor numerico confere com a fonte?

### Passo 4 — Editar arquivos

Editar apenas `src/data/` files. Manter indentacao (tabs), aspas duplas, ordem dos arrays.

### Passo 4.5 — Atualizar `src/data/.version.ts`

Apos qualquer alteracao:

1. Atualizar `version` e `updatedAt` com timestamp ISO atual
2. Adicionar entrada em `changes[]` para cada categoria alterada:
   - Pesquisas → `{ emoji: "📊", label: "Pesquisas eleitorais" }`
   - Candidatos → `{ emoji: "👤", label: "Dados dos candidatos" }`
   - Propostas → `{ emoji: "📋", label: "Propostas de governo" }`
   - Videos → `{ emoji: "🎥", label: "Videos e entrevistas" }`
3. Remover entradas duplicadas

### Passo 4.7 — Verificar duplicatas

Rodar apos edicoes:

```bash
node "C:\Users\rcaru\AppData\Local\Temp\opencode\check_duplicates.mjs"
```

Verificar: youtubeIds duplicados, textos de proposal duplicados, polls duplicados, timeline/position duplicados.

Se encontrar duplicatas **exatas**, remover automaticamente (manter na secao mais relevante).
Se **muito similares**, perguntar ao usuario.

### Passo 5 — Verificar build

```
npm run lint
npm run typecheck
npm run build
```

### Passo 6 — Reportar

Listar para o usuario:

- Arquivos alterados
- Entradas novas/adicionadas
- Campos atualizados
- Datas das atualizacoes
- Links das fontes usadas

Apos reportar, limpar checkpoints.

---

## 6. Checkpoint / Persistencia Parcial

Usar memoria do opencode para salvar e recarregar progresso.

### Salvar checkpoint

Apos Passo 1, 2, e 4, salvar:

```
memory mode=add type=skill-checkpoint tags="update-content,{CANDIDATE},passo-{N}" content="PROGRESSO:{...JSON...}"
```

Formato do JSON:

```json
{
  "candidate": "{CANDIDATE}",
  "passo": 2,
  "descricao": "Buscas de YouTube concluidas",
  "pollUpdated": false,
  "candidateUpdated": false,
  "mediaUpdated": false,
  "proposalsUpdated": false,
  "newPolls": [],
  "newVideos": [],
  "newProposals": [],
  "findings": "Resumo do que foi encontrado"
}
```

### Recarregar checkpoint

Se contexto expirar:

```
memory mode=search type=skill-checkpoint query="update-content {CANDIDATE}"
```

Listar, identificar ultimo passo, retomar.

### Limpeza ao finalizar

No Passo 6, apos reportar:

1. `memory mode=search type=skill-checkpoint tags=update-content,{CANDIDATE}` (listar)
2. Para cada um: `memory mode=forget memoryId=<ID>`

**Nao deixar checkpoints orfaos.**
