---
name: data-management
description: >
  Gerencia dados do site presidenciaveis-2026. 3 modos:
  validate — checar/consertar fontes (links, ancoras, numeros, substituir fontes fracas);
  update — atualizar dados (polls, timeline, escandalos, propostas, videos, posicoes);
  polls — apenas pesquisas.
  Trigger: "validar fontes {candidato}", "/check-sources {candidato}",
  "atualizar {candidato}", "/update {candidato}", "update content {candidato}",
  "update polls", "atualizar pesquisas".
---

# Gerenciamento de Dados — presidenciaveis-2026

Projeto: `C:\Users\rcaru\source\repos\eleicoes_benchmark\presidenciaveis-2026`

## Modos de Operacao

| Modo | Trigger | O que faz | Arquivos alterados |
|---|---|---|---|
| `validate` | `validar fontes {candidato}`, `/check-sources {candidato}` | Checa HTTP, ancora, conteudo, numeros. Substitui fontes quebradas/fracas. | `{candidato}.ts`, `proposals-{candidato}.ts`, `.version.ts` |
| `update` | `atualizar {candidato}`, `/update {candidato}`, `update content {candidato}` | Busca polls, timeline, escandalos, propostas, videos, posicoes. Adiciona/atualiza. | `polls.ts`, `{candidato}.ts`, `proposals-{candidato}.ts`, `media-{candidato}.ts`, `.version.ts` |
| `polls` | `update polls`, `atualizar pesquisas` | So pesquisas eleitorais. Nao requer candidato. | `polls.ts`, `.version.ts` |

Se modo nao especificado: detectar pelo trigger.
Se `validate` sem candidato: informar erro + listar opcoes.

## Candidatos

| ID | Nome | Arquivo dados | Arquivo propostas | Arquivo media | Slugs YouTube/SAPIENS |
|---|---|---|---|---|---|
| `lula` | Lula (Luiz Inácio Lula da Silva, PT) | `src/data/lula.ts` | `src/data/proposals-lula.ts` | `src/data/media-lula.ts` | `lula-silva` / `"Lula"` |
| `flavio` | Flávio Bolsonaro (Flávio Nantes Bolsonaro, PL) | `src/data/flavio.ts` | `src/data/proposals-flavio.ts` | `src/data/media-flavio.ts` | `flavio-bolsonaro` / `"Flavio Bolsonaro"` |
| `renan` | Renan Santos (Renan Antônio Ferreira dos Santos, Missão) | `src/data/renan.ts` | `src/data/proposals-renan.ts` | `src/data/media-renan.ts` | `renan-santos` / `"Renan Santos"` |
| `caiado` | Ronaldo Caiado (Ronaldo Ramos Caiado, União Brasil) | `src/data/caiado.ts` | `src/data/proposals-caiado.ts` | `src/data/media-caiado.ts` | `ronaldo-caiado` / `"Caiado"` |
| `zema` | Romeu Zema (Romeu Zema Neto, NOVO) | `src/data/zema.ts` | `src/data/proposals-zema.ts` | `src/data/media-zema.ts` | `romeu-zema` / `"Zema"` |

## Regras Obrigatorias (todos os modos)

1. **Nunca remover fonte sem substituto.** Se link quebrado, buscar substituto antes de editar. Se insubstituivel, manter com `[BROKEN]` no report.
2. **Preferencia Tier 1 sobre Tier 3/4.** Sempre migrar Wikipedia para imprensa quando possivel.
3. **Multiplas fontes para mesmo dado** → listar opcoes e perguntar ao usuario qual usar.
4. **FONTE DEVE COMPROVAR O DADO ESPECIFICO individualmente.** `DataValue.source` precisa ser um artigo que mencione explicitamente aquele `value`. Proibido agrupar N propostas sob uma unica URL generica. Cada source deve ser verificado independentemente.
5. **BUSCA MULTI-FONTE obrigatoria.** Ao buscar substituto, tentar minimo 3 queries variando veiculos (G1, Folha, UOL, Estadão, CNN, BBC, Poder360, Band, VEJA). Nao aceitar o primeiro resultado. Se fraco, continuar buscando.
6. **LER CONTEUDO COMPLETO do artigo**, nao apenas trecho de busca. O snippet pode mencionar o termo mas nao comprovar o dado no contexto correto.
7. **EXECUTE O WORKFLOW COMPLETO do modo escolhido.** Nao pular etapas.
8. **So atualizar se `updatedAt`/`date` novo > existente.** Nao reverter dados.
9. **Toda entrada nova precisa de `source` URL** que mencione explicitamente o fato exibido.
10. **Nao modificar schemas** (`src/types.ts`). Nao criar arquivos fora de `src/data/`.
11. **Nao modificar package.json, sitemap.ts, ou config.**
12. **Ordenacao dos arrays**: sempre inserir na posicao que preserva ordenacao (nunca no final):

