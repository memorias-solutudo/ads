# Meta Ads 2025/2026 — o novo jogo (adaptado à Solutudo)

> **A regra:** `Sinal → Volume → Criativo → Escala (broad) → Paciência`.
> Sem o de cima resolvido, o de baixo não roda. A Meta (motor **Andromeda**) decide
> **por você** a partir da qualidade dos sinais + do criativo. Pare de brigar com o
> algoritmo; trabalhe COM ele.

## Os 5 pontos principais (ordem de impacto)

### 1. Qualidade de dados + CAPI — ~40% do impacto  ⭐ prioridade
O Andromeda só escala o que consegue medir. Dado sujo = IA aprende errado e escala no buraco.
- **Pixel + CAPI (server-side)**, deduplicados 100% no Events Manager. Pixel sozinho perde 20–40% dos eventos (iOS, bloqueadores, ITP).
- **EMQ (Event Match Quality) > 7** — enviar do servidor email/telefone/nome hasheados.
- **Eventos-chave da Solutudo rastreados com `value` correto** (ver mapa abaixo).
- **Teste de perda:** comparar eventos servidor vs navegador; gap >20% → consertar antes de tudo.

### 2. Volume de sinal / conversões por semana — ~25%
Andromeda precisa de **~50 conversões por conjunto/semana** pra sair do "Learning Limited".
- **Consolidar:** menos campanhas, mais budget por campanha (sair do "20 conjuntos de R$50/dia").
- **Otimizar pro evento certo de cada jornada** (não otimizar pra ViewContent se o que importa é Agendamento/Cadastro/Conversa).
- **Janela de atribuição:** 7-day click / 1-day view (ajustar ao ticket).

### 3. Criativo = o novo targeting — ~20%
O Andromeda usa **hook, visual, tema e linguagem do criativo** como sinal primário de PRA QUEM mostrar. Quem é o público é definido pelo criativo, não pela segmentação.
- **Testar conceitos, não cores:** oferta × ângulo × formato (ex.: UGC vs Fundador vs Antes/Depois).
- **Ritmo:** 15–20+ criativos novos/mês (2–3/semana no ar). Marcas com 20+/mês têm muito mais ROAS.
- **Modelo 50/30/20:** 50% variações do winner · 30% ângulos adjacentes · 20% teste ousado.
- **Hook nos 3s primeiros** — é o que o Andromeda lê pra decidir.
- ➡️ **Nossa vantagem:** já temos uma biblioteca de ângulos (c1–c24) mapeada por objetivo/estilo/jornada. Isso é matéria-prima de teste — usar o card system pra planejar as variações.

### 4. Audiência ampla (broad) — ~10%
Andromeda acha conversor melhor que qualquer interesse manual.
- **Broad + Advantage+** (Audience/Shopping). Filtrar só **país, idade, gênero** quando necessário.
- Deixar o Advantage+ ligado. A Meta removeu opções de exclusão detalhada e empurra pra essa direção.
- **Exceção:** remarketing (nossos c2, c17) usa Públicos Personalizados; topo/prospecção = broad.

### 5. Paciência operacional + regras — ~5% (protege todo o resto)
- **Janela no-touch:** 7–14 dias sem mexer após mudança significativa (edição grande **reinicia** o aprendizado).
- **Budget:** +20–30% a cada 3–5 dias — nunca dobrar do nada.
- **Testar criativo:** **adicionar** ao ad set, não substituir.
- Ansiedade destrói mais ROAS que criativo ruim.

---

## Mapa de eventos de conversão da Solutudo (o que rastrear via Pixel + CAPI)

| Jornada | Evento a otimizar | Observação |
|---|---|---|
| Cadastro grátis (c5, c6, c7, c13) | **Lead / CompleteRegistration** | value = LTV estimado do lead |
| WhatsApp / bot (c1, c4, c10) | **Contact / Início de conversa** | qualificação high/low acontece no bot |
| VSL → agendamento (c11, c12, vsl-pg) | **Schedule / Agendamento** (submit do formulário) | evento mais valioso (high ticket) |
| Anuncie / plano pago (c4→ANUNCIE) | **Purchase** com value | low ticket |
| Remarketing (c2, c17) | conforme a etapa | Públicos Personalizados |

> Sem esses eventos limpos (Pixel+CAPI, EMQ>7), **nada abaixo funciona** — é o pré-requisito.

## Checklist 30 dias (adaptado)
- **Semana 1 — Fundação:** Pixel + CAPI + dedup + EMQ 7+; mapear os 4 eventos acima.
- **Semana 2 — Volume:** consolidar campanhas por jornada; otimizar pro evento certo; mirar ~50 conversões/semana.
- **Semana 3 — Criativo:** lançar 8–10 ângulos novos (usar a biblioteca c1–c24 + a VSL); hook nos 3s.
- **Semana 4 — Escala:** abrir broad + Advantage+; não encostar por 14 dias.

**Se o time fizer só 1 coisa esta semana: implementar CAPI direito** (+10–20% de performance vs Pixel só).

## Não esquecer (resumo de 1 linha)
Dados limpos (CAPI/EMQ>7) → volume (~50 conv/sem) → muito criativo (o criativo É o público) → broad+Advantage+ → paciência (no-touch 7–14 dias).
