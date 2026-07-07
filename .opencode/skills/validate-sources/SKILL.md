---
name: validate-sources
description: >
  Valida fontes dos dados de 1 candidato por execucao (lula, flavio, renan, caiado, zema).
  Checa links quebrados, ancora incorreta, fonte fraca, consistencia numerica,
  e dados globais. Preferencia: imprensa (G1, Folha, UOL, Estadão, CNN, BBC)
  sobre Wikipedia.
  Trigger: "validate sources {candidato}", "validar fontes {candidato}",
  "/check-sources {candidato}" (ex: "validar fontes lula").
---

# Validate Sources Agent (1 candidato)

Projeto: `C:\Users\rcaru\source\repos\eleicoes_benchmark\presidenciaveis-2026`

## Argumento Obrigatorio: Candidato

Sempre especificar candidato no comando. Ex:

```
/check-sources lula
validar fontes flavio
validate renan sources
```

Se omitido, informar erro e listar opcoes validas.

| ID | Nome | Arquivo dados | Arquivo propostas |
|---|---|---|---|---|
| `lula` | Lula (Luiz Inácio Lula da Silva, PT) | `src/data/lula.ts` | `src/data/proposals-lula.ts` |
| `flavio` | Flávio Bolsonaro (Flávio Nantes Bolsonaro, PL) | `src/data/flavio.ts` | `src/data/proposals-flavio.ts` |
| `renan` | Renan Santos (Renan Antônio Ferreira dos Santos, Missão) | `src/data/renan.ts` | `src/data/proposals-renan.ts` |
| `caiado` | Ronaldo Caiado (Ronaldo Ramos Caiado, União Brasil) | `src/data/caiado.ts` | `src/data/proposals-caiado.ts` |
| `zema` | Romeu Zema (Romeu Zema Neto, NOVO) | `src/data/zema.ts` | `src/data/proposals-zema.ts` |

## Regras Obrigatorias

1. **Nunca remover fonte sem substituto.** Se link quebrado, buscar substituto antes de editar. Se insubstituivel, manter com `[BROKEN]` no report.
2. **Preferencia Tier 1 sobre Tier 3/4.** Sempre migrar Wikipedia para imprensa quando possivel.
3. **Multiplas fontes para mesmo dado** → listar opcoes e perguntar ao usuario qual usar.
4. **Dados globais (mesmo valor entre candidatos)** → verificar se outros candidatos usam fonte diferente e sugerir unificacao.
5. **Sempre verificar ancora `#`.** O fragmento deve existir no HTML e corresponder ao dado. Decodificar URL-encoding (`%C3%A7` → `ç`) antes de comparar com IDs do HTML.
6. **Valor numerico deve bater com a fonte.** Extrair numero do artigo, comparar com `DataValue.value`.
7. **EXECUTE O WORKFLOW COMPLETO (Passo 1 ao 7).** Nao pular etapas.
8. **Sempre atualizar `src/data/.version.ts` apos qualquer alteracao.** Incrementar timestamp `version`/`updatedAt` e adicionar entry em `changes[]` descrevendo a mudanca. **Todas as entries devem ser escritas em português brasileiro.**
9. **FONTE DEVE COMPROVAR O DADO ESPECIFICO individualmente.** `DataValue.source` precisa ser um artigo que mencione explicitamente aquele `value`. Proibido agrupar N propostas sob uma unica URL generica que nao cita cada proposta individual. Cada `source` deve ser verificado independentemente contra seu `value` — uma URL que funciona para um dado pode ser INVALIDA para outro.
10. **BUSCA MULTI-FONTE obrigatoria.** Ao buscar substituto, tentar no minimo 3 queries diferentes variando veiculos (G1, Folha, UOL, Estadão, CNN, BBC, Poder360, Band, VEJA, etc.). Nao aceitar o primeiro resultado. Se o primeiro resultado for fraco (Tier 3-4 ou nao comprova o dado), continuar buscando.
11. **LER CONTEUDO COMPLETO do artigo**, nao apenas trecho de busca. O snippet da busca pode mencionar o termo mas nao comprovar o dado no contexto correto.

---

## 1. Inventario de Dados (1 candidato)

Arquivos a ler (so os do candidato escolhido):

- `src/data/{CANDIDATE}.ts` — dados pessoais, carreira, escandalos, financiamento, posicionamento
- `src/data/proposals-{CANDIDATE}.ts` — propostas de governo (11 areas)

Excluir: media-*, polls, .version, index, types.

### Categorias, campos e quantidade estimada de fontes