| Array | Chave de ordenacao | Ordem |
|---|---|---|
| `timeline` | `year` (decrescente) | Mais recente primeiro |
| `electionResults` | `year` (decrescente) | Mais recente primeiro |
| `partyHistory` | sequencia | Mais recente primeiro |
| `positions` | `issue` | Alfabetica |
| `scandals` | `updatedAt` | Mais recente primeiro |
| `polls` | `date` | Mais recente primeiro |
| changes[] (.version.ts) | data no label | Mais recente primeiro |

13. **Positions vazias**: Todos os candidatos devem ter entradas para todas as pautas. Usar `"-"` (traco) como `position.value` quando nao se pronunciou. Usar Wikipedia como `source` e data atual como `updatedAt`.
14. **Portugues brasileiro**: Todas as entries em `.version.ts` devem ser escritas em portugues brasileiro.
15. **NUNCA re-aproveitar uma URL encontrada para um dado como fonte de outro dado.** Cada source precisa ser verificado independentemente.
16. **Nunca substituir fonte WEAK_CONTENT por outra que tambem nao comprove o dado.** A nova fonte deve mencionar explicitamente o value.

## Tabela de Qualidade de Fontes

| Tier | Descricao | Exemplos | Acao |
|---|---|---|---|
| 1 | Grande imprensa nacional | G1, Folha de S.Paulo, UOL, Estadão, O Globo, CNN Brasil, BBC Brasil, Veja, Exame, Poder360, Agencia Brasil, CartaCapital, Correio Braziliense, Revista Oeste | Manter (ideal) |
| 2 | Imprensa regional/especializada | Jornais locais, sites juridicos (JusBrasil, Conjur), portais setoriais | Manter se Tier 1 nao disponivel |
| 3 | Wikipedia, sites partidarios | wikipedia.org, pt.org.br, partido.site | Substituir por Tier 1/2 quando possivel |
| 4 | Blogs, redes sociais, fontes primarias sem verificacao | Blogspot, Medium, Twitter/X, Instagram, Facebook | Substituir sempre |

## .version.ts — Regras

1. Apos qualquer alteracao em qualquer arquivo `src/data/`, atualizar `src/data/.version.ts`
2. Atualizar `version` e `updatedAt` com timestamp ISO atual
3. **Substituir** entradas existentes no `changes[]` para o mesmo candidato/modo — NUNCA acumular duplicatas. Se candidato ja tem entries, remover antigas e substituir pelas atuais.
4. Template do `label`: `"{candidato}: descricao concisa + data (DD/mon)"`
   Exemplo: `"Renan: timeline — 1a convencao Missao 01/ago (CNN) 03/jul"`
5. **Todas em portugues brasileiro.**
6. Inserir cada entrada na posicao correta (ordenacao decrescente por data).

---

# MODO VALIDATE — Workflow

## Passo 1 — Ler dados do candidato

Ler `src/data/{CANDIDATE}.ts` e `src/data/proposals-{CANDIDATE}.ts`.
Excluir: media-*, polls, .version, index, types.

### Categorias e campos

| Categoria | Campos com `source` | Fontes estimadas |
|---|---|---|
| Dados Pessoais | `naturalidade`, `estadoCivil`, `conjugesAnteriores`, `filhos`, `formacao`, `profissao`, `religiao`, `residencia`, `patrimonio` | ~9 |
| Carreira | `currentParty`, `partyHistory[]`, `coalition[].status`, `ideologicalPosition`, `careerYears`, `currentPosition`, `timeline[].year+event`, `electionResults[].cargo+votos+pct+resultado` | ~40-60 |
| Plano Governo | `ProposalItem[].text` (11 areas) | ~15-30 |
| Escandalos | `scandals[].name`, `.status`, `.description`, `.value` | ~4-12 |
| Financiamento | `campaignFinance.totalArrecadado`, `.totalGasto`, `.limiteGastos`, `.fontes[].name+value`, `.comparison.*` | ~8-15 |
| Posicionamento | `positions[].issue`, `.position` | ~10-15 |

