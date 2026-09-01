# Trilha de Liderança · Comunidade Vitral

**Liderança com Bacia e Toalha — A Treliça a Serviço da Videira**

Site estático da Trilha de Liderança da Comunidade Vitral (IPIB São José do Rio Preto).

Publicado em: <https://ismaelmmachado.github.io/trilha_lideranca/>

Versão atual: **v1.0** · Branch de trabalho: `homologacao`

## Páginas

| Página | Arquivo |
|---|---|
| Início | `index.html` |
| Módulo 1 — O Chão da Vida | `modulo-1.html` |
| Módulo 2 — A Treliça que Sustenta | `modulo-2.html` |
| Módulo 3 — Bacia e Toalha | `modulo-3.html` |
| Módulo 4 — Protegendo o Foco e Enviando | `modulo-4.html` |
| Mapa (Guia do Facilitador) | `mapa.html` |
| Material de Apoio | `material-de-apoio.html` |
| 404 | `404.html` |

## Stack

- **HTML5 + CSS puro** — sem build step, zero dependências de runtime.
- Fonte única: Montserrat (400/600/700), via Google Fonts.
- Design tokens: `css/tokens.css` — paleta Marca Nova (verde petróleo/sálvia).
- JS mínimo: `js/menu.js` + `js/apostilas.js`.

## Estrutura

```
trilha_lideranca/
├── index.html
├── modulo-1..4.html
├── mapa.html
├── material-de-apoio.html
├── 404.html
├── assets/             # favicon.svg, og-image.svg
├── css/                # tokens.css, base.css, estilo.css
├── js/                 # menu.js, apostilas.js
├── dados/              # modulos.json
├── docs/               # apostilas .docx (fonte da verdade)
├── .nojekyll
├── robots.txt
├── sitemap.xml
├── AGENTS.md
└── README.md
```

## Design

- **Marca Nova**: verde petróleo `#005f6b` + sálvia `#94a69a` + quase-preto `#1f2421` + Montserrat.
- Tira de 4 cores (safira/esmeralda/âmbar/rubi) no footer — marca inegociável.
- Dark mode automático via `prefers-color-scheme`.
- Mobile-first; acessibilidade WCAG AA.

## Conteúdo

- 4 módulos baseados nas apostilas em `docs/`.
- Download de PDFs: `docs/apostilas/pdf/` servido via GitHub API (branch `main`).
- Fonte da verdade do conteúdo: `docs/LIDERANÇA COM BACIA E TOALHA.docx` (apostila) e `docs/GUIA DO FACILITADOR.docx` (mapa).

## Rodar localmente

Abra `index.html` diretamente no navegador — site estático, sem servidor.

## Publicar

O GitHub Pages serve a raiz da branch `homologacao`. Basta fazer push nessa branch.
`main` só é usada em deploys explícitos ("salvar em main").

## Sites relacionados

- **Comunidade Vitral:** <https://ismaelmmachado.github.io/comunidadevitral/>
- **Trilha de Novos:** <https://ismaelmmachado.github.io/trilha_de_novos/>
