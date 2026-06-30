import type { Video } from '../types'
import { JORNADAS, ESTILOS, STATUS_LABEL } from '../data/jornadas'

interface Props {
  video: Video
  onOpen: (v: Video) => void
}

export function VideoCard({ video: v, onOpen }: Props) {
  const j = JORNADAS[v.jornada]
  const estilo = v.estilo ? ESTILOS[v.estilo].nome : '—'
  return (
    <article
      className="card"
      onClick={() => onOpen(v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(v)}
    >
      <div className="card-top">
        <span className="card-id">{v.id}</span>
        <div>
          <div className="card-nome">{v.nome}</div>
          <div style={{ marginTop: 4 }}>
            <span
              className="tag"
              style={{ background: j.cor + '1a', color: j.cor, border: `1px solid ${j.cor}44` }}
            >
              {j.nome}
            </span>
            <span className={`tag tag-status-${v.status}`} style={{ marginLeft: 4 }}>
              {STATUS_LABEL[v.status]}
            </span>
          </div>
        </div>
      </div>
      <div className="card-body">
        {v.objetivo ? (
          <div className="tag-objetivo">{v.objetivo}</div>
        ) : (
          <div className="tag-objetivo" style={{ opacity: 0.6 }}>
            (objetivo a definir)
          </div>
        )}
        <div className="tags">
          <span className="tag tag-funcao">{v.funcao}</span>
          <span className="tag tag-estilo">📹 {estilo}</span>
          <span className="tag tag-publico">👥 {v.publico || '—'}</span>
        </div>
        {v.resumo && <div className="resumo">{v.resumo}</div>}
        <div className="plataformas">
          <div className="plat-titulo">Campanha recomendada</div>
          <div className="plat-row">
            <b>Meta:</b> {j.meta}
          </div>
          <div className="plat-row">
            <b>Google:</b> {j.google}
          </div>
          <div className="plat-row">
            <b>KPI:</b> {j.kpi}
          </div>
        </div>
      </div>
    </article>
  )
}