## Passo 2 — Extrair e classificar URLs

1. Extrair todas URLs `source` com seus `value` e `updatedAt`
2. Classificar cada URL por Tier (1-4)
3. Identificar URLs com ancora (`#`)
4. Identificar `DataValue<number>` para verificacao numerica
5. Identificar valores globais (repetidos entre candidatos): `limiteGastos`
6. Montar matriz: `{ campo, value, source, updatedAt, tier, temAncora, isNumeric }`

## Passo 3 — Validar links

Para cada URL unica: `webfetch(url, timeout=15)`

- **200 OK**: prosseguir
- **4xx/5xx**: `BROKEN`
- **Timeout/erro DNS**: `UNREACHABLE` — tentar novamente timeout=30
- **Redirect (3xx)**: seguir, anotar URL final. Se chain > 3 hops, fragil.
- **403/blocked**: `BLOCKED`
- **SPA (conteudo via JS)**: `[SPA]`. Se site oficial (TSE, gov), manter com nota.

### Verificacao de Ancora (`#`)

1. Fazer `webfetch` da URL base (sem `#`)
2. Extrair todos `id` de elementos HTML
3. Decodificar URL-encoding (`%C3%A7` → `ç`) antes de comparar
4. Verificar se fragmento existe e corresponde ao contexto:
   - Existe e OK: OK
   - Existe mas contexto errado: ancora incorreta
   - Nao existe: ancora quebrada

**Nota**: Wikipedia frequentemente muda IDs de secoes.

### Verificacao de Conteudo

Para cada URL valida:
1. `webfetch(url)` para obter texto
2. Verificar se `value` e mencionado no texto:
   - **Literal**: fonte comprova (`ALTA`)
   - **Parcial** (ex: "80 anos" vs "aos 80 anos"): comprova (`MEDIA`)
   - **Contextual** (tabela, infobox): marginalmente aceito (`BAIXA`)
   - **Nao mencionado**: fonte FRACA (`INEXISTENTE`)
3. Registrar confidence

### Classificacao Final

| Resultado | Acao |
|---|---|
| `OK` | Manter |
| `OK_WEAK` | Tier 3-4 — buscar substituto |
| `OK_ANCHOR` | Ancora errada — corrigir |
| `BROKEN` | Substituto |
| `UNREACHABLE` | Substituto |
| `WEAK_CONTENT` | Substituto |
| `WRONG_VALUE` | Corrigir value ou fonte |
| `BLOCKED` | Substituto Tier 1 |

Salvar checkpoint apos Passo 3.

## Passo 4 — Buscar substitutos

Para cada resultado nao-OK:

1. Extrair termos do `value` + nome candidato
2. `websearch` com `"{candidato} {termos}"`
3. Selecionar URLs Tier 1-2 dos resultados
4. `webfetch` cada candidata — confirmar que conteudo menciona EXPLICITAMENTE o value
5. **Busca multi-fonte**: Se primeira query nao achar, tentar variacoes:
   - `"{candidato} {termo} {veiculo}"`
   - `"{termo_mais_especifico}"` sem candidato
   - `"{candidato} {sinonimo}"`
6. Se unica candidata boa: preparar substituicao
7. Se multiplas: listar para usuario (URL, veiculo, data, trecho)

### Subprotocolo: fonte Tier 3-4 (Wikipedia)
- Buscar Tier 1-2 com mesma query
- Se achar e comprovar: substituir
- Se nao achar: manter Wikipedia com nota

### Subprotocolo: ancora incorreta
- Identificar secao correta no documento
- Extrair `id` do elemento HTML correto
- Substituir fragmento

Salvar checkpoint apos Passo 4.

## Passo 5 — Consultar usuario

Para cada caso ambiguo: multiplas fontes, nenhum substituto, valor numerico divergente.

