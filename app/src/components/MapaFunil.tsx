import { useEffect, useRef } from 'react'
import cytoscape from 'cytoscape'
import type { Core, ElementDefinition } from 'cytoscape'
import type { Video } from '../types'
import { JORNADAS, JORNADA_ORDEM } from '../data/jornadas'

interface Props {
  videos: Video[]
  onOpen: (v: Video) => void
}

const STATUS_COR: Record<string, string> = {
  existe: '#1a7a4a',
  confirmar: '#d97706',
  falta: '#b91c1c',
}

export function MapaFunil({ videos, onOpen }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cyRef = useRef<Core | null>(null)
  // mantém o handler atual sem reconstruir o grafo a cada render
  const onOpenRef = useRef(onOpen)
  onOpenRef.current = onOpen

  useEffect(() => {
    if (!containerRef.current) return

    const elements: ElementDefinition[] = [
      { data: { id: 'ROOT', label: 'FUNIL\nSOLUTUDO', tipo: 'root' } },
    ]
    for (const j of JORNADA_ORDEM) {
      elements.push({ data: { id: j, label: JORNADAS[j].nome, tipo: 'jornada', cor: JORNADAS[j].cor } })
      elements.push({ data: { id: 'e_' + j, source: 'ROOT', target: j } })
    }
    for (const c of videos) {
      elements.push({
        data: { id: c.id, label: c.id + '  ' + c.nome, tipo: 'card', status: c.status, ref: c.id },
      })
      elements.push({ data: { id: 'e_' + c.id, source: c.jornada, target: c.id } })
    }

    const cy = cytoscape({
      container: containerRef.current,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            label: 'data(label)',
            color: '#1a2b4a',
            'font-size': '11px',
            'font-family': "'Segoe UI', system-ui, sans-serif",
            'text-wrap': 'wrap',
            'text-max-width': '130px',
            'text-valign': 'center',
            'text-halign': 'center',
          },
        },
        {
          selector: 'node[tipo="root"]',
          style: {
            'background-color': '#1a2b4a',
            shape: 'round-rectangle',
            width: '120px',
            height: '74px',
            color: '#fff',
            'font-size': '14px',
            'font-weight': 'bold',
          },
        },
        {
          selector: 'node[tipo="jornada"]',
          style: {
            'background-color': '#fff',
            shape: 'round-rectangle',
            width: '150px',
            height: '46px',
            'border-width': 2,
            'border-color': 'data(cor)',
            color: 'data(cor)',
            'font-weight': 600,
          },
        },
        {
          selector: 'node[tipo="card"]',
          style: {
            'background-color': (ele) => STATUS_COR[ele.data('status')] || '#6e7681',
            shape: 'round-rectangle',
            width: '156px',
            height: '42px',
            color: '#fff',
            'text-max-width': '144px',
          },
        },
        {
          selector: 'edge',
          style: {
            width: 1.5,
            'line-color': '#aab4c5',
            'curve-style': 'bezier',
            'target-arrow-shape': 'none',
            opacity: 0.8,
          },
        },
        {
          selector: 'node:selected',
          style: { 'border-width': 3, 'border-color': '#f26522' },
        },
      ],
      layout: {
        name: 'breadthfirst',
        directed: true,
        roots: ['ROOT'],
        spacingFactor: 1.05,
        padding: 50,
      },
      wheelSensitivity: 0.25,
    })

    cy.on('tap', 'node[tipo="card"]', (e) => {
      const ref = e.target.data('ref') as string
      const v = videos.find((x) => x.id === ref)
      if (v) onOpenRef.current(v)
    })

    cyRef.current = cy
    return () => {
      cy.destroy()
      cyRef.current = null
    }
  }, [videos])

  return (
    <div className="main no-pad">
      <div className="mapa-toolbar">
        <h2>🎯 Mapa de funil</h2>
        <div className="mapa-legend">
          <span>
            <i className="nav-dot" style={{ background: STATUS_COR.existe }} />
            existe
          </span>
          <span>
            <i className="nav-dot" style={{ background: STATUS_COR.confirmar }} />
            a confirmar
          </span>
          <span>
            <i className="nav-dot" style={{ background: STATUS_COR.falta }} />
            falta produzir
          </span>
        </div>
        <div className="mapa-btns">
          <button onClick={() => cyRef.current?.fit(undefined, 40)}>Centralizar</button>
        </div>
      </div>
      <div className="cy-canvas" ref={containerRef} />
    </div>
  )
}
