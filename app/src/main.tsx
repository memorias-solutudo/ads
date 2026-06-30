import { StrictMode } from 'react'
import type { ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import FunisRaw from './Funis'
import './styles.css'

// Funis.tsx é um porte fiel (@ts-nocheck) sem tipos de props expostos.
const Funis = FunisRaw as unknown as ComponentType<{
  showGhosts?: boolean
  cardDensity?: 'Enxuto' | 'Completo'
  curvedConnectors?: boolean
}>

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* props do design: Mapa → sugerir ghosts, densidade completa, conectores curvos */}
    <Funis showGhosts cardDensity="Completo" curvedConnectors />
  </StrictMode>,
)
