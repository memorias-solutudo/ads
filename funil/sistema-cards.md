# Sistema de Cards — esquema e interface visual

Cada vídeo é um **card**. O card carrega tudo que precisamos para saber *o que é*,
*onde entra no fluxo*, *onde falta inserir* e *como publicar*.

## Campos do card

| Campo | Exemplo | Para quê |
|---|---|---|
| **id / nome** | `c4 — Menos de R$1/dia` | Identificação |
| **função** | `AD` (anúncio) ou `PG` (vídeo de página) | Papel no fluxo |
| **jornada** | ATRAÇÃO · CONFIANÇA · CADASTRO · LIVE · WHATSAPP · VSL · ANUNCIE · REMARKETING | Onde entra |
| **etapa** | Topo / Meio / Fundo / Remarketing | Profundidade no funil |
| **público** | Frio / Morno / Quente + segmento | Segmentação |
| **estilo** | storytelling · rosto-empe · rosto-sentado · vsl · demonstracao · comunicado | Como gravar (ver `guia-criativos.md`) |
| **formato** | 9:16 15–30s | Especificação técnica |
| **plataforma/campanha** | Meta Leads · Google Search · YouTube In-stream | Onde publicar (ver `guia-plataformas.md`) |
| **cta / destino** | Cadastro grátis · WhatsApp · Agendar | Para onde manda |
| **kpi** | CPL, ROAS, agendamentos | Como medir |
| **status** | ✅ existe · 🟡 a confirmar · ⛔ falta produzir | Onde precisamos inserir/produzir |
| **próximo passo** | "→ remarketing VSL" | Sequência |
| **obs** | "variação A/B do c6" | Notas |

> O card não precisa estar 100% preenchido. Mínimo: **nome + função + jornada + status**.
> O resto (plataforma, estilo, kpi) é derivável das jornadas/etapas e já vem sugerido.

## Interface visual — o mind map

O protótipo está em **`mindmap/index.html`** (abra no navegador). Ele já realiza o que
você descreveu:

- **Canvas** com nó central "Funil Solutudo" e ramos por jornada (mind map).
- **Cards** pendurados em cada ramo, **coloridos por status** (verde/amarelo/vermelho).
- **Clique em qualquer item** → painel lateral com todos os detalhes do card +
  recomendação de plataforma + recomendação de criativo daquela jornada/estilo.
- **Pan/zoom** no canvas; dá para ir adicionando etapas/cards editando os dados no topo do arquivo.

### Como adicionar um card novo
No `index.html`, no array `CARDS`, adicione uma linha:
```js
{ id:'c25', nome:'Novo vídeo', funcao:'AD', jornada:'CADASTRO',
  etapa:'Meio', publico:'Frio', estilo:'rosto-empe', status:'falta', obs:'' }
```
Recarregue a página — o nó aparece sozinho no ramo certo.

## Orientação para a interface definitiva (escolha de ferramenta)

| Caminho | Ferramenta | Quando escolher |
|---|---|---|
| **Rápido / no-code** | **FigJam** ou **Miro** | Começar já, arrastar cards, comentar em equipe. Use sticky/cards com link do vídeo; agrupe por jornada. |
| **Visual + simples** | **Whimsical** (mind map) | Mind map limpo, bom para apresentar. |
| **Banco de dados de cards** | **Notion** (board/galeria) | Se o foco for filtrar/ordenar muitos vídeos por campos. |
| **Sob medida (deste repo)** | **React Flow** (app próprio) | Quando quiser a interface integrada aos dados versionados aqui, com filtros e edição. Evolução natural do `mindmap/index.html`. |

> Recomendação: **comece pelo protótipo `mindmap/index.html` + FigJam** para alinhar a
> estrutura com o time. Quando estabilizar, eu evoluo o protótipo para um app React Flow
> com filtros (por status, plataforma, jornada) e edição dos cards.
