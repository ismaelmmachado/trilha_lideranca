# AGENTS.md — Trilha de Liderança

Guia de convenções e contexto para agentes que trabalham neste repositório.

## Regra de Ouro (nunca esquecer)

1. **Idioma: interagir SEMPRE em português (pt-BR)** — em qualquer conversa, resposta ou resumo.
2. **"Salva"** → commit e push na branch `homologacao` (branch de trabalho padrão).
3. **"Salva em main"** (explícito) → `main`.
4. `main` só é usada quando solicitado explicitamente (deploy).

## Projeto

Site estático da Trilha de Liderança da Comunidade Vitral (IPIB São José do Rio Preto).
Publicado via GitHub Pages: `https://ismaelmmachado.github.io/trilha_lideranca/`

### Stack

- **HTML5 + CSS puro** — sem build step, zero dependências de runtime.
- Identidade "Marca Nova" em todo o site: verde petróleo `#005f6b` + verde acinzentado `#94a69a`, tipografia **Montserrat**, via Google Fonts.
- Design tokens: `css/tokens.css` — paleta Marca Nova padrão.
- JS mínimo: `js/menu.js` (menu mobile) + `js/apostilas.js` (download dinâmico de PDFs).

### Estrutura

```
trilha_lideranca/
├── index.html              # Landing — hero + 4 módulos
├── modulo-1.html           # O Chão da Vida e o Diagnóstico Empático
├── modulo-2.html           # A Treliça que Sustenta
├── modulo-3.html           # Bacia e Toalha — Gestão de Pessoas e Ritmo
├── modulo-4.html           # Protegendo o Foco e Enviando
├── mapa.html               # Guia do Facilitador
├── material-de-apoio.html  # Referências e ferramentas
├── 404.html
├── assets/
│   ├── favicon.svg
│   └── og-image.svg
├── css/
│   ├── tokens.css          # Design tokens (Marca Nova — verde petróleo)
│   ├── base.css            # Reset, tipografia, utilitários
│   └── estilo.css          # Sistema de componentes (header, hero, cards, footer)
├── js/
│   ├── menu.js             # Menu mobile (hambúrguer + fullscreen)
│   └── apostilas.js        # Download dinâmico de PDFs via GitHub API
├── dados/
│   └── modulos.json        # Dados dos 4 módulos (geração de cards)
├── docs/
│   ├── GUIA DO FACILITADOR.docx
│   └── LIDERANÇA COM BACIA E TOALHA.docx
├── .nojekyll               # Desabilita processamento Jekyll no GitHub Pages
├── robots.txt
├── sitemap.xml
├── AGENTS.md               # Este arquivo
└── README.md
```

### Conteúdo

- Conteúdo dos 4 módulos baseado nas apostilas em `docs/`.
- Apostilas para download: `docs/apostilas/pdf/` (geradas a partir dos `.docx`).
  - O botão de cada módulo busca o PDF dinamicamente via GitHub API (branch `main`).
  - Token de busca: campo `pdf` em `dados/modulos.json` (ex: `MODULO 1`).
- Header e footer são repetidos em cada página HTML — ao alterar, atualizar **todas** as páginas.

## Deploy (GitHub Pages)

- GitHub Pages serve a raiz (`/`) da branch **`homologacao`**.
- Sem build step: `git push origin homologacao` publica o conteúdo.
- O arquivo `.nojekyll` na raiz garante que o Pages sirva os arquivos sem processamento Jekyll.

## Convenções

- Idioma: português (pt-BR).
- Mobile-first; acessibilidade AA; caminhos relativos.
- Sem emojis em código/comentários; sem comentários no código salvo se solicitado.
- Tags seguem padrão semântico: `processo/descricao-vN` (ex: `site/estrutura-v1`).

## Design

O sistema visual "Marca Nova" é implementado nos tokens de `css/tokens.css`:
- Verde Petróleo `#005f6b` — cor de destaque principal.
- Verde Acinzentado (sálvia) `#94a69a` / `#e9ede9` — fundos e acentos.
- Quase-preto `#1f2421` — texto.
- Montserrat — tipografia única (headings e corpo).
- Tira de 4 cores (safira/esmeralda/âmbar/rubi) — marca inegociável no footer.
