# Regras de Operação - Agente

## Idioma
- **Sempre responder em português** (PT-BR).

## Fluxo Git - Regras de Ouro

| Ação do Usuário | Branch Destino | Tag |
|-----------------|----------------|-----|
| "salvar" / "save" (padrão) | `homologacao` | Tag coerente ao processo atual |
| "salvar em main" / "save to main" (explícito) | `main` | Tag coerente ao processo |
| "normalizar main" / "normalize main" | `main` ← `homologacao` | Merge completo da homologação (fast-forward ou merge commit) |

### Detalhes
1. **Branch `homologacao`** será criada no primeiro "salvar".
2. **Tags** seguem padrão semântico coerente: `processo/descricao-vN` (ex: `setup/inicial-v1`, `docs/analise-v2`).
3. **Normalizar main** = aplicar tudo da `homologacao` na `main` (merge ou rebase conforme histórico).
4. **Nunca** fazer push direto na `main` sem comando explícito "salvar em main".
5. **Nunca** fazer merge `homologacao` → `main` sem comando explícito "normalizar main".

---
*Arquivo versionado no repositório para persistência entre sessões.*