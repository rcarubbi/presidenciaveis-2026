---
name: update-content
description: >
  Atualiza dados do site presidenciaveis-2026. Busca pesquisas mais recentes,
  dados de candidatos, videos e propostas de governo. Verifica fontes e datas.
  Trigger: "update content", "atualizar", "/update", "atualizar site".
---

# Update Content Agent

Projeto: `C:\Users\rcaru\source\repos\eleicoes_benchmark\presidenciaveis-2026`

## Regras Obrigatorias

1. **So atualizar se `updatedAt`/`date` novo > existente.** Nao reverter dados.
2. **Toda entrada precisa de `source` URL** que mencione explicitamente o fato exibido.
3. **Usar `dv(valor, source, updatedAt)` ou `dvn(valor, source, updatedAt)`** para novos DataValues.
4. **Nao modificar schemas** (`src/types.ts`). Nao criar arquivos fora de `src/data/`.
5. **Nao modificar package.json, sitemap.ts, ou qualquer config.**
6. **Apenas arquivos alterados: `src/data/candidates.ts`, `src/data/polls.ts`, `src/data/proposals.ts`, `src/data/media.ts`, `src/data/.version.ts`.**
7. **EXECUTE TODOS OS PASSOS DO WORKFLOW (Passo 1 ao 6). NUNCA pular etapas.** Cada execucao do skill deve rodar o diagnostico, todas as buscas (YouTube para 5 candidatos, web search, SAPIENS news), validacao, edicao se necessario, .version, build e report. Skip e permitido APENAS se a busca nao encontrar dados novos — nunca por omissao ou preguiça.

---

## 1. Pesquisas Eleitorais (Polls)

**File:** `src/data/polls.ts`
**Type:** `PollData[]`

### Estrutura

```typescript
interface PollData {
	institute: string; // "Datafolha" | "Quaest" | "AtlasIntel" | "Real Time Big Data"
	date: string; // formato "DD/mon" ex: "17/jun"
	firstRound: { name: string; value: number }[];
	secondRound?: {
		label: string;
		lula: number;
		adversario: number;
		adversarioNome: string;
	}[];
	rejection?: { name: string; value: number }[];
	spontaneous?: { name: string; value: number }[];
	regional?: { region: string; lula: number; flavio: number; renan?: number }[];
}
```

### Institutos e URLs de busca

| Instituto          | Search query                                   | Pagina oficial               |
| ------------------ | ---------------------------------------------- | ---------------------------- |
| Datafolha          | `Datafolha pesquisa eleitoral presidente 2026` | `datafolha.folha.uol.com.br` |
| Quaest             | `Quaest Genial pesquisa presidente 2026`       | `gemaa.quaaest.com.br`       |
| AtlasIntel         | `AtlasIntel pesquisa Brasil presidente 2026`   | `atlasintel.com.br`          |
| Real Time Big Data | `Real Time Big Data pesquisa presidente 2026`  | (buscar em noticias)         |

### Fluxo

1. Web search: `{institute} pesquisa eleitoral presidente 2026 {mes_atual}`
2. Procurar pagina com tabela de intencao de voto 1o turno
3. Se achar pesquisa com data mais recente que ultima entrada do mesmo institute:
   - Extrair firstRound (todos os candidatos com %)
   - Extrair secondRound (se houver simulated scenarios)
   - Extrair rejection (se houver)
   - Extrair spontaneous (se houver)
   - Extrair regional (se houver)
4. Adicionar nova entrada `PollData` ao array `polls` em `src/data/polls.ts`
5. Inserir na posicao correta (ordenado por data decrescente)

### Parse date

- Datas no arquivo: `"17/jun"`, `"10/jun"`, `"1/jun"`, `"25/mai"`, `"19/mai"`, `"13/mai"`
- Formato: `DD/mon` (mon = jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez)
- Para comparar: converter para `Date` do ano corrente

### Exemplo de edicao

Adicionar no inicio do array `polls` se for mais recente:

```typescript
  {
    institute: 'Datafolha',
    date: '01/jul',
    firstRound: [
      { name: 'Lula', value: 42.0 },
      { name: 'Flávio', value: 30.0 },
    ],
    secondRound: [
      { label: 'Lula × Flávio', lula: 48.0, adversario: 42.0, adversarioNome: 'Flávio' },
    ],
    rejection: [
      { name: 'Flávio', value: 48.0 },
      { name: 'Lula', value: 45.0 },
    ],
    spontaneous: [
      { name: 'Lula', value: 31 },
      { name: 'Flávio', value: 18 },
    ],
  },
```

