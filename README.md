# Trilha de Liderança · Comunidade Vitral

**Liderança com Bacia e Toalha — A Treliça a Serviço da Videira**

Repositório da Trilha de Liderança da Comunidade Vitral (IPIB São José do Rio Preto). Conteúdo para capacitação de discípulos-líderes, com site publicado em [GitHub Pages](https://ismaelmmachado.github.io/trilha_lideranca/).

## Visão geral

A Trilha de Liderança nasceu da pergunta: *como podemos cuidar bem das pessoas que Deus nos confiou, sem nos cansarmos no caminho e sem complicar a vida de ninguém?*

Une três pilares:

- **Livro de Neemias** — história bíblica de um líder que orou, planejou, organizou a reconstrução dos muros de Jerusalém e cuidou do seu povo com sabedoria.
- **Gestão moderna (PMBOK 8ª Ed.)** — princípios de escopo, stakeholders, riscos e sustentabilidade humana, traduzidos para o dia a dia da comunidade.
- **Jeito Vitral** — linguagem simples, missional e acolhedora; a treliça só existe para servir a videira.

## Estrutura do projeto

```
trilha_lideranca/
├── site/                   # Site GitHub Pages (HTML/CSS/JS estático)
│   ├── index.html          # Landing — hero + 4 módulos + CTAs
│   ├── modulo-1.html       # O Chão da Vida e o Diagnóstico Empático
│   ├── modulo-2.html       # A Treliça que Sustenta
│   ├── modulo-3.html       # Bacia e Toalha (gestão de pessoas e ritmo)
│   ├── modulo-4.html       # Protegendo o Foco e Enviando
│   ├── mapa.html           # Guia para quem conduz os encontros
│   ├── material-de-apoio.html  # Referências e ferramentas
│   ├── 404.html
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── dados/
│   │   └── modulos.json    # Dados dos 4 módulos (card grid)
│   ├── css/
│   │   ├── tokens.css      # Design tokens — tema verde petróleo + dark mode
│   │   ├── estilo.css      # Sistema de componentes (header, hero, cards, footer)
│   │   ├── modulo.css      # Layout das páginas de módulo
│   │   ├── mapa.css        # Estilos da página Mapa
│   │   └── ...
│   └── scripts/
│       └── apostilas.js    # Download dinâmico de PDFs via GitHub API
├── docs/
│   ├── .gitkeep
│   ├── GUIA DO FACILITADOR.docx      # Manual de condução do workshop
│   └── LIDERANÇA COM BACIA E TOALHA.docx  # Apostila do discípulo-líder
├── agents.md                 # Regras de operação git (branch/tag)
└── README.md                 # Este arquivo
```

## Conteúdo

### A apostila — "Liderança com Bacia e Toalha"

Quatro módulos que formam o núcleo da formação:

1. **O Chão da Vida e o Diagnóstico Empático** — escuta, oração, inspeção noturna (Neemias 1–2; PMBOK: visão holística, stakeholders).
2. **A Treliça que Sustenta (montagem e escopo)** — videira vs. treliça, EAP, "defronte à sua casa" (Neemias 3; escopo, cronograma).
3. **Bacia e Toalha (gestão de pessoas e ritmo)** — liderança servidora, "ritmo, não corrida" (João 13, Neemias 5; sustentabilidade humana).
4. **Protegendo o Foco e Enviando (governança e riscos)** — pá e espada, trombeta, "não posso descer" (Neemias 4, 6; gestão de riscos).

**Conceitos-chave:** Filtro de Decisão (simples / missional / acolhedor), 4 Movimentos (Acolher → Formar → Enraizar → Enviar), 4 Times de Serviço (Acolhimento, Logística, Experiência, Ensino), 3 Pilares da liderança.

### O Guia do Facilitador

Manual operacional completo: coração do facilitador, atmosfera do encontro, cronograma em 3 formatos (imersão 4h30 / 4 encontros / 2 meios-dias), roteiro de fala detalhado, checklist antes/durante/depois, dicas para céticos, grupos pequenos/grandes, tempo reduzido e adaptação online.

## Regras de operação git

> Detalhes completos em `agents.md`.

| Ação do usuário | Branch destino | Tag |
|---|---|---|
| `"salvar"` / `"save"` (padrão) | `homologacao` | Coerente ao processo |
| `"salvar em main"` | `main` | Coerente ao processo |
| `"normalizar main"` | `main` ← `homologacao` | Merge completo da homologação |

- **Tags** seguem padrão semântico: `processo/descricao-vN` (ex: `site/estrutura-v1`).
- **Nunca** fazer push direto em `main` sem comando explícito `"salvar em main"`.
- **Nunca** fazer merge `homologacao` → `main` sem comando explícito `"normalizar main"`.

## Sites relacionados

- **Trilha de Novos:** https://ismaelmmachado.github.io/trilha_de_novos/
- **Trilha de Liderança:** https://ismaelmmachado.github.io/trilha_lideranca/

## Identidade visual

- **Tipografia:** Montserrat (títulos, geométrica) + Inter (corpo).
- **Tema:** Verde Petróleo `#005F6B` → Verde Acinzentado `#94A69A` (degradê sóbrio em destaques).
- **Contraste:** Grafite `#1F2421` sobre fundos claros; branco puro sobre seções escuras (WCAG AA).
- **Dark mode:** automático via `prefers-color-scheme`.
- **Acessibilidade:** `skip-link`, ARIA, `font-display: swap`, imagens com `alt`, `prefers-reduced-motion`.

## Licença

Criado com carinho para a Comunidade Vitral, seguindo a Regra de Ouro: simples, missional e acolhedor; reformado, protestante e presbiteriano; com citações bíblicas na NVT; claro, fluido, alinhado e focado no discipulado.