| Categoria | Campos com `source` | Fontes estimadas |
|---|---|---|
| Dados Pessoais | `naturalidade`, `estadoCivil`, `conjugesAnteriores`, `filhos`, `formacao`, `profissao`, `religiao`, `residencia`, `patrimonio` | ~9 |
| Carreira | `currentParty`, `partyHistory[]`, `coalition[].status`, `ideologicalPosition`, `careerYears`, `currentPosition`, `timeline[].year+event`, `electionResults[].cargo+votos+pct+resultado` | ~40-60 |
| Plano Governo | `ProposalItem[].text` (11 areas tematicas) | ~15-30 |
| Escandalos | `scandals[].name`, `.status`, `.description`, `.value` | ~4-12 |
| Financiamento | `campaignFinance.totalArrecadado`, `.totalGasto`, `.limiteGastos`, `.fontes[].name+value`, `.comparison.*` | ~8-15 |
| Posicionamento | `positions[].issue`, `.position` | ~10-15 |

---

## 2. Tabela de Qualidade de Fontes

| Tier | Descricao | Exemplos | Acao |
|---|---|---|---|
| 1 | Grande imprensa nacional | G1, Folha de S.Paulo, UOL, Estadão, O Globo, CNN Brasil, BBC Brasil, Veja, Exame, Poder360, Agência Brasil, CartaCapital, Correio Braziliense, Revista Oeste | Manter (ideal) |
| 2 | Imprensa regional/especializada | Jornais locais, sites juridicos (JusBrasil, Conjur), portals setoriais | Manter se Tier 1 nao disponivel |
| 3 | Wikipedia, sites partidarios | wikipedia.org, pt.org.br, partido.site | Substituir por Tier 1/2 quando possivel |
| 4 | Blogs, redes sociais, fontes primarias sem verificacao | Blogspot, Medium, Twitter/X, Instagram, Facebook | Substituir sempre |

---

## 3. Metodologia de Validacao

### 3.1 Coleta de URLs

1. Ler arquivo `src/data/{CANDIDATE}.ts` e `src/data/proposals-{CANDIDATE}.ts`
2. Extrair recursivamente toda string no campo `source` de objetos `DataValue`
3. Agrupar por categoria
4. Identificar se a URL tem ancora (`#`)

### 3.2 Verificacao de Link (HTTP)

Para cada URL:

```
webfetch(url, timeout=15)
```

- **200 OK**: link valido. Prosseguir para verificacao de conteudo.
- **4xx/5xx**: link quebrado. Marcar como `[BROKEN]`. Buscar substituto.
- **Timeout/erro DNS**: link inacessivel. Marcar como `[UNREACHABLE]`. Tentar novamente com `timeout=30`. Se persistir, buscar substituto.
- **Redirect (3xx)**: seguir redirect. Anotar URL final. Se chain > 3 hops, potencialmente fragil.
- **403/blocked**: marcar `[BLOCKED]`. Buscar substituto Tier 1.
- **SPA (pagina carrega mas conteudo via JS)**: marcar `[SPA]`. Se for site oficial (TSE, gov), manter com nota.

### 3.3 Verificacao de Ancora (`#`)

Para URLs com fragmento (`#`):

1. Fazer `webfetch` da URL base (sem `#`)
2. Extrair todos os `id` de elementos HTML no documento
3. Verificar se o fragmento existe:
   - **Existe** e corresponde ao contexto do dado: OK
   - **Existe** mas nao corresponde ao contexto: ancora incorreta. Buscar ancora correta.
   - **Nao existe**: ancora quebrada. Remover `#` ou buscar ancora correta.

**Nota**: Wikipedia frequentemente muda IDs de secoes com traducao. Verificar se `#Operação_Lava_Jato` ainda existe ou mudou para `#Operação_Lava_Jato_2`.

### 3.4 Verificacao de Conteudo

Para cada URL valida:

1. `webfetch(url)` para obter texto do artigo
2. Verificar se o `value` do `DataValue` e explicitamente mencionado no texto:
   - **Mencionado literalmente**: fonte comprova o dado.
   - **Mencionado em parte** (ex: value "80 anos", texto diz "aos 80 anos"): fonte comprova.
   - **Nao mencionado, mas contexto comprova** (ex: Wikipedia lista idade na tabela, mas texto nao repete): marginalmente aceito.
   - **Nao mencionado, contexto nao comprova**: fonte FRACA. Buscar substituto.

3. Registrar confidence: `ALTA` (literal), `MEDIA` (parcial), `BAIXA` (contextual), `INEXISTENTE` (nao comprova).

### 3.5 Classificacao Final da Fonte

| Resultado | Significado | Acao |
|---|---|---|
| `OK` | Link valido, ancora OK, conteudo comprova, Tier 1-2 | Manter |
| `OK_WEAK` | Link valido mas Tier 3-4 | Buscar Tier 1-2 |
| `OK_ANCHOR` | Link valido mas ancora errada | Corrigir ancora |
| `BROKEN` | HTTP 4xx/5xx | Buscar substituto |
| `UNREACHABLE` | Timeout/DNS | Buscar substituto |
| `WEAK_CONTENT` | Conteudo nao comprova dado claramente | Buscar substituto |
| `WRONG_VALUE` | Valor numerico nao bate com fonte | Corrigir value ou fonte |
| `BLOCKED` | HTTP 403/blocked | Buscar substituto Tier 1 |

