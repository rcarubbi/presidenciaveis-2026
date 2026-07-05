# Presidenciáveis 2026: 49 commits em 5 dias — o que mudou no comparativo apartidário das eleições

[presidenciaveis-2026.vercel.app](https://presidenciaveis-2026.vercel.app) | [github.com/rcarubbi/presidenciaveis-2026](https://github.com/rcarubbi/presidenciaveis-2026)

---

Há cinco dias o **Presidenciáveis 2026** era um protótipo com 3 candidatos (Lula, Flávio, Michelle) e dados mornos. Hoje são **5 candidatos completos**, cada um com perfil, propostas em 11 áreas, dezenas de vídeos categorizados, cobertura jornalística via API, push notification e um redesign que foi do zero duas vezes.

Foram **49 commits**, **~10 mil linhas inseridas**, **120 arquivos modificados**. Segue o changelow dos destaques.

---

## 1. Arquitetura de dados: de monolito a módulos

Antes: um `candidates.ts` de 3.146 linhas. Uma edição quebrava tudo.

Agora: cada candidato tem seu próprio arquivo (`lula.ts`, `flavio.ts`, `renan.ts`, `caiado.ts`, `zema.ts`), com propostas separadas (`proposals-*.ts`), mídia separada (`media-*.ts`), tudo tipado e importado por um `index.ts` enxuto.

Impacto prático: atualizar um candidato não mexe nos outros. Dá para abrir PRs paralelos sem conflito.

## 2. Três novos candidatos

O site saiu de 3 para **5 presidenciáveis**:

| Candidato | Partido | Número |
|-----------|---------|--------|
| Lula | PT | 13 |
| Flávio Bolsonaro | PL | 22 |
| Renan Santos | Missão | 44 |
| Ronaldo Caiado | PSD | 55 |
| Romeu Zema | NOVO | 30 |

Cada um com biografia, carreira, posicionamento ideológico, escândalos, financiamento de campanha e ~20 vídeos em 4 categorias (entrevistas, debates, campanha, vlogs).

## 3. Cobertura jornalística (Sapiens Labs)

Integração com a API [eleicoes2026.sapienslabs.com.br](https://eleicoes2026.sapienslabs.com.br) via proxy próprio (`/api/sapiens/[...path]`).

O sistema traz para cada candidato:
- Sentimento da cobertura (positivo/negativo/neutro)
- Artigos recentes
- Top fontes
- Tópicos mais frequentes
- Evolução temporal (gráfico de linhas)

Tudo cacheado por 5 minutos para não sobrecarregar a API.

## 4. Push notification

Se você quer ser avisado quando novos dados entrarem, o site agora tem **notificações push** com service worker. Funciona no Chrome/Edge/Android. Sem app, sem extensão — só clicar "ativar notificações" e pronto.

## 5. Redesign visual

O layout foi reescrito **duas vezes** em 5 dias (sim, refactor em cima de refactor). Resultado final:

- **Hero** com foto, partido, número estilizado, idade e cargo
- **Número do partido** em destaque no card e no hero (sim, os devs de front vão notar: foram 6 commits só para acertar o estilo do número)
- **Selos de status** nos vídeos (disponível, em breve, etc.) com ícones
- **Modo comparativo** reformulado — selecione dois candidatos e veja lado a lado propostas, posicionamento e mídia
- **Gráficos**: pesquisa eleitoral com pizza, barras agrupadas, barras horizontais e linhas (Recharts)
- **Toaster** de notificações in-app (sonner)

## 6. Fontes validadas

Cada dado no site tem URL de origem + data de verificação. Foram **5 commits dedicados** a validar fontes:

- Lula: ~39 URLs verificadas, 29 confirmadas (Agencia Brasil bloqueada por lei eleitoral — fora do nosso controle)
- Flávio: 38 URLs, 35 OK
- Renan, Caiado, Zema: dados recém-inseridos com checagem em andamento

Sistema de skills no OpenCode para automatizar a validação (`validate-sources` e `update-content`).

## 7. Infraestrutura

- **npm → pnpm**: migração do gerenciador de pacotes (lockfile 7k linhas a menos)
- **Vercel Web Analytics** + **Speed Insights**: monitoramento de performance e tráfego
- **Next.js 16** + **React 19** + **Tailwind 4** + **TypeScript ~6**
- **Oxlint** no lugar de ESLint (mais rápido)
- **Service worker** para push + cache de assets

## 8. Scripts de automação

Dois scripts que rodam na esteira:

- `scripts/fetch-candidate-news.ts` — busca notícias recentes dos candidatos
- `scripts/fetch-youtube-videos.ts` — sincroniza vídeos do YouTube por playlist

---

## O que vem por aí

- Validação completa das ~150 URLs dos 5 candidatos
- Mais institutos de pesquisa (Ipec, FSB, Ideia)
- Timeline interativa dos escândalos
- Versão em inglês

O projeto é open source (MIT), apartidário e sem fins eleitorais (Art. 57-B Lei 9.504/97). Contribuições são bem-vindas.

**[presidenciaveis-2026.vercel.app](https://presidenciaveis-2026.vercel.app)** — veja o resultado ao vivo.
