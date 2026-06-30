import type { Jornada, JornadaId, Estilo, EstiloId } from '../types'

// Jornadas = ramos do funil. Cada uma traz a recomendação de plataforma/campanha.
// Cores do design system Solutudo (var --j-*).
export const JORNADAS: Record<JornadaId, Jornada> = {
  ATRACAO: {
    id: 'ATRACAO',
    nome: 'Atração',
    cor: '#7C3AED',
    meta: 'Reconhecimento / Engajamento (vídeo). Públicos frios amplos.',
    google: 'Demand Gen (vídeo).',
    youtube: 'In-stream pulável + Bumper 6s + Shorts.',
    kpi: 'VTR, CPV, retenção',
  },
  CONFIANCA: {
    id: 'CONFIANCA',
    nome: 'Confiança',
    cor: '#D97706',
    meta: 'Tráfego/Engajamento p/ mornos (viram vídeo).',
    google: 'Demand Gen remarketing.',
    youtube: 'In-stream pulável (rosto sentado) + In-feed.',
    kpi: 'Tempo de visualização, cliques',
  },
  CADASTRO: {
    id: 'CADASTRO',
    nome: 'Cadastro grátis',
    cor: '#059669',
    meta: 'Cadastros (Leads) — form instantâneo ou conversão no site.',
    google: 'Search (intenção) + PMax.',
    youtube: 'Vídeo de ação com CTA cadastro.',
    kpi: 'CPL, taxa de cadastro',
  },
  LIVE: {
    id: 'LIVE',
    nome: 'Live / Evento',
    cor: '#9333EA',
    meta: 'Tráfego p/ inscrição → remarketing de lembrete.',
    google: 'Demand Gen + YouTube promo.',
    youtube: 'In-stream + comunidade.',
    kpi: 'Inscritos, comparecimento',
  },
  WHATSAPP: {
    id: 'WHATSAPP',
    nome: 'WhatsApp / bot',
    cor: '#16A34A',
    meta: 'Engajamento → Cliques no WhatsApp / Mensagens (conversas).',
    google: 'Search (secundário).',
    youtube: 'Vídeo de ação c/ link.',
    kpi: 'Conversas, qualificação high/low',
  },
  VSL: {
    id: 'VSL',
    nome: 'VSL / High ticket',
    cor: '#DC2626',
    meta: 'Vendas (Conversões) otimizando Agendamento. Mornos/quentes.',
    google: 'PMax + Search + Demand Gen.',
    youtube: 'In-stream longo (VSL) + Vídeo de ação.',
    kpi: 'Agendamentos, show-up, CAC',
  },
  ANUNCIE: {
    id: 'ANUNCIE',
    nome: 'Anuncie / Low ticket',
    cor: '#EA580C',
    meta: 'Vendas (Conversões) otimizando compra; remarketing quente.',
    google: 'Search (alta intenção) + PMax.',
    youtube: 'Vídeo de ação (remarketing).',
    kpi: 'Vendas, ROAS, CPA',
  },
  REMARKETING: {
    id: 'REMARKETING',
    nome: 'Remarketing',
    cor: '#0369A1',
    meta: 'Vendas/Leads com Públicos Personalizados (visitantes, lista, video viewers).',
    google: 'Display/Demand Gen remarketing + RLSA.',
    youtube: 'In-feed/In-stream p/ listas.',
    kpi: 'ROAS, frequência, CPA',
  },
}

// Ordem de exibição das jornadas (sidebar / filtros / mapa).
export const JORNADA_ORDEM: JornadaId[] = [
  'WHATSAPP',
  'VSL',
  'CADASTRO',
  'REMARKETING',
  'ATRACAO',
  'LIVE',
  'ANUNCIE',
  'CONFIANCA',
]

// Estilos de criativo. Ver funil/guia-criativos.md.
export const ESTILOS: Record<EstiloId, Estilo> = {
  storytelling: {
    id: 'storytelling',
    nome: 'Storytelling',
    formato: '9:16 15–45s (ou 16:9 YouTube), hook 3s',
    porque: 'Narrativa antes do CTA prende público frio criando contexto/tensão.',
  },
  'rosto-empe': {
    id: 'rosto-empe',
    nome: 'Rosto — em pé',
    formato: '9:16 15–30s, ritmo rápido',
    porque: 'Em pé = energia, urgência, comando. Ideal p/ ofertas, lives e ação.',
  },
  'rosto-sentado': {
    id: 'rosto-sentado',
    nome: 'Rosto — sentado',
    formato: 'Câmera na altura dos olhos, 16:9/1:1',
    porque: 'Sentado = proximidade e confiança olho no olho. Bom p/ consideração.',
  },
  vsl: {
    id: 'vsl',
    nome: 'VSL (longo)',
    formato: '16:9 ou 1:1, 3–20 min, rosto sentado',
    porque: 'Estrutura problema→solução→prova→oferta→CTA agendar.',
  },
  demonstracao: {
    id: 'demonstracao',
    nome: 'Demonstração',
    formato: 'Tela + narração, 30–90s',
    porque: 'Prova visual da plataforma/resultados reduz objeção.',
  },
  comunicado: {
    id: 'comunicado',
    nome: 'Comunicado segmentado',
    formato: 'Meio-corpo, 20–40s, segmento no hook',
    porque: 'Tom de aviso direto cria pertencimento ("é com você").',
  },
  ugc: {
    id: 'ugc',
    nome: 'Bastidor / espontâneo (UGC)',
    formato: '9:16 vertical, sem produção, 15–40s',
    porque:
      'Sem olhar p/ câmera, parece conteúdo orgânico/autêntico — tira a "cara de anúncio" e ganha confiança no público frio.',
  },
}

export const STATUS_LABEL: Record<string, string> = {
  existe: '✅ Existe',
  confirmar: '🟡 A confirmar',
  falta: '⛔ Falta produzir',
}