---

## 2. Dados dos Candidatos

**File:** `src/data/candidates.ts`
**Type:** `Candidate[]` — 5 candidatos: `lula`, `flavio`, `renan`, `caiado`, `zema`

### Candidatos e IDs

| ID       | Nome exibido     | Photo         |
| -------- | ---------------- | ------------- |
| `lula`   | Lula             | `/lula.png`   |
| `flavio` | Flávio Bolsonaro | `/flavio.png` |
| `renan`  | Renan Santos     | `/renan.png`  |
| `caiado` | Ronaldo Caiado   | `/caiado.png` |
| `zema`   | Romeu Zema       | `/zema.png`   |

### Script automatizado de buscas

**Script:** `scripts/fetch-candidate-news.ts`

Usa a **SAPIENS API** (`https://eleicoes2026.sapienslabs.com.br/api/v1`) para buscar artigos recentes sobre cada candidato e classifica-los por relevancia:

| Relevancia | Detecta                                      |
| ---------- | -------------------------------------------- |
| `proposta` | proposta, plano de governo, promessa, meta   |
| `posicao`  | defende, declara, a favor, contra, critica   |
| `escandalo`| investigacao, corrupcao, denuncia, STF       |
| `timeline` | candidatura, vice, alianca, convencao        |
| `financas` | patrimonio, arrecadacao, fundo eleitoral     |

#### Como usar

```bash
# Ultimos 7 dias (summary)
npm run fetch:news

# Ultimos 3 dias com detalhes
npm run fetch:news -- 3 -v

# Ultimos 14 dias
npm run fetch:news 14
```

#### Fluxo

1. Rodar `npm run fetch:news 7` para ver o que foi publicado
2. Para cada candidato com artigos relevantes, abrir as URLs dos artigos de maior interesse
3. Se a informacao for nova e tiver fonte verificavel, adicionar ao `candidates.ts`

### Campos que requerem atualizacao periodica

#### patrimonio (`DataValue<number>`)

- Busca: `"{candidato}" patrimonio declarado {ano} TSE`
- Fonte: sites de noticia (G1, UOL, Estadão) que publiquem declaracao do TSE
- Verificar: valor numerico, fonte com valor exato, updatedAt > existente
- Dica: TSE geralmente divulga no registro de candidatura (ago/set). Fora disso, patrimonio raramente muda.

#### timeline (`TimelineEvent[]`)

- Cada evento tem `year: DataValue` e `event: DataValue`
- Busca: usar `npm run fetch:news` e filtrar por `timeline` — captura anuncios de vice, aliancas, convencoes
- Adicionar novos eventos se relevante (ex: nova candidatura, julgamento, cargo assumido)

#### scandals (`Scandal[]`)

- Cada escandalo: `name`, `status` ("ativo"/"arquivado"/"anulado"), `description`, `value?`
- Busca: usar `npm run fetch:news` e filtrar por `escandalo` — captura noticias de investigacao, STF, corrupcao
- Verificar se `status` mudou (ex: "ativo" → "arquivado")
- Verificar se novos escandalos surgiram
- So adicionar novo escandalo se fonte confiavel (veiculo grande: G1, Folha, Estadão, UOL, CNN, BBC, Veja, etc.)

#### campaignFinance (`CampaignFinance`)

- `totalArrecadado`, `totalGasto`, `limiteGastos`, `fontes[]`, `comparison`
- Busca: `"{candidato}" financiamento campanha {ano} TSE`
- Tambem: `"{candidato}" arrecadacao campanha {ano}`
- Atualizar quando TSE divulgar novos dados de prestacao de contas
- Dica: usar `npm run fetch:news` e filtrar por `financas`

#### positions (`{ issue: DataValue; position: DataValue }[]`)

- Lista de posicionamentos politicos do candidato
- Busca: usar `npm run fetch:news` e filtrar por `posicao` — captura declaracoes publicas
- Fontes: entrevistas, discursos, redes sociais do candidato
- So atualizar se o candidato fez nova declaracao publica sobre o tema

### Formato DataValue

```typescript
// String value
dv("texto do valor", "https://fonte.url", "2026-07-01");
// Numeric value
dvn(1234567.89, "https://fonte.url", "2026-07-01");
```

