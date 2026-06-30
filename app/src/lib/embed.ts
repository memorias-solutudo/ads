import type { VideoLink } from '../types'

// Converte o link do vídeo em URL embutível (player dentro do card/modal).
export function embedUrl(link?: VideoLink): string | null {
  if (!link) return null
  if (link.t === 'yt') {
    const m = link.u.match(/[?&]v=([^&]+)/)
    return m ? 'https://www.youtube.com/embed/' + m[1] : null
  }
  if (link.t === 'd') {
    const m = link.u.match(/\/file\/d\/([^/]+)/)
    return m ? 'https://drive.google.com/file/d/' + m[1] + '/preview' : null
  }
  if (link.t === 'av') {
    // A Voz: tenta embutir a própria página do vídeo.
    return link.u
  }
  return null
}

export function linkClass(t: VideoLink['t']): string {
  return t === 'yt' ? 'vlink-yt' : t === 'av' ? 'vlink-av' : ''
}
