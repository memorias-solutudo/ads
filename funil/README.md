# Funil de Tráfego Pago — Solutudo

Sistema para organizar os criativos (vídeos) por **destino de campanha**: para onde
vamos com cada vídeo e que tipo de campanha ele alimenta dentro do funil.

## Como usar

1. Assista ao vídeo e cole a transcrição em `transcricoes/cXX.md` (use o `_template.md`).
2. Classifique o vídeo no `mapa-criativos.md` segundo as dimensões abaixo.
3. Use o mapa para enxergar: o que existe em cada etapa, onde há **buracos**
   (etapa sem criativo), **redundâncias** e a **sequência** ideal de remarketing.

## Dimensões de classificação

Cada criativo é marcado por:

| Dimensão | Para que serve |
|---|---|
| **Função do vídeo** | O papel dele no fluxo (ver tabela abaixo) — `AD` criativo de anúncio ou `PG` vídeo de página |
| **Mecânica de conversão** | Como/onde converte: `VSL`, `CAD`, `WPP`, `ANUNCIE` (ver taxonomia) — **eixo principal** |
| **Etapa do funil** | Onde ele atua: Topo / Meio / Fundo / Remarketing / Retenção |
| **Tipo de campanha** | O objetivo de mídia (taxonomia A–G abaixo) |
| **Público** | Frio / Morno / Quente + segmento (geral, construção civil, etc.) |
| **Oferta / gancho** | Cadastro grátis, "< R$1/dia", live, prova social… |
| **Destino / CTA** | Para onde manda: página VSL, cadastro, anuncie, WhatsApp, live |
| **Status** | ✅ existe / 🟡 a confirmar / ⛔ falta produzir |

## Função do vídeo

| Código | Função | Onde vive |
|---|---|---|
| **AD** | Criativo de anúncio — **leva** tráfego para um destino | Feed/Stories/YouTube (mídia paga) |
| **PG** | Vídeo de página — vive **dentro** do destino (VSL, cadastro) | Na própria landing page |

> Um mesmo destino normalmente tem **os dois**: um vídeo `PG` na página + um ou mais
> criativos `AD` que levam tráfego até ela. Slots podem estar vazios (`⛔ falta`).

## Mecânica de conversão / destino (eixo principal)

Para onde o tráfego vai e **como** converte naquele destino:

| Código | Destino | Como converte | Ticket |
|---|---|---|---|
| **VSL** | Página VSL | Vídeo VSL na página → **agendamento direto na própria página** (call com consultor) | High |
| **WPP** | WhatsApp | Bot atende e **bifurca**: agenda call em vídeo c/ consultor (high) OU venda automática (low) | High **ou** Low |
| **CAD** | Página de cadastro gratuito | Lead se cadastra (gratuito) → entra na base p/ remarketing | — (topo de monetização) |
| **ANUNCIE** | Página "anuncie" | Conversão de anúncio/plano pago ("< R$1/dia") | Low |

> A separação **high ticket × low ticket** é decidida: na VSL sempre vai para consultor (high);
> no WhatsApp o **bot decide** caso a caso (high → call com consultor; low → venda automática).

## Taxonomia de tipos de campanha

| Código | Tipo de campanha | Etapa | Público típico |
|---|---|---|---|
| **A** | Atração / Conteúdo (Reconhecimento, Tráfego, Engajamento) | Topo | Frio |
| **B** | Cadastro Gratuito (Leads / Conversão de cadastro) | Meio | Frio / Morno |
| **C** | Venda / Plano pago (Conversão — "< R$1/dia", anuncie) | Fundo | Quente |
| **D** | Remarketing (públicos que já interagiram) | Remarketing | Quente |
| **E** | Evento / Live (inscrição + lembrete) | Topo / Meio | Frio / Morno |
| **F** | Confiança / Consideração ("dá pra confiar", olho no olho) | Meio | Morno |
| **G** | Vertical: Construção Civil (cruza com B / C / D) | Variável | Segmentado |

> Os tipos podem se combinar (ex.: `B+G` = cadastro gratuito para construção civil).