### Fluxo para cada candidato

1. Para cada campo com `updatedAt`, coletar data mais recente
2. Web search por updates desde aquela data
3. Se achar informacao mais recente com fonte verificavel:
   - Atualizar `value` (se mudou)
   - Atualizar `source` (nova URL)
   - Atualizar `updatedAt` (nova data ISO)
4. Para `scandals`: verificar se novo escandalo apareceu (nao existente no array)
5. Para `timeline`: verificar se novo evento ocorreu (ano mais recente que ultimo)
6. Para `positions`: verificar se candidato fez nova declaracao mudando/atualizando posicao

---

## 3. Videos (Midia)

**File:** `src/data/media.ts`
**Type:** `Record<string, MediaCategory[]>`

### Estrutura

```typescript
interface MediaCategory {
	id: string; // "entrevistas" | "debates" | "campanha"
	label: string; // "Entrevistas e Sabatinas" | "Debates e Sabatinas" | "Campanha e Discursos"
	items: MediaItem[];
}

interface MediaItem {
	title: DataValue;
	description: DataValue;
	youtubeId: string;
	category: string;
}
```

### Candidatos e categorias existentes

| Candidato | Categorias                                  | Total videos |
| --------- | ------------------------------------------- | ------------ |
| lula      | entrevistas (14), campanha (1)              | ~15          |
| flavio    | entrevistas (10), debates (1), campanha (2) | ~13          |
| renan     | entrevistas (19), debates (1)               | ~20          |
| caiado    | entrevistas (13), debates (4), campanha (2) | ~19          |
| zema      | entrevistas (17), debates (1), campanha (2) | ~20          |

### Estrategia de busca

Usar **YouTube Data API v3** via script `scripts/fetch-youtube-videos.ts`.

O script busca os 10 videos mais recentes para o candidato, usando a query `"{candidato} entrevista 2026"`, filtrados por `regionCode=BR` e `relevanceLanguage=pt`.

#### Como usar

```bash
# Buscar videos de Lula publicados a partir de 18/jun
node --env-file .env.local --experimental-strip-types scripts/fetch-youtube-videos.ts --candidate "Lula" --after "2026-06-18"

# Buscar videos de Flavio (sem filtro de data)
node --env-file .env.local --experimental-strip-types scripts/fetch-youtube-videos.ts --candidate "Flávio Bolsonaro"
```

**ATENCAO:** `pnpm run` NAO funciona — o `--` separador do pnpm engole os argumentos. Chamar `node` diretamente.

O script retorna JSON no stdout:

```json
[
  {
    "title": "Lula no Podcast X — entrevista sobre economia",
    "description": "Descricao do video (primeiros 200 chars)...",
    "youtubeId": "ABC123",
    "publishedAt": "2026-07-01T14:30:00Z",
    "channelTitle": "Canal X"
  }
]
```

#### Para cada candidato, executar:

| Candidato        | Query para `--candidate`     |
| ---------------- | ---------------------------- |
| Lula             | `"Lula"`                     |
| Flavio Bolsonaro | `"Flavio Bolsonaro"`         |
| Renan Santos     | `"Renan Santos"`             |
| Ronaldo Caiado   | `"Caiado"`                   |
| Romeu Zema       | `"Zema"`                     |

#### Programas prioritarios para buscar manualmente (se o script nao retornar resultados suficientes):

Flow Podcast, CNN Brasil, Jovem Pan, UOL, GloboPlay, Band, SBT, Record News, Poder360, Revista Oeste, Inteligência Ltda, Podpah, GloboNews (Conexao, Em Pauta), SBT News, Metropoles, Gaucha Atualidade, Canal do Partido Missao, Canal do Renan Santos, Canal do Flavio Bolsonaro, Canal do Caiado, Canal do Zema, Canal do Lula

Nesse caso, buscar no YouTube manualmente e extrair o `youtubeId` da URL.

### Verificacao de duplicatas

- Antes de adicionar, conferir se `youtubeId` ja existe em todos os `items[]` do candidato
- Se existir, pular (ja cadastrado)
- Se `youtubeId` nao existe, extrair metadados e adicionar mesmo que similar a titulo existente. Preferir duplicata leve a perder conteudo novo.

### Extrair metadados dos resultados do script

Os campos `title`, `description` (primeiros 200 chars) e `publishedAt` ja vem do script.

Usar `publishedAt` como `updatedAt` no `dv()`.