## Passo 6 — Verificacao Numerica

Para todo `DataValue<number>` (`dvn()`):

| Campo | Verificar |
|---|---|
| `patrimonio` | Valor em reais. Fonte deve exibir numero exato. |
| `age` | Idade atual. Recalcular se necessario. |
| `birthYear` | Ano de nascimento. |
| `careerYears` | Anos de carreira. |
| `electionResults[].year` | Ano da eleicao. |
| `electionResults[].pct` | Percentual. Formato brasileiro (virgula decimal). |
| `scandals[].value` | Valor em reais. |
| `campaignFinance.*.value` | Valores de arrecadacao/gasto. |

Protocolo:
1. Extrair valor numerico do `DataValue`
2. `webfetch` da URL — procurar numero no texto
3. Se divergir: `WRONG_VALUE`
4. Decidir: fonte mais recente que `updatedAt`? → Atualizar `value` e `updatedAt`. Fonte mais antiga? → Manter, buscar nova fonte.

## Passo 7 — Aplicar edicoes

Para cada substituicao aprovada:
1. Editar `{CANDIDATE}.ts` e/ou `proposals-{CANDIDATE}.ts`
2. Atualizar: `source` → nova URL, `updatedAt` → data atual
3. Apos todas edicoes: atualizar `.version.ts`
4. Executar: `npm run typecheck`, `npm run lint`, `npm run build`

## Passo 8 — Reportar

```
## Relatorio de Validacao de Fontes — {CANDIDATE}

### Resumo
- Total de fontes verificadas: N
- OK: N
- Substituidas: N (quebradas: N, fracas: N, ancoras: N, conteudo: N)
- Mantidas (sem substituto): N
- Consultadas ao usuario: N

### Substituicoes
| Categoria | Campo | Fonte antiga | Fonte nova | Motivo |

### Problemas nao resolvidos
| Categoria | Campo | Fonte | Problema |

### Numeros divergentes
| Campo | Valor atual | Valor na fonte | Acao |

### Dados globais
| Valor | Fonte atual | Sugestao |
```

---

# MODO UPDATE — Workflow

## Passo 1 — Diagnosticar estado atual

Ler:
- `src/data/polls.ts` — ultima data por instituto
- `src/data/{CANDIDATE}.ts` — `updatedAt` de cada campo
- `src/data/media-{CANDIDATE}.ts` — `updatedAt` dos videos mais recentes
- `src/data/proposals-{CANDIDATE}.ts` — `updatedAt` das propostas mais recentes por area

Calcular `dataAlvo = (hoje - 14 dias)` formato `YYYY-MM-DD`.

## Passo 2 — Buscar atualizacoes

### 2a. Candidate news — SAPIENS API
```bash
npm run fetch:news 14 -- --candidate "{SLUG}"
```
Usar `-v` para ver titulos/URLs.

### 2b. YouTube (canal oficial do candidato)
```bash
node --env-file .env.local --experimental-strip-types scripts/fetch-youtube-videos.ts --candidate "{NOME}" --after "{ULTIMA_DATA}"
```
**Atencao:** `pnpm run` NAO funciona. Chamar `node` diretamente.

### 2c. YouTube (Tier 1 news sources)
Buscar videos recentes de veiculos Tier 1 no YouTube onde o candidato APARECE/FALA diretamente (nao apenas comentario de terceiros).

Tier 1 com canais YouTube: G1, Folha, UOL, Estadão, O Globo, CNN Brasil, BBC Brasil, Band, Record, SBT, Veja, Poder360, CartaCapital, TV Brasil/EBC, Jovem Pan, Roda Viva.

Para cada veiculo, web search:
```
"{candidato} {veiculo} YouTube {mes_atual} {ano}"
```
ou search avancada no YouTube via web:
```
site:youtube.com "{candidato}" "{veiculo}" after:{dataAlvo}
```

Para cada video candidato:
1. Verificar titulo/descricao — candidato aparece falando?
2. `webfetch` da URL para confirmar
3. Se sim: extrair `youtubeId`, data, titulo, descricao
4. Classificar categoria: `entrevistas`, `discursos`, `coletivas`

