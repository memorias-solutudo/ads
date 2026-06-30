# ADS Solutudo — Gestor visual de funis de tráfego

App interno para gerir e analisar criativos (vídeos) de tráfego pago. É a
implementação fiel do design exportado do Claude Design
(`Gestor de Funis.dc.html`), usando o design system Solutudo (DM Sans, marca
roxa `#A701FD`, gradientes da marca).

## Estrutura

- **`app/`** — aplicação Vite + React + TypeScript (o produto).
  - `src/Funis.tsx` — porte fiel do design (`React.createElement`), com `render()`
    reconstruindo o template `<x-dc>`.
  - `src/styles.css` — tokens do design system Solutudo + animações do protótipo.
- **`funil/`** — material de origem: docs do funil, transcrições e protótipos antigos.

## Modos

- **🗂️ Direcionamento** — criativos agrupados por jornada (Atração, Confiança,
  Cadastro, Live, WhatsApp, VSL, Anuncie, Remarketing). Cada grupo traz a
  "campanha recomendada" (Meta/Google/YouTube/KPI) e cards de vídeo com thumbnail,
  objetivo, função/estilo/público/status, resumo e alerta. Dock de filtro por
  jornada no rodapé; filtro de status no topo. O card abre um drawer de 90% com
  player (Drive), "onde anunciar" e a transcrição completa.
- **🕸️ Mapa de funil** — canvas com pan/zoom; fluxo da esquerda → direita
  (Ângulo/jornada → Gatilho → Anúncio Meta → Vídeo → Destino), cards arrastáveis,
  "fantasmas" tracejados do que falta produzir, nós de fluxo (Meta/Página/WhatsApp)
  com prévia e conectores curvos. Painel lateral editável distinguindo campos
  **[manual]** vs **[IA → colar]**; painéis de jornada e de funil; seletor de funil;
  lixeira (excluir/restaurar); modais de novo funil e de novo item.

Estado persistido em `localStorage` (`solu-funis-v3`). Semeado com 9 vídeos reais
(c1–c13) + 5 nós de fluxo.

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

> Thumbnails/player do Drive e as fontes do Google dependem de rede e de permissões
> de acesso do vídeo; sem elas, o card cai no pôster colorido de fallback e o botão
> "Abrir no Drive" continua disponível.