Montar a URL do video como `https://www.youtube.com/watch?v={youtubeId}` para o parametro `source`.

### Exemplo de adicao

```typescript
items: [
  { title: dv('Lula no Podcast X — entrevista sobre economia', 'https://www.youtube.com/watch?v=ABC123', '2026-07-01'), description: dv('Descricao do video', 'https://www.youtube.com/watch?v=ABC123', '2026-07-01'), youtubeId: 'ABC123', category: 'entrevistas' },
],
```

---

## 4. Propostas de Governo

**File:** `src/data/proposals.ts`
**Type:** `ProposalSection[]`

### Estrutura

```typescript
interface ProposalSection {
	id: string;
	label: string;
	lula: ProposalItem[];
	flavio: ProposalItem[];
	renan: ProposalItem[];
	caiado: ProposalItem[];
	zema: ProposalItem[];
}

interface ProposalItem {
	text: DataValue;
}
```

### Areas tematicas (11)

| ID                    | Label                                |
| --------------------- | ------------------------------------ |
| `seguranca`           | Seguranca Publica                    |
| `economia`            | Economia e Politica Fiscal           |
| `saude`               | Saude                                |
| `educacao`            | Educacao                             |
| `previdencia`         | Previdencia e Trabalho               |
| `infraestrutura`      | Infraestrutura                       |
| `meio-ambiente`       | Meio Ambiente e Clima                |
| `relacoes-exteriores` | Relacoes Exteriores                  |
| `reforma-politica`    | Reforma Politica e Judiciario        |
| `costumes`            | Costumes, Familia e Direitos Humanos |
| `agricultura`         | Agricultura e Desenvolvimento Rural  |

### Estrategia de busca

- Por candidato: `"{candidato}" proposta {area_label} {ano}`
- Por area: `"{candidato}" plano de governo {area_label}`
- Fontes: anuncios oficiais de campanha, planos de governo divulgados, entrevistas tematicas
- Sites frequentes: G1, UOL, Folha, Estadão, sites oficiais dos partidos/candidatos

### Verificacao

- Comparar `text.updatedAt` de cada proposta existente para o mesmo candidato+area
- Se nova proposta com mesma area existe e e mais recente:
  - Se o texto for similar (= mesma proposta reafirmada), ignorar
  - Se for proposta nova (tema nao listado), adicionar ao array

### Exemplo de adicao

```typescript
{
  id: 'economia',
  label: 'Economia e Politica Fiscal',
  lula: [
    { text: dv('Nova proposta especifica', 'https://fonte.url', '2026-07-01') },
  ],
},
```

---

## 5. Workflow Geral

### Passo 1 — Diagnosticar estado atual

- Ler `src/data/polls.ts` — extrair ultima data por instituto
- Ler `src/data/candidates.ts` — extrair `updatedAt` de cada campo de cada candidato
- Ler `src/data/media.ts` — extrair `updatedAt` dos videos mais recentes por candidato
- Calcular `dataAlvo = (hoje - 14 dias)` no formato `YYYY-MM-DD`. Usar como filtro `after:{dataAlvo}` nas buscas de midia.
- Ler `src/data/proposals.ts` — extrair `updatedAt` das propostas mais recentes por area/candidato

### Passo 2 — Buscar atualizacoes (web search + YouTube script)

**IMPORTANTE: Execute TODAS as sub-etapas abaixo (2a, 2b, 2c). Nao pular nenhuma.**

#### 2a. Candidate news — rodar fetch da SAPIENS API

Sempre executar primeiro para detectar novas propostas, posicoes, escandalos e eventos de timeline:

```bash
npm run fetch:news 14
```

Usar `-v` para ver os titulos e URLs dos artigos relevantes.

#### 2b. YouTube — rodar fetch script para TODOS OS 5 CANDIDATOS

Sempre executar o script `fetch:youtube` para os 5 candidatos (Lula, Flávio, Renan, Caiado, Zema). NUNCA pular um candidato.

```bash
# Para cada candidato, usar --after com a data do video mais recente no arquivo
node --env-file .env.local --experimental-strip-types scripts/fetch-youtube-videos.ts --candidate "Lula" --after "2026-06-05"
node --env-file .env.local --experimental-strip-types scripts/fetch-youtube-videos.ts --candidate "Flávio Bolsonaro" --after "2026-06-26"
node --env-file .env.local --experimental-strip-types scripts/fetch-youtube-videos.ts --candidate "Renan Santos" --after "2026-06-26"
node --env-file .env.local --experimental-strip-types scripts/fetch-youtube-videos.ts --candidate "Ronaldo Caiado" --after "2026-06-16"
node --env-file .env.local --experimental-strip-types scripts/fetch-youtube-videos.ts --candidate "Romeu Zema" --after "2026-06-15"
```

