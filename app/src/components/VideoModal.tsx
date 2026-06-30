import { useEffect, useState } from 'react'
import type { Video } from '../types'
import { JORNADAS, ESTILOS, STATUS_LABEL } from '../data/jornadas'
import { embedUrl, linkClass } from '../lib/embed'

interface Props {
  video: Video
  onClose: () => void
}

export function VideoModal({ video: v, onClose }: Props) {
  const [playing, setPlaying] = useState(false)
  const j = JORNADAS[v.jornada]
  const e = v.estilo ? ESTILOS[v.estilo] : undefined
  const primario = v.links?.[0]
  const url = embedUrl(primario)

  // Reseta o player ao trocar de vídeo e fecha com ESC.
  useEffect(() => {
    setPlaying(false)
  }, [v.id])
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => ev.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(ev) => ev.stopPropagation()}>
        <div className="modal-head">
          <span className="card-id">{v.id}</span>
          <h2>{v.nome}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Fechar">
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="tags">
            <span
              className="tag"
              style={{ background: j.cor + '1a', color: j.cor, border: `1px solid ${j.cor}44` }}
            >
              {j.nome}
            </span>
            <span className={`tag tag-status-${v.status}`}>
              {STATUS_LABEL[v.status]}
            </span>
            <span className="tag tag-funcao">
              {v.funcao === 'AD' ? 'AD · anúncio' : 'PG · vídeo de página'}
            </span>
          </div>

          {v.objetivo && <div className="tag-objetivo">{v.objetivo}</div>}

          {/* PLAYER */}
          {primario && (
            <>
              {playing && url ? (
                <div className="embed-frame">
                  <iframe
                    src={url}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    referrerPolicy="no-referrer"
                    title={`Player ${v.id}`}
                  />
                </div>
              ) : (
                <button
                  type="button"
                  className="embed-poster"
                  onClick={() => setPlaying(true)}
                  style={{ background: `linear-gradient(135deg, ${j.cor}, ${j.cor}aa)`, border: 0, cursor: 'pointer', display: 'block' }}
                  aria-label="Reproduzir vídeo"
                >
                  <div className="embed-poster-inner">
                    <span className="play-ico">▶</span>
                    <strong>Assistir aqui</strong>
                    <small>{primario.l.replace('▶ ', '')}{!url && ' — abre em nova aba'}</small>
                  </div>
                </button>
              )}
              {playing && (
                <div className="embed-note">
                  Se o player ficar em branco, o vídeo pode exigir permissão de acesso. Abra direto:{' '}
                  <a href={primario.u} target="_blank" rel="noopener noreferrer">
                    {primario.l.replace('▶ ', '')}
                  </a>
                </div>
              )}
            </>
          )}

          {/* LINKS */}
          {v.links && v.links.length > 0 && (
            <div className="vlinks" style={{ marginTop: 10 }}>
              {v.links.map((x, i) => (
                <a
                  key={i}
                  className={`vlink ${linkClass(x.t)}`}
                  href={x.u}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {x.l}
                </a>
              ))}
            </div>
          )}

          {v.resumo && <p className="modal-resumo">{v.resumo}</p>}

          <h4>Classificação</h4>
          <div className="kv">
            <b>Etapa:</b> {v.etapa || '—'}
          </div>
          <div className="kv">
            <b>Público:</b> {v.publico || '—'}
          </div>
          {v.obs && (
            <div className="kv">
              <b>Obs:</b> {v.obs}
            </div>
          )}

          <h4>🎬 Criativo recomendado</h4>
          <div className="kv">
            <b>Estilo:</b> {e?.nome || v.estilo || '—'}
          </div>
          <div className="kv">
            <b>Formato:</b> {e?.formato || '—'}
          </div>
          {e?.porque && <p className="modal-resumo">{e.porque}</p>}

          <h4>📣 Onde anunciar (campanha)</h4>
          <div className="kv">
            <b>Meta:</b> {j.meta}
          </div>
          <div className="kv">
            <b>Google:</b> {j.google}
          </div>
          <div className="kv">
            <b>YouTube:</b> {j.youtube}
          </div>
          <div className="kv">
            <b>KPI:</b> {j.kpi}
          </div>

          {v.transcricao && (
            <>
              <h4>Transcrição completa</h4>
              <div className="transcricao">{v.transcricao}</div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