---

## 4. Protocolo de Substituicao

### 4.1 Link quebrado ou inalcancavel

1. Extrair termos de busca do `value` do `DataValue` + nome do candidato
2. `websearch` com query: `"{candidato} {termos_do_dado}"`
3. Dos resultados, selecionar URLs Tier 1-2
4. Abrir cada candidata com `webfetch`
5. Verificar se conteudo comprova o `value` — o `value` deve ser explicitamente mencionado no texto do artigo, nao apenas relacionado por contexto amplo.
6. **Busca multi-fonte**: Se a primeira query nao encontrar Tier 1-2 que comprove o dado, tentar variacoes:
   - `"{candidato} {termos_do_dado} {veiculo}"` (G1, Folha, etc.)
   - `"{termo_mais_especifico}"` sem nome do candidato
   - `"{candidato} {sinonimo_do_tema}"`
   - `"{candidato} proposta {tema}"`
7. **NUNCA re-aproveitar uma URL encontrada para um dado como fonte de outro dado**, mesmo que sejam do mesmo candidato ou mesma categoria. Cada `source` precisa ser verificado independentemente.
8. Se encontrar unica candidata boa que comprova o dado: substituir `source`
9. Se multiplas: listar para usuario com:
   - URL
   - Veiculo
   - Data da publicacao
   - Destaque do trecho que comprova o dado

### 4.2 Fonte fraca (Tier 3-4, Wikipedia)

1. `websearch` com mesma query
2. Preferir sites Tier 1
3. Se encontrar: verificar se conteudo comprova o `value` especifico (nao apenas o topico geral)
4. Se encontrar e comprova: substituir
5. Se nao encontrar: manter Wikipedia com nota no report

### 4.3 Ancora incorreta

1. Identificar a secao correta no documento
2. Extrair o `id` do elemento HTML correto
3. Substituir o fragmento na URL

### 4.4 Conteudo nao comprova

1. Marcar como `WEAK_CONTENT`
2. Buscar fonte alternativa — com busca multi-fonte obrigatoria
3. Se nenhuma alternativa comprovar o dado: questionar se o dado deve ser removido
4. **Nunca substituir uma fonte `WEAK_CONTENT` por outra que tambem nao comprove o dado.** A nova fonte deve mencionar explicitamente o `value`, nao apenas o topico.

---

## 5. Verificacao Numerica

Para todo `DataValue<number>` (via `dvn()`):

| Campo | Tipo | O que verificar |
|---|---|---|
| `patrimonio` | number | Valor em reais. Fonte deve exibir o numero exato. |
| `age` | number | Idade atual. Fonte pode ter idade em data diferente; recalcular se necessario. |
| `birthYear` | number | Ano de nascimento. |
| `careerYears` | number | Anos de carreira. Verificar se faz sentido com biografia. |
| `electionResults[].year` | number | Ano da eleicao. |
| `electionResults[].pct` | string (ex: "61,27%") | Percentual de votos. Formato brasileiro (virgula decimal). |
| `scandals[].value` | string (ex: "R$ 101,6 mi") | Valor em reais. Verificar formato com fonte. |
| `campaignFinance.*.value` | number | Valores de arrecadacao/gasto. Fonte deve exibir mesmo numero. |

**Protocolo**:

1. Extrair o valor numerico do `DataValue`
2. Fazer `webfetch` da URL
3. Procurar no texto do artigo o numero
4. Se nao encontrar ou divergir: marcar `WRONG_VALUE`
5. Se divergir, decidir:
   - Fonte mais recente que o `updatedAt`? → Atualizar `value` e `updatedAt`
   - Fonte mais antiga? → Manter `value`, buscar nova fonte

---

## 6. Dados Globais

Dados que sao iguais para todos os candidatos DEVEM usar a mesma fonte.

### Identificar no escopo de 1 candidato

- `limiteGastos` em `campaignFinance` — teto do TSE igual para todos
- Se o candidato atual tiver este campo, verificar se a fonte e a mesma usada por outros candidatos (consultar versao anterior dos dados ou perguntar ao usuario)
- Sugerir unificacao se houver divergencia

### Protocolo

1. Se valor identico ao de outros candidatos → verificar se fonte atual e a melhor disponivel
2. Se encontrar fonte Tier 1 melhor (Poder360, G1, etc.), sugerir ao usuario
3. Substituir apenas apos aprovacao

---

## 7. Workflow (7 passos, 1 candidato)

### Passo 1 — Ler dados do candidato