**Nao usar `pnpm run`** — o `--` do pnpm engole os argumentos. Chamar `node` diretamente.

O script retorna JSON com `title`, `description`, `youtubeId`, `publishedAt`. Usar `publishedAt` como `updatedAt`.

#### 2c. Web search (paralelo, para complementar) — TODOS OS CAMPOS

Para cada fonte de dados, web search com queries especificas. Buscar SEMPRE por atualizacoes em:
- **Polls**: `"{instituto}" pesquisa eleitoral presidente 2026`
- **Candidates**: `"{candidato}" proposta/declaracao/escandalo {ano}` — verificar patrimonio, scandals, timeline, positions, campaignFinance
- **Proposals**: `"{candidato}" plano de governo proposta {area}` — comparar com existing proposals
Priorizar fontes: G1, UOL, Folha, Estadão, CNN Brasil, BBC Brasil, Veja, Exame, Poder360, sites institutos pesquisa.

### Passo 3 — Validar

- Data mais recente que registro existente? Senao, pular.
- Fonte URL menciona explicitamente a informacao? Senao, pular.
- Valor numerico confere com a fonte? (polls, patrimonio, financas)

### Passo 4 — Editar arquivos

Editar apenas os 4 arquivos de dados em `src/data/`.
Manter formatacao existente (indentacao com tabs, aspas duplas).
Manter ordem existente dos arrays.

### Passo 4.5 — Atualizar `src/data/.version.ts`

Apos qualquer alteracao nos arquivos de dados (`candidates.ts`, `polls.ts`, `proposals.ts`, `media.ts`):

1.  Atualizar `version` e `updatedAt` com timestamp ISO atual (`new Date().toISOString()`)
2.  Adicionar entrada em `changes[]` para cada categoria de dado alterada:
    - Pesquisas → `{ emoji: "📊", label: "Pesquisas eleitorais" }`
    - Candidatos → `{ emoji: "👤", label: "Dados dos candidatos" }`
    - Propostas → `{ emoji: "📋", label: "Propostas de governo" }`
    - Videos → `{ emoji: "🎥", label: "Videos e entrevistas" }`
3.  Se multiplas categorias alteradas, incluir todas em `changes[]`
4.  Remover entradas duplicadas (mesmo emoji+label)
5.  Exemplo:
    ```typescript
    export const dataVersion = {
      version: "2026-07-10T14:00:00Z",
      updatedAt: "2026-07-10T14:00:00Z",
      changes: [
        { emoji: "📊", label: "Pesquisas eleitorais" },
        { emoji: "🎥", label: "Videos e entrevistas" },
      ],
    }
    ```

---

### Passo 4.7 — Verificar duplicatas

**OBRIGATORIO:** Apos editar qualquer arquivo ou quando nenhuma alteracao for feita, rodar verificacao de duplicatas:

```bash
node "C:\Users\rcaru\AppData\Local\Temp\opencode\check_duplicates.mjs"
```

O que verificar:
- **media.ts**: youtubeIds duplicados (mesmo video em categorias diferentes). Remover entrada duplicada, manter na categoria mais relevante.
- **proposals.ts**: textos de proposta identicos para o MESMO candidato em secoes diferentes. Remover a copia, manter na secao mais relevante.
- **polls.ts**: combinacao institute+date duplicada.
- **candidates.ts**: timeline events duplicados, position texts duplicados.

Se encontrar duplicatas **exatas**, remover automaticamente (manter na secao mais relevante).
Se encontrar dados **muito similares** (ex: "Redução maioridade penal" e "Redução maioridade penal p/ 16 anos"), perguntar ao usuario o que fazer.

### Passo 5 — Verificar

Executar apos alteracoes:

- `npm run lint` — sem erros
- `npm run typecheck` — sem erros
- `npm run build` — build bem-sucedido

### Passo 6 — Reportar

Listar para o usuario:

- Quais arquivos foram alterados
- Quantas entradas novas/adicionadas
- Quais campos foram atualizados
- Datas das atualizacoes
- Links das fontes usadas
