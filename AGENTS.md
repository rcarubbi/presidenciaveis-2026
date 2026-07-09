## Regras de execução

- Ao receber triggers "atualizar {candidato}", "/update {candidato}", "validar fontes {candidato}", "/check-sources {candidato}", "update content {candidato}", "update polls", "atualizar pesquisas": carregar skill `data-management` via `skill name=data-management` antes de qualquer passo.
- Seguir workflow completo da skill sequencialmente, sem pular etapas.
