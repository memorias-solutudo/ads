import { useMemo, useState } from 'react'
import type { Video, JornadaId, Status } from './types'
import { VIDEOS } from './data/videos'
import { Sidebar } from './components/Sidebar'
import { Painel } from './components/Painel'
import { MapaFunil } from './components/MapaFunil'
import { VideoModal } from './components/VideoModal'

type Modo = 'direcionamento' | 'mapa'

export default function App() {
  const [modo, setModo] = useState<Modo>('direcionamento')
  const [filtroJornada, setFiltroJornada] = useState<JornadaId | null>(null)
  const [filtroStatus, setFiltroStatus] = useState<Status | null>(null)
  const [aberto, setAberto] = useState<Video | null>(null)

  const filtrados = useMemo(
    () =>
      VIDEOS.filter(
        (v) =>
          (!filtroJornada || v.jornada === filtroJornada) &&
          (!filtroStatus || v.status === filtroStatus),
      ),
    [filtroJornada, filtroStatus],
  )

  // No painel mostramos só os criativos AD (PG aparecem no mapa como slots).
  const doPainel = useMemo(() => filtrados.filter((v) => v.funcao === 'AD'), [filtrados])

  return (
    <>
      <header className="header">
        <div className="header-logo">
          Sol<span>u</span>tudo
        </div>
        <span className="header-titulo">/ Gestor de Funis — Tráfego Pago</span>
        <div className="modo-toggle">
          <button
            className={`modo-btn ${modo === 'direcionamento' ? 'on' : ''}`}
            onClick={() => setModo('direcionamento')}
          >
            🗂️ Direcionamento
          </button>
          <button
            className={`modo-btn ${modo === 'mapa' ? 'on' : ''}`}
            onClick={() => setModo('mapa')}
          >
            🕸️ Mapa de funil
          </button>
        </div>
        <span className="header-sub">memorias-solutudo/ads · 2026</span>
      </header>

      <div className="layout">
        <Sidebar
          videos={VIDEOS}
          filtroJornada={filtroJornada}
          filtroStatus={filtroStatus}
          onFiltroJornada={setFiltroJornada}
          onFiltroStatus={setFiltroStatus}
        />

        {modo === 'direcionamento' ? (
          <main className="main">
            <Painel
              videos={doPainel}
              filtroJornada={filtroJornada}
              onFiltroJornada={setFiltroJornada}
              onOpen={setAberto}
            />
          </main>
        ) : (
          <MapaFunil videos={filtrados} onOpen={setAberto} />
        )}
      </div>

      {aberto && <VideoModal video={aberto} onClose={() => setAberto(null)} />}
    </>
  )
}
