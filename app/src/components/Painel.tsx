import type { Video, JornadaId } from '../types'
import { JORNADAS, JORNADA_ORDEM } from '../data/jornadas'
import { VideoCard } from './VideoCard'
import { NotasProjeto } from './NotasProjeto'

interface Props {
  videos: Video[]
  filtroJornada: JornadaId | null
  onFiltroJornada: (j: JornadaId | null) => void
  onOpen: (v: Video) => void
}

// Filtros rápidos exibidos no topo do painel.
const FILTROS_TOP: (JornadaId | null)[] = [
  null,
  'WHATSAPP',
  'VSL',
  'CADASTRO',
  'REMARKETING',
  'ATRACAO',
]

export function Painel({ videos, filtroJornada, onFiltroJornada, onOpen }: Props) {
  const n = videos.length
  return (
    <>
      <NotasProjeto />

      <div className="section-header">
        <div className="section-title">Direcionamento — criativos por jornada</div>
        <span className="badge badge-laranja">
          {n} vídeo{n !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="filtros">
        {FILTROS_TOP.map((f) => (
          <button
            key={f ?? 'todos'}
            className={`filtro-btn ${filtroJornada === f ? 'on' : ''}`}
            onClick={() => onFiltroJornada(f)}
          >
            {f ? JORNADAS[f].nome : 'Todos'}
          </button>
        ))}
        {/* mostra a jornada ativa quando ela não está nos atalhos */}
        {filtroJornada && !FILTROS_TOP.includes(filtroJornada) && (
          <button className="filtro-btn on" onClick={() => onFiltroJornada(filtroJornada)}>
            {JORNADAS[filtroJornada].nome}
          </button>
        )}
      </div>

      {n === 0 ? (
        <p style={{ color: 'var(--sol-muted)' }}>
          Nenhum criativo nesta combinação de filtros.
        </p>
      ) : (
        <div className="grid">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} onOpen={onOpen} />
          ))}
        </div>
      )}

      {/* rodapé com a ordem das jornadas (referência) */}
      <p style={{ color: 'var(--sol-muted)', fontSize: 11, marginTop: 28 }}>
        Jornadas: {JORNADA_ORDEM.map((j) => JORNADAS[j].nome).join(' · ')}
      </p>
    </>
  )
}
