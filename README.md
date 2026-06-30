# ADS Solutudo — Gestor visual de funis de tráfego

App interno para gerir criativos (vídeos) de tráfego pago, implementado a partir
dos protótipos exportados do Claude Design (`funil/painel.html` e
`funil/mindmap/index.html`), usando o design system Solutudo.

## Estrutura

- **`app/`** — aplicação Vite + React + TypeScript (o produto).
- **`funil/`** — material de origem: docs do funil, transcrições e os protótipos HTML
  que serviram de design de referência.

## Modos

- **🗂️ Direcionamento** — grade de cards de vídeo por jornada, com objetivo, tags
  (função/estilo/público/status), resumo, campanha recomendada e modal lateral com
  player (Drive/YouTube/A Voz), "onde anunciar" (Meta/Google/YouTube/KPI) e
  transcrição completa. Filtros por jornada e status.
- **🕸️ Mapa de funil** — mind map (pan/zoom): nó central → ramos por jornada → cards
  coloridos por status. Clique num card abre o mesmo detalhe.

## Rodar localmente

```bash
cd app
npm install
npm run dev        # servidor de desenvolvimento
npm run build      # typecheck + build de produção (dist/)
npm run preview    # serve o build
```

## Publicação (GitHub Pages)

O workflow `.github/workflows/deploy-ads.yml` faz o build de `app/` e publica no
GitHub Pages a cada push nas branches `main` ou `claude/ads-solutudo-deploy-l14gih`.

Para ativar: **Settings → Pages → Source: "GitHub Actions"**.
O `vite.config.ts` usa `base: '/ads/'`, então o site sai em
**https://memorias-solutudo.github.io/ads/**.

> Thumbnails/player do Drive e A Voz dependem de rede e de permissões de acesso do
> vídeo; quando não embutíveis, o card oferece o link para abrir em nova aba.