Ler os 2 arquivos do candidato escolhido:

- `src/data/{CANDIDATE}.ts`
- `src/data/proposals-{CANDIDATE}.ts`

### Passo 2 — Extrair e classificar URLs

Para cada categoria:

1. Extrair todas URLs `source` com seus respectivos `value` e `updatedAt`
2. Classificar cada URL por Tier (1-4)
3. Identificar URLs com ancora (`#`)
4. Identificar `DataValue<number>` para verificacao numerica
5. Identificar valores globais (repetidos entre candidatos)
6. Montar matriz: `{ campo, value, source, updatedAt, tier, temAncora, isNumeric }`

### Passo 3 — Validar links

Para cada URL unica:

1. `webfetch(url, timeout=15)`
2. Registrar status HTTP
3. Se 200: verificar ancora, verificar conteudo
4. Se 4xx/5xx: marcar `BROKEN`
5. Se timeout: marcar `UNREACHABLE`
6. Se 403: marcar `BLOCKED`
7. Classificar resultado: `OK`, `OK_WEAK`, `OK_ANCHOR`, `BROKEN`, `UNREACHABLE`, `WEAK_CONTENT`, `BLOCKED`

Salvar checkpoint apos este passo.

### Passo 4 — Buscar substitutos

Para cada resultado nao-OK:

1. Link quebrado: `websearch` por fonte alternativa
2. Fonte fraca (Tier 3-4): `websearch` por Tier 1-2
3. Ancora incorreta: identificar ancora correta
4. Conteudo fraco: buscar fonte que comprove melhor

Para cada candidata encontrada:
- `webfetch` para confirmar conteudo
- O conteudo deve mencionar EXPLICITAMENTE o `value` do `DataValue` (ou seu equivalente numerico exato)
- Registrar como candidata a substituta

Salvar checkpoint apos este passo.

### Passo 5 — Consultar usuario

Para cada caso ambiguo:

1. **Multiplas fontes candidatas** para o mesmo dado → listar com URL, veiculo, trecho, data, qualidade
2. **Nenhuma fonte encontrada** para substituir quebrado → perguntar se mantem, remove, ou busca manual
3. **Valor numerico divergente** → perguntar se atualiza ou mantem

### Passo 6 — Aplicar edicoes

Para cada substituicao aprovada:

1. Editar `src/data/{CANDIDATE}.ts` e/ou `src/data/proposals-{CANDIDATE}.ts`
2. Atualizar: `source` → nova URL, `updatedAt` → data atual
3. Apos todas edicoes: atualizar `src/data/.version.ts`
4. Executar validacao:
   ```
   npm run typecheck
   npm run lint
   npm run build
   ```

### Passo 7 — Reportar

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
|---|---|---|---|---|

### Problemas nao resolvidos
| Categoria | Campo | Fonte | Problema |

### Numeros divergentes
| Campo | Valor atual | Valor na fonte | Acao |

### Dados globais
| Valor | Fonte atual | Sugestao |
```

---

## 8. Checkpoint / Persistencia Parcial

Usar memoria do opencode para salvar e recarregar progresso.

### Salvar checkpoint

Apos Passo 2, 3, e 4, salvar progresso:

```
memory mode=add type=skill-checkpoint tags="validate-sources,{CANDIDATE},passo-{N}" content="PROGRESSO:{...JSON...}"
```

Conteudo do checkpoint (JSON):

```json
{
  "candidate": "{CANDIDATE}",
  "passo": 3,
  "descricao": "Validacao de links concluida",
  "totalUrls": 42,
  "ok": 35,
  "broken": 5,
  "blocked": 2,
  "urlResults": [
    {"url": "...", "status": "BROKEN", "dado": "patrimonio"}
  ]
}
```

### Recarregar checkpoint

Se contexto expirar:

```
memory mode=search type=skill-checkpoint query="validate-sources {CANDIDATE}"
```

Listar checkpoints, identificar ultimo passo, retomar dali.

### Limpeza ao finalizar

No final do Passo 7, limpar todos os checkpoints deste candidato:

1. `memory mode=search type=skill-checkpoint tags=validate-sources,{CANDIDATE}` (listar)
2. Para cada um: `memory mode=forget memoryId=<ID>`

**Nao deixar checkpoints orfaos.**

---

## 9. Scripts auxiliares (opcionais, 1 candidato)

### extract-urls.ps1

Extrai todas URLs de source dos arquivos do candidato:

```powershell
.\scripts\extract-urls.ps1 -DataDir "src/data" -Candidate "{CANDIDATE}"
```

### categorize-urls.ps1

Classifica URLs por Tier:

```powershell
.\scripts\categorize-urls.ps1 -UrlFile "urls_export.txt"
```

---

## Anexo — Comandos uteis

```bash
# Ler dados do candidato
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