Se multiplos videos do mesmo periodo: priorizar veiculos Tier 1 diferentes (diversidade de fontes).

Inserir em `media-{CANDIDATE}.ts` na ordem cronologica dentro do mes correspondente.

### 2d. Web search (paralelo)
- **Polls**: `{instituto} pesquisa eleitoral presidente 2026`
- **Timeline/escandalos**: `{candidato} {evento} {ano}`
- **Propostas**: `{candidato} plano de governo {area}`

### 2e. Polls (sempre executar)
Institutos: Datafolha, Quaest, AtlasIntel, Real Time Big Data.

Query: `{instituto} pesquisa eleitoral presidente 2026 {mes_atual}`

Se achar pesquisa mais recente que ultima entrada do mesmo instituto: extrair firstRound, secondRound, rejection, spontaneous, regional.

## Passo 3 — Validar

- Data mais recente que registro existente? Senao, pular.
- Fonte URL menciona explicitamente a informacao? Senao, pular.
- Valor numerico confere com a fonte?
- Escandalos: apenas corrupcao comprovada (desvio, fraude, propina, caixa 2, improbidade). Nao incluir posicionamentos, criticas ou reunioes sem ilicito.

## Passo 4 — Editar arquivos

- Ordenacao: seguir tabela em Regras Obrigatorias > item 12
- `positions`: ordem alfabetica por `issue`
- Inserir na posicao que preserva ordenacao, nunca no final
- Manter indentacao (tabs), aspas duplas

### Media (YouTube) — verificar duplicatas
```powershell
$path = "src/data/media-{CANDIDATE}.ts"
$ids = Select-String -Path $path -Pattern 'youtubeId: "([^"]+)"' | ForEach-Object { $_.Matches.Groups[1]. Value }
$dupes = $ids | Group-Object | Where-Object { $_.Count -gt 1 }
if ($dupes) { Write-Host "DUPLICATA youtubeId: $($dupes.Name -join ', ')" -ForegroundColor Red; exit 1 }
```
Se duplicatas exatas: remover automaticamente (manter mais antiga ou fonte mais confiavel).
Se muito similares: perguntar ao usuario.

Apos todas edicoes: atualizar `.version.ts`.

## Passo 5 — Verificar build
```bash
npm run typecheck
npm run lint
npm run build
```
Para media, rodar verificacao de duplicatas youtubeId antes.

## Passo 6 — Reportar

Listar para usuario: arquivos alterados, entradas novas, campos atualizados, datas, links das fontes.

---

# MODO POLLS — Workflow

1. Ler `src/data/polls.ts` — diagnosticar ultima data por instituto
2. Web search para cada instituto: `{instituto} pesquisa eleitoral presidente 2026`
3. Se pesquisa mais recente encontrada: extrair dados, adicionar ao array `polls` (ordenado), atualizar `.version.ts`
4. `npm run typecheck && npm run lint && npm run build`
5. Reportar

---

# Checkpoint / Persistencia

Usar memoria do opencode para salvar e recarregar progresso.

### Salvar
```bash
memory mode=add type=skill-checkpoint tags="data-management,{CANDIDATE},modo-{validate|update},passo-{N}" content="PROGRESSO:{...JSON...}"
```

Formato JSON:
```json
{
  "candidate": "{CANDIDATE}",
  "modo": "validate",
  "passo": 3,
  "descricao": "Validacao de links concluida",
  "totalUrls": 42,
  "ok": 35,
  "broken": 5
}
```

### Recarregar
```bash
memory mode=search type=skill-checkpoint query="data-management {CANDIDATE}"
```

### Limpeza ao finalizar
Apos reportar, listar checkpoints do candidato e apagar todos (`memory mode=forget memoryId=<ID>`). Nao deixar orfaos.

---

# Anexo — Comandos Uteis
```bash
# Ler dados
cat src/data/{CANDIDATE}.ts
cat src/data/proposals-{CANDIDATE}.ts

# Verificar tipos
npm run typecheck

# Lint
npm run lint

# Build completo
npm run build
```

```typescript
interface DataValue<T = string> {
    value: T;
    source: string;
    updatedAt: string;
}
// dv(valor, source, updatedAt)  → DataValue<string>
// dvn(valor, source, updatedAt) → DataValue<number>
```
