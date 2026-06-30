import type { Video, JornadaId, Status } from '../types'
import { JORNADAS, JORNADA_ORDEM } from '../data/jornadas'

interface Props {
  videos: Video[]
  filtroJornada: JornadaId | null
  filtroStatus: Status | null
  onFiltroJornada: (j: JornadaId | null) => void
  onFiltroStatus: (s: Status | null) => void
}

const STATUS_DOT: Record<Status, string> = {
  existe: 'var(--st-existe)',
  confirmar: 'var(--st-confirmar)',
  falta: 'var(--st-falta)',
}

export function Sidebar({
  videos,
  filtroJornada,
  filtroStatus,
  onFiltroJornada,
  onFiltroStatus,
}: Props) {
  const total = videos.length
  const classificados = videos.filter((v) => v.objetivo).length
  const transcricoes = videos.filter((v) => v.transcricao).length
  const faltam = videos.filter((v) => v.status === 'falta').length
  const countJ = (j: JornadaId) => videos.filter((v) => v.jornada === j).length

  return (
    <aside className="sidebar">
      <h3>Jornadas</h3>
      {JORNADA_ORDEM.map((j) => (
        <button
          key={j}
          className={`nav-item ${filtroJornada === j ? 'active' : ''}`}
          onClick={() => onFiltroJornada(filtroJornada === j ? null : j)}
        >
          <span className="nav-dot" style={{ background: JORNADAS[j].cor }} />
          {JORNADAS[j].nome}
          <span className="nav-count">{countJ(j)}</span>
        </button>
      ))}
      <button
        className={`nav-item ${!filtroJornada ? 'active' : ''}`}
        onClick={() => onFiltroJornada(null)}
      >
        <span className="nav-dot" style={{ background: '#9badc8' }} />
        Todos
      </button>

      <hr className="sidebar-sep" />
      <h3>Status</h3>
      {(['existe', 'confirmar', 'falta'] as Status[]).map((s) => (
        <button
          key={s}
          className={`nav-item ${filtroStatus === s ? 'active' : ''}`}
          onClick={() => onFiltroStatus(filtroStatus === s ? null : s)}
        >
          <span className="nav-dot" style={{ background: STATUS_DOT[s] }} />
          {s === 'existe' ? 'Existe' : s === 'confirmar' ? 'A confirmar' : 'Falta produzir'}
        </button>
      ))}

      <hr className="sidebar-sep" />
      <h3>Resumo</h3>
      <div className="stat-row">
        <span>Total de criativos</span>
        <span className="stat-val">{total}</span>
      </div>
      <div className="stat-row">
        <span>Classificados</span>
        <span className="stat-val">{classificados}</span>
      </div>
      <div className="stat-row">
        <span>Transcrições</span>
        <span className="stat-val">{transcricoes}</span>
      </div>
      <div className="stat-row">
        <span>Faltam produzir</span>
        <span className="stat-val" style={{ color: '#ef4444' }}>
          {faltam}
        </span>
      </div>
    </aside>
  )
}
