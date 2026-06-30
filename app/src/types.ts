// Tipos do domínio — funil de tráfego pago da Solutudo.

export type Funcao = 'AD' | 'PG'
export type Status = 'existe' | 'confirmar' | 'falta'

export type JornadaId =
  | 'ATRACAO'
  | 'CONFIANCA'
  | 'CADASTRO'
  | 'LIVE'
  | 'WHATSAPP'
  | 'VSL'
  | 'ANUNCIE'
  | 'REMARKETING'

export type EstiloId =
  | 'storytelling'
  | 'rosto-empe'
  | 'rosto-sentado'
  | 'vsl'
  | 'demonstracao'
  | 'comunicado'
  | 'ugc'

export type LinkTipo = 'd' | 'av' | 'yt'

export interface VideoLink {
  /** rótulo exibido no botão, ex.: "▶ Drive" */
  l: string
  /** url completa */
  u: string
  /** tipo: d = Drive, av = A Voz, yt = YouTube */
  t: LinkTipo
}

export interface Jornada {
  id: JornadaId
  nome: string
  /** cor da jornada (design system) */
  cor: string
  meta: string
  google: string
  youtube: string
  kpi: string
}

export interface Estilo {
  id: EstiloId
  nome: string
  formato: string
  porque: string
}

export interface Video {
  id: string
  nome: string
  funcao: Funcao
  jornada: JornadaId
  etapa?: string
  publico?: string
  estilo?: EstiloId
  status: Status
  objetivo?: string
  resumo?: string
  obs?: string
  links?: VideoLink[]
  transcricao?: string
}
