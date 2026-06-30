// @ts-nocheck
/* Porte fiel de project/Gestor de Funis.dc.html (Claude Design) para React.
   Métodos construtores copiados verbatim; apenas render()/template adicionados. */
import React from 'react'

class Funis extends React.Component {
  // ===== marca Solutudo (coração rainbow do design system) =====
  // Vetor do heart (Ic.Heart do _ds_bundle) preenchido com --grad-rainbow.
  brandMark(size) {
    const s = size || 30;
    const gid = 'solRainbow';
    return this.el('svg', { width:s, height:s, viewBox:'0 0 24 24', fill:'none', 'aria-label':'Solutudo', role:'img', style:{ flex:'none', filter:'drop-shadow(0 6px 14px rgba(167,1,253,0.30))' } },
      this.el('defs', { key:'d' },
        this.el('linearGradient', { id:gid, x1:'2', y1:'4', x2:'22', y2:'20', gradientUnits:'userSpaceOnUse' },
          this.el('stop', { key:1, offset:'0.06', stopColor:'#A701FD' }),
          this.el('stop', { key:2, offset:'0.17', stopColor:'#674EF0' }),
          this.el('stop', { key:3, offset:'0.26', stopColor:'#20CCEF' }),
          this.el('stop', { key:4, offset:'0.47', stopColor:'#00FFAD' }),
          this.el('stop', { key:5, offset:'0.64', stopColor:'#FFC024' }),
          this.el('stop', { key:6, offset:'0.79', stopColor:'#FF6849' }),
          this.el('stop', { key:7, offset:'0.92', stopColor:'#FF34A3' }))),
      this.el('path', { key:'p', d:'M12 21s-7-4.6-9.3-9A5 5 0 0 1 12 6a5 5 0 0 1 9.3 6c-2.3 4.4-9.3 9-9.3 9z', fill:'url(#' + gid + ')' })
    );
  }
  // ===== render (porta o template <x-dc> para React) =====
  platItem(label, color, text) {
    return this.el('div', { key: label, style:{ display:'flex', gap:8, alignItems:'baseline', minWidth:0, maxWidth:330 } },
      this.el('span', { style:{ fontSize:9.5, fontWeight:800, letterSpacing:'.03em', color, width:52, flex:'none' } }, label),
      this.el('span', { style:{ fontSize:11.5, color:'var(--gray-600)', lineHeight:1.4 } }, text)
    );
  }
  renderDirecCard(v) {
    const playSvg = this.el('svg', { width:20, height:20, viewBox:'0 0 24 24', fill:'currentColor' }, this.el('path', { d:'M8 5v14l11-7z' }));
    const driveSvg = this.el('svg', { width:15, height:15, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.8, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('path', { key:1, d:'M14 4h6v6' }), this.el('path', { key:2, d:'M20 4l-9 9' }), this.el('path', { key:3, d:'M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6' }));
    return this.el('article', { key:v.id, className:'vcard', onClick:v.onOpen, style:{ background:'var(--white)', border:'1px solid var(--gray-150)', borderRadius:18, overflow:'hidden', boxShadow:'var(--shadow-card)', cursor:'pointer', transition:'transform .16s var(--ease-out), box-shadow .22s var(--ease-out)', display:'flex', flexDirection:'column' } },
      this.el('div', { style:{ position:'relative', height:158, backgroundColor:'var(--gray-200)', backgroundImage:(v.thumb ? "url('" + v.thumb + "'), " : '') + v.posterBg, backgroundSize:'cover', backgroundPosition:'center', overflow:'hidden' } },
        this.el('div', { style:{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(21,21,21,0) 38%, rgba(21,21,21,.52) 100%)' } }),
        this.el('span', { style:{ position:'absolute', top:11, left:11, display:'inline-flex', alignItems:'center', gap:6, background:'var(--glass-white)', backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)', borderRadius:999, padding:'4px 10px', fontSize:10.5, fontWeight:700, color:'var(--ink)' } },
          this.el('span', { style:{ width:8, height:8, borderRadius:8, background:v.statusColor } }), v.statusLabel),
        v.driveUrl ? this.el('a', { href:v.driveUrl, target:'_blank', rel:'noopener', onClick:v.onDrive, title:'Abrir o arquivo no Drive', style:{ position:'absolute', top:10, right:10, width:32, height:32, borderRadius:10, background:'var(--glass-white)', backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'var(--ink)', textDecoration:'none' } }, driveSvg) : null,
        this.el('button', { className:'vplay', type:'button', onClick:v.onOpen, style:{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', width:52, height:52, borderRadius:999, border:'none', cursor:'pointer', background:'rgba(255,255,255,.92)', boxShadow:'0 6px 20px rgba(21,21,21,.28)', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'var(--ink)' } }, playSvg)
      ),
      this.el('div', { style:{ padding:'14px 15px 15px', display:'flex', flexDirection:'column', flex:1 } },
        this.el('div', { style:{ borderLeft:'3px solid ' + v.color, padding:'1px 0 1px 11px', marginBottom:12 } },
          this.el('div', { style:{ display:'flex', alignItems:'center', gap:5, marginBottom:4 } },
            this.el('svg', { width:13, height:13, viewBox:'0 0 24 24', fill:'none', stroke:v.color, strokeWidth:2, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('circle', { key:1, cx:12, cy:12, r:9 }), this.el('circle', { key:2, cx:12, cy:12, r:4.5 })),
            this.el('span', { style:{ fontSize:10, fontWeight:800, letterSpacing:'.06em', textTransform:'uppercase', color:v.color } }, 'Objetivo')),
          this.el('p', { style:{ margin:0, fontSize:14, fontWeight:700, color:'var(--ink)', lineHeight:1.35 } }, v.objetivo)),
        this.el('div', { style:{ display:'flex', alignItems:'center', gap:6, flexWrap:'wrap', marginBottom:11 } },
          this.el('span', { style:{ fontSize:10, fontWeight:800, letterSpacing:'.02em', padding:'3px 8px', borderRadius:999, background:v.funcaoBg, color:v.funcaoFg } }, v.funcao),
          this.el('span', { style:{ display:'inline-flex', alignItems:'center', gap:4, fontSize:10.5, fontWeight:700, color:'var(--gray-600)', background:'var(--gray-100)', borderRadius:999, padding:'3px 9px' } },
            this.el('svg', { width:12, height:12, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.8, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('rect', { key:1, x:2, y:6, width:14, height:12, rx:2.5 }), this.el('path', { key:2, d:'M16 10l6-3.5v11L16 14' })), v.estilo),
          this.el('span', { style:{ display:'inline-flex', alignItems:'center', gap:4, fontSize:10.5, fontWeight:700, color:'var(--gray-600)', background:'var(--gray-100)', borderRadius:999, padding:'3px 9px' } },
            this.el('svg', { width:12, height:12, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.8, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('circle', { key:1, cx:9, cy:8, r:3.2 }), this.el('path', { key:2, d:'M3.5 20a5.5 5.5 0 0 1 11 0' }), this.el('path', { key:3, d:'M16 5.5a3 3 0 0 1 0 5.8' }), this.el('path', { key:4, d:'M19.5 20a5 5 0 0 0-3-4.4' })), v.publico)),
        this.el('p', { style:{ margin:'0 0 13px', fontSize:12.5, color:'var(--gray-600)', lineHeight:1.55, display:'-webkit-box', WebkitLineClamp:4, WebkitBoxOrient:'vertical', overflow:'hidden' } }, v.resumo),
        v.flagText ? this.el('div', { style:{ display:'flex', gap:7, alignItems:'flex-start', background:'var(--tint-yellow)', borderRadius:10, padding:'8px 10px', marginBottom:13 } },
          this.el('svg', { width:14, height:14, viewBox:'0 0 24 24', fill:'none', stroke:'#9a6b00', strokeWidth:1.9, strokeLinecap:'round', strokeLinejoin:'round', style:{ flex:'none', marginTop:1 } }, this.el('path', { key:1, d:'M12 9v4' }), this.el('path', { key:2, d:'M12 17h.01' }), this.el('path', { key:3, d:'M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z' })),
          this.el('span', { style:{ fontSize:11, fontWeight:600, color:'#7a5200', lineHeight:1.4 } }, v.flagText)) : null,
        this.el('div', { style:{ marginTop:'auto', display:'flex', alignItems:'center', justifyContent:'space-between', gap:8, paddingTop:11, borderTop:'1px solid var(--gray-150)' } },
          this.el('span', { style:{ fontSize:11, fontWeight:600, color:'var(--gray-400)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' } }, v.name),
          this.el('span', { style:{ fontSize:11.5, fontWeight:700, color:'var(--brand-purple)', whiteSpace:'nowrap', flex:'none' } }, 'Ver detalhes →'))
      )
    );
  }
  renderDirecGroup(g) {
    return this.el('section', { key:g.id },
      this.el('div', { style:{ marginBottom:14 } },
        this.el('div', { style:{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap' } },
          this.el('span', { style:{ width:13, height:13, borderRadius:999, background:g.color, flex:'none' } }),
          this.el('h2', { style:{ margin:0, fontSize:23, fontWeight:800, letterSpacing:'-0.02em', color:'var(--ink)' } }, g.dirLabel),
          g.primary ? this.el('span', { style:{ display:'inline-flex', alignItems:'center', gap:5, fontSize:10.5, fontWeight:800, letterSpacing:'.02em', color:'var(--white)', background:'var(--grad-cta)', borderRadius:999, padding:'4px 11px', boxShadow:'var(--shadow-brand)' } },
            this.el('svg', { width:12, height:12, viewBox:'0 0 24 24', fill:'currentColor' }, this.el('path', { d:'M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 7.1-1.01L12 2z' })),
            g.primaryLabel) : null,
          this.el('span', { style:{ fontSize:11, fontWeight:700, color:'var(--gray-500)', background:'var(--gray-100)', borderRadius:999, padding:'3px 10px' } }, g.etapa),
          this.el('span', { style:{ fontSize:12, fontWeight:700, color:'var(--gray-400)' } }, g.countLabel)),
        this.el('p', { style:{ margin:'9px 0 0', fontSize:13.5, color:'var(--gray-600)', lineHeight:1.5, maxWidth:580 } }, g.purpose)),
      this.el('div', { style:{ marginBottom:18, background:'var(--gray-100)', borderRadius:13, padding:'11px 16px', display:'flex', alignItems:'center', gap:20, flexWrap:'wrap' } },
        this.el('span', { style:{ fontSize:9.5, fontWeight:800, letterSpacing:'.06em', textTransform:'uppercase', color:'var(--gray-400)', flex:'none', lineHeight:1.3, maxWidth:80 } }, 'Campanha recomendada'),
        this.el('div', { style:{ flex:1, minWidth:240, display:'flex', flexWrap:'wrap', alignItems:'baseline', gap:'8px 30px' } },
          this.platItem('META', '#1877F2', g.plat.meta),
          this.platItem('GOOGLE', '#188038', g.plat.google),
          this.platItem('YOUTUBE', '#CC0000', g.plat.youtube),
          this.platItem('KPI', 'var(--brand-purple)', g.plat.kpi))),
      this.el('div', { style:{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(330px, 1fr))', gap:18 } }, g.videos.map((v) => this.renderDirecCard(v)))
    );
  }
  renderModal(mv) {
    const V = this;
    return this.el('div', { onClick:()=>this.closeVideo(), style:{ position:'fixed', inset:0, background:'rgba(21,21,21,.5)', zIndex:90, animation:'solFadeIn .2s var(--ease-out)' } },
      this.el('div', { onClick:(e)=>{ if(e&&e.stopPropagation) e.stopPropagation(); }, style:{ position:'absolute', top:0, right:0, bottom:0, width:'90vw', maxWidth:1500, background:'var(--white)', boxShadow:'-30px 0 80px rgba(21,21,21,.22)', display:'flex', flexDirection:'column', animation:'solDrawerIn .3s var(--ease-out)', overflow:'hidden' } },
        this.el('div', { style:{ flex:'none', display:'flex', alignItems:'center', justifyContent:'space-between', gap:14, padding:'16px 22px', borderBottom:'1px solid var(--gray-150)' } },
          this.el('div', { style:{ display:'flex', alignItems:'center', gap:10, minWidth:0, flexWrap:'wrap' } },
            this.el('span', { style:{ width:11, height:11, borderRadius:999, background:mv.color, flex:'none' } }),
            this.el('span', { style:{ fontSize:13, fontWeight:800, letterSpacing:'.02em', textTransform:'uppercase', color:mv.color } }, mv.dirLabel),
            this.el('span', { style:{ fontSize:12, fontWeight:600, color:'var(--gray-400)' } }, '· ' + mv.etapa),
            this.el('span', { style:{ fontSize:10, fontWeight:800, padding:'3px 8px', borderRadius:999, background:mv.funcaoBg, color:mv.funcaoFg } }, mv.funcao)),
          this.el('button', { type:'button', onClick:()=>this.closeVideo(), title:'Fechar', style:{ width:34, height:34, flex:'none', border:'none', borderRadius:10, background:'var(--gray-100)', cursor:'pointer', color:'var(--gray-600)', display:'inline-flex', alignItems:'center', justifyContent:'center' } },
            this.el('svg', { width:17, height:17, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:2, strokeLinecap:'round' }, this.el('path', { d:'M6 6l12 12M18 6L6 18' })))),
        this.el('div', { style:{ flex:'none', padding:'17px 22px', borderBottom:'1px solid var(--gray-150)', borderLeft:'4px solid ' + mv.color } },
          this.el('div', { style:{ display:'flex', alignItems:'center', gap:6, marginBottom:6 } },
            this.el('svg', { width:15, height:15, viewBox:'0 0 24 24', fill:'none', stroke:mv.color, strokeWidth:2, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('circle', { key:1, cx:12, cy:12, r:9 }), this.el('circle', { key:2, cx:12, cy:12, r:4.5 })),
            this.el('span', { style:{ fontSize:11, fontWeight:800, letterSpacing:'.06em', textTransform:'uppercase', color:mv.color } }, 'Objetivo do vídeo')),
          this.el('h2', { style:{ margin:0, fontSize:21, fontWeight:800, letterSpacing:'-0.02em', color:'var(--ink)', lineHeight:1.3 } }, mv.objetivo)),
        this.el('div', { style:{ flex:1, minHeight:0, display:'flex' } },
          this.el('div', { className:'solu-scroll', style:{ flex:'none', width:440, maxWidth:'42%', overflowY:'auto', padding:'20px 22px' } },
            mv.embedUrl ? this.el('div', { style:{ position:'relative', width:'100%', aspectRatio:'16/9', background:'#000', borderRadius:14, overflow:'hidden', boxShadow:'var(--shadow-md)' } },
              this.el('iframe', { src:mv.embedUrl, allow:'autoplay; encrypted-media; fullscreen', allowFullScreen:true, style:{ position:'absolute', inset:0, width:'100%', height:'100%', border:'none' } })) :
              this.el('div', { style:{ position:'relative', width:'100%', aspectRatio:'16/9', borderRadius:14, overflow:'hidden', boxShadow:'var(--shadow-md)', background:mv.posterBg, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', textAlign:'center', padding:16 } },
                this.el('div', {}, this.el('div', { style:{ fontSize:30, marginBottom:6 } }, '▶'), this.el('div', { style:{ fontSize:13, fontWeight:700, opacity:.92 } }, 'Sem vídeo vinculado'))),
            (mv.links && mv.links.length) ? this.el('div', { style:{ display:'flex', gap:9, flexWrap:'wrap', marginTop:14 } }, mv.links.map((link, i) =>
              this.el('a', { key:i, href:link.url, target:'_blank', rel:'noopener', style:{ display:'inline-flex', alignItems:'center', gap:7, background:'var(--ink)', color:'var(--white)', textDecoration:'none', borderRadius:999, padding:'9px 15px', fontSize:12.5, fontWeight:700 } },
                this.el('svg', { width:14, height:14, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.8, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('path', { key:1, d:'M14 4h6v6' }), this.el('path', { key:2, d:'M20 4l-9 9' }), this.el('path', { key:3, d:'M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6' })), link.label))) : null,
            this.el('div', { style:{ display:'flex', gap:7, flexWrap:'wrap', marginTop:16 } },
              this.el('span', { style:{ display:'inline-flex', alignItems:'center', gap:5, fontSize:11, fontWeight:700, color:'var(--gray-600)', background:'var(--gray-100)', borderRadius:999, padding:'5px 11px' } },
                this.el('svg', { width:13, height:13, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.8, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('rect', { key:1, x:2, y:6, width:14, height:12, rx:2.5 }), this.el('path', { key:2, d:'M16 10l6-3.5v11L16 14' })), mv.estilo),
              this.el('span', { style:{ display:'inline-flex', alignItems:'center', gap:5, fontSize:11, fontWeight:700, color:'var(--gray-600)', background:'var(--gray-100)', borderRadius:999, padding:'5px 11px' } },
                this.el('svg', { width:13, height:13, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.8, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('circle', { key:1, cx:9, cy:8, r:3.2 }), this.el('path', { key:2, d:'M3.5 20a5.5 5.5 0 0 1 11 0' }), this.el('path', { key:3, d:'M16 5.5a3 3 0 0 1 0 5.8' }), this.el('path', { key:4, d:'M19.5 20a5 5 0 0 0-3-4.4' })), mv.publico)),
            this.el('div', { style:{ marginTop:20 } },
              this.el('div', { style:{ fontSize:11.5, fontWeight:800, letterSpacing:'.04em', textTransform:'uppercase', color:'var(--ink)', marginBottom:9 } }, 'Análise do vídeo'),
              this.el('p', { style:{ margin:0, fontSize:13.5, color:'var(--gray-600)', lineHeight:1.65 } }, mv.resumo)),
            mv.flagText ? this.el('div', { style:{ display:'flex', gap:8, alignItems:'flex-start', background:'var(--tint-yellow)', borderRadius:12, padding:'11px 13px', marginTop:14 } },
              this.el('svg', { width:16, height:16, viewBox:'0 0 24 24', fill:'none', stroke:'#9a6b00', strokeWidth:1.9, strokeLinecap:'round', strokeLinejoin:'round', style:{ flex:'none', marginTop:1 } }, this.el('path', { key:1, d:'M12 9v4' }), this.el('path', { key:2, d:'M12 17h.01' }), this.el('path', { key:3, d:'M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z' })),
              this.el('span', { style:{ fontSize:12, fontWeight:600, color:'#7a5200', lineHeight:1.45 } }, mv.flagText)) : null,
            this.el('div', { style:{ marginTop:22 } },
              this.el('div', { style:{ fontSize:11.5, fontWeight:800, letterSpacing:'.04em', textTransform:'uppercase', color:'var(--ink)', marginBottom:11 } }, 'Onde anunciar'),
              this.platRows(mv.plat))),
          this.el('div', { className:'solu-scroll', style:{ flex:1, minWidth:0, overflowY:'auto', padding:'20px 24px 32px', background:'var(--surface-app)', borderLeft:'1px solid var(--gray-150)' } },
            this.el('div', { style:{ display:'flex', alignItems:'center', gap:8, marginBottom:13 } },
              this.el('span', { style:{ fontSize:11.5, fontWeight:800, letterSpacing:'.04em', textTransform:'uppercase', color:'var(--ink)' } }, 'Transcrição completa'),
              this.el('span', { style:{ flex:1, height:1, background:'var(--gray-200)' } })),
            this.el('div', { style:{ background:'var(--white)', border:'1px solid var(--gray-150)', borderRadius:16, padding:'24px 26px', fontSize:14.5, color:'#3d3d3d', lineHeight:1.85, whiteSpace:'pre-wrap' } }, mv.transcricao || 'Transcrição ainda não adicionada.'))
        )
      )
    );
  }
  render() {
    const V = this.renderVals();
    return this.el('div', { style:{ position:'fixed', inset:0, display:'flex', flexDirection:'column', fontFamily:'var(--font-sans)', color:'var(--ink)', background:'var(--surface-app)', letterSpacing:'var(--tracking-tight)' } },
      this.el('div', { style:{ height:62, flex:'none', display:'flex', alignItems:'center', gap:16, padding:'0 22px', background:'var(--white)', borderBottom:'1px solid var(--gray-200)', zIndex:40 } },
        this.el('div', { style:{ display:'flex', alignItems:'center', gap:11, flex:'none' } },
          this.brandMark(30),
          this.el('div', { style:{ display:'flex', alignItems:'center', gap:11 } },
            this.el('div', { style:{ fontWeight:800, fontSize:17, letterSpacing:'-0.02em', whiteSpace:'nowrap', color:'var(--ink)' } }, 'ADS Solutudo'),
            this.el('div', { style:{ fontSize:11, color:'var(--gray-500)', fontWeight:600, borderLeft:'1px solid var(--gray-200)', paddingLeft:11, whiteSpace:'nowrap' } }, 'tráfego pago · análise de criativos'))),
        this.el('div', { style:{ flex:'none' } }, V.modeToggle),
        this.el('div', { style:{ flex:1, minWidth:0, display:'flex', justifyContent:'flex-end' } }, V.headerRight)),
      this.el('div', { style:{ flex:'none', zIndex:30 } }, V.subbar),
      this.el('div', { style:{ flex:1, position:'relative', overflow:'hidden' } },
        V.isDirec ? this.el('div', { className:'solu-scroll', style:{ position:'absolute', inset:0, overflowY:'auto', padding:'26px 34px 128px' } },
          this.el('div', { style:{ width:'100%', display:'flex', flexDirection:'column', gap:38 } }, V.groups.map((g) => this.renderDirecGroup(g)))) : null,
        V.isFunil ? this.el(React.Fragment, {}, V.canvas, V.panel) : null),
      V.footerDock,
      V.modalOpen ? this.renderModal(V.mv) : null,
      V.overlays
    );
  }


  // ---- geometry ----
  CX = 1500; CY = 1500; RJ = 340; FDX = 3100;
  // ---- flow grid (left→right: gatilho → anúncio → vídeo → destino) ----
  FL = { railX:170, colGat:540, colAnu:990, colVid:1460, colDst:1940, headerY:84, laneTop:150, laneGap:56, funnelGap:160, funnelHeaderH:96, worldW:2240, nodeHalf:103 };

  // ---- 8 jornadas / destinos ----
  // Os DOIS FUNIS PRINCIPAIS (básicos) vêm primeiro: WhatsApp/bot e VSL/high ticket.
  journeys = [
    { id:'whatsapp',    label:'WhatsApp',    dirLabel:'WhatsApp / bot',       etapa:'Fundo',       color:'#16A34A', ghost:'Chamada para o WhatsApp / diagnóstico',
      primary:1, primaryLabel:'Funil principal 1 · básico',
      purpose:'FUNIL PRINCIPAL 1 (básico). Tráfego direto para o WhatsApp: o bot atende e DECIDE o caminho — HIGH (agenda a call com consultor) ou LOW (venda automática). Não é checkout direto.',
      plat:{ meta:'Engajamento → Cliques no WhatsApp / Mensagens.', google:'Search (secundário).', youtube:'Vídeo de ação c/ link.', kpi:'Conversas iniciadas, qualificação high/low' } },
    { id:'vsl',         label:'VSL',         dirLabel:'VSL / High ticket',    etapa:'Fundo',       color:'#DC2626', ghost:'VSL de oferta (high ticket)',
      primary:2, primaryLabel:'Funil principal 2 · básico',
      purpose:'FUNIL PRINCIPAL 2 (básico). Tráfego para a landing page com VSL → formulário → agendamento da call de high ticket. Público morno/quente.',
      plat:{ meta:'Vendas (Conversões) otimizando Agendamento. Mornos/quentes.', google:'PMax + Search + Demand Gen.', youtube:'In-stream longo + Vídeo de ação.', kpi:'Agendamentos, show-up, CAC' } },
    { id:'atracao',     label:'Atração',     dirLabel:'Atração',              etapa:'Topo',        color:'#7C3AED', ghost:'Vídeo de dor / gancho (rosto em pé)',
      purpose:'Gerar alcance e parar o scroll com público frio — explicar o problema, sem pedir a venda.',
      plat:{ meta:'Reconhecimento / Engajamento (vídeo). Públicos frios.', google:'Demand Gen.', youtube:'In-stream pulável + Bumper 6s + Shorts.', kpi:'VTR, CPV, retenção' } },
    { id:'confianca',   label:'Confiança',   dirLabel:'Confiança',           etapa:'Topo',        color:'#D97706', ghost:'Prova social / bastidores (20 anos)',
      purpose:'Construir autoridade e prova (20 anos, cases) para aquecer quem já teve contato.',
      plat:{ meta:'Tráfego / Engajamento p/ mornos.', google:'Demand Gen remarketing.', youtube:'In-stream (rosto sentado) + In-feed.', kpi:'Tempo de visualização, cliques' } },
    { id:'cadastro',    label:'Cadastro grátis', dirLabel:'Cadastro grátis', etapa:'Meio',        color:'#059669', ghost:'Demonstração do cadastro grátis',
      purpose:'Converter em cadastro grátis com baixa fricção — CTA direto de cadastro.',
      plat:{ meta:'Cadastros (Leads) — form instantâneo ou conversão no site.', google:'Search (intenção) + PMax.', youtube:'Vídeo de ação com CTA cadastro.', kpi:'CPL, taxa de cadastro' } },
    { id:'live',        label:'Live / Evento', dirLabel:'Live / Evento',     etapa:'Meio',        color:'#9333EA', ghost:'Convite para a live / evento',
      purpose:'Encher a sala da live / evento e gerar lista para remarketing de lembrete.',
      plat:{ meta:'Tráfego p/ inscrição → remarketing de lembrete.', google:'Demand Gen + YouTube promo.', youtube:'In-stream + comunidade.', kpi:'Inscritos, comparecimento' } },
    { id:'anuncie',     label:'Anuncie',     dirLabel:'Anuncie / Low ticket', etapa:'Fundo',       color:'#EA580C', ghost:'Comunicado de oferta (low ticket)',
      purpose:'Vender a oferta de entrada (low ticket) com preço e benefício direto.',
      plat:{ meta:'Vendas (Conversões) otimizando compra.', google:'Search (alta intenção) + PMax.', youtube:'Vídeo de ação (remarketing).', kpi:'Vendas, ROAS, CPA' } },
    { id:'remarketing', label:'Remarketing', dirLabel:'Remarketing',         etapa:'Remarketing', color:'#0369A1', ghost:'Lembrete / quebra de objeção',
      purpose:'Reativar quem não converteu e quebrar objeção. Não usar no frio.',
      plat:{ meta:'Público personalizado: viram vídeo, engajaram, visitaram.', google:'Display / Demand Gen remarketing + RLSA.', youtube:'In-feed / In-stream p/ listas.', kpi:'ROAS, frequência, CPA' } },
  ];

  defaultFunnels = [
    { id:'solutudo', name:'Funil Solutudo', desc:'Aquisição de empresários · Botucatu e região' },
    { id:'x',        name:'Funil X',        desc:'Em estruturação' },
    { id:'y',        name:'Funil Y',        desc:'Em estruturação' },
  ];

  seedCards() {
    const base = { funnelId:'solutudo', funcao:'AD', status:'existe', plataforma:'Meta', formato:'', iaParecer:'', iaRec:'', segmentacao:'', estiloPorque:'', kpi:'', cta:'', proximo:'', dx:0, dy:0 };
    return [
      Object.assign({}, base, { id:'c1', journeyId:'whatsapp', etapa:'Topo', name:'Problema do tráfego pago / IA',
        pubTemp:'Frio', pubSeg:'Frio (faz/considera tráfego pago)', publico:'Frio (faz/considera tráfego pago)', estilo:'Storytelling',
        driveId:'1yySUEMhADXym9TIv0wWEBi_n-wkHjv7x',
        objetivo:'Conscientizar sobre o erro do tráfego pago → diagnóstico (WhatsApp/bot)',
        resumo:`Metáfora "cobertura × fundação": investir em tráfego sem cuidar do básico (site, Google, Instagram, guias) é erro. CTA de diagnóstico ("como sua empresa está") — não é venda direta. Ideal Click-to-WhatsApp; bot roteia high (call) ou low (automático). NÃO usar como checkout direto.`,
        transcricao:`Sabe qual o maior erro das empresas que clicam em impulsionar ou fazem tráfego pago cometem um digital? É porque tráfego pago impulsionamento, ou seja, você ir buscar mais clientes, tem a ver com a cobertura do prédio. É legal. A cobertura é um dos lugares mais caros, inclusive do prédio. O problema é que a fundação às vezes está errada. E o que acontece? A pessoa vê seu anúncio, vai dar uma olhadinha no seu site que não existe ou tá desatualizado. Ela vê seu anúncio, vai ver o seu Google e ver lá avaliações não respondidas e pensa: "Pô, se ele não tem tempo nem de responder quem elogia, imagine quem critica". Ela vê o seu anúncio e vai dar uma olhadinha no seu Instagram e vê que a última atualização faz 15 anos mais ou menos, né? Ela vê a sua avaliação, vai num guia, por exemplo, a Solutudo, tenta encontrar tua informação e não encontra nada. Então o que a Solutudo faz é ajudar você ser escolhido, não evitando que você faça tráfego pago ou impulsionamento ou coisa do tipo, mas garantindo que o que as pessoas consultam quando um anúncio aparece esteja em dia. Aliás, se você também quer ser indicado pelas inteligências artificiais, lembra que as inteligências artificiais não compram propaganda, elas compram confiança, elas compram esses canais que muitas vezes estão abandonados enquanto a gente tá fazendo tráfego pago e coisas do tipo. Deixa a gente ajudar a arrumar a fundação da sua empresa, fazer com que o básico, o arroz com feijão do digital, que te faz sair fora de 90% das consultas que as pessoas fazem sobre o negócio, esteja em dia, esteja bem, clica aqui, a gente vai te explicar como é que sua empresa tá, onde ela pode chegar e como é que faz. E a gente pode te ajudar, assim como a gente faz para mais de 3.000 empresas há mais de 20 anos.` }),
      Object.assign({}, base, { id:'c2', journeyId:'remarketing', etapa:'Meio', name:'Dá pra confiar na Solutudo?',
        pubTemp:'Morno', pubSeg:'Morno (já viu c1/c3, não converteu)', publico:'Morno (já viu c1/c3, não converteu)', estilo:'Rosto sentado (~4min)',
        driveId:'1uGZakTe0Jnu7FmQRBa8CEeA40W2fV5KN',
        objetivo:'Quebrar objeção de confiança (remarketing de aquecimento)',
        resumo:`Sem CTA de produto — 100% quebra de objeção. Provas: desde 2005, topo Reclame Aqui, 3.000+ clientes, Exame/Estadão, Sebrae 10 anos, sem multa, telefone do dono, parceiros há 20 anos. NÃO usar no frio. Próximo passo na sequência: c1 ou c11 → WHATSAPP/VSL.`,
        transcricao:`Gostei, achei interessante, mas será que dá para confiar nessa Solutudo? Vou te ajudar com algumas informações importantes aqui. Primeira delas, a Solutudo existe desde 2005. Nesse caso eu tinha cabelo ainda, né? Já perdeu todos os fios aqui no passar do tempo e acho que isso já é por si só uma prova de que ninguém resiste há tanto tempo se não tiver fazendo um trabalho com mínimo de coerência de estrutura e assim por diante. Então o tempo acho que é um ponto muito importante. Segundo ponto, hoje nós temos o topo das notas do Reclame Aqui, porque a Solutudo atende 4 milhões de pessoas todos os meses, já tem mais de 3.000 clientes. [...] A Solutudo não tem multa de cancelamento. Se você for ficar, você fica porque você acredita no nosso trabalho e quer continuar com a gente. [...] nós temos dezenas de parceiros conosco há mais de 20 anos. [...] Espero que a gente possa ajudar a sua empresa a ser escolhida também com confiabilidade, tranquilidade e facilidade. É isso que a gente quer. Solutudo de bom.` }),
      Object.assign({}, base, { id:'c3', journeyId:'atracao', etapa:'Topo', name:'Afinal, o que é Solutudo?',
        pubTemp:'Frio', pubSeg:'Frio', publico:'Frio', estilo:'Storytelling institucional',
        driveId:'1SGfzOApCckIztNkH8yU5_wRCyaK-0Go3', status:'confirmar',
        flag:'Sem destino explícito — definir botão/overlay na plataforma antes de rodar. Destino natural = Cadastro grátis.',
        objetivo:'Explicar o que é a Solutudo — awareness institucional (sem destino explícito)',
        resumo:`Dual mission: ajuda pessoas a escolherem + empresas a serem escolhidas. "Não é marketing digital, é verdade digital." CTA: "Vem com a gente, Solutudo de bom" — SEM destino explícito. ATENÇÃO: precisa de botão/overlay na plataforma antes de rodar. Destino natural = CADASTRO grátis.`,
        transcricao:`Mas afinal, o que é Solutudo? Ou como a gente costuma ouvir às vezes, "solo o quê?" Basicamente a Solutudo tem duas missões que podem ter a ver com você. De um lado, a gente ajuda as pessoas escolherem empresas, prestadores de serviço, resolverem seus problemas no dia a dia. Do outro lado, nós ajudamos prestadores de serviço, empresas a serem escolhidos. [...] Solutudo não trabalha com marketing digital, a gente trabalha com verdade digital. [...] o marketing digital é hoje o caminho principal para 90% das pessoas ao escolherem uma empresa. Então mesmo quem vive de indicação perde clientes por não estar no marketing digital. [...] Vem com a gente, solo tudo de bom.` }),
      Object.assign({}, base, { id:'c4', journeyId:'whatsapp', etapa:'Meio/Fundo', name:'Menos de R$1 por dia',
        pubTemp:'Frio', pubSeg:'Frio/Morno', publico:'Frio/Morno', estilo:'Rosto em pé — agitação de dor',
        driveId:'1TzMwo5bKT-uk8t-lxqrhjd6dgolGKRa1',
        objetivo:'Agitar dor de invisibilidade digital → consulta pelo bot (WhatsApp)',
        resumo:`"Você tem que aparecer no Google, Instagram, Solutudo, criar conteúdo, atualizar sempre…" — agita a dor. "Melhor lugar p/ esconder o corpo: 2ª página do Google." CTA: "vai te EXPLICAR como fazer" (consultivo, não checkout). DUAL-PATH: bot WhatsApp fecha low ticket ou sobe p/ consultor (high). Alternativa: página ANUNCIE.`,
        transcricao:`Você tem que aparecer no Google, você tem que aparecer no Instagram, você tem que aparecer na Solutudo, tem que aparecer aqui, ali, ali. Você tem que cuidar das suas fotos, atualizar, colocar o seu texto, fazer essas coisas acontecerem e também atualizar e criar conteúdo toda vez, porque se você não criar conteúdo aí, ah, não te acha, o Google também não te vê, você vai caindo na indexação. O melhor lugar para esconder o corpo é na segunda página do Google e talvez a sua empresa esteja lá. Pois é, a gente pode te ajudar. A Solutudo faz isso há mais de 20 anos para mais de 3.000 empresas de uma maneira muito simplificada. Você nos diz quem você é, nos diz o que você faz, nos diz como você faz e a gente cuida disso para você. Você cuida do seu negócio e a gente ajuda você a aparecer no processo de escolha do seu cliente. Clica aqui que a gente vai te explicar como é que a gente pode fazer isso com um investimento que pode partir de R$ 1 por dia.` }),
      Object.assign({}, base, { id:'c5', journeyId:'cadastro', etapa:'Meio', name:'Cadastro gratuito (bastidor/UGC)',
        pubTemp:'Frio', pubSeg:'Frio', publico:'Frio', estilo:'Bastidor / espontâneo (UGC)',
        driveId:'18VBeH5XtFGJnbHF1J3ozAmGKf6qP96Bd',
        objetivo:'Cadastro gratuito — espontâneo e autêntico (sem cara de anúncio)',
        resumo:`"Tá gravando já?" — formato bastidor sem olhar p/ câmera. 4 mi acessam/mês procurando prestadores. Cadastro é grátis, rápido, tem botão. Estilo UGC tira a "cara de anúncio" e ganha confiança no frio.`,
        transcricao:`Tá gravando já? Eu já é porque eu precisava falar para a galera que tem o lance do cadastro gratuito, né? Porque geralmente quando o pessoal olha Solutudo sabe que tem 4 milhões de pessoas acessando que procuram prestador de serviço, marceneiro, jardineiro, tudo quanto é serviço que você imaginar que as pessoas procuram na Solutudo e a pessoa podia estar cadastrada na Solutudo de graça. O cara que tem um negócio, coisa do tipo, ele podia ir lá se cadastrar. É rápido, é clica ali, tem cadastro grátis, geralmente tem um botão aparecendo, o senhor coloca o cadastro e já começa a poder aparecer gratuitamente. Nesse mundo, tudo custa; cadastrar sua empresa de graça, onde 4 milhões de pessoas procuram, devia ser algo que a gente não podia deixar passar batida. E eu preciso pensar como é que eu vou gravar isso?` }),
      Object.assign({}, base, { id:'c6', journeyId:'cadastro', etapa:'Meio', name:'Cadastro grátis — último mês',
        pubTemp:'Frio', pubSeg:'Frio', publico:'Frio', estilo:'Rosto em pé — urgência/prova de volume',
        driveId:'1vVzNi_QWlVYNeZhvdtCDjyzRZi6I_EDX',
        objetivo:'Cadastro gratuito — urgência + prova de volume (4 mi/mês)',
        resumo:`"Só no último mês, +4 mi entraram p/ procurar empresas/prestadores locais." Pergunta-gatilho: você estava lá? Cadastro é gratuito e rápido. CTA direto: clica e cadastre.`,
        transcricao:`Só no último mês, mais de 4 milhões de pessoas entraram nessa plataforma aqui que eu tô mostrando para você tudo para procurar empresas, prestadores de serviço, empresas locais, quem resolve problema na cidade. E qual o problema? O problema é que você tava lá ou não? Porque procuraram pelo que você faz. E mais legal ainda, o cadastro na Solutudo é gratuito e vai que você ainda não sabia. Então clica aqui, cadastre. É muito rápido e permita que as pessoas que estão procurando solução que você tem, problema que você resolve, possam te encontrar.` }),
      Object.assign({}, base, { id:'c7', journeyId:'cadastro', etapa:'Meio', name:'Cadastro grátis — variação',
        pubTemp:'Frio', pubSeg:'Frio', publico:'Frio', estilo:'Rosto em pé — variação + upsell',
        driveId:'1YCoByAHY6SAry_xDy3YHghCd2vEKFtek',
        objetivo:'Cadastro gratuito + semente de upsell para plano pago',
        resumo:`Variação do c6. Diferencial: termina com semente de upsell — "se quiser MELHORAR seu cadastro, aí é outra história" — planta a ideia do plano pago sem forçar. Quem converte aqui entra no remarketing ANUNCIE/WHATSAPP low ticket.`,
        transcricao:`No último mês, mais de 4 milhões de pessoas entraram nessa plataforma aqui, ó, para procurar produtos, serviços, prestadores de serviços, como você, donos de empresas, empresas que resolvem problemas na cidade. E a pergunta que eu te deixo é: sua empresa já tá cadastrada aqui na Solutudo? Porque se não tiver, saiba, é um erro, porque o cadastro é gratuito. É só clicar aqui, cadastrar sua empresa e você começa a existir na hora que essas pessoas estão procurando por aquilo que você faz de graça. E se você quiser melhorar seu cadastro, aí é uma outra história.` }),
      Object.assign({}, base, { id:'c11', journeyId:'vsl', etapa:'Meio/Fundo', name:'Olha no meu olho (longo)',
        pubTemp:'Morno', pubSeg:'Morno', publico:'Morno', estilo:'Rosto sentado — VSL/empatia (~3min)',
        driveId:'1aAoG0TbYZW4jj6E7nwie-cFSO7kB4ooZ',
        objetivo:'Agendar reunião gratuita → high ticket (call com consultor)',
        resumo:`Empatia profunda com o pequeno empresário. Arco: dor (correria, sem tempo pro digital) → conscientização (90% decidem online, "curtida não paga boleto") → CTA de REUNIÃO GRATUITA com análise. É high ticket. Sequência: c1/c2 (aquecimento) → c11 → agendamento / WhatsApp p/ marcar call. NÃO usar no frio.`,
        transcricao:`Olha bem no meu olho. Eu sei como é ter uma pequena empresa. Não é fácil. Não é fácil bater escanteio, correr na área, comprar, vender. Eu costumo dizer, pega o CEO de uma grande empresa, coloca ele para tocar uma padaria, comprar, vender, trocar o estoque, tirar o bêbado que tá ali enchendo o saco. E pior, ainda vão falar para ele que ele tem que estar no Instagram, que ele tem que tá no YouTube, que ele tem que tá no Google. [...] 90% das pessoas acabam escolhendo no digital e a gente na correria às vezes não dá tempo de estar lá. [...] se você percebe verdade no que eu tô te falando, mas também tem medo de errar, porque já fez um monte de opções aí que não levaram a nada, descobriu que não dá para chegar lá no banco com curtida e pagar boleto, né? [...] a gente consegue te explicar onde você tá, um plano para você gratuitamente com uma reunião. Na reunião, você avalia se o que a gente pode fazer para você pode ou não te ajudar. Investimentos que são muito, mas muito acessíveis e menores do que o tanto que a gente perde por não existir na hora que as pessoas procuram o que a gente faz. Então, deixa a gente te ajudar. Valeu.` }),
      Object.assign({}, base, { id:'c13', journeyId:'cadastro', etapa:'Meio', name:'Cadastro — construção civil',
        pubTemp:'Frio', pubSeg:'Construção civil', publico:'Construção civil', estilo:'Comunicado segmentado',
        driveId:'1oQYb7qI1eV11Mp1en6KQj04Ng7DvJ8w3', avoz:'https://avoz.solutudo.com.br/videos/1050101',
        objetivo:'Cadastro gratuito — segmento construção civil',
        resumo:`"Comunicado às empresas de construção civil." Tom de aviso direto cria pertencimento. Cobre pedreiro, jardineiro, pintor, encanador, mecânico, construtor. 4 mi acessos/mês. CTA: cadastre agora gratuitamente no "maior guia de empresas do Brasil".`,
        transcricao:`Comunicado às empresas de construção civil. Não importa se você é pedreiro, jardineiro, pintor, encanador, mecânico, construtor, não importa. Existe um portal no Brasil que tem mais de 4 milhões de acessos por mês de pessoas procurando por tudo que você imaginar, inclusive o que a sua empresa faz. Esse portal permite que você tenha um cadastro gratuito nele. Exatamente. Exista nesse portal gratuitamente. É isso que eu gostaria de convocar você a fazer agora, porque se a sua empresa ainda não tá cadastrada na Solutudo, o maior guia de empresas do Brasil, você tá perdendo tempo, porque o cadastro é gratuito, tem gente procurando cartão de visita igual o teu e você provavelmente não está lá. Clica aqui e faça seu cadastro agora.` }),
    ];
  }

  seedFlowNodes() {
    const b = { funnelId:'solutudo', dx:0, dy:0, resumo:'' };
    return [
      Object.assign({}, b, { id:'fx1', kind:'meta', journeyId:'cadastro', etapa:'Meio', funcao:'AD', plataforma:'Meta', status:'confirmar', name:'Anúncio Meta — Cadastro grátis', objetivo:'Levar o clique ao cadastro grátis (LP)', metaHeadline:'Cadastre sua empresa grátis', metaPrimary:'Sua empresa aparece quando 4 milhões de pessoas procuram? O cadastro na Solutudo é grátis e leva menos de 1 minuto.', metaDesc:'O maior guia de empresas do Brasil', metaCTA:'Cadastre-se', metaFormat:'9:16 (Reels/Stories) + 1:1 (Feed)', metaAudience:'Frio — donos de empresa e autônomos, por região' }),
      Object.assign({}, b, { id:'fx2', kind:'pagina', journeyId:'cadastro', etapa:'Meio', funcao:'PG', plataforma:'LP', status:'existe', name:'Página — Cadastro grátis (LP)', objetivo:'Converter o clique do anúncio em cadastro', pgUrl:'solutudo.com.br/cadastre-gratis', pgHeadline:'Cadastre grátis sua empresa no maior guia do Brasil', pgSubhead:'4 milhões de pessoas por mês procurando empresas locais. Apareça também nas IAs: Google, ChatGPT, Gemini.', pgOferta:'Cadastro gratuito · planos a partir de R$ 29,90/mês', pgSecoes:'Hero + busca · Prova social (20 anos, 3.000+ clientes) · Como funciona · Planos · FAQ · CTA de cadastro', pgCTA:'Cadastrar empresa grátis' }),
      Object.assign({}, b, { id:'fx3', kind:'whatsapp', journeyId:'whatsapp', etapa:'Fundo', funcao:'PG', plataforma:'WhatsApp', status:'existe', name:'WhatsApp — Diagnóstico (bot)', objetivo:'Diagnóstico 1:1 e roteamento high/low — não é checkout direto', waEntrada:'Clique no anúncio (Click-to-WhatsApp) — c1 / c4', waAbertura:'Oi! Posso te mostrar como sua empresa está sendo encontrada (Google, Instagram, guias) e onde dá para melhorar? Me responde 3 perguntas rápidas.', waRoteamento:'HIGH (call com consultor): fatura maior ou quer high ticket → agenda reunião. LOW (automático): quer começar grátis ou low ticket → manda link de cadastro e oferta de entrada.', waProximos:'HIGH → VSL / agendamento. LOW → Cadastro grátis / Anuncie (low ticket).', waLink:'wa.me/55 (número Solutudo)' }),
      Object.assign({}, b, { id:'fx4', kind:'pagina', journeyId:'vsl', etapa:'Fundo', funcao:'PG', plataforma:'LP', status:'confirmar', name:'Página — Reunião / VSL', objetivo:'Agendar a call de high ticket', pgUrl:'solutudo.com.br/reuniao', pgHeadline:'Uma reunião gratuita para colocar sua empresa onde as pessoas procuram', pgSubhead:'Análise do seu digital e um plano. Sem compromisso.', pgOferta:'Reunião gratuita → high ticket', pgSecoes:'VSL (c11) · Dores do pequeno empresário · O que você recebe · Provas · Agendar', pgCTA:'Agendar reunião gratuita' }),
      Object.assign({}, b, { id:'fx5', kind:'meta', journeyId:'whatsapp', etapa:'Fundo', funcao:'AD', plataforma:'Meta', status:'confirmar', name:'Anúncio Meta — Diagnóstico', objetivo:'Iniciar conversa no WhatsApp (diagnóstico)', metaHeadline:'Como sua empresa está sendo encontrada?', metaPrimary:'O maior erro de quem faz tráfego pago: investir na cobertura com a fundação errada. Clica que eu te explico como sua empresa está.', metaDesc:'Diagnóstico gratuito no WhatsApp', metaCTA:'Enviar mensagem', metaFormat:'9:16 · 30–60s', metaAudience:'Frio/Morno — faz ou considera tráfego pago' }),
    ];
  }

  // Vídeo que vive DENTRO da página da VSL (PG). Provisório: usa o c11 para não
  // travar o funil; traz o roteiro ordenado da VSL definitiva a gravar.
  vslPgCard() {
    return {
      id:'vslpg', funnelId:'solutudo', journeyId:'vsl', etapa:'Fundo', funcao:'PG',
      name:'Vídeo da página VSL (provisório)', plataforma:'LP', status:'confirmar',
      pubTemp:'Morno', pubSeg:'Morno/Quente', publico:'Morno/Quente', estilo:'VSL',
      formato:'16:9 ou 1:1 · 3–20 min', dx:0, dy:0,
      driveId:'1aAoG0TbYZW4jj6E7nwie-cFSO7kB4ooZ',
      objetivo:'Vídeo dentro da página da VSL — conduzir do problema até o agendamento da call (high ticket)',
      flag:'PROVISÓRIO — usando o c11 no lugar até gravar a VSL definitiva. Não é o vídeo ideal da página.',
      estiloPorque:'Rosto sentado, olho no olho, ritmo controlado — sustenta um vídeo longo de decisão (high ticket).',
      cta:'Agendar reunião gratuita (formulário da página)',
      proximo:'Gravar a VSL completa e substituir o c11',
      iaParecer:'nao',
      iaRec:'Provisório: o c11 cobre empatia + CTA de agendamento, mas não tem oferta/ancoragem nem prova estruturada. Gravar uma VSL dedicada (roteiro abaixo).',
      resumo:`PROVISÓRIO: usando o c11 como vídeo da página para não travar o funil. O certo é gravar a VSL completa.

Como gravar (rosto sentado, 3–20 min, olho no olho) — nesta ordem:
1) PROBLEMA — a dor de não aparecer onde 90% decidem a compra.
2) AGITAÇÃO — o custo de ficar invisível no digital (reaproveitar a empatia do c11).
3) SOLUÇÃO — o que a Solutudo faz: "verdade digital", 20 anos, 3.000+ empresas.
4) PROVA — autoridade e provas (reaproveitar o c2: topo Reclame Aqui, sem multa, Sebrae, parceiros há 20 anos).
5) OFERTA — a reunião gratuita + ancoragem do high ticket (o que a pessoa recebe na call).
6) CTA — agendar a call, apontando direto para o formulário da página.

Reaproveitar: empatia do c11 + prova do c2.`,
      iaParecerNote:'', segmentacao:'', kpi:'Agendamentos, show-up, CAC', transcricao:'',
    };
  }

  // ---- atualização de conteúdo/orientações (base d1574c63-index.html) ----
  // Enriquece cards existentes SEM tocar a transcrição já gravada.
  contentPatch() {
    return {
      c1:{ objetivo:'Conscientizar sobre o erro do tráfego pago → diagnóstico (WhatsApp/bot)', etapa:'Topo', publico:'Frio (já faz/considera tráfego pago)', estilo:'Storytelling',
        resumo:`Metáfora "cobertura × fundação": investir em tráfego sem cuidar do básico (site, Google, Instagram, guias) é erro. CTA de diagnóstico, não venda direta. IAs "não compram propaganda, compram confiança".`,
        cta:`Diagnóstico: "clica aqui, a gente vai te explicar como sua empresa está" → Destino: WhatsApp/bot (roteia high/low ticket) ou página de agendamento`,
        flag:'Não usar: como criativo de checkout / venda automática direta.' },
      c2:{ objetivo:'Quebrar objeção de confiança (remarketing de aquecimento)', etapa:'Meio', publico:'Morno (já viu c1/c3, não converteu)', estilo:'Rosto sentado',
        resumo:`100% quebra de objeção. Provas: desde 2005, topo Reclame Aqui, 4mi/mês, 3.000+ clientes, Exame/Estadão, Sebrae 10 anos, sem multa de cancelamento, telefone do dono, parceiros há 20 anos.`,
        cta:`Sem CTA de produto — fecha com "espero que ajude sua empresa" → Destino: aquecer; próximo passo: c1 ou c11 (WhatsApp/VSL)`,
        flag:'Não usar: em público frio (4min de prova social sem contexto não funciona).' },
      c3:{ objetivo:'Explicar o que é a Solutudo (awareness institucional)', etapa:'Topo', publico:'Frio', estilo:'Storytelling',
        resumo:`Dupla missão: ajuda pessoas a escolherem + empresas a serem escolhidas. "Não é marketing digital, é verdade digital." Mesmo quem vive de indicação perde cliente sem digital (90% checam online).`,
        cta:`"Vem com a gente, Solutudo de bom" — SEM destino explícito → Destino: definir botão/overlay na plataforma; natural = CADASTRO grátis`,
        flag:'Não usar: rodar sem antes definir o botão de destino na plataforma.' },
      c4:{ objetivo:'Agitar dor de invisibilidade digital → consulta pelo bot (WhatsApp)', etapa:'Meio/Fundo', publico:'Frio/Morno', estilo:'Rosto em pé',
        resumo:`Agita a dor ("você tem que aparecer no Google, Instagram, Solutudo, criar conteúdo sempre…"). "2ª página do Google é onde se esconde corpo." Oferta: a Solutudo faz por você.`,
        cta:`"vai te EXPLICAR como fazer, a partir de R$1/dia" (consultivo) → Destino: WhatsApp bot (low automático ou sobe p/ consultor) ou página ANUNCIE`,
        flag:'Não usar: checkout automático sem intermediação (o CTA não é "compre agora").' },
      c5:{ objetivo:'Cadastro gratuito — espontâneo e autêntico (sem cara de anúncio)', etapa:'Meio', publico:'Frio', estilo:'Bastidor / UGC',
        resumo:`Formato bastidor "tá gravando já?", sem olhar p/ câmera. 4mi acessam/mês procurando prestadores. Cadastro grátis e rápido. Estilo UGC tira a cara de anúncio.`,
        cta:`"Clica ali, tem cadastro grátis" (botão de cadastro) → Destino: página de cadastro gratuito` },
      c6:{ objetivo:'Cadastro gratuito — urgência + prova de volume (4mi/mês)', etapa:'Meio', publico:'Frio', estilo:'Rosto em pé',
        resumo:`"Só no último mês, +4mi entraram p/ procurar empresas/prestadores locais." Pergunta-gatilho: você estava lá? Cadastro grátis e rápido.`,
        cta:`"Clica aqui, cadastre, é rápido" → Destino: página de cadastro gratuito` },
      c7:{ objetivo:'Cadastro gratuito + semente de upsell para plano pago', etapa:'Meio', publico:'Frio', estilo:'Rosto em pé',
        resumo:`Variação do c6. Termina com semente de upsell — "se quiser MELHORAR seu cadastro, aí é outra história" — planta o plano pago sem forçar.`,
        cta:`"Cadastre de graça; se quiser melhorar, é outra história" → Destino: cadastro grátis → remarketing ANUNCIE / WhatsApp low ticket` },
      c11:{ objetivo:'Agendar reunião gratuita → high ticket (call com consultor)', etapa:'Meio/Fundo', publico:'Morno (já teve contato com c1/c2)', estilo:'Rosto sentado',
        resumo:`Empatia profunda (~3min). Dor (correria, sem tempo) → conscientização (90% decidem online, "curtida não paga boleto") → CTA de reunião gratuita com análise. Sequência: c1/c2 → c11 → agendamento.`,
        cta:`"Um plano pra você gratuitamente, com uma reunião" → Destino: página de agendamento (VSL) ou WhatsApp p/ marcar a call`,
        flag:'Não usar: topo/frio (longo demais sem contexto prévio).' },
      c13:{ objetivo:'Cadastro gratuito — segmento construção civil', etapa:'Meio', publico:'Construção civil', estilo:'Comunicado',
        resumo:`"Comunicado às empresas de construção civil." Tom de aviso direto = pertencimento. Cobre pedreiro, jardineiro, pintor, encanador, mecânico, construtor. 4mi acessos/mês. "Maior guia de empresas do Brasil."`,
        cta:`"Clica aqui e faça seu cadastro agora" → Destino: página de cadastro gratuito` },
    };
  }
  newCreatives() {
    const base = { funnelId:'solutudo', funcao:'AD', status:'existe', plataforma:'Meta', formato:'', iaParecer:'', iaRec:'', segmentacao:'', estiloPorque:'', kpi:'', cta:'', proximo:'', transcricao:'', dx:0, dy:0 };
    return [
      Object.assign({}, base, { id:'c10', journeyId:'whatsapp', etapa:'Topo/Meio', name:'Quando as pessoas procuram (genérico)',
        pubTemp:'Frio', pubSeg:'Frio (empresas estabelecidas)', publico:'Frio (empresas estabelecidas)', estilo:'Storytelling',
        driveId:'1cTDJ2LHIneO4sAtlT6_boQVFtdwOT2ph', avoz:'https://avoz.solutudo.com.br/videos/720102',
        objetivo:'Conscientizar (90% decidem no digital) → diagnóstico (WhatsApp/bot)',
        resumo:`Metáfora raiz × copa da árvore; consumidor = passarinho rápido e preguiçoso. 90% decidem antes de falar com a empresa. CTA de diagnóstico consultivo. Arquivo nomeado "construção" mas conteúdo genérico.`,
        cta:`"Deixa a gente te apresentar a situação, o que precisa fazer, e você decide" → Destino: WhatsApp/bot (roteia high/low) ou página de diagnóstico`,
        flag:'Não usar: como venda direta.' }),
      Object.assign({}, base, { id:'c12', journeyId:'vsl', etapa:'Meio/Fundo', name:'Tá vendo aquela cena ali',
        pubTemp:'Morno', pubSeg:'Morno (vive de indicação, 5+ anos)', publico:'Morno (vive de indicação, 5+ anos)', estilo:'Storytelling',
        avoz:'https://avoz.solutudo.com.br/videos/990101',
        objetivo:'Agendar reunião rápida → high ticket (gancho visual de cena)',
        resumo:`Hook visual "tá vendo essa cena?" — alguém contratando no digital, "aquele ali podia ser você". 90% das escolhas online e você não está lá. Dor da indicação imprevisível. CTA de reunião rápida.`,
        cta:`"Em uma reunião rápida a gente mostra como" → Destino: página de agendamento / WhatsApp p/ marcar a reunião` }),
      Object.assign({}, base, { id:'c14', journeyId:'confianca', etapa:'Meio', name:'Fachadas do velho mundo (conteúdo longo)',
        pubTemp:'Morno', pubSeg:'Morno', publico:'Morno', estilo:'Demonstração',
        driveId:'1zD--CWOOCpt2oHyJWg5maRXUzb4Wi3cG',
        objetivo:'Educar com dados (ZMOT/Google) sobre a "fachada digital" → autoridade e consideração',
        resumo:`Analogia fachada física → fachada digital. ZMOT: 90% decidem antes do "alô". Dados: 76% Google, 54% redes, 38% guias locais (Solutudo), 18% IA. Checklist (Google, Solutudo, redes, site), avaliações/fotos/história, multicanais, resposta <5min. Candidato a conteúdo de live.`,
        cta:`Soft: "fala com a nossa equipe, manda uma mensagem" (diagnóstico) → Destino: WhatsApp/equipe; também serve como conteúdo de live`,
        flag:'Não usar: como anúncio curto de conversão (é longo, ~10min, educativo).' }),
      Object.assign({}, base, { id:'c17', journeyId:'remarketing', etapa:'Remarketing', name:'Remarketing: visitou a página de anúncio',
        pubTemp:'Quente', pubSeg:'Quente (visitou página anuncie, não converteu)', publico:'Quente (visitou página anuncie, não converteu)', estilo:'Rosto em pé',
        avoz:'https://avoz.solutudo.com.br/videos/1350101',
        objetivo:'Reengajar quem visitou a página "anuncie" e não converteu → falar com a equipe',
        resumo:`Remarketing direto: reconhece que o lead visitou a página "anuncie" e ficou na dúvida. Cita pesquisa do Google com 310 mil jornadas de compra. Oferece esclarecer e apresentar.`,
        cta:`"Você foi até a nossa página de anúncio, ficou na dúvida… clica aqui" → Destino: equipe / WhatsApp (esclarecer e apresentar)`,
        flag:'Não usar: em público frio (pressupõe ter visitado a página anuncie).' }),
      Object.assign({}, base, { id:'c22', journeyId:'confianca', etapa:'Meio', name:'Cota: ganhar ou perder (motivos p/ estar no digital)',
        pubTemp:'Morno', pubSeg:'Morno', publico:'Morno', estilo:'Storytelling',
        avoz:'https://avoz.solutudo.com.br/videos/1590101',
        objetivo:'Reframe — o motivo nº1 do digital é NÃO PERDER clientes → consideração',
        resumo:`Reframe ganhar × perder. Orgânico mostra só 3-5% dos seguidores. O 1º motivo do digital não é conseguir cliente — é NÃO PERDER (orçamentos e indicações que te procuram online e não te acham). Consultam até 3 fontes antes de decidir. Inclui o esquete do empresário que bate escanteio e corre na área (relacionado ao c24).`,
        cta:`Soft: "se precisar de ajuda, Solutudo faz isso" → Destino: equipe / WhatsApp` }),
    ];
  }

  constructor(props) {
    super(props);
    const saved = this.load();
    this.state = {
      mode: 'direcionamento',
      journeyFilter: 'all',
      statusFilter: 'all',
      openVideo: null,
      funnelId: 'solutudo',
      viewAll: false,
      selected: null,
      filters: { status:'all', plataforma:'all', jornada:'all', funcao:'all' },
      zoom: 0.8, panX: 0, panY: 0, ready: false,
      funnels: (saved && saved.funnels) || this.defaultFunnels,
      cards: (saved && saved.cards) || this.seedCards(),
      addFunnelOpen: false, draftFunnel: '',
      trash: (saved && saved.trash) || [], trashOpen: false,
      flowSeeded: !!(saved && saved.flowSeeded), addNodeOpen: false,
      vslPgSeeded: !!(saved && saved.vslPgSeeded),
      contentV: (saved && saved.contentV) || 0,
      // quadro livre
      edges: (saved && saved.edges) || [],
      freeV: (saved && saved.freeV) || 0,
      connectMode: false, connectFrom: null, addMenu: null,
    };
    if (!this.state.flowSeeded) {
      this.state.cards = this.state.cards.concat(this.seedFlowNodes());
      this.state.flowSeeded = true;
      this.save();
    }
    // injeta o vídeo PG provisório da VSL uma única vez (também p/ quem já tem dados salvos)
    if (!this.state.vslPgSeeded && !this.state.cards.some(c => c.id === 'vslpg')) {
      this.state.cards = this.state.cards.concat([this.vslPgCard()]);
      this.state.vslPgSeeded = true;
      this.save();
    }
    // atualização de conteúdo/orientações (v2): enriquece existentes (mantém transcrição) + novos criativos
    if (this.state.contentV < 2) {
      const patch = this.contentPatch();
      this.state.cards = this.state.cards.map(c => patch[c.id] ? Object.assign({}, c, patch[c.id]) : c);
      const have = new Set(this.state.cards.map(c => c.id));
      this.newCreatives().forEach(nc => { if (!have.has(nc.id)) this.state.cards.push(nc); });
      this.state.contentV = 2;
      this.save();
    }
    // quadro livre (v1): semeia posições fx/fy e linhas a partir do layout estruturado atual
    if (this.state.freeV < 1) {
      try {
        const L = this.fullLayout();
        const pos = {}; const edges = [];
        L.blocks.forEach(block => block.lanes.forEach(lane => {
          const stamp = (slot) => slot.forEach(s => { if (s.card) pos[s.card.id] = { x:s.x, y:s.y }; });
          stamp(lane.anu); stamp(lane.vid); stamp(lane.dst);
          lane.anu.forEach(a => lane.vid.forEach(v => { if (a.card && v.card) edges.push({ from:a.card.id, to:v.card.id }); }));
          lane.vid.forEach(v => lane.dst.forEach(d => { if (v.card && d.card) edges.push({ from:v.card.id, to:d.card.id }); }));
        }));
        let fb = 0;
        this.state.cards = this.state.cards.map(c => {
          if (pos[c.id]) return Object.assign({}, c, { fx:pos[c.id].x, fy:pos[c.id].y, dx:0, dy:0 });
          if (c.fx == null) { fb++; return Object.assign({}, c, { fx:240, fy:140 + fb*120, dx:0, dy:0 }); }
          return c;
        });
        this.state.edges = edges;
      } catch (e) {}
      this.state.freeV = 1;
      this.save();
    }
    this._drag = null; this._pan = null; this._vp = null;
    this._setVp = (n) => {
      if (this._vp && this._onWheelNative && this._vp !== n) { this._vp.removeEventListener('wheel', this._onWheelNative); this._wheelNode = null; }
      this._vp = n;
      if (n && this._wheelNode !== n) { this._onWheelNative = (ev) => this.onWheel(ev); n.addEventListener('wheel', this._onWheelNative, { passive: false }); this._wheelNode = n; }
      if (n) setTimeout(() => this.fitView(), 60);
    };
  }

  // ---- persistence ----
  KEY = 'solu-funis-v3';
  load() { try { return JSON.parse(localStorage.getItem(this.KEY) || 'null'); } catch (e) { return null; } }
  save() { try { localStorage.setItem(this.KEY, JSON.stringify({ funnels: this.state.funnels, cards: this.state.cards, trash: this.state.trash || [], flowSeeded: this.state.flowSeeded, vslPgSeeded: this.state.vslPgSeeded, contentV: this.state.contentV, edges: this.state.edges || [], freeV: this.state.freeV })); } catch (e) {} }

  // ---- helpers ----
  el(tag, props, ...kids) { return React.createElement(tag, props, ...kids); }
  isCompact() { return this.props.cardDensity === 'Enxuto'; }
  vStep() { return this.isCompact() ? 152 : 256; }
  flowEntry(id) {
    const m = {
      atracao:    { temp:'Frio',   trigger:false, text:'Público frio — ainda não conhece a Solutudo.' },
      confianca:  { temp:'Morno',  trigger:true,  text:'Já viu a atração e ainda não confia. Requer contato anterior.' },
      cadastro:   { temp:'Frio',   trigger:false, text:'Frio/morno que quer aparecer — baixa fricção.' },
      live:       { temp:'Frio',   trigger:false, text:'Interesse em evento / novidade na cidade.' },
      whatsapp:   { temp:'Frio',   trigger:false, text:'Clica para diagnóstico 1:1 (Click-to-WhatsApp).' },
      vsl:        { temp:'Morno',  trigger:true,  text:'Aquecido por c1/c2. Requer aquecimento antes.' },
      anuncie:    { temp:'Quente', trigger:true,  text:'Já engajou ou cadastrou. Requer passo anterior.' },
      remarketing:{ temp:'Morno',  trigger:true,  text:'Requer evento anterior: viu o vídeo/anúncio e NÃO clicou ou não converteu.' },
    };
    return m[id] || m.atracao;
  }
  destinoHint(id) {
    const m = { atracao:'Cadastro grátis (LP)', confianca:'Remarketing — aquecer', cadastro:'Página de cadastro grátis', live:'Inscrição na live', whatsapp:'WhatsApp / bot (diagnóstico)', vsl:'Agendar reunião (LP)', anuncie:'Checkout low ticket', remarketing:'WhatsApp ou VSL' };
    return m[id] || 'Definir destino';
  }
  destinoKind(id) { return id==='whatsapp' ? 'whatsapp' : 'pagina'; }
  colCards(fn, jr, col) {
    const vis = this.visibleCards().filter(c => c.funnelId===fn.id && c.journeyId===jr.id);
    if (col==='anu') return vis.filter(c => c.kind==='meta');
    if (col==='dst') return vis.filter(c => c.kind==='pagina' || c.kind==='whatsapp');
    return vis.filter(c => !c.kind || c.kind==='video');
  }
  fullLayout() {
    const FL = this.FL, vstep = this.vStep();
    const ghostsOn = this.props.showGhosts !== false;
    const funnels = this.activeFunnels();
    const viewAll = this.state.viewAll;
    let y = FL.laneTop;
    const blocks = [];
    funnels.forEach(fn => {
      let headerY = null;
      if (viewAll) { headerY = y + 26; y += FL.funnelHeaderH; }
      const lanes = [];
      this.journeys.forEach(jr => {
        const anu = this.colCards(fn, jr, 'anu');
        const vid = this.colCards(fn, jr, 'vid');
        const dst = this.colCards(fn, jr, 'dst');
        const aN = ghostsOn ? Math.max(anu.length,1) : anu.length;
        const vN = ghostsOn ? Math.max(vid.length,1) : vid.length;
        const dN = ghostsOn ? Math.max(dst.length,1) : dst.length;
        const maxN = Math.max(aN, vN, dN, 1);
        const h = maxN * vstep + 36;
        const cy = y + h/2;
        const slot = (arr, colX, kind) => {
          if (arr.length === 0) return ghostsOn ? [{ ghost:kind, x:colX, y:cy }] : [];
          const n = arr.length, startY = cy - (n-1)*vstep/2;
          return arr.map((c,i) => ({ card:c, x:colX, y:startY + i*vstep }));
        };
        lanes.push({ jr, top:y, h, cy, gat:{ x:FL.colGat, y:cy }, anu:slot(anu,FL.colAnu,'meta'), vid:slot(vid,FL.colVid,'video'), dst:slot(dst,FL.colDst,'destino') });
        y += h + FL.laneGap;
      });
      blocks.push({ fn, headerY, lanes });
      y += FL.funnelGap;
    });
    return { blocks, totalH: y + 40, viewAll };
  }

  componentDidMount() {
    this._onMove = (e) => this.onMove(e);
    this._onUp = (e) => this.onUp(e);
    this._onKey = (e) => this.onKey(e);
    window.addEventListener('mousemove', this._onMove);
    window.addEventListener('mouseup', this._onUp);
    window.addEventListener('keydown', this._onKey);
    // center the view
    try { window.__funis = this; } catch (e) {}
    this.setState({ ready: true });
    setTimeout(() => this.fitView(), 90);
  }
  onKey(e) {
    if (this.state.mode === 'funil' && this.state.selected && this.state.selected.type === 'card') {
      const tag = (e.target && e.target.tagName) || '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if ((e.ctrlKey || e.metaKey) && e.key === 'c') { this._clip = this.state.cards.find(c => c.id === this.state.selected.id) || null; }
      else if ((e.ctrlKey || e.metaKey) && e.key === 'v') { if (this._clip) this.duplicateCard(this._clip.id); }
    }
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this._onMove);
    window.removeEventListener('mouseup', this._onUp);
    window.removeEventListener('keydown', this._onKey);
    if (this._vp && this._onWheelNative) this._vp.removeEventListener('wheel', this._onWheelNative);
  }

  onMove(e) {
    if (this._drag) {
      if (Math.abs(e.clientX - this._drag.sx) + Math.abs(e.clientY - this._drag.sy) > 3) this._drag.moved = true;
      const dx = (e.clientX - this._drag.sx) / this.state.zoom;
      const dy = (e.clientY - this._drag.sy) / this.state.zoom;
      const cards = this.state.cards.map(c => c.id === this._drag.id ? { ...c, fx: this._drag.ox + dx, fy: this._drag.oy + dy } : c);
      this.setState({ cards });
    } else if (this._pan) {
      if (Math.abs(e.clientX - this._pan.sx) + Math.abs(e.clientY - this._pan.sy) > 3) this._pan.moved = true;
      this.setState({ panX: this._pan.px + (e.clientX - this._pan.sx), panY: this._pan.py + (e.clientY - this._pan.sy) });
    }
  }
  onUp(e) {
    if (this._drag) { const moved = this._drag.moved; this._drag = null; this.save(); if (moved) { this._suppressClick = true; setTimeout(() => { this._suppressClick = false; }, 0); } }
    if (this._pan) {
      const p = this._pan; this._pan = null;
      // clique no fundo (sem arrastar) → abre menu de adicionar bloco (ou cancela conexão)
      if (!p.moved && e) {
        if (this.state.connectMode) { this.setState({ connectFrom: null }); }
        else this.openAddMenu(e.clientX, e.clientY);
      }
    }
  }
  startDrag(e, id) {
    e.stopPropagation();
    const c = this.state.cards.find(x => x.id === id) || {};
    this._drag = { id, sx: e.clientX, sy: e.clientY, ox: c.fx || 0, oy: c.fy || 0 };
  }
  startPan(e) { this._pan = { sx: e.clientX, sy: e.clientY, px: this.state.panX, py: this.state.panY, moved: false }; }
  onWheel(e) {
    e.preventDefault();
    const r = this._vp.getBoundingClientRect();
    const mx = e.clientX - r.left, my = e.clientY - r.top;
    const z0 = this.state.zoom;
    const z = Math.min(1.6, Math.max(0.3, z0 * (e.deltaY < 0 ? 1.08 : 0.926)));
    const wx = (mx - this.state.panX) / z0, wy = (my - this.state.panY) / z0;
    this.setState({ zoom: z, panX: mx - wx * z, panY: my - wy * z });
  }
  zoomBy(f) {
    const r = this._vp.getBoundingClientRect();
    const mx = r.width / 2, my = r.height / 2, z0 = this.state.zoom;
    const z = Math.min(1.6, Math.max(0.3, z0 * f));
    const wx = (mx - this.state.panX) / z0, wy = (my - this.state.panY) / z0;
    this.setState({ zoom: z, panX: mx - wx * z, panY: my - wy * z });
  }
  resetView() { this.fitView(); }
  fitView() {
    if (!this._vp) return;
    const r = this._vp.getBoundingClientRect();
    const FL = this.FL;
    const left = FL.railX - 120, right = FL.colDst + FL.nodeHalf + 40;
    const contentW = right - left;
    const bx = (left + right) / 2;
    const panelW = this.state.selected ? 432 : 0;
    const availW = Math.max(360, r.width - panelW - 80);
    const z = Math.max(0.3, Math.min(0.95, availW / contentW));
    const topY = FL.headerY - 34;
    this.setState({ zoom: z, panX: (r.width - panelW) / 2 - bx * z, panY: 36 - topY * z });
  }

  // ---- data helpers ----
  activeFunnels() { return this.state.viewAll ? this.state.funnels : this.state.funnels.filter(f => f.id === this.state.funnelId); }
  visibleCards() {
    const f = this.state.filters;
    return this.state.cards.filter(c => {
      if (!this.state.viewAll && c.funnelId !== this.state.funnelId) return false;
      if (this.state.viewAll && !this.state.funnels.some(fn => fn.id === c.funnelId)) return false;
      if (f.status !== 'all' && c.status !== f.status) return false;
      if (f.plataforma !== 'all' && c.plataforma !== f.plataforma) return false;
      if (f.jornada !== 'all' && c.journeyId !== f.jornada) return false;
      if (f.funcao !== 'all' && c.funcao !== f.funcao) return false;
      return true;
    });
  }

  // ---- builders (stubs; fleshed out in later steps) ----
  switchFunnel(id) { this.setState({ funnelId:id, viewAll:false, selected:null }, () => this.fitView()); }
  toggleViewAll() { this.setState({ viewAll:!this.state.viewAll, selected:null }, () => this.fitView()); }
  openAddFunnel() { this.setState({ addFunnelOpen:true, draftFunnel:'' }); }
  addCard() {
    const fid = this.state.viewAll ? (this.state.funnels[0]||{}).id : this.state.funnelId;
    const jr = this.journeys[0];
    const id = 'n' + Date.now().toString(36);
    const card = { id, funnelId:fid, journeyId:jr.id, etapa:jr.etapa, funcao:'AD', name:'Novo criativo', pubTemp:'Frio', pubSeg:'', status:'falta', plataforma:'Meta', formato:'', estilo:'', transcricao:'', resumo:'', iaParecer:'', iaRec:'', segmentacao:'', estiloPorque:'', kpi:'', cta:'', proximo:'', dx:0, dy:0 };
    this.setState({ cards:[...this.state.cards, card], viewAll:false, funnelId:fid, selected:{ type:'card', id, funnelId:fid } }, () => { this.save(); const w = this.getCardWorld(card); this.centerOn(w.x, w.y); });
  }
  buildControls() {
    const S = this.state;
    const tcount = (S.trash || []).length;
    const tab = (label, active, on, key) => this.el('button', { key, onClick:on, style:{ border:'none', cursor:'pointer', borderRadius:999, padding:'7px 14px', fontSize:13, fontWeight:700, background: active?'var(--ink)':'transparent', color: active?'var(--white)':'var(--gray-600)', whiteSpace:'nowrap', transition:'background .15s var(--ease-out)' } }, label);
    return this.el('div', { style:{ display:'flex', alignItems:'center', gap:12, justifyContent:'space-between' } },
      this.el('div', { className:'solu-scroll', style:{ display:'flex', alignItems:'center', gap:3, background:'var(--gray-100)', borderRadius:999, padding:4, overflowX:'auto', maxWidth:'64%' } },
        [].concat(
          S.funnels.map(f => tab(f.name, !S.viewAll && S.funnelId===f.id, () => this.switchFunnel(f.id), 'f-'+f.id)),
          [ this.el('div', { key:'sep', style:{ width:1, height:18, background:'var(--gray-200)', margin:'0 3px', flex:'none' } }),
            tab('Ver todos', S.viewAll, () => this.toggleViewAll(), 'all') ]
        )
      ),
      this.el('div', { style:{ display:'flex', alignItems:'center', gap:8, flex:'none' } },
        this.el('button', { onClick:()=>this.openTrash(), title:'Lixeira', style:{ position:'relative', border:'none', cursor:'pointer', borderRadius:999, width:38, height:38, display:'inline-flex', alignItems:'center', justifyContent:'center', background:'var(--white)', color:'var(--gray-600)', boxShadow:'var(--ring-hairline)', flex:'none' } },
          this.el('svg', { width:16, height:16, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.9, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('path', { key:1, d:'M3 6h18' }), this.el('path', { key:2, d:'M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2' }), this.el('path', { key:3, d:'M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6' }), this.el('path', { key:4, d:'M10 11v6' }), this.el('path', { key:5, d:'M14 11v6' })),
          tcount ? this.el('span', { style:{ position:'absolute', top:-4, right:-4, minWidth:18, height:18, padding:'0 4px', borderRadius:999, background:'var(--brand-purple)', color:'#fff', fontSize:10, fontWeight:800, display:'inline-flex', alignItems:'center', justifyContent:'center', boxShadow:'0 0 0 2px var(--white)' } }, String(tcount)) : null
        ),
        this.el('button', { onClick:()=>this.openAddFunnel(), style:{ border:'none', cursor:'pointer', borderRadius:999, padding:'9px 15px', fontSize:13, fontWeight:700, background:'var(--white)', color:'var(--ink)', boxShadow:'var(--ring-hairline)' } }, '+ Funil'),
        this.el('button', { onClick:()=>this.openAddMenuCenter(), style:{ border:'none', cursor:'pointer', borderRadius:999, padding:'9px 17px', fontSize:13, fontWeight:700, background:'var(--grad-cta)', color:'var(--white)', boxShadow:'var(--shadow-brand)' } }, '+ Adicionar')
      )
    );
  }
  setFilter(key, val) { this.setState({ filters: { ...this.state.filters, [key]: val } }); }
  clearFilters() { this.setState({ filters: { status:'all', plataforma:'all', jornada:'all', funcao:'all' } }); }
  buildFilters() {
    const S = this.state;
    const dirty = Object.values(S.filters).some(v => v !== 'all');
    const fsel = (key, label, options) => this.el('label', { key, style:{ display:'inline-flex', alignItems:'center', gap:5, background:'var(--white)', border:'1px solid var(--gray-200)', borderRadius:999, padding:'4px 8px 4px 12px', fontSize:12, fontWeight:700, color:'var(--gray-500)' } },
      label,
      this.el('select', { value:S.filters[key], onChange:(e)=>this.setFilter(key, e.target.value), style:{ border:'none', outline:'none', background:'transparent', fontFamily:'var(--font-sans)', fontSize:12, fontWeight:700, color: S.filters[key]==='all'?'var(--gray-600)':'var(--brand-purple)', cursor:'pointer' } }, options.map(([v,t]) => this.el('option', { key:v, value:v }, t))));
    const vis = this.visibleCards();
    const cnt = (s) => vis.filter(c => c.status === s).length;
    const legendItem = (col, lab, dashed) => this.el('span', { key:lab, style:{ display:'inline-flex', alignItems:'center', gap:5, fontSize:11, fontWeight:600, color:'var(--gray-500)' } }, this.el('span', { style:{ width:9, height:9, borderRadius:9, background: dashed?'transparent':col, border: dashed?'1.5px dashed '+col:'none', flex:'none' } }), lab);
    return this.el('div', { style:{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap', padding:'9px 22px', background:'var(--white)', borderBottom:'1px solid var(--gray-200)' } },
      this.el('span', { style:{ fontSize:11, fontWeight:800, letterSpacing:'.06em', textTransform:'uppercase', color:'var(--gray-400)' } }, 'Filtros'),
      fsel('status', 'Status', [['all','Todos'],['existe','Existe'],['confirmar','A confirmar'],['falta','Falta produzir']]),
      fsel('jornada', 'Jornada', [['all','Todas']].concat(this.journeys.map(j => [j.id, j.label]))),
      fsel('funcao', 'Função', [['all','Todas'],['AD','AD'],['PG','PG']]),
      fsel('plataforma', 'Plataforma', [['all','Todas'],['Meta','Meta'],['Google Ads','Google Ads'],['YouTube','YouTube']]),
      dirty ? this.el('button', { onClick:()=>this.clearFilters(), style:{ border:'none', background:'transparent', color:'var(--brand-purple)', fontSize:12, fontWeight:700, cursor:'pointer', padding:'4px 6px' } }, 'Limpar') : null,
      this.el('div', { style:{ flex:1 } }),
      this.el('div', { style:{ display:'flex', alignItems:'center', gap:14 } },
        this.el('span', { style:{ fontSize:12, fontWeight:700, color:'var(--gray-600)' } }, vis.length + (vis.length === 1 ? ' criativo' : ' criativos')),
        legendItem('#1A7A4A', 'Existe ' + cnt('existe')),
        legendItem('#D97706', 'A confirmar ' + cnt('confirmar')),
        legendItem('#ACACAC', 'Falta ' + cnt('falta'), true)
      )
    );
  }
  // ---- small visual helpers ----
  hexA(hex, a) { const m = hex.replace('#',''); const r = parseInt(m.substring(0,2),16), g = parseInt(m.substring(2,4),16), b = parseInt(m.substring(4,6),16); return `rgba(${r},${g},${b},${a})`; }
  sc(s) { return s==='existe' ? { dot:'#1A7A4A', label:'Existe' } : s==='confirmar' ? { dot:'#D97706', label:'A confirmar' } : { dot:'#ACACAC', label:'Falta produzir' }; }
  tc(t) { return t==='Frio' ? '#20CCEF' : t==='Morno' ? '#F4B923' : t==='Quente' ? '#FF6849' : '#ACACAC'; }
  jById(id) { return this.journeys.find(j => j.id === id) || this.journeys[0]; }
  select(sel) {
    this.setState({ selected: sel }, () => {
      if (sel && sel.type === 'card') { const c = this.state.cards.find(x => x.id === sel.id); if (c) { const w = this.getCardWorld(c); this.centerOn(w.x, w.y); } }
    });
  }
  posWrap(key, x, y, child, z) { return this.el('div', { key, style:{ position:'absolute', left:x, top:y, transform:'translate(-50%,-50%)', zIndex:z||1 } }, child); }
  curve(ax, ay, bx, by, bend) {
    const dx=bx-ax, dy=by-ay, len=Math.hypot(dx,dy)||1, nx=-dy/len, ny=dx/len, b=bend||0;
    const c1x=ax+dx*0.35+nx*b, c1y=ay+dy*0.35+ny*b, c2x=ax+dx*0.68+nx*b, c2y=ay+dy*0.68+ny*b;
    return `M ${ax.toFixed(1)} ${ay.toFixed(1)} C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${bx.toFixed(1)} ${by.toFixed(1)}`;
  }
  funcaoBadge(f) { const ad = f==='AD'; return this.el('span', { title: ad?'AD — anúncio que leva tráfego':'PG — vídeo dentro da página', style:{ fontSize:10, fontWeight:800, letterSpacing:'.02em', padding:'3px 7px', borderRadius:999, background: ad?'var(--ink)':'var(--tint-lavender)', color: ad?'var(--white)':'var(--brand-purple)' } }, f); }
  tempChip(t) { return this.el('span', { style:{ display:'inline-flex', alignItems:'center', gap:4, fontSize:10.5, fontWeight:700, color:'var(--gray-600)', padding:'2px 7px 2px 6px', borderRadius:999, background:'var(--gray-100)' } }, this.el('span',{ style:{ width:7, height:7, borderRadius:7, background:this.tc(t) } }), t); }
  iaDot(p) { const ok=p==='sim', no=p==='nao'; const bg = ok?'var(--tint-mint)':no?'var(--tint-pink)':'transparent'; const col = ok?'#2c7d12':no?'var(--brand-pink)':'var(--gray-400)'; return this.el('span', { title: ok?'IA: faz sentido aqui':no?'IA: recomenda mudança':'IA: sem parecer', style:{ fontSize:10, fontWeight:800, padding:'3px 7px', borderRadius:999, background:bg, color:col, border: p?'none':'1px solid var(--gray-200)' } }, ok?'IA ✓':no?'IA ✗':'IA'); }

  createFromGhost(fn, jr) {
    const id = 'n' + Date.now().toString(36);
    const card = { id, funnelId:fn.id, journeyId:jr.id, etapa:jr.etapa, funcao:'AD', name:'Novo criativo — '+jr.label, pubTemp:'Frio', pubSeg:'', status:'falta', plataforma:'Meta', formato:'', estilo:'', transcricao:'', resumo:'', iaParecer:'', iaRec:'', segmentacao:'', estiloPorque:'', kpi:'', cta:'', proximo:'', dx:0, dy:0 };
    this.setState({ cards:[...this.state.cards, card], selected:{ type:'card', id, funnelId:fn.id } }, () => this.save());
  }

  // ---- node renderers ----
  renderCenter(fn, cx, cy) {
    const sel = this.state.selected && this.state.selected.type==='funnel' && this.state.selected.id===fn.id;
    const n = this.state.cards.filter(c => c.funnelId===fn.id).length;
    const inner = this.el('div', {
      onMouseDown:(e)=>e.stopPropagation(),
      onClick:(e)=>{ e.stopPropagation(); this.select({ type:'funnel', id:fn.id }); },
      style:{ background:'var(--grad-brand)', borderRadius:24, padding:2, boxShadow: sel?'var(--shadow-md), var(--shadow-brand)':'var(--shadow-brand)', cursor:'pointer' }
    },
      this.el('div', { style:{ background:'var(--white)', borderRadius:22, padding:'15px 24px', minWidth:188, textAlign:'center' } },
        this.el('div', { style:{ fontSize:17, fontWeight:800, color:'var(--ink)', letterSpacing:'-0.02em', lineHeight:1.1 } }, fn.name),
        this.el('div', { style:{ fontSize:10.5, color:'var(--gray-500)', marginTop:5, fontWeight:500, maxWidth:210, lineHeight:1.3 } }, fn.desc),
        this.el('div', { style:{ marginTop:10, display:'inline-flex', alignItems:'center', gap:5, background:'var(--gray-100)', borderRadius:999, padding:'4px 12px' } },
          this.el('span', { style:{ fontSize:12.5, fontWeight:800, color:'var(--brand-purple)' } }, String(n)),
          this.el('span', { style:{ fontSize:10.5, fontWeight:600, color:'var(--gray-600)' } }, n===1?'criativo':'criativos')
        )
      )
    );
    return this.posWrap('center-'+fn.id, cx, cy, inner, 15);
  }

  renderJourney(jr, jx, jy, count, key) {
    const sel = this.state.selected && this.state.selected.type==='journey' && this.state.selected.id===jr.id;
    const inner = this.el('div', {
      onMouseDown:(e)=>e.stopPropagation(),
      onClick:(e)=>{ e.stopPropagation(); this.select({ type:'journey', id:jr.id }); },
      onMouseEnter:(e)=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='var(--shadow-md)'; },
      onMouseLeave:(e)=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='var(--shadow-sm)'; },
      style:{ display:'inline-flex', alignItems:'center', gap:8, background:'var(--white)', borderRadius:999, padding:'8px 14px', border: sel?'1.5px solid '+jr.color:'1px solid var(--gray-200)', boxShadow: sel?'var(--shadow-md), 0 0 0 3px '+this.hexA(jr.color,0.14):'var(--shadow-sm)', cursor:'pointer', whiteSpace:'nowrap', transition:'transform .14s var(--ease-out), box-shadow .2s var(--ease-out)' }
    },
      this.el('span', { style:{ width:10, height:10, borderRadius:10, background:jr.color, flex:'none' } }),
      this.el('span', { style:{ fontSize:13, fontWeight:700, color:'var(--ink)' } }, jr.label),
      this.el('span', { style:{ fontSize:10.5, fontWeight:600, color:'var(--gray-400)' } }, jr.etapa),
      this.el('span', { style:{ display:'inline-flex', minWidth:18, height:18, padding:'0 5px', alignItems:'center', justifyContent:'center', borderRadius:999, background: count?this.hexA(jr.color,0.14):'var(--gray-100)', color: count?jr.color:'var(--gray-400)', fontSize:11, fontWeight:800 } }, String(count))
    );
    return this.posWrap(key, jx, jy, inner, 10);
  }

  recChip(text, kind) {
    const path = kind === 'fmt'
      ? [this.el('rect', { key:'r', x:3, y:5, width:18, height:14, rx:2.5 }), this.el('path', { key:'p', d:'M3 9.5h18' })]
      : [this.el('rect', { key:'r', x:2, y:6, width:14, height:12, rx:2.5 }), this.el('path', { key:'p', d:'M16 10l6-3.5v11L16 14' })];
    const icon = this.el('svg', { width:11, height:11, viewBox:'0 0 24 24', fill:'none', stroke:'var(--gray-500)', strokeWidth:1.9, strokeLinecap:'round', strokeLinejoin:'round' }, path);
    return this.el('span', { key:kind, style:{ display:'inline-flex', alignItems:'center', gap:4, fontSize:9.5, fontWeight:700, color:'var(--gray-600)', background:'var(--white)', border:'1px solid var(--gray-200)', borderRadius:999, padding:'3px 8px', lineHeight:1.2 } }, icon, text);
  }
  cardMediaVideo(c, jr) {
    const thumb = 'https://drive.google.com/thumbnail?id=' + c.driveId + '&sz=w1000';
    const driveUrl = 'https://drive.google.com/file/d/' + c.driveId + '/view';
    const poster = 'linear-gradient(135deg, ' + this.hexA(jr.color, 0.92) + ', ' + this.hexA(jr.color, 0.55) + ')';
    return this.el('div', { key:'media', style:{ position:'relative', height:104, backgroundColor:'var(--gray-200)', backgroundImage:'url("' + thumb + '"), ' + poster, backgroundSize:'cover', backgroundPosition:'center' } },
      this.el('div', { style:{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(21,21,21,.16) 0%, rgba(21,21,21,0) 40%, rgba(21,21,21,.46) 100%)' } }),
      this.el('span', { style:{ position:'absolute', top:8, left:8, display:'inline-flex', alignItems:'center', gap:4, background:'var(--glass-white)', backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)', borderRadius:999, padding:'3px 8px', fontSize:9, fontWeight:800, letterSpacing:'.04em', textTransform:'uppercase', color:'var(--ink)', maxWidth:'62%', overflow:'hidden' } },
        this.el('span', { style:{ width:7, height:7, borderRadius:7, background:jr.color, flex:'none' } }),
        this.el('span', { style:{ whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' } }, jr.label)
      ),
      this.el('a', { href:driveUrl, target:'_blank', rel:'noopener', title:'Abrir o arquivo no Drive', onMouseDown:(e)=>e.stopPropagation(), onClick:(e)=>e.stopPropagation(), style:{ position:'absolute', top:8, right:8, height:23, padding:'0 8px', borderRadius:999, background:'var(--glass-white)', backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)', display:'inline-flex', alignItems:'center', gap:4, color:'var(--ink)', textDecoration:'none', fontSize:9, fontWeight:800, letterSpacing:'.03em' } },
        this.el('svg', { width:11, height:11, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:2, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('path', { key:1, d:'M14 4h6v6' }), this.el('path', { key:2, d:'M20 4l-9 9' }), this.el('path', { key:3, d:'M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6' })),
        'Drive'
      ),
      this.el('button', { type:'button', title:'Reproduzir vídeo', onMouseDown:(e)=>e.stopPropagation(), onClick:(e)=>{ e.stopPropagation(); this.openVideoModal(c.id); }, style:{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', width:40, height:40, borderRadius:999, border:'none', cursor:'pointer', background:'rgba(255,255,255,.94)', boxShadow:'0 5px 16px rgba(21,21,21,.32)', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'var(--ink)' } },
        this.el('svg', { width:16, height:16, viewBox:'0 0 24 24', fill:'currentColor' }, this.el('path', { d:'M8 5v14l11-7z' }))
      )
    );
  }
  cardMediaTodo(c, jr) {
    const rec = this.journeyRec(c.journeyId);
    const what = c.objetivo || jr.ghost || 'Definir o que gravar para esta etapa.';
    return this.el('div', { key:'media', style:{ padding:'11px 12px 12px', background:this.hexA(jr.color, 0.06), borderBottom:'1px dashed ' + this.hexA(jr.color, 0.4) } },
      this.el('div', { style:{ display:'flex', alignItems:'center', gap:6, marginBottom:8 } },
        this.el('span', { style:{ width:8, height:8, borderRadius:3, background:jr.color, flex:'none' } }),
        this.el('span', { style:{ fontSize:9.5, fontWeight:800, letterSpacing:'.04em', textTransform:'uppercase', color:jr.color, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', flex:1, minWidth:0 } }, jr.label),
        this.el('span', { style:{ display:'inline-flex', alignItems:'center', gap:4, fontSize:8.5, fontWeight:800, letterSpacing:'.04em', textTransform:'uppercase', color:'var(--gray-500)', background:'var(--white)', border:'1px solid var(--gray-200)', borderRadius:999, padding:'2px 7px', flex:'none' } },
          this.el('svg', { width:10, height:10, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:2, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('rect', { key:'r', x:2, y:6, width:14, height:12, rx:2.5 }), this.el('path', { key:'p', d:'M16 10l6-3.5v11L16 14' })),
          'Gravar'
        )
      ),
      this.el('div', { style:{ fontSize:11, fontWeight:600, color:'var(--gray-600)', lineHeight:1.35, marginBottom:8, display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient:'vertical', overflow:'hidden' } }, what),
      this.el('div', { style:{ display:'flex', gap:5, flexWrap:'wrap' } }, this.recChip(c.formato || rec.fmt, 'fmt'), this.recChip(c.estilo || rec.est, 'cam'))
    );
  }
  buildCardMediaPanel(card, jr) {
    if (card.driveId) {
      const thumb = 'https://drive.google.com/thumbnail?id=' + card.driveId + '&sz=w1000';
      const driveUrl = 'https://drive.google.com/file/d/' + card.driveId + '/view';
      const poster = 'linear-gradient(135deg, ' + this.hexA(jr.color, 0.92) + ', ' + this.hexA(jr.color, 0.55) + ')';
      return this.el('div', { key:'s-video', style:{ breakInside:'avoid', WebkitColumnBreakInside:'avoid', marginBottom:16 } },
        this.el('div', { style:{ display:'flex', gap:13, alignItems:'center', background:'var(--gray-100)', borderRadius:14, padding:10 } },
          this.el('button', { type:'button', title:'Reproduzir', onClick:()=>this.openVideoModal(card.id), style:{ position:'relative', width:148, height:84, flex:'none', borderRadius:10, overflow:'hidden', border:'none', cursor:'pointer', padding:0, backgroundColor:'var(--gray-200)', backgroundImage:'url("' + thumb + '"), ' + poster, backgroundSize:'cover', backgroundPosition:'center' } },
            this.el('span', { style:{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(21,21,21,0) 45%, rgba(21,21,21,.4) 100%)' } }),
            this.el('span', { style:{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', width:36, height:36, borderRadius:999, background:'rgba(255,255,255,.95)', boxShadow:'0 4px 12px rgba(21,21,21,.3)', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'var(--ink)' } },
              this.el('svg', { width:15, height:15, viewBox:'0 0 24 24', fill:'currentColor' }, this.el('path', { d:'M8 5v14l11-7z' }))
            )
          ),
          this.el('div', { style:{ flex:1, minWidth:0 } },
            this.el('div', { style:{ fontSize:10.5, fontWeight:800, letterSpacing:'.05em', textTransform:'uppercase', color:'var(--gray-400)', marginBottom:9 } }, 'Vídeo gravado'),
            this.el('div', { style:{ display:'flex', gap:8, flexWrap:'wrap' } },
              this.el('button', { type:'button', onClick:()=>this.openVideoModal(card.id), style:{ display:'inline-flex', alignItems:'center', gap:6, border:'none', cursor:'pointer', borderRadius:999, padding:'8px 13px', fontSize:12, fontWeight:700, background:'var(--ink)', color:'var(--white)' } },
                this.el('svg', { width:13, height:13, viewBox:'0 0 24 24', fill:'currentColor' }, this.el('path', { d:'M8 5v14l11-7z' })), 'Reproduzir'
              ),
              this.el('a', { href:driveUrl, target:'_blank', rel:'noopener', style:{ display:'inline-flex', alignItems:'center', gap:6, borderRadius:999, padding:'8px 13px', fontSize:12, fontWeight:700, background:'var(--white)', color:'var(--ink)', textDecoration:'none', boxShadow:'var(--ring-hairline)' } },
                this.el('svg', { width:13, height:13, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.8, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('path', { key:1, d:'M14 4h6v6' }), this.el('path', { key:2, d:'M20 4l-9 9' }), this.el('path', { key:3, d:'M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6' })), 'Drive'
              )
            )
          )
        )
      );
    }
    const rec = this.journeyRec(card.journeyId);
    return this.el('div', { key:'s-video', style:{ breakInside:'avoid', WebkitColumnBreakInside:'avoid', marginBottom:18 } },
      this.el('div', { style:{ display:'flex', flexDirection:'column', gap:11, background:this.hexA(jr.color, 0.07), border:'1px dashed ' + this.hexA(jr.color, 0.45), borderRadius:14, padding:'13px 15px' } },
        this.el('div', { style:{ display:'flex', alignItems:'center', gap:10 } },
          this.el('div', { style:{ width:38, height:38, flex:'none', borderRadius:11, background:this.hexA(jr.color, 0.14), display:'inline-flex', alignItems:'center', justifyContent:'center', color:jr.color } },
            this.el('svg', { width:19, height:19, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.8, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('rect', { key:'r', x:2, y:6, width:14, height:12, rx:2.5 }), this.el('path', { key:'p', d:'M16 10l6-3.5v11L16 14' }))
          ),
          this.el('div', { style:{ fontSize:11, fontWeight:800, letterSpacing:'.04em', textTransform:'uppercase', color:jr.color } }, 'Falta gravar — orientação')
        ),
        this.el('div', { style:{ minWidth:0 } },
          this.el('div', { style:{ fontSize:12.5, fontWeight:600, color:'var(--ink)', lineHeight:1.4, marginBottom:8 } }, card.objetivo || jr.ghost),
          this.el('div', { style:{ display:'flex', gap:7, flexWrap:'wrap', alignItems:'center' } },
            this.recChip(card.formato || rec.fmt, 'fmt'),
            this.recChip(card.estilo || rec.est, 'cam'),
            this.el('span', { style:{ fontSize:11, color:'var(--gray-500)', fontWeight:600 } }, rec.obj)
          )
        )
      )
    );
  }
  kindMeta(kind) {
    const m = {
      meta:     { label:'Criativo no Meta', short:'Meta', accent:'#1877F2' },
      pagina:   { label:'Página de vendas', short:'Página', accent:'#0E9384' },
      whatsapp: { label:'Bloco de WhatsApp', short:'WhatsApp', accent:'#1FA855' },
      video:    { label:'Vídeo', short:'Vídeo', accent:'#7C3AED' },
      imagem:   { label:'Imagem / Carrossel', short:'Imagem', accent:'#0EA5E9' },
      texto:    { label:'Texto · a produzir', short:'Texto', accent:'#6B7280' },
    };
    return m[kind] || m.video;
  }
  kindIcon(kind, size, color) {
    const st = { width:size||16, height:size||16, viewBox:'0 0 24 24', fill:'none', stroke:color||'currentColor', strokeWidth:1.9, strokeLinecap:'round', strokeLinejoin:'round' };
    if (kind === 'meta') return this.el('svg', st, this.el('rect', { key:1, x:3, y:3, width:18, height:18, rx:5 }), this.el('path', { key:2, d:'M7.5 16.5v-5a2.5 2.5 0 0 1 4.5-1.5 2.5 2.5 0 0 1 4.5 1.5v5' }));
    if (kind === 'pagina') return this.el('svg', st, this.el('rect', { key:1, x:3, y:4, width:18, height:16, rx:2.5 }), this.el('path', { key:2, d:'M3 9h18' }), this.el('path', { key:3, d:'M7 6.5h.01' }), this.el('path', { key:4, d:'M7 13h7' }), this.el('path', { key:5, d:'M7 16.5h10' }));
    if (kind === 'whatsapp') return this.el('svg', st, this.el('path', { key:1, d:'M4 11.5a7.5 7.5 0 1 1 3.7 6.45L4 19l1.1-3.6A7.4 7.4 0 0 1 4 11.5z' }), this.el('path', { key:2, d:'M9.3 8.9c.3 2.9 1.9 4.5 4.8 4.8l.9-1.3 1.8.7c0 1.1-1 1.9-2.1 1.8-3-.3-5.3-2.6-5.6-5.6-.1-1.1.7-2 1.8-2z' }));
    if (kind === 'imagem') return this.el('svg', st, this.el('rect', { key:1, x:3, y:3, width:18, height:18, rx:2.5 }), this.el('circle', { key:2, cx:8.5, cy:8.5, r:1.6 }), this.el('path', { key:3, d:'M21 15l-5-5L5 21' }));
    if (kind === 'texto') return this.el('svg', st, this.el('path', { key:1, d:'M4 6h16' }), this.el('path', { key:2, d:'M4 12h16' }), this.el('path', { key:3, d:'M4 18h10' }));
    return this.el('svg', st, this.el('path', { key:1, d:'M8 5v14l11-7z' }));
  }
  renderFlowCard(c, jr, x, y, kind) {
    const sel = this.state.selected && this.state.selected.type==='card' && this.state.selected.id===c.id;
    const st = this.sc(c.status);
    const km = this.kindMeta(kind);
    const compact = this.isCompact();
    const keyline = kind === 'meta' ? (c.metaPrimary || c.metaHeadline || c.objetivo)
      : kind === 'pagina' ? (c.pgHeadline || c.pgUrl || c.objetivo)
      : (c.waAbertura || c.objetivo);
    const inner = this.el('div', {
      onMouseDown:(e)=>this.startDrag(e, c.id),
      onClick:(e)=>this.nodeClick(e, c),
      onMouseEnter:(e)=>{ if(!sel){ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='var(--shadow-md)'; } },
      onMouseLeave:(e)=>{ if(!sel){ e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='var(--shadow-card)'; } },
      style:{ width:206, background:'var(--white)', borderRadius:16, overflow:'hidden', border: sel?'1.5px solid '+km.accent:'1px solid var(--gray-150)', boxShadow: sel?'var(--shadow-md), 0 0 0 3px '+this.hexA(km.accent,0.16):'var(--shadow-card)', cursor:'grab', transition:'transform .14s var(--ease-out), box-shadow .22s var(--ease-out)', userSelect:'none' }
    },
      this.el('div', { style:{ display:'flex', alignItems:'center', gap:7, padding:'9px 11px', background:this.hexA(km.accent,0.10), borderBottom:'1px solid '+this.hexA(km.accent,0.18) } },
        this.el('span', { style:{ width:24, height:24, flex:'none', borderRadius:8, background:this.hexA(km.accent,0.16), color:km.accent, display:'inline-flex', alignItems:'center', justifyContent:'center' } }, this.kindIcon(kind, 14, km.accent)),
        this.el('span', { style:{ fontSize:10, fontWeight:800, letterSpacing:'.04em', textTransform:'uppercase', color:km.accent, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', flex:1, minWidth:0 } }, km.label),
        this.el('span', { title:st.label, style:{ width:9, height:9, borderRadius:9, background:st.dot, flex:'none', boxShadow:'0 0 0 3px '+this.hexA(st.dot,0.18) } })
      ),
      this.el('div', { style:{ padding:'10px 12px 12px' } },
        this.el('div', { style:{ fontSize:12.5, fontWeight:700, color:'var(--ink)', lineHeight:1.25, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden', marginBottom: compact?0:7 } }, c.name),
        compact ? null : this.el('div', { style:{ fontSize:11, fontWeight:500, color:'var(--gray-500)', lineHeight:1.4, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden', marginBottom:9 } }, keyline || '—'),
        this.el('div', { style:{ display:'flex', alignItems:'center', gap:6 } },
          this.el('span', { style:{ display:'inline-flex', alignItems:'center', gap:4, fontSize:10, fontWeight:700, color:'var(--gray-600)', background:'var(--gray-100)', borderRadius:999, padding:'3px 8px' } }, this.el('span', { style:{ width:6, height:6, borderRadius:6, background:jr.color } }), jr.label),
          this.el('div', { style:{ flex:1 } }),
          this.el('span', { style:{ fontSize:10.5, fontWeight:700, color:km.accent, whiteSpace:'nowrap' } }, 'Detalhes →')
        )
      )
    );
    return this.posWrap('card-'+c.id, x, y, inner, sel?20:5);
  }
  renderCard(c, jr, x, y) {
    if (c.kind && c.kind !== 'video') return this.renderFlowCard(c, jr, x, y, c.kind);
    const sel = this.state.selected && this.state.selected.type==='card' && this.state.selected.id===c.id;
    const st = this.sc(c.status);
    const compact = this.isCompact();
    const media = compact ? null : (c.driveId ? this.cardMediaVideo(c, jr) : this.cardMediaTodo(c, jr));
    const footerKids = [ this.funcaoBadge(c.funcao), this.tempChip(c.pubTemp), this.el('div', { key:'sp', style:{ flex:1 } }) ];
    if (!compact) footerKids.push(this.el('span', { key:'st', title:st.label, style:{ width:9, height:9, borderRadius:9, background:st.dot, flex:'none', boxShadow:'0 0 0 3px '+this.hexA(st.dot,0.18) } }));
    footerKids.push(this.iaDot(c.iaParecer));
    const content = this.el('div', { key:'c', style:{ padding: compact ? '11px 12px' : '10px 12px 12px' } },
      compact ? this.el('div', { key:'t', style:{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:7, gap:6 } },
        this.el('div', { style:{ display:'flex', alignItems:'center', gap:5, minWidth:0 } },
          this.el('span', { style:{ width:8, height:8, borderRadius:3, background:jr.color, flex:'none' } }),
          this.el('span', { style:{ fontSize:9.5, fontWeight:800, letterSpacing:'.04em', textTransform:'uppercase', color:jr.color, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' } }, jr.label)
        ),
        this.el('span', { title:st.label, style:{ width:9, height:9, borderRadius:9, background:st.dot, flex:'none', boxShadow:'0 0 0 3px '+this.hexA(st.dot,0.18) } })
      ) : null,
      this.el('div', { key:'n', style:{ fontSize:12.5, fontWeight:700, color:'var(--ink)', lineHeight:1.25, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden', marginBottom:9, minHeight: compact ? 0 : 31 } }, c.name),
      this.el('div', { key:'b', style:{ display:'flex', alignItems:'center', gap:6 } }, ...footerKids)
    );
    const inner = this.el('div', {
      onMouseDown:(e)=>this.startDrag(e, c.id),
      onClick:(e)=>this.nodeClick(e, c),
      onMouseEnter:(e)=>{ if(!sel){ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='var(--shadow-md)'; } },
      onMouseLeave:(e)=>{ if(!sel){ e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='var(--shadow-card)'; } },
      style:{ width:206, background:'var(--white)', borderRadius:16, overflow:'hidden', border: sel?'1.5px solid '+jr.color:'1px solid var(--gray-150)', boxShadow: sel?'var(--shadow-md), 0 0 0 3px '+this.hexA(jr.color,0.16):'var(--shadow-card)', cursor:'grab', transition:'transform .14s var(--ease-out), box-shadow .22s var(--ease-out)', userSelect:'none' }
    }, media, content);
    return this.posWrap('card-'+c.id, x, y, inner, sel?20:5);
  }

  renderGhost(fn, jr, x, y) {
    const rec = this.journeyRec(jr.id);
    const compact = this.isCompact();
    const inner = this.el('div', {
      onMouseDown:(e)=>e.stopPropagation(),
      onClick:(e)=>{ e.stopPropagation(); this.createFromGhost(fn, jr); },
      onMouseEnter:(e)=>{ e.currentTarget.style.borderColor=jr.color; e.currentTarget.style.background='var(--white)'; },
      onMouseLeave:(e)=>{ e.currentTarget.style.borderColor=this.hexA(jr.color,0.45); e.currentTarget.style.background='rgba(255,255,255,.6)'; },
      style:{ width:206, border:'1.5px dashed '+this.hexA(jr.color,0.45), borderRadius:16, padding: compact ? '11px 12px' : '12px 13px', background:'rgba(255,255,255,.6)', cursor:'pointer', transition:'border-color .18s var(--ease-out), background .18s var(--ease-out)' }
    },
      this.el('div', { style:{ display:'flex', alignItems:'center', gap:6, marginBottom:8 } },
        this.el('svg', { width:14, height:14, viewBox:'0 0 24 24', fill:'none', stroke:jr.color, strokeWidth:1.9, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('rect', { key:'r', x:2, y:6, width:14, height:12, rx:2.5 }), this.el('path', { key:'p', d:'M16 10l6-3.5v11L16 14' })),
        this.el('span', { style:{ fontSize:9.5, fontWeight:800, letterSpacing:'.05em', textTransform:'uppercase', color:jr.color, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', flex:1, minWidth:0 } }, jr.label),
        this.el('span', { style:{ fontSize:8.5, fontWeight:800, letterSpacing:'.05em', textTransform:'uppercase', color:'var(--gray-400)', flex:'none' } }, 'Falta')
      ),
      this.el('div', { style:{ fontSize:12, fontWeight:700, color:'var(--ink)', lineHeight:1.3, marginBottom: compact ? 9 : 8 } }, jr.ghost),
      compact ? null : this.el('div', { style:{ display:'flex', gap:5, flexWrap:'wrap', marginBottom:10 } }, this.recChip(rec.fmt, 'fmt'), this.recChip(rec.est, 'cam')),
      this.el('div', { style:{ display:'inline-flex', alignItems:'center', gap:5, fontSize:11, fontWeight:800, color:jr.color } },
        this.el('svg', { width:13, height:13, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:2.2, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('path', { key:'a', d:'M12 5v14' }), this.el('path', { key:'b', d:'M5 12h14' })),
        'Criar criativo'
      )
    );
    return this.posWrap('ghost-'+fn.id+'-'+jr.id, x, y, inner, 4);
  }

  renderStageHeader(text, x, y) {
    return this.posWrap('hdr-'+x, x, y, this.el('div', { style:{ fontSize:11.5, fontWeight:800, letterSpacing:'.06em', textTransform:'uppercase', color:'var(--gray-400)', whiteSpace:'nowrap', textAlign:'center' } }, text), 3);
  }
  renderFunnelHeader(fn, y, FL) {
    const left = FL.railX - 120, right = FL.colDst + FL.nodeHalf + 40;
    const inner = this.el('div', { style:{ width:right-left, background:'var(--grad-brand)', borderRadius:16, padding:'2px' } },
      this.el('div', { style:{ display:'flex', alignItems:'center', gap:10, width:'100%', boxSizing:'border-box', background:'var(--white)', borderRadius:14, padding:'10px 20px' } },
        this.el('span', { style:{ fontSize:15, fontWeight:800, color:'var(--ink)', letterSpacing:'-0.02em' } }, fn.name),
        this.el('span', { style:{ fontSize:11.5, color:'var(--gray-500)', fontWeight:500 } }, fn.desc)
      )
    );
    return this.posWrap('fhdr-'+fn.id, (left+right)/2, y, inner, 4);
  }
  renderLaneBand(lane, idx, FL) {
    const left = FL.railX - 120, right = FL.colDst + FL.nodeHalf + 40;
    return this.el('div', { key:'band-'+lane.jr.id+'-'+idx, style:{ position:'absolute', left, top:lane.top, width:right-left, height:lane.h, borderRadius:22, background: idx%2 ? 'rgba(21,21,21,0.022)' : 'transparent', borderTop:'1px solid var(--gray-150)' } });
  }
  renderLaneLabel(fn, jr, x, y) {
    const real = this.state.cards.filter(c => c.funnelId===fn.id && c.journeyId===jr.id);
    const sel = this.state.selected && this.state.selected.type==='journey' && this.state.selected.id===jr.id;
    const inner = this.el('div', {
      onMouseDown:(e)=>e.stopPropagation(),
      onClick:(e)=>{ e.stopPropagation(); this.select({ type:'journey', id:jr.id }); },
      onMouseEnter:(e)=>{ e.currentTarget.style.boxShadow='var(--shadow-md)'; },
      onMouseLeave:(e)=>{ e.currentTarget.style.boxShadow='var(--shadow-card)'; },
      style:{ width:206, background:'var(--white)', borderRadius:16, padding:'13px 15px', borderLeft:'4px solid '+jr.color, border: sel?'1.5px solid '+jr.color:'1px solid var(--gray-150)', boxShadow:'var(--shadow-card)', cursor:'pointer' }
    },
      this.el('div', { style:{ display:'flex', alignItems:'center', gap:8, marginBottom:5 } },
        this.el('span', { style:{ width:11, height:11, borderRadius:11, background:jr.color, flex:'none' } }),
        this.el('span', { style:{ fontSize:14, fontWeight:800, color:'var(--ink)', letterSpacing:'-0.01em' } }, jr.label),
        jr.primary ? this.el('span', { title:jr.primaryLabel, style:{ marginLeft:'auto', display:'inline-flex', alignItems:'center', gap:3, fontSize:9, fontWeight:800, letterSpacing:'.03em', color:'var(--white)', background:'var(--grad-cta)', borderRadius:999, padding:'2px 7px', flex:'none' } },
          this.el('svg', { width:9, height:9, viewBox:'0 0 24 24', fill:'currentColor' }, this.el('path', { d:'M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 7.1-1.01L12 2z' })),
          'PRINCIPAL ' + jr.primary) : null
      ),
      this.el('div', { style:{ fontSize:11, fontWeight:600, color:'var(--gray-400)', marginBottom:10 } }, jr.etapa),
      this.el('span', { style:{ fontSize:10.5, fontWeight:700, color: real.length?'var(--gray-600)':'var(--gray-400)', background:'var(--gray-100)', borderRadius:999, padding:'3px 9px' } }, real.length + (real.length===1?' item':' itens'))
    );
    return this.posWrap('ll-'+fn.id+'-'+jr.id, x, y, inner, 6);
  }
  renderGatilho(jr, x, y, keyId) {
    const e = this.flowEntry(jr.id);
    const trig = e.trigger;
    const accent = trig ? '#B45309' : 'var(--gray-500)';
    const bg = trig ? 'var(--tint-yellow)' : 'var(--gray-100)';
    const icon = trig
      ? this.el('svg', { width:15, height:15, viewBox:'0 0 24 24', fill:'none', stroke:accent, strokeWidth:1.9, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('path',{key:1,d:'M3 12a9 9 0 1 0 3-6.7'}), this.el('path',{key:2,d:'M3 3v5h5'}))
      : this.el('svg', { width:15, height:15, viewBox:'0 0 24 24', fill:'none', stroke:accent, strokeWidth:1.9, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('circle',{key:1,cx:12,cy:8,r:3.2}), this.el('path',{key:2,d:'M5.5 19a6.5 6.5 0 0 1 13 0'}));
    const inner = this.el('div', { onMouseDown:(ev)=>ev.stopPropagation(), style:{ width:206, background:bg, borderRadius:16, padding:'12px 14px', border: trig?'1px solid '+this.hexA('#B45309',0.3):'1px solid var(--gray-200)', boxSizing:'border-box' } },
      this.el('div', { style:{ display:'flex', alignItems:'center', gap:7, marginBottom:7 } },
        icon,
        this.el('span', { style:{ fontSize:9.5, fontWeight:800, letterSpacing:'.05em', textTransform:'uppercase', color:accent } }, trig ? 'Requer passo anterior' : 'Entrada'),
        this.el('div', { style:{ flex:1 } }),
        this.tempChip(e.temp)
      ),
      this.el('div', { style:{ fontSize:11.5, fontWeight:600, color: trig?'#7c4a08':'var(--gray-600)', lineHeight:1.4 } }, e.text)
    );
    return this.posWrap('gat-'+(keyId||jr.id), x, y, inner, 6);
  }
  renderColGhost(fn, jr, kind, x, y, label) {
    const accent = jr.color;
    const inner = this.el('div', {
      onMouseDown:(e)=>e.stopPropagation(),
      onClick:(e)=>{ e.stopPropagation(); this.addNode(kind, jr.id); },
      onMouseEnter:(e)=>{ e.currentTarget.style.borderColor=accent; e.currentTarget.style.background='var(--white)'; },
      onMouseLeave:(e)=>{ e.currentTarget.style.borderColor=this.hexA(accent,0.4); e.currentTarget.style.background='rgba(255,255,255,.55)'; },
      style:{ width:206, border:'1.5px dashed '+this.hexA(accent,0.4), borderRadius:16, padding:'13px 14px', background:'rgba(255,255,255,.55)', cursor:'pointer', boxSizing:'border-box', transition:'border-color .18s var(--ease-out), background .18s var(--ease-out)' }
    },
      this.el('div', { style:{ display:'flex', alignItems:'center', gap:7, marginBottom:8 } },
        this.el('span', { style:{ width:22, height:22, flex:'none', borderRadius:7, background:this.hexA(accent,0.12), color:accent, display:'inline-flex', alignItems:'center', justifyContent:'center' } }, this.kindIcon(kind, 13, accent)),
        this.el('span', { style:{ fontSize:9.5, fontWeight:800, letterSpacing:'.05em', textTransform:'uppercase', color:'var(--gray-400)' } }, 'Falta')
      ),
      this.el('div', { style:{ fontSize:12, fontWeight:700, color:'var(--ink)', lineHeight:1.3, marginBottom:9 } }, label),
      this.el('div', { style:{ display:'inline-flex', alignItems:'center', gap:5, fontSize:11, fontWeight:800, color:accent } },
        this.el('svg', { width:13, height:13, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:2.2, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('path',{key:1,d:'M12 5v14'}), this.el('path',{key:2,d:'M5 12h14'})),
        'Adicionar'
      )
    );
    return this.posWrap('cg-'+fn.id+'-'+jr.id+'-'+kind, x, y, inner, 4);
  }
  buildZoomControls() {
    const btn = (label, on, key) => this.el('button', { key, onClick:on, onMouseDown:(e)=>e.stopPropagation(), style:{ width:34, height:34, border:'none', background:'transparent', borderRadius:10, cursor:'pointer', fontSize:18, fontWeight:700, color:'var(--ink)', display:'inline-flex', alignItems:'center', justifyContent:'center', lineHeight:1 } }, label);
    return this.el('div', { style:{ position:'absolute', left:16, bottom:16, display:'flex', alignItems:'center', gap:2, background:'var(--glass-white)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', borderRadius:14, padding:4, boxShadow:'var(--shadow-card), var(--ring-hairline)', zIndex:6 } },
      btn('\u2212', ()=>this.zoomBy(0.83), 'minus'),
      this.el('div', { key:'z', style:{ width:46, textAlign:'center', fontSize:12, fontWeight:700, color:'var(--gray-600)' } }, Math.round(this.state.zoom*100)+'%'),
      btn('+', ()=>this.zoomBy(1.2), 'plus'),
      this.el('div', { key:'sep', style:{ width:1, height:20, background:'var(--gray-200)', margin:'0 3px' } }),
      this.el('button', { key:'fit', onClick:()=>this.resetView(), onMouseDown:(e)=>e.stopPropagation(), style:{ height:34, padding:'0 12px', border:'none', background:'transparent', borderRadius:10, cursor:'pointer', fontSize:12, fontWeight:700, color:'var(--brand-purple)' } }, 'Centralizar')
    );
  }

  flowArrow(sx, sy, tx, ty, color, key) {
    const h = this.FL.nodeHalf;
    const x1 = sx + h, x2 = tx - h, mx = (x1 + x2) / 2;
    const d = `M ${x1.toFixed(1)} ${sy.toFixed(1)} C ${mx.toFixed(1)} ${sy.toFixed(1)}, ${mx.toFixed(1)} ${ty.toFixed(1)}, ${(x2-7).toFixed(1)} ${ty.toFixed(1)}`;
    const tip = `M ${(x2-9).toFixed(1)} ${(ty-5).toFixed(1)} L ${x2.toFixed(1)} ${ty.toFixed(1)} L ${(x2-9).toFixed(1)} ${(ty+5).toFixed(1)} Z`;
    return [
      this.el('path', { key:key+'-l', d, stroke:color, strokeOpacity:0.4, strokeWidth:2, fill:'none', strokeLinecap:'round' }),
      this.el('path', { key:key+'-t', d:tip, fill:color, fillOpacity:0.6 })
    ];
  }
  // ---- QUADRO LIVRE (canvas flexível) ----
  edgePath(a, b) {
    const HW = 103; // metade da largura do card
    let ax = a.fx, ay = a.fy, bx = b.fx, by = b.fy;
    if (bx >= ax) { ax += HW; bx -= HW; } else { ax -= HW; bx += HW; }
    const mx = (ax + bx) / 2;
    const d = `M ${ax.toFixed(1)} ${ay.toFixed(1)} C ${mx.toFixed(1)} ${ay.toFixed(1)}, ${mx.toFixed(1)} ${by.toFixed(1)}, ${bx.toFixed(1)} ${by.toFixed(1)}`;
    const tip = `M ${(bx-9).toFixed(1)} ${(by-5).toFixed(1)} L ${bx.toFixed(1)} ${by.toFixed(1)} L ${(bx-9).toFixed(1)} ${(by+5).toFixed(1)} Z`;
    return { d, tip, bx, by };
  }
  removeEdge(i) {
    const edges = (this.state.edges || []).slice(); edges.splice(i, 1);
    this.setState({ edges }, () => this.save());
  }
  buildCanvas() {
    const S = this.state;
    const cards = this.visibleCards();
    const byId = {}; cards.forEach(c => { byId[c.id] = c; });
    const worldW = 4000, worldH = 2600;
    const connectors = [];
    (S.edges || []).forEach((ed, i) => {
      const a = byId[ed.from], b = byId[ed.to];
      if (!a || !b || a.fx == null || b.fx == null) return;
      const jr = this.jById(a.journeyId); const col = jr.color;
      const p = this.edgePath(a, b);
      connectors.push(this.el('path', { key:'e'+i+'-l', d:p.d, stroke:col, strokeOpacity:0.55, strokeWidth:2.5, fill:'none', strokeLinecap:'round', style:{ pointerEvents:'stroke', cursor:'pointer' }, onClick:()=>this.removeEdge(i) }));
      connectors.push(this.el('path', { key:'e'+i+'-t', d:p.tip, fill:col, fillOpacity:0.7 }));
    });
    const nodes = cards.map(c => {
      const jr = this.jById(c.journeyId);
      const fx = c.fx == null ? 240 : c.fx, fy = c.fy == null ? 200 : c.fy;
      return (c.kind && c.kind !== 'video') ? this.renderFlowCard(c, jr, fx, fy, c.kind) : this.renderCard(c, jr, fx, fy);
    });
    const world = this.el('div', { style:{ position:'absolute', left:0, top:0, width:worldW, height:worldH, transformOrigin:'0 0', transform:`translate(${S.panX}px, ${S.panY}px) scale(${S.zoom})` } },
      this.el('svg', { key:'svg', width:worldW, height:worldH, style:{ position:'absolute', left:0, top:0, overflow:'visible', pointerEvents:'none' } }, connectors),
      nodes
    );
    return this.el('div', {
      ref: this._setVp,
      onMouseDown:(e)=>this.startPan(e),
      style:{ position:'absolute', inset:0, overflow:'hidden', cursor: this.state.connectMode ? 'crosshair' : (this._pan?'grabbing':'grab'), background:'var(--surface-app)', backgroundImage:'radial-gradient(circle, rgba(21,21,21,.05) 1px, transparent 1px)', backgroundSize:'26px 26px' }
    }, world, this.buildBoardToolbar(), this.buildZoomControls(), this.buildAddMenu());
  }
  // barra de ferramentas do quadro (conectar + adicionar)
  buildBoardToolbar() {
    const cm = this.state.connectMode;
    return this.el('div', { style:{ position:'absolute', left:16, top:16, display:'flex', gap:8, alignItems:'center', zIndex:6 } },
      this.el('button', { onClick:()=>this.toggleConnect(), onMouseDown:(e)=>e.stopPropagation(), style:{ display:'inline-flex', alignItems:'center', gap:6, border:'none', cursor:'pointer', borderRadius:10, padding:'9px 14px', fontSize:13, fontWeight:700, background: cm?'var(--ink)':'var(--white)', color: cm?'var(--white)':'var(--ink)', boxShadow:'var(--shadow-card), var(--ring-hairline)' } },
        this.el('svg', { width:15, height:15, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.9, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('path', { key:1, d:'M9 12a3 3 0 0 1 3-3h3a3 3 0 0 1 0 6h-1' }), this.el('path', { key:2, d:'M15 12a3 3 0 0 1-3 3H9a3 3 0 0 1 0-6h1' })),
        cm ? 'Conectando… (clique origem → destino)' : 'Conectar'),
      this.el('button', { onClick:()=>this.openAddMenuCenter(), onMouseDown:(e)=>e.stopPropagation(), style:{ display:'inline-flex', alignItems:'center', gap:6, border:'none', cursor:'pointer', borderRadius:10, padding:'9px 14px', fontSize:13, fontWeight:700, background:'var(--grad-cta)', color:'var(--white)', boxShadow:'var(--shadow-brand)' } },
        this.el('svg', { width:15, height:15, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:2.2, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('path', { key:1, d:'M12 5v14' }), this.el('path', { key:2, d:'M5 12h14' })),
        'Adicionar bloco'),
      this.el('span', { style:{ fontSize:11.5, color:'var(--gray-500)', background:'var(--white)', borderRadius:8, padding:'6px 10px', boxShadow:'var(--ring-hairline)' } }, 'Clique no fundo para adicionar · arraste para mover · clique numa linha para apagá-la')
    );
  }
  toggleConnect() { this.setState({ connectMode: !this.state.connectMode, connectFrom: null }); }
  screenToWorld(clientX, clientY) {
    const r = this._vp ? this._vp.getBoundingClientRect() : { left:0, top:0 };
    return { wx: (clientX - r.left - this.state.panX) / this.state.zoom, wy: (clientY - r.top - this.state.panY) / this.state.zoom, sx: clientX - r.left, sy: clientY - r.top };
  }
  openAddMenu(clientX, clientY) {
    const p = this.screenToWorld(clientX, clientY);
    this.setState({ addMenu: { x:p.sx, y:p.sy, wx:p.wx, wy:p.wy } });
  }
  openAddMenuCenter() {
    const r = this._vp ? this._vp.getBoundingClientRect() : { width:800, height:600 };
    this.openAddMenu(r.left + r.width/2, r.top + r.height/2);
  }
  closeAddMenu() { this.setState({ addMenu: null }); }
  buildAddMenu() {
    const m = this.state.addMenu; if (!m) return null;
    const opt = (kind, label) => { const km = this.kindMeta(kind); return this.el('button', { key:kind, onMouseDown:(e)=>e.stopPropagation(), onClick:()=>this.addNodeAt(kind, m.wx, m.wy), onMouseEnter:(e)=>{ e.currentTarget.style.background=this.hexA(km.accent,0.08); }, onMouseLeave:(e)=>{ e.currentTarget.style.background='transparent'; }, style:{ display:'flex', alignItems:'center', gap:10, width:'100%', textAlign:'left', border:'none', background:'transparent', cursor:'pointer', borderRadius:9, padding:'8px 10px', fontSize:13, fontWeight:600, color:'var(--ink)' } },
      this.el('span', { style:{ width:28, height:28, flex:'none', borderRadius:8, background:this.hexA(km.accent,0.14), color:km.accent, display:'inline-flex', alignItems:'center', justifyContent:'center' } }, this.kindIcon(kind, 16, km.accent)),
      label); };
    return this.el('div', { onMouseDown:(e)=>e.stopPropagation() },
      this.el('div', { onMouseDown:(e)=>{ e.stopPropagation(); this.closeAddMenu(); }, style:{ position:'absolute', inset:0, zIndex:7 } }),
      this.el('div', { style:{ position:'absolute', left:Math.min(m.x, (this._vp?this._vp.getBoundingClientRect().width:900)-250), top:m.y, width:240, background:'var(--white)', borderRadius:14, boxShadow:'var(--shadow-lg)', padding:8, zIndex:8, animation:'solPop .15s var(--ease-out)' } },
        this.el('div', { style:{ fontSize:10.5, fontWeight:800, letterSpacing:'.05em', textTransform:'uppercase', color:'var(--gray-400)', padding:'4px 10px 8px' } }, 'Adicionar bloco'),
        opt('video', 'Vídeo'),
        opt('meta', 'Criativo Meta'),
        opt('pagina', 'Landing Page'),
        opt('whatsapp', 'WhatsApp / Bot'),
        opt('imagem', 'Imagem / Carrossel'),
        opt('texto', 'Texto vazio (a produzir)')
      )
    );
  }
  nodeClick(e, c) {
    if (this._suppressClick) return;
    if (this.state.connectMode) {
      if (e && e.stopPropagation) e.stopPropagation();
      if (!this.state.connectFrom) { this.setState({ connectFrom: c.id }); return; }
      if (this.state.connectFrom === c.id) { this.setState({ connectFrom: null }); return; }
      const edges = (this.state.edges || []).slice();
      if (!edges.some(ed => ed.from === this.state.connectFrom && ed.to === c.id)) edges.push({ from: this.state.connectFrom, to: c.id });
      this.setState({ edges, connectFrom: null }, () => this.save());
      return;
    }
    this.select({ type:'card', id:c.id, funnelId:c.funnelId });
  }
  addNodeAt(kind, wx, wy) {
    const fid = this.state.viewAll ? (this.state.funnels[0]||{}).id : this.state.funnelId;
    const id = 'n' + Date.now().toString(36);
    const base = { id, funnelId:fid, journeyId:'whatsapp', etapa:'Fundo', plataforma:'Meta', status:'falta', objetivo:'', resumo:'', segmentacao:'', estiloPorque:'', formato:'', kpi:'', cta:'', proximo:'', iaParecer:'', iaRec:'', fx:wx, fy:wy, dx:0, dy:0 };
    let card;
    if (kind === 'video') card = Object.assign(base, { funcao:'AD', name:'Novo vídeo', pubTemp:'Frio', pubSeg:'', publico:'', estilo:'', transcricao:'' });
    else { const km = this.kindMeta(kind); card = Object.assign(base, { kind, funcao: kind==='meta'?'AD':'PG', name:'Novo: '+km.label, plataforma: kind==='meta'?'Meta':(kind==='pagina'?'LP':(kind==='whatsapp'?'WhatsApp':'—')) }); }
    this.setState({ cards:[...this.state.cards, card], addMenu:null, selected:{ type:'card', id, funnelId:fid } }, () => this.save());
  }
  duplicateCard(id) {
    const c = this.state.cards.find(x => x.id === id); if (!c) return;
    const nid = 'n' + Date.now().toString(36);
    const copy = Object.assign({}, c, { id:nid, name:(c.name||'') + ' (cópia)', fx:(c.fx||240)+40, fy:(c.fy||160)+40 });
    this.setState({ cards:[...this.state.cards, copy], selected:{ type:'card', id:nid, funnelId:copy.funnelId } }, () => this.save());
  }
  updateCard(id, patch) {
    const cards = this.state.cards.map(c => c.id === id ? { ...c, ...patch } : c);
    this.setState({ cards });
    clearTimeout(this._saveT); this._saveT = setTimeout(() => this.save(), 400);
  }
  deleteCard(id) {
    const card = this.state.cards.find(c => c.id === id);
    if (!card) return;
    const fn = this.state.funnels.find(f => f.id === card.funnelId);
    const trashed = Object.assign({}, card, { deletedAt: Date.now(), trashFunnelName: fn ? fn.name : '' });
    const edges = (this.state.edges || []).filter(e => e.from !== id && e.to !== id);
    this.setState({ cards: this.state.cards.filter(c => c.id !== id), edges, trash: [trashed, ...(this.state.trash || [])], selected: null }, () => this.save());
  }
  restoreCard(id) {
    const t = (this.state.trash || []).find(c => c.id === id);
    if (!t) return;
    const exists = this.state.funnels.some(f => f.id === t.funnelId);
    const fid = exists ? t.funnelId : (this.state.funnels[0] && this.state.funnels[0].id);
    const card = Object.assign({}, t, { funnelId: fid }); delete card.deletedAt; delete card.trashFunnelName;
    this.setState({ trash: this.state.trash.filter(c => c.id !== id), cards: [...this.state.cards, card], trashOpen: false, viewAll: false, funnelId: fid, mode: 'funil', selected: { type: 'card', id, funnelId: fid } }, () => { this.save(); const w = this.getCardWorld(card); this.centerOn(w.x, w.y); });
  }
  purgeCard(id) {
    if (typeof confirm === 'function' && !confirm('Excluir este criativo definitivamente? Esta ação não pode ser desfeita.')) return;
    this.setState({ trash: (this.state.trash || []).filter(c => c.id !== id) }, () => this.save());
  }
  emptyTrash() {
    if (!(this.state.trash || []).length) return;
    if (typeof confirm === 'function' && !confirm('Esvaziar a lixeira? Todos os criativos serão excluídos definitivamente.')) return;
    this.setState({ trash: [] }, () => this.save());
  }
  openTrash() { this.setState({ trashOpen: true }); }
  closeTrash() { this.setState({ trashOpen: false }); }
  timeAgo(ts) {
    if (!ts) return '';
    const s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return 'agora há pouco';
    const m = Math.floor(s / 60); if (m < 60) return 'há ' + m + ' min';
    const h = Math.floor(m / 60); if (h < 24) return 'há ' + h + (h === 1 ? ' hora' : ' horas');
    const d = Math.floor(h / 24); return 'há ' + d + (d === 1 ? ' dia' : ' dias');
  }
  getCardWorld(card) {
    return { x: card.fx == null ? 240 : card.fx, y: card.fy == null ? 200 : card.fy };
  }
  centerOn(wx, wy) {
    if (!this._vp) return; const r = this._vp.getBoundingClientRect(); const z = this.state.zoom;
    this.setState({ panX: (r.width - 432) / 2 - wx * z, panY: r.height / 2 - wy * z });
  }

  // ---- panel primitives ----
  originTag(kind) {
    if (kind === 'dual') return this.el('span', { style:{ display:'inline-flex', alignItems:'center', gap:4, fontSize:9.5, fontWeight:800, letterSpacing:'.03em', padding:'2px 7px', borderRadius:999, textTransform:'uppercase', background:'linear-gradient(90deg, var(--gray-100), var(--tint-lavender))', color:'var(--gray-600)', flex:'none' } }, 'manual / IA');
    const ia = kind === 'ia';
    return this.el('span', { style:{ display:'inline-flex', alignItems:'center', gap:4, fontSize:9.5, fontWeight:800, letterSpacing:'.03em', padding:'2px 7px', borderRadius:999, textTransform:'uppercase', background: ia?'var(--tint-lavender)':'var(--gray-100)', color: ia?'var(--brand-purple)':'var(--gray-500)', flex:'none' } }, ia ? 'IA → colar' : 'manual');
  }
  inputStyle(ia, extra) {
    return Object.assign({ width:'100%', border:'1px solid '+(ia?'var(--tint-lavender-200)':'var(--gray-200)'), background: ia?'rgba(243,232,255,.42)':'var(--white)', borderRadius:10, padding:'9px 11px', fontFamily:'var(--font-sans)', fontSize:13, fontWeight:500, color:'var(--ink)', outline:'none', letterSpacing:'-0.01em', boxSizing:'border-box', transition:'border-color .15s var(--ease-out)' }, extra || {});
  }
  fieldShell(label, origin, control, hint) {
    return this.el('div', { style:{ marginBottom:14 } },
      this.el('div', { style:{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:8, marginBottom:6 } },
        this.el('label', { style:{ fontSize:11.5, fontWeight:700, color:'var(--gray-600)' } }, label),
        this.originTag(origin)
      ),
      control,
      hint ? this.el('div', { style:{ fontSize:10.5, color:'var(--gray-400)', marginTop:5, lineHeight:1.4 } }, hint) : null
    );
  }
  txt(card, key, label, origin, ph, hint) {
    const ia = origin === 'ia';
    const ctrl = this.el('input', { key:card.id+'-'+key, type:'text', defaultValue:card[key]||'', placeholder:ph||'', onChange:(e)=>this.updateCard(card.id,{[key]:e.target.value}), onMouseDown:(e)=>e.stopPropagation(), onFocus:(e)=>{ e.target.style.borderColor='var(--brand-purple)'; }, onBlur:(e)=>{ e.target.style.borderColor= ia?'var(--tint-lavender-200)':'var(--gray-200)'; }, style:this.inputStyle(ia) });
    return this.fieldShell(label, origin, ctrl, hint);
  }
  area(card, key, label, origin, ph, rows, hint) {
    const ia = origin === 'ia';
    const ctrl = this.el('textarea', { key:card.id+'-'+key, defaultValue:card[key]||'', placeholder:ph||'', rows:rows||4, onChange:(e)=>this.updateCard(card.id,{[key]:e.target.value}), onMouseDown:(e)=>e.stopPropagation(), onFocus:(e)=>{ e.target.style.borderColor='var(--brand-purple)'; }, onBlur:(e)=>{ e.target.style.borderColor= ia?'var(--tint-lavender-200)':'var(--gray-200)'; }, style:this.inputStyle(ia, { minHeight:(rows||4)*20, resize:'vertical', lineHeight:1.5 }) });
    return this.fieldShell(label, origin, ctrl, hint);
  }
  selArrow() {
    const car = "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23737373' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")";
    return { cursor:'pointer', appearance:'none', WebkitAppearance:'none', MozAppearance:'none', backgroundImage:car, backgroundRepeat:'no-repeat', backgroundPosition:'right 11px center', backgroundSize:'14px 14px', paddingRight:34 };
  }
  sel(card, key, label, origin, options) {
    const ia = origin === 'ia';
    const ctrl = this.el('select', { value:card[key]||'', onChange:(e)=>this.updateCard(card.id,{[key]:e.target.value}), onMouseDown:(e)=>e.stopPropagation(), style:this.inputStyle(ia, this.selArrow()) }, options.map(o => this.el('option', { key:o, value:o }, o)));
    return this.fieldShell(label, origin, ctrl);
  }
  journeySelect(card) {
    const ctrl = this.el('select', { value:card.journeyId, onChange:(e)=>this.updateCard(card.id,{ journeyId:e.target.value, etapa:this.jById(e.target.value).etapa }), onMouseDown:(e)=>e.stopPropagation(), style:this.inputStyle(false, this.selArrow()) }, this.journeys.map(j => this.el('option', { key:j.id, value:j.id }, j.label + ' · ' + j.etapa)));
    return this.fieldShell('Jornada (ramo)', 'manual', ctrl);
  }
  funnelSelect(card) {
    const ctrl = this.el('select', { value:card.funnelId, onChange:(e)=>this.updateCard(card.id,{ funnelId:e.target.value }), onMouseDown:(e)=>e.stopPropagation(), style:this.inputStyle(false, this.selArrow()) }, this.state.funnels.map(f => this.el('option', { key:f.id, value:f.id }, f.name)));
    return this.fieldShell('Funil', 'manual', ctrl);
  }
  statusSeg(card) {
    const opts = [['existe','Existe','#1A7A4A'],['confirmar','A confirmar','#D97706'],['falta','Falta produzir','#ACACAC']];
    return this.el('div', { style:{ display:'inline-flex', background:'var(--gray-100)', borderRadius:999, padding:3, gap:2 } },
      opts.map(([v,lab,col]) => this.el('button', { key:v, onClick:()=>this.updateCard(card.id,{status:v}), onMouseDown:(e)=>e.stopPropagation(), style:{ border:'none', cursor:'pointer', borderRadius:999, padding:'5px 10px', fontSize:11, fontWeight:700, background: card.status===v?'var(--white)':'transparent', color: card.status===v?'var(--ink)':'var(--gray-500)', boxShadow: card.status===v?'var(--shadow-xs)':'none', display:'inline-flex', alignItems:'center', gap:5 } }, this.el('span', { style:{ width:7, height:7, borderRadius:7, background:col } }), lab)));
  }
  parecerSeg(card) {
    const opts = [['sim','Faz sentido','#2c7d12','var(--tint-mint)'],['nao','Não faz sentido','var(--brand-pink)','var(--tint-pink)'],['','Sem parecer','var(--gray-500)','var(--gray-100)']];
    return this.el('div', { style:{ display:'flex', gap:6, flexWrap:'wrap' } },
      opts.map(([v,lab,col,bg]) => this.el('button', { key:v||'none', onClick:()=>this.updateCard(card.id,{ iaParecer:v }), onMouseDown:(e)=>e.stopPropagation(), style:{ border:'1.5px solid '+(card.iaParecer===v?col:'var(--gray-200)'), background: card.iaParecer===v?bg:'var(--white)', color: card.iaParecer===v?col:'var(--gray-500)', cursor:'pointer', borderRadius:999, padding:'7px 13px', fontSize:12, fontWeight:700 } }, lab)));
  }
  closeBtn() {
    return this.el('button', { onClick:()=>this.select(null), onMouseDown:(e)=>e.stopPropagation(), title:'Fechar', style:{ width:30, height:30, border:'none', borderRadius:9, background:'var(--gray-100)', cursor:'pointer', fontSize:14, color:'var(--gray-600)', display:'inline-flex', alignItems:'center', justifyContent:'center', flex:'none' } }, '\u2715');
  }
  sectionTitle(title, tag) {
    return this.el('div', { style:{ display:'flex', alignItems:'center', gap:8, margin:'20px 0 12px' } },
      this.el('div', { style:{ fontSize:11.5, fontWeight:800, letterSpacing:'.05em', textTransform:'uppercase', color:'var(--ink)', whiteSpace:'nowrap' } }, title),
      tag ? this.originTag(tag) : null,
      this.el('div', { style:{ flex:1, height:1, background:'var(--gray-150)' } })
    );
  }
  panelWrap(children, wide) {
    return this.el('div', { style:{ position:'absolute', top:0, right:0, bottom:0, width: wide ? 'min(1500px, 92vw)' : 432, maxWidth:'96vw', background:'var(--white)', boxShadow:'-18px 0 50px rgba(21,21,21,.10)', borderLeft:'1px solid var(--gray-150)', display:'flex', flexDirection:'column', zIndex:50, animation:'solPanelIn .26s var(--ease-out)' } }, children);
  }

  buildPanel() {
    const s = this.state.selected; if (!s) return null;
    if (s.type === 'card') { const c = this.state.cards.find(x => x.id === s.id); return c ? this.buildCardPanel(c) : null; }
    if (s.type === 'journey') return this.buildJourneyPanel(this.jById(s.id));
    if (s.type === 'funnel') return this.buildFunnelPanel(this.state.funnels.find(f => f.id === s.id));
    return null;
  }

  buildCardPanel(card) {
    if (card.kind && card.kind !== 'video') return this.buildFlowPanel(card);
    const jr = this.jById(card.journeyId);
    const header = this.el('div', { key:'h', style:{ padding:'0 0 16px', marginBottom:20, borderBottom:'1px solid var(--gray-150)' } },
      this.el('div', { style:{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:14, marginBottom:12, paddingRight:46 } },
        this.el('input', { key:card.id+'-name', defaultValue:card.name, onChange:(e)=>this.updateCard(card.id,{ name:e.target.value }), onMouseDown:(e)=>e.stopPropagation(), style:{ flex:1, minWidth:0, border:'none', outline:'none', background:'transparent', fontFamily:'var(--font-sans)', fontSize:19, fontWeight:800, color:'var(--ink)', letterSpacing:'-0.02em', padding:0 } }),
        this.el('div', { style:{ display:'inline-flex', alignItems:'center', gap:10, flex:'none' } },
          this.el('div', { style:{ display:'inline-flex', alignItems:'center', gap:6 } },
            this.el('span', { style:{ width:9, height:9, borderRadius:9, background:jr.color, flex:'none' } }),
            this.el('span', { style:{ fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'.04em', color:jr.color, whiteSpace:'nowrap' } }, jr.label),
            this.el('span', { style:{ fontSize:11, fontWeight:600, color:'var(--gray-400)', whiteSpace:'nowrap' } }, '· ' + jr.etapa),
            this.funcaoBadge(card.funcao)
          )
        )
      ),
      this.statusSeg(card)
    );

    const blk = (key, ...kids) => this.el('div', { key, style:{ breakInside:'avoid', WebkitColumnBreakInside:'avoid', marginBottom:18 } }, ...kids.filter(Boolean));
    const secs = [
      blk('s-obj',
        this.sectionTitle('Objetivo do vídeo', 'dual'),
        this.area(card, 'objetivo', 'Objetivo — para onde leva', 'dual', 'Em uma linha: o que o vídeo provoca e para onde vai (ex.: diagnóstico no WhatsApp).', 2),
        this.el('div', { key:'roteamento-note', style:{ fontSize:11.5, color:'var(--gray-500)', lineHeight:1.5, marginTop:4 } }, 'Para onde vai este vídeo — funil, jornada e etapa do funil.')
      ),
      blk('s-ident',
        this.sectionTitle('Identificação e roteamento', 'manual'),
        this.funnelSelect(card),
        this.sel(card, 'funcao', 'Função do vídeo', 'manual', ['AD', 'PG']),
        this.el('div', { key:'fhint', style:{ fontSize:10.5, color:'var(--gray-400)', marginTop:-9, marginBottom:14, lineHeight:1.4 } }, 'AD = anúncio que leva tráfego · PG = vídeo dentro da página'),
        this.journeySelect(card),
        this.sel(card, 'etapa', 'Etapa do funil', 'manual', ['Topo', 'Meio', 'Fundo', 'Remarketing']),
        this.sel(card, 'pubTemp', 'Público — temperatura', 'manual', ['Frio', 'Morno', 'Quente']),
        this.txt(card, 'pubSeg', 'Público — segmento', 'manual', 'ex.: construção civil')
      ),
      blk('s-cont',
        this.sectionTitle('Conteúdo do vídeo'),
        this.area(card, 'transcricao', 'Transcrição do vídeo', 'manual', 'Cole aqui a transcrição completa do vídeo…', 6, 'Depois leve esta transcrição ao Claude junto do funil/etapa pretendido e cole o parecer na seção abaixo.'),
        this.area(card, 'resumo', 'Resumo da mensagem', 'dual', 'Resumo curto da mensagem do vídeo…', 3)
      ),
      blk('s-ia',
        this.sectionTitle('Análise da IA', 'ia'),
        this.el('div', { key:'ia-note', style:{ background:'var(--tint-lavender)', border:'1px solid var(--tint-lavender-200)', borderRadius:12, padding:'11px 13px', fontSize:11.5, lineHeight:1.55, color:'var(--brand-purple-700)', marginBottom:14 } },
          this.el('div', { style:{ fontWeight:800, marginBottom:4, color:'var(--brand-purple)' } }, 'Fluxo da IA — feito por fora'),
          'A análise é feita no Claude, fora do sistema. 1) Cole a transcrição acima. 2) Leve ao Claude com o funil/etapa pretendido e peça o parecer. 3) Cole o parecer aqui.'),
        this.fieldShell('Faz sentido neste funil/etapa?', 'ia', this.parecerSeg(card)),
        this.area(card, 'iaRec', 'Parecer e recomendação da IA', 'ia', 'Cole o parecer do Claude. Se não fizer sentido: funil/etapa/criativo recomendado + justificativa.', 5)
      ),
      blk('s-reco',
        this.sectionTitle('Recomendação de cadastro', 'dual'),
        this.sel(card, 'plataforma', 'Plataforma / campanha', 'manual', ['Meta', 'Google Ads', 'YouTube']),
        this.area(card, 'segmentacao', 'Segmentação e configuração sugerida', 'dual', 'Público, lookalike, retargeting, orçamento…', 3),
        this.sel(card, 'estilo', 'Estilo de criativo', 'manual', ['storytelling', 'rosto sentado', 'rosto em pé', 'VSL', 'demonstração', 'comunicado']),
        this.area(card, 'estiloPorque', 'Por que esse estilo', 'dual', 'Justificativa do formato/estilo para este ponto do funil…', 2),
        this.txt(card, 'formato', 'Formato (proporção · duração)', 'manual', 'ex.: 9:16 · 30s')
      ),
      blk('s-op',
        this.sectionTitle('Operacional', 'manual'),
        this.txt(card, 'kpi', 'KPI principal', 'manual', 'ex.: CPL, ROAS, CTR'),
        this.txt(card, 'cta', 'CTA / destino', 'manual', 'ex.: Cadastrar grátis → LP'),
        this.txt(card, 'proximo', 'Próximo passo', 'manual', 'ex.: subir como Advantage+'),
        this.el('button', { key:'dup', onClick:()=>this.duplicateCard(card.id), style:{ width:'100%', border:'1px solid var(--gray-200)', background:'var(--white)', color:'var(--ink)', borderRadius:12, padding:'10px', fontSize:12.5, fontWeight:700, cursor:'pointer', marginTop:18 } }, 'Duplicar (copiar/colar)'),
        this.el('button', { key:'del', onClick:()=>this.deleteCard(card.id), style:{ width:'100%', border:'1px solid var(--gray-200)', background:'var(--white)', color:'var(--danger)', borderRadius:12, padding:'10px', fontSize:12.5, fontWeight:700, cursor:'pointer', marginTop:8 } }, 'Excluir criativo')
      ),
    ];

    const floatClose = this.el('button', { key:'x', onClick:()=>this.select(null), onMouseDown:(e)=>e.stopPropagation(), title:'Fechar', style:{ position:'absolute', top:16, right:18, zIndex:5, width:36, height:36, border:'none', borderRadius:10, background:'var(--gray-100)', cursor:'pointer', color:'var(--gray-600)', display:'inline-flex', alignItems:'center', justifyContent:'center' } }, this.el('svg', { width:16, height:16, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:2, strokeLinecap:'round' }, this.el('path', { d:'M6 6l12 12M18 6L6 18' })));
    const body = this.el('div', { key:'b', className:'solu-scroll', style:{ flex:1, minHeight:0, overflowY:'auto', padding:'20px 30px 48px' } },
      header,
      this.el('div', { style:{ columnCount:3, columnGap:26 } }, [this.buildCardMediaPanel(card, jr)].concat(secs))
    );
    return this.panelWrap([floatClose, body], true);
  }

  flowConfig(kind) {
    if (kind === 'imagem') return { sec:'Imagem / Carrossel', fields:[
      ['area','objetivo','Objetivo — o que comunica','Em uma linha: a mensagem central da peça.',2],
      ['txt','formato','Formato','ex.: 1:1, 4:5, carrossel de 3 cartões'],
      ['area','resumo','Descrição / roteiro visual','Cartões, headline, oferta, CTA…',4],
      ['txt','cta','CTA / destino','ex.: Cadastre-se → LP'],
    ]};
    if (kind === 'texto') return { sec:'Espaço a produzir', fields:[
      ['area','objetivo','O que deveria existir aqui','Descreva a peça/etapa que falta produzir.',2],
      ['area','resumo','Orientação (como deveria ser)','Estrutura, referências, ordem…',5],
      ['txt','proximo','Próximo passo','ex.: gravar / desenhar / contratar'],
    ]};
    if (kind === 'meta') return { sec:'Anúncio no Meta', fields:[
      ['area','objetivo','Objetivo — para onde leva','Em uma linha: o que o anúncio provoca e para onde manda.',2],
      ['txt','metaHeadline','Título (headline)','ex.: Cadastre sua empresa grátis'],
      ['area','metaPrimary','Texto principal','Texto acima da mídia no feed…',3],
      ['txt','metaDesc','Descrição do link','ex.: O maior guia de empresas do Brasil'],
      ['selCTA','metaCTA','Botão de CTA',['Cadastre-se','Saiba mais','Enviar mensagem','Agendar','Comprar agora','Baixar','Ver mais']],
      ['txt','metaFormat','Formato','ex.: 9:16 (Reels) + 1:1 (Feed)'],
      ['txt','metaAudience','Público','ex.: Frio — donos de empresa, região'],
    ]};
    if (kind === 'pagina') return { sec:'Página de vendas', fields:[
      ['area','objetivo','Objetivo da página','O que a página precisa converter.',2],
      ['txt','pgUrl','URL','ex.: solutudo.com.br/cadastre-gratis'],
      ['txt','pgHeadline','Headline','Título principal da página'],
      ['area','pgSubhead','Subtítulo','Promessa que apoia a headline…',2],
      ['txt','pgOferta','Oferta / preço','ex.: Grátis · planos a partir de R$ 29,90/mês'],
      ['area','pgSecoes','Seções da página','hero, prova social, planos, FAQ…',3],
      ['txt','pgCTA','CTA principal','ex.: Cadastrar empresa grátis'],
    ]};
    return { sec:'Bloco de WhatsApp', fields:[
      ['area','objetivo','Objetivo do bloco','O que essa conversa precisa fazer.',2],
      ['txt','waEntrada','Gatilho de entrada','ex.: Clique no anúncio (Click-to-WhatsApp)'],
      ['area','waAbertura','Mensagem de abertura','Primeira mensagem do bot…',3],
      ['area','waRoteamento','Roteamento high / low','Como o bot separa high de low ticket…',3],
      ['area','waProximos','Próximos passos','Para onde manda em cada caminho…',2],
      ['txt','waLink','Link / número','ex.: wa.me/55…'],
    ]};
  }
  flowPreview(card, km) {
    const kind = card.kind;
    if (kind === 'imagem') {
      return this.el('div', { style:{ border:'1px solid var(--gray-200)', borderRadius:14, overflow:'hidden', marginBottom:18 } },
        this.el('div', { style:{ height:150, background:this.hexA(km.accent,0.10), display:'flex', alignItems:'center', justifyContent:'center', color:km.accent } }, this.kindIcon('imagem', 40, km.accent)),
        this.el('div', { style:{ padding:'12px 14px' } },
          this.el('div', { style:{ fontSize:13.5, fontWeight:700, color:'var(--ink)', lineHeight:1.3 } }, card.objetivo || 'Imagem / carrossel — descreva a peça'),
          card.formato ? this.el('div', { style:{ fontSize:11.5, color:'var(--gray-500)', marginTop:5 } }, card.formato) : null));
    }
    if (kind === 'texto') {
      return this.el('div', { style:{ border:'1.5px dashed var(--gray-300)', borderRadius:14, marginBottom:18, padding:'18px 16px', background:'var(--gray-100)', textAlign:'center' } },
        this.el('div', { style:{ display:'inline-flex', width:40, height:40, borderRadius:11, background:'var(--white)', boxShadow:'var(--ring-hairline)', alignItems:'center', justifyContent:'center', color:'var(--gray-400)', marginBottom:8 } }, this.kindIcon('texto', 20, '#9D9D9D')),
        this.el('div', { style:{ fontSize:13, fontWeight:700, color:'var(--gray-600)' } }, 'Espaço a produzir'),
        this.el('div', { style:{ fontSize:11.5, color:'var(--gray-400)', lineHeight:1.4, marginTop:4 } }, card.objetivo || 'Descreva o que deveria existir aqui e ainda não foi produzido.'));
    }
    if (kind === 'meta') {
      return this.el('div', { style:{ border:'1px solid var(--gray-200)', borderRadius:14, overflow:'hidden', marginBottom:18 } },
        this.el('div', { style:{ display:'flex', alignItems:'center', gap:8, padding:'10px 12px' } },
          this.el('span', { style:{ width:30, height:30, borderRadius:999, background:'var(--grad-brand)', flex:'none' } }),
          this.el('div', { style:{ flex:1, minWidth:0 } },
            this.el('div', { style:{ fontSize:12.5, fontWeight:800, color:'var(--ink)' } }, 'Solutudo'),
            this.el('div', { style:{ fontSize:10.5, color:'var(--gray-400)' } }, 'Patrocinado'))),
        this.el('div', { style:{ padding:'0 12px 10px', fontSize:12.5, color:'var(--ink)', lineHeight:1.5 } }, card.metaPrimary || 'Texto principal do anúncio…'),
        this.el('div', { style:{ height:140, background:this.hexA(km.accent,0.12), display:'flex', alignItems:'center', justifyContent:'center', color:km.accent } }, this.kindIcon('meta', 32, km.accent)),
        this.el('div', { style:{ display:'flex', alignItems:'center', gap:10, padding:'10px 12px', background:'var(--gray-100)' } },
          this.el('div', { style:{ flex:1, minWidth:0 } },
            this.el('div', { style:{ fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'.04em', color:'var(--gray-400)' } }, card.metaDesc || 'solutudo.com.br'),
            this.el('div', { style:{ fontSize:13, fontWeight:800, color:'var(--ink)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' } }, card.metaHeadline || 'Título do anúncio')),
          this.el('span', { style:{ flex:'none', fontSize:11.5, fontWeight:800, color:'var(--white)', background:'var(--ink)', borderRadius:8, padding:'7px 11px' } }, card.metaCTA || 'Saiba mais'))
      );
    }
    if (kind === 'pagina') {
      const raw = (card.pgUrl || '').trim();
      const href = raw ? (/^https?:\/\//i.test(raw) ? raw : 'https://' + raw) : null;
      const dots = this.el('span', { style:{ display:'inline-flex', gap:5 } },
        this.el('span', { key:1, style:{ width:8, height:8, borderRadius:8, background:'var(--gray-300)' } }),
        this.el('span', { key:2, style:{ width:8, height:8, borderRadius:8, background:'var(--gray-300)' } }),
        this.el('span', { key:3, style:{ width:8, height:8, borderRadius:8, background:'var(--gray-300)' } }));
      // COM link → preview clicável da landing page (a própria página abre em nova aba)
      if (href) {
        return this.el('a', { href, target:'_blank', rel:'noopener', onMouseDown:(e)=>e.stopPropagation(), style:{ display:'block', textDecoration:'none', border:'1px solid var(--gray-200)', borderRadius:14, overflow:'hidden', marginBottom:18 } },
          this.el('div', { style:{ display:'flex', alignItems:'center', gap:7, padding:'8px 12px', background:'var(--gray-100)', borderBottom:'1px solid var(--gray-200)' } },
            dots,
            this.el('span', { style:{ flex:1, minWidth:0, fontSize:11, fontWeight:600, color:'var(--brand-purple)', background:'var(--white)', borderRadius:999, padding:'4px 10px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' } }, raw)),
          this.el('div', { style:{ position:'relative', height:168, background:'var(--white)' } },
            this.el('iframe', { src:href, loading:'lazy', referrerPolicy:'no-referrer', sandbox:'allow-scripts allow-same-origin', title:'Preview da Landing Page', style:{ position:'absolute', inset:0, width:'100%', height:'100%', border:'none', pointerEvents:'none', background:'var(--white)' } }),
            this.el('div', { style:{ position:'absolute', left:0, right:0, bottom:0, display:'flex', alignItems:'center', justifyContent:'space-between', gap:8, padding:'8px 12px', background:'linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,.96) 55%)' } },
              this.el('span', { style:{ fontSize:10.5, fontWeight:700, color:'var(--gray-500)' } }, 'Pré-visualização da Landing Page'),
              this.el('span', { style:{ display:'inline-flex', alignItems:'center', gap:5, fontSize:11.5, fontWeight:800, color:'var(--white)', background:'var(--grad-cta)', borderRadius:999, padding:'6px 12px', boxShadow:'var(--shadow-brand)' } },
                'Abrir página',
                this.el('svg', { width:12, height:12, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:2, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('path', { key:1, d:'M14 4h6v6' }), this.el('path', { key:2, d:'M20 4l-9 9' }), this.el('path', { key:3, d:'M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6' })))))
        );
      }
      // SEM link → placeholder pedindo o link da Landing Page
      return this.el('div', { style:{ border:'1.5px dashed var(--gray-300)', borderRadius:14, overflow:'hidden', marginBottom:18, background:'var(--gray-100)' } },
        this.el('div', { style:{ display:'flex', alignItems:'center', gap:7, padding:'8px 12px', background:'var(--white)', borderBottom:'1px solid var(--gray-200)' } },
          dots,
          this.el('span', { style:{ flex:1, minWidth:0, fontSize:11, color:'var(--gray-400)', background:'var(--gray-100)', borderRadius:999, padding:'4px 10px' } }, 'sem URL')),
        this.el('div', { style:{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:8, padding:'26px 16px', textAlign:'center' } },
          this.el('span', { style:{ width:38, height:38, borderRadius:11, background:'var(--white)', boxShadow:'var(--ring-hairline)', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'var(--gray-400)' } },
            this.el('svg', { width:19, height:19, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.8, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('path', { key:1, d:'M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07L11.5 4.5' }), this.el('path', { key:2, d:'M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07L12.5 19.5' }))),
          this.el('span', { style:{ fontSize:13, fontWeight:700, color:'var(--gray-600)' } }, 'Inserir link da Landing Page'),
          this.el('span', { style:{ fontSize:11, color:'var(--gray-400)', lineHeight:1.4 } }, 'Preencha o campo URL abaixo para ver o preview da página.'))
      );
    }
    return this.el('div', { style:{ border:'1px solid var(--gray-200)', borderRadius:14, overflow:'hidden', marginBottom:18, background:'#E8F7EE' } },
      this.el('div', { style:{ display:'flex', alignItems:'center', gap:8, padding:'9px 12px', background:'#1FA855' } },
        this.el('span', { style:{ width:26, height:26, borderRadius:999, background:'rgba(255,255,255,.25)', color:'#fff', display:'inline-flex', alignItems:'center', justifyContent:'center', flex:'none' } }, this.kindIcon('whatsapp', 15, '#fff')),
        this.el('span', { style:{ fontSize:12.5, fontWeight:800, color:'#fff' } }, 'WhatsApp')),
      this.el('div', { style:{ padding:'14px 12px' } },
        this.el('div', { style:{ background:'var(--white)', borderRadius:'4px 14px 14px 14px', padding:'10px 12px', fontSize:12.5, color:'var(--ink)', lineHeight:1.5, boxShadow:'var(--shadow-xs)', maxWidth:'92%' } }, card.waAbertura || 'Mensagem de abertura do bot…'),
        this.el('div', { style:{ display:'flex', gap:7, marginTop:10, flexWrap:'wrap' } },
          this.el('span', { style:{ fontSize:10.5, fontWeight:800, color:'#9a6b00', background:'var(--tint-yellow)', borderRadius:999, padding:'4px 9px' } }, 'HIGH → call'),
          this.el('span', { style:{ fontSize:10.5, fontWeight:800, color:'#1A7A4A', background:'var(--tint-mint)', borderRadius:999, padding:'4px 9px' } }, 'LOW → automático')))
    );
  }
  buildFlowPanel(card) {
    const jr = this.jById(card.journeyId);
    const km = this.kindMeta(card.kind);
    const cfg = this.flowConfig(card.kind);
    const header = this.el('div', { key:'h', style:{ flex:'none', padding:'15px 18px 14px', borderBottom:'1px solid var(--gray-150)' } },
      this.el('div', { style:{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12, marginBottom:12 } },
        this.el('div', { style:{ display:'flex', alignItems:'center', gap:9, minWidth:0 } },
          this.el('span', { style:{ width:30, height:30, flex:'none', borderRadius:9, background:this.hexA(km.accent,0.14), color:km.accent, display:'inline-flex', alignItems:'center', justifyContent:'center' } }, this.kindIcon(card.kind, 17, km.accent)),
          this.el('span', { style:{ fontSize:11.5, fontWeight:800, textTransform:'uppercase', letterSpacing:'.04em', color:km.accent, whiteSpace:'nowrap' } }, km.label)),
        this.closeBtn()),
      this.el('input', { key:card.id+'-name', defaultValue:card.name, onChange:(e)=>this.updateCard(card.id,{ name:e.target.value }), onMouseDown:(e)=>e.stopPropagation(), style:{ width:'100%', border:'none', outline:'none', background:'transparent', fontFamily:'var(--font-sans)', fontSize:19, fontWeight:800, color:'var(--ink)', letterSpacing:'-0.02em', padding:0, marginBottom:12 } }),
      this.statusSeg(card)
    );
    const fieldEl = (f) => {
      const t = f[0], key = f[1], label = f[2], ph = f[3], rows = f[4];
      const ctrl = t === 'area' ? this.area(card, key, label, 'manual', ph, rows, null)
        : t === 'selCTA' ? this.sel(card, key, label, 'manual', ph)
        : this.txt(card, key, label, 'manual', ph);
      return this.el('div', { key:key }, ctrl);
    };
    const body = this.el('div', { key:'b', className:'solu-scroll', style:{ flex:1, minHeight:0, overflowY:'auto', padding:'18px 22px 40px' } },
      this.flowPreview(card, km),
      this.sectionTitle(cfg.sec, 'manual'),
      cfg.fields.map(fieldEl),
      this.sectionTitle('Roteamento no fluxo', 'manual'),
      this.funnelSelect(card),
      this.journeySelect(card),
      this.sel(card, 'etapa', 'Etapa do funil', 'manual', ['Topo', 'Meio', 'Fundo', 'Remarketing']),
      this.el('div', { key:'fnote', style:{ fontSize:11.5, color:'var(--gray-500)', lineHeight:1.5, marginTop:4 } }, 'Este item entra na jornada acima — encadeado após o criativo (anúncio → página/WhatsApp → conversão).'),
      this.el('button', { key:'dup', onClick:()=>this.duplicateCard(card.id), style:{ width:'100%', border:'1px solid var(--gray-200)', background:'var(--white)', color:'var(--ink)', borderRadius:12, padding:'10px', fontSize:12.5, fontWeight:700, cursor:'pointer', marginTop:20 } }, 'Duplicar (copiar/colar)'),
      this.el('button', { key:'del', onClick:()=>this.deleteCard(card.id), style:{ width:'100%', border:'1px solid var(--gray-200)', background:'var(--white)', color:'var(--danger)', borderRadius:12, padding:'10px', fontSize:12.5, fontWeight:700, cursor:'pointer', marginTop:8 } }, 'Excluir item')
    );
    return this.panelWrap([header, body]);
  }

  journeyRec(id) {
    const m = {
      atracao:     { obj:'Gerar alcance e parar o scroll com público frio.', plat:['Meta · Advantage+','YouTube'], fmt:'9:16 · 15–40s', est:'Rosto em pé, gancho forte' },
      confianca:   { obj:'Construir autoridade e prova (20 anos, cases).', plat:['YouTube','Meta'], fmt:'16:9 ou 9:16 · 45s–2min', est:'Storytelling, bastidores' },
      cadastro:    { obj:'Converter em cadastro grátis com baixa fricção.', plat:['Meta · Conversão','Google Ads'], fmt:'9:16 · 20–40s', est:'Demonstração' },
      live:        { obj:'Encher a sala da live / evento.', plat:['Meta','WhatsApp'], fmt:'9:16 · 15–30s', est:'Convite, contagem regressiva' },
      whatsapp:    { obj:'Levar o lead quente para conversa 1:1.', plat:['Meta · Click-to-WhatsApp'], fmt:'9:16 · 15–25s', est:'Rosto sentado, tom de conversa' },
      vsl:         { obj:'Vender o high ticket com oferta e ancoragem.', plat:['YouTube','Meta'], fmt:'16:9 · 4–10min', est:'VSL estruturada' },
      anuncie:     { obj:'Vender a oferta de entrada (low ticket).', plat:['Meta','Google Ads'], fmt:'9:16 · 20–30s', est:'Comunicado direto' },
      remarketing: { obj:'Reativar quem não converteu e quebrar objeção.', plat:['Meta · Retargeting','Google Ads'], fmt:'9:16 · 10–25s', est:'Lembrete, depoimento' },
    };
    return m[id] || m.atracao;
  }
  buildJourneyPanel(jr) {
    const S = this.state;
    const fnForCreate = S.viewAll ? (S.funnels[0] || {}) : (S.funnels.find(f => f.id === S.funnelId) || {});
    const cards = S.cards.filter(c => c.journeyId === jr.id && (S.viewAll ? true : c.funnelId === S.funnelId));
    const cnt = (s) => cards.filter(c => c.status === s).length;
    const chip = (t) => this.el('span', { key:t, style:{ fontSize:11.5, fontWeight:700, color:'var(--ink)', background:'var(--gray-100)', borderRadius:999, padding:'5px 11px' } }, t);
    const statTile = (num, lab, bg, col) => this.el('div', { key:lab, style:{ flex:1, background:bg, borderRadius:14, padding:'12px 8px', textAlign:'center' } },
      this.el('div', { style:{ fontSize:22, fontWeight:800, color:col, lineHeight:1 } }, String(num)),
      this.el('div', { style:{ fontSize:10.5, fontWeight:600, color:'var(--gray-600)', marginTop:5 } }, lab));
    const listItem = (c) => { const st = this.sc(c.status); const j = this.jById(c.journeyId); return this.el('button', { key:c.id, onClick:()=>this.select({ type:'card', id:c.id, funnelId:c.funnelId }), onMouseEnter:(e)=>{ e.currentTarget.style.borderColor=j.color; }, onMouseLeave:(e)=>{ e.currentTarget.style.borderColor='var(--gray-150)'; }, style:{ display:'flex', alignItems:'center', gap:10, width:'100%', textAlign:'left', border:'1px solid var(--gray-150)', background:'var(--white)', borderRadius:12, padding:'10px 12px', cursor:'pointer', marginBottom:8, transition:'border-color .15s var(--ease-out)' } },
      this.el('span', { style:{ width:9, height:9, borderRadius:9, background:st.dot, flex:'none' } }),
      this.el('div', { style:{ flex:1, minWidth:0 } },
        this.el('div', { style:{ fontSize:13, fontWeight:700, color:'var(--ink)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' } }, c.name),
        this.el('div', { style:{ fontSize:10.5, color:'var(--gray-500)', marginTop:2 } }, c.plataforma + ' · ' + c.formato + (S.viewAll ? ' · ' + ((S.funnels.find(f=>f.id===c.funnelId)||{}).name||'') : ''))),
      this.funcaoBadge(c.funcao)); };

    const body = this.el('div', { key:'b', className:'solu-scroll', style:{ flex:1, overflowY:'auto', padding:'16px 18px 40px' } },
      this.el('div', { style:{ background: this.hexA(jr.color,0.08), border:'1px solid '+this.hexA(jr.color,0.25), borderRadius:14, padding:'12px 14px', marginBottom:16 } },
        this.el('div', { style:{ fontSize:11, fontWeight:800, letterSpacing:'.05em', textTransform:'uppercase', color:jr.color, marginBottom:5 } }, 'Objetivo do destino'),
        this.el('div', { style:{ fontSize:13, fontWeight:500, color:'var(--ink)', lineHeight:1.45 } }, jr.purpose)),
      this.sectionTitle('Campanha recomendada'),
      this.platRows(jr.plat),
      this.el('div', { style:{ fontSize:12, color:'var(--gray-500)', marginTop:12, lineHeight:1.5, background:'var(--gray-100)', borderRadius:10, padding:'9px 12px' } }, 'Criativo recomendado quando falta produzir: ' + jr.ghost),
      this.sectionTitle('Cobertura'),
      this.el('div', { style:{ display:'flex', gap:9, marginBottom:6 } },
        statTile(cnt('existe'), 'Existe', 'var(--tint-mint)', '#2c7d12'),
        statTile(cnt('confirmar'), 'A confirmar', 'var(--tint-yellow)', '#9a6b00'),
        statTile(cnt('falta'), 'Falta', 'var(--gray-100)', 'var(--gray-600)')),
      this.sectionTitle('Criativos nesta jornada'),
      cards.length ? cards.map(listItem) : this.el('div', { style:{ fontSize:12.5, color:'var(--gray-500)', lineHeight:1.5, padding:'4px 0 14px' } }, 'Nenhum criativo ainda — esta etapa está vazia.'),
      this.el('button', { onClick:()=>this.createFromGhost(fnForCreate, jr), style:{ width:'100%', border:'1.5px dashed '+this.hexA(jr.color,0.5), background:this.hexA(jr.color,0.05), color:jr.color, borderRadius:12, padding:'11px', fontSize:13, fontWeight:700, cursor:'pointer', marginTop:6 } }, '+ Criar criativo nesta jornada'));

    const header = this.el('div', { key:'h', style:{ flex:'none', padding:'16px 18px 14px', borderBottom:'1px solid var(--gray-150)' } },
      this.el('div', { style:{ display:'flex', alignItems:'center', justifyContent:'space-between' } },
        this.el('div', { style:{ display:'inline-flex', alignItems:'center', gap:8 } },
          this.el('span', { style:{ width:12, height:12, borderRadius:12, background:jr.color } }),
          this.el('div', { style:{ fontSize:18, fontWeight:800, letterSpacing:'-0.02em' } }, jr.label),
          this.el('span', { style:{ fontSize:12, fontWeight:700, color:'var(--gray-400)' } }, jr.etapa)),
        this.closeBtn()),
      this.el('div', { style:{ fontSize:12, color:'var(--gray-500)', marginTop:6 } }, (S.viewAll ? 'Todos os funis' : (S.funnels.find(f=>f.id===S.funnelId)||{}).name) + ' · ' + cards.length + (cards.length===1?' criativo':' criativos')));

    return this.panelWrap([header, body]);
  }
  updateFunnel(id, patch) {
    const funnels = this.state.funnels.map(f => f.id === id ? { ...f, ...patch } : f);
    this.setState({ funnels });
    clearTimeout(this._saveT); this._saveT = setTimeout(() => this.save(), 400);
  }
  deleteFunnel(id) {
    if (this.state.funnels.length <= 1) return;
    if (typeof confirm === 'function' && !confirm('Excluir este funil e todos os seus criativos?')) return;
    const funnels = this.state.funnels.filter(f => f.id !== id);
    const cards = this.state.cards.filter(c => c.funnelId !== id);
    this.setState({ funnels, cards, funnelId: funnels[0].id, viewAll:false, selected:null }, () => { this.save(); this.fitView(); });
  }
  buildFunnelPanel(fn) {
    if (!fn) return null;
    const cards = this.state.cards.filter(c => c.funnelId === fn.id);
    const cnt = (s) => cards.filter(c => c.status === s).length;
    const covered = this.journeys.filter(j => cards.some(c => c.journeyId === j.id)).length;
    const statTile = (num, lab, bg, col) => this.el('div', { key:lab, style:{ flex:1, background:bg, borderRadius:14, padding:'12px 8px', textAlign:'center' } },
      this.el('div', { style:{ fontSize:22, fontWeight:800, color:col, lineHeight:1 } }, String(num)),
      this.el('div', { style:{ fontSize:10.5, fontWeight:600, color:'var(--gray-600)', marginTop:5 } }, lab));
    const jrow = (j) => { const jc = cards.filter(c => c.journeyId === j.id); return this.el('button', { key:j.id, onClick:()=>this.select({ type:'journey', id:j.id }), onMouseEnter:(e)=>{ e.currentTarget.style.borderColor=j.color; }, onMouseLeave:(e)=>{ e.currentTarget.style.borderColor='var(--gray-150)'; }, style:{ display:'flex', alignItems:'center', gap:10, width:'100%', textAlign:'left', border:'1px solid var(--gray-150)', borderRadius:12, padding:'10px 12px', background:'var(--white)', cursor:'pointer', marginBottom:8, transition:'border-color .15s var(--ease-out)' } },
      this.el('span', { style:{ width:10, height:10, borderRadius:10, background:j.color, flex:'none' } }),
      this.el('div', { style:{ flex:1, minWidth:0 } }, this.el('div', { style:{ fontSize:13, fontWeight:700, color:'var(--ink)' } }, j.label), this.el('div', { style:{ fontSize:10.5, color:'var(--gray-500)', marginTop:2 } }, j.etapa)),
      jc.length ? this.el('span', { style:{ fontSize:12, fontWeight:800, color:j.color, background:this.hexA(j.color,0.14), borderRadius:999, padding:'3px 10px' } }, String(jc.length)) : this.el('span', { style:{ fontSize:10.5, fontWeight:700, color:'var(--gray-400)', border:'1.5px dashed var(--gray-300)', borderRadius:999, padding:'2px 9px' } }, 'falta')); };

    const header = this.el('div', { key:'h', style:{ flex:'none', padding:'16px 18px 14px', borderBottom:'1px solid var(--gray-150)' } },
      this.el('div', { style:{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:10 } },
        this.el('div', { style:{ flex:1, minWidth:0 } },
          this.el('div', { style:{ fontSize:9.5, fontWeight:800, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--brand-purple)', marginBottom:4 } }, 'Funil'),
          this.el('input', { key:fn.id+'-fname', defaultValue:fn.name, onChange:(e)=>this.updateFunnel(fn.id,{ name:e.target.value }), onMouseDown:(e)=>e.stopPropagation(), style:{ width:'100%', border:'none', outline:'none', background:'transparent', fontFamily:'var(--font-sans)', fontSize:19, fontWeight:800, color:'var(--ink)', letterSpacing:'-0.02em', padding:0 } }),
          this.el('input', { key:fn.id+'-fdesc', defaultValue:fn.desc||'', placeholder:'Descrição do funil…', onChange:(e)=>this.updateFunnel(fn.id,{ desc:e.target.value }), onMouseDown:(e)=>e.stopPropagation(), style:{ width:'100%', border:'none', outline:'none', background:'transparent', fontFamily:'var(--font-sans)', fontSize:12, fontWeight:500, color:'var(--gray-500)', padding:0, marginTop:3 } })),
        this.closeBtn()));

    const body = this.el('div', { key:'b', className:'solu-scroll', style:{ flex:1, overflowY:'auto', padding:'16px 18px 40px' } },
      this.el('div', { style:{ display:'flex', gap:9, marginBottom:12 } },
        statTile(cards.length, 'Criativos', 'var(--tint-lavender)', 'var(--brand-purple)'),
        statTile(covered + '/8', 'Jornadas', 'var(--gray-100)', 'var(--ink)')),
      this.el('div', { style:{ display:'flex', gap:9, marginBottom:4 } },
        statTile(cnt('existe'), 'Existe', 'var(--tint-mint)', '#2c7d12'),
        statTile(cnt('confirmar'), 'A confirmar', 'var(--tint-yellow)', '#9a6b00'),
        statTile(cnt('falta'), 'Falta', 'var(--gray-100)', 'var(--gray-600)')),
      this.sectionTitle('Jornadas do funil'),
      this.el('div', { style:{ fontSize:11.5, color:'var(--gray-500)', lineHeight:1.5, marginTop:-4, marginBottom:12 } }, 'Clique numa jornada para ver objetivo, campanhas recomendadas e o que falta produzir.'),
      this.journeys.map(jrow),
      this.state.funnels.length > 1 ? this.el('button', { onClick:()=>this.deleteFunnel(fn.id), style:{ width:'100%', border:'1px solid var(--gray-200)', background:'var(--white)', color:'var(--danger)', borderRadius:12, padding:'10px', fontSize:12.5, fontWeight:700, cursor:'pointer', marginTop:14 } }, 'Excluir funil') : null);

    return this.panelWrap([header, body]);
  }
  createFunnel() {
    let name = (this._draftFunnel || '').trim();
    if (!name) name = 'Novo funil';
    if (!/^funil/i.test(name)) name = 'Funil ' + name;
    const id = 'f' + Date.now().toString(36);
    const fn = { id, name, desc:'Em estruturação' };
    this._draftFunnel = '';
    this.setState({ funnels:[...this.state.funnels, fn], funnelId:id, viewAll:false, addFunnelOpen:false, selected:null }, () => { this.save(); this.fitView(); });
  }
  buildTrashOverlay() {
    const trash = this.state.trash || [];
    const row = (c) => {
      const jr = this.jById(c.journeyId);
      return this.el('div', { key:c.id, style:{ display:'flex', alignItems:'center', gap:12, padding:'11px 13px', borderRadius:14, background:'var(--gray-100)', marginBottom:8 } },
        this.el('span', { style:{ width:10, height:10, borderRadius:10, background:jr.color, flex:'none' } }),
        this.el('div', { style:{ flex:1, minWidth:0 } },
          this.el('div', { style:{ fontSize:13.5, fontWeight:700, color:'var(--ink)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' } }, c.name || 'Criativo'),
          this.el('div', { style:{ fontSize:11, color:'var(--gray-500)', marginTop:2, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' } }, jr.label + (c.trashFunnelName ? ' · ' + c.trashFunnelName : '') + ' · excluído ' + this.timeAgo(c.deletedAt))),
        this.el('button', { onClick:()=>this.restoreCard(c.id), style:{ border:'none', cursor:'pointer', borderRadius:999, padding:'7px 14px', fontSize:12, fontWeight:700, background:'var(--ink)', color:'var(--white)', flex:'none' } }, 'Restaurar'),
        this.el('button', { onClick:()=>this.purgeCard(c.id), title:'Excluir definitivamente', style:{ border:'1px solid var(--gray-200)', cursor:'pointer', borderRadius:999, width:34, height:34, display:'inline-flex', alignItems:'center', justifyContent:'center', background:'var(--white)', color:'var(--danger)', flex:'none' } },
          this.el('svg', { width:15, height:15, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.9, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('path', { key:1, d:'M3 6h18' }), this.el('path', { key:2, d:'M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6' }), this.el('path', { key:3, d:'M10 11v6' }), this.el('path', { key:4, d:'M14 11v6' }), this.el('path', { key:5, d:'M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2' }))));
    };
    return this.el('div', { onMouseDown:()=>this.closeTrash(), style:{ position:'fixed', inset:0, background:'rgba(21,21,21,.42)', display:'grid', placeItems:'center', zIndex:100 } },
      this.el('div', { onMouseDown:(e)=>e.stopPropagation(), style:{ width:560, maxWidth:'92vw', maxHeight:'82vh', background:'var(--white)', borderRadius:20, boxShadow:'var(--shadow-lg)', padding:'22px 24px', animation:'solPop .2s var(--ease-out)', display:'flex', flexDirection:'column' } },
        this.el('div', { style:{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12 } },
          this.el('div', {},
            this.el('div', { style:{ fontSize:19, fontWeight:800, letterSpacing:'-0.02em' } }, 'Lixeira'),
            this.el('div', { style:{ fontSize:12.5, color:'var(--gray-500)', marginTop:4, lineHeight:1.5 } }, trash.length ? 'Criativos excluídos ficam aqui. Restaure ou apague de vez.' : 'Nenhum criativo na lixeira.')),
          this.el('button', { onClick:()=>this.closeTrash(), style:{ width:32, height:32, border:'none', borderRadius:9, background:'var(--gray-100)', cursor:'pointer', color:'var(--gray-600)', flex:'none', fontSize:14 } }, '\u2715')),
        this.el('div', { className:'solu-scroll', style:{ flex:1, overflowY:'auto', margin:'16px 0', minHeight:0 } },
          trash.length ? trash.map(row) : this.el('div', { style:{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'44px 0', color:'var(--gray-300)' } },
            this.el('svg', { width:40, height:40, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.5, strokeLinecap:'round', strokeLinejoin:'round' }, this.el('path', { key:1, d:'M3 6h18' }), this.el('path', { key:2, d:'M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6' }), this.el('path', { key:3, d:'M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2' })),
            this.el('div', { style:{ fontSize:13, fontWeight:600, marginTop:12, color:'var(--gray-400)' } }, 'A lixeira está vazia'))),
        trash.length ? this.el('div', { style:{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:10, borderTop:'1px solid var(--gray-150)', paddingTop:15 } },
          this.el('button', { onClick:()=>this.emptyTrash(), style:{ border:'none', cursor:'pointer', background:'transparent', color:'var(--danger)', fontSize:12.5, fontWeight:700, padding:'8px 4px' } }, 'Esvaziar lixeira'),
          this.el('button', { onClick:()=>this.closeTrash(), style:{ border:'none', cursor:'pointer', borderRadius:999, padding:'10px 18px', fontSize:13, fontWeight:700, background:'var(--ink)', color:'var(--white)' } }, 'Fechar')) : null
      )
    );
  }
  addNode(kind, jidArg) {
    if (kind === 'video') { this.setState({ addNodeOpen:false }, () => this.addCard()); return; }
    const fid = this.state.viewAll ? (this.state.funnels[0]||{}).id : this.state.funnelId;
    const jmap = { meta:'cadastro', pagina:'cadastro', whatsapp:'whatsapp' };
    const jid = jidArg || jmap[kind] || 'cadastro';
    const jr = this.jById(jid);
    const km = this.kindMeta(kind);
    const id = 'n' + Date.now().toString(36);
    const card = { id, funnelId:fid, journeyId:jid, etapa:jr.etapa, kind, name:'Novo: ' + km.label, status:'falta', funcao: kind==='meta'?'AD':'PG', plataforma: kind==='meta'?'Meta':(kind==='pagina'?'LP':'WhatsApp'), objetivo:'', resumo:'', dx:0, dy:0 };
    this.setState({ cards:[...this.state.cards, card], addNodeOpen:false, viewAll:false, funnelId:fid, selected:{ type:'card', id, funnelId:fid } }, () => { this.save(); const w = this.getCardWorld(card); this.centerOn(w.x, w.y); });
  }
  openAddNode() { this.setState({ addNodeOpen:true }); }
  buildAddNodeOverlay() {
    const opt = (kind, desc) => { const km = this.kindMeta(kind); return this.el('button', { key:kind, onClick:()=>this.addNode(kind), onMouseEnter:(e)=>{ e.currentTarget.style.borderColor=km.accent; e.currentTarget.style.background=this.hexA(km.accent,0.05); }, onMouseLeave:(e)=>{ e.currentTarget.style.borderColor='var(--gray-200)'; e.currentTarget.style.background='var(--white)'; }, style:{ display:'flex', alignItems:'center', gap:13, width:'100%', textAlign:'left', border:'1px solid var(--gray-200)', background:'var(--white)', borderRadius:14, padding:'12px 14px', cursor:'pointer', transition:'all .15s var(--ease-out)' } },
      this.el('span', { style:{ width:40, height:40, flex:'none', borderRadius:11, background:this.hexA(km.accent,0.14), color:km.accent, display:'inline-flex', alignItems:'center', justifyContent:'center' } }, this.kindIcon(kind, 20, km.accent)),
      this.el('span', { style:{ minWidth:0 } },
        this.el('span', { style:{ display:'block', fontSize:14, fontWeight:800, color:'var(--ink)' } }, km.label),
        this.el('span', { style:{ display:'block', fontSize:11.5, color:'var(--gray-500)', marginTop:2, lineHeight:1.4 } }, desc))); };
    return this.el('div', { onMouseDown:()=>this.setState({ addNodeOpen:false }), style:{ position:'fixed', inset:0, background:'rgba(21,21,21,.42)', display:'grid', placeItems:'center', zIndex:100 } },
      this.el('div', { onMouseDown:(e)=>e.stopPropagation(), style:{ width:444, maxWidth:'92vw', background:'var(--white)', borderRadius:20, boxShadow:'var(--shadow-lg)', padding:24, animation:'solPop .2s var(--ease-out)' } },
        this.el('div', { style:{ fontSize:19, fontWeight:800, marginBottom:5, letterSpacing:'-0.02em' } }, 'Adicionar ao fluxo'),
        this.el('div', { style:{ fontSize:12.5, color:'var(--gray-500)', marginBottom:18, lineHeight:1.5 } }, 'Cria um item na jornada e abre os detalhes para editar.'),
        this.el('div', { style:{ display:'flex', flexDirection:'column', gap:10 } },
          opt('meta', 'Como o anúncio aparece no Meta: texto, título e botão.'),
          opt('pagina', 'Landing / página de vendas: URL, headline, oferta e CTA.'),
          opt('whatsapp', 'Conversa do bot: abertura e roteamento high/low.'),
          opt('video', 'Criativo de vídeo (com transcrição e análise).')),
        this.el('div', { style:{ display:'flex', justifyContent:'flex-end', marginTop:18 } },
          this.el('button', { onClick:()=>this.setState({ addNodeOpen:false }), style:{ border:'none', cursor:'pointer', borderRadius:999, padding:'10px 18px', fontSize:13, fontWeight:700, background:'var(--white)', color:'var(--ink)', boxShadow:'var(--ring-hairline)' } }, 'Cancelar')))
    );
  }
  buildOverlays() {
    if (this.state.trashOpen) return this.buildTrashOverlay();
    if (this.state.addNodeOpen) return this.buildAddNodeOverlay();
    if (!this.state.addFunnelOpen) return null;
    return this.el('div', { onMouseDown:()=>this.setState({ addFunnelOpen:false }), style:{ position:'fixed', inset:0, background:'rgba(21,21,21,.42)', display:'grid', placeItems:'center', zIndex:100 } },
      this.el('div', { onMouseDown:(e)=>e.stopPropagation(), style:{ width:430, maxWidth:'92vw', background:'var(--white)', borderRadius:20, boxShadow:'var(--shadow-lg)', padding:24, animation:'solPop .2s var(--ease-out)' } },
        this.el('div', { style:{ fontSize:19, fontWeight:800, marginBottom:5, letterSpacing:'-0.02em' } }, 'Novo funil'),
        this.el('div', { style:{ fontSize:12.5, color:'var(--gray-500)', marginBottom:18, lineHeight:1.5 } }, 'Cria um funil com as 8 jornadas. As etapas começam vazias, sugerindo o que falta produzir.'),
        this.el('label', { style:{ fontSize:11.5, fontWeight:700, color:'var(--gray-600)' } }, 'Nome do funil'),
        this.el('input', { autoFocus:true, defaultValue:'', placeholder:'ex.: Construção Civil', onChange:(e)=>{ this._draftFunnel = e.target.value; }, onKeyDown:(e)=>{ if (e.key === 'Enter') this.createFunnel(); }, style:this.inputStyle(false, { marginTop:6, marginBottom:20, fontSize:14 }) }),
        this.el('div', { style:{ display:'flex', gap:10, justifyContent:'flex-end' } },
          this.el('button', { onClick:()=>this.setState({ addFunnelOpen:false }), style:{ border:'none', cursor:'pointer', borderRadius:999, padding:'10px 18px', fontSize:13, fontWeight:700, background:'var(--white)', color:'var(--ink)', boxShadow:'var(--ring-hairline)' } }, 'Cancelar'),
          this.el('button', { onClick:()=>this.createFunnel(), style:{ border:'none', cursor:'pointer', borderRadius:999, padding:'10px 20px', fontSize:13, fontWeight:700, background:'var(--grad-cta)', color:'var(--white)', boxShadow:'var(--shadow-brand)' } }, 'Criar funil')
        )
      )
    );
  }

  // ---- campaign reco (shared) ----
  platRows(plat) {
    plat = plat || {};
    const row = (brand, color, text) => this.el('div', { key:brand, style:{ display:'flex', gap:9, marginBottom:8, alignItems:'baseline' } },
      this.el('span', { style:{ fontSize:10, fontWeight:800, letterSpacing:'.03em', color, width:58, flex:'none' } }, brand),
      this.el('span', { style:{ fontSize:12, color:'var(--gray-600)', lineHeight:1.45 } }, text || '—'));
    return this.el('div', { style:{ background:'var(--gray-100)', borderRadius:12, padding:'13px 15px' } },
      row('META', '#1877F2', plat.meta), row('GOOGLE', '#188038', plat.google), row('YOUTUBE', '#CC0000', plat.youtube),
      this.el('div', { key:'kpi', style:{ display:'flex', gap:9, alignItems:'baseline' } },
        this.el('span', { style:{ fontSize:10, fontWeight:800, letterSpacing:'.03em', color:'var(--brand-purple)', width:58, flex:'none' } }, 'KPI'),
        this.el('span', { style:{ fontSize:12, color:'var(--gray-600)', lineHeight:1.45 } }, plat.kpi || '—')));
  }

  // ---- direcionamento: data ----
  filteredVideos() {
    const jf = this.state.journeyFilter, sf = this.state.statusFilter;
    return this.state.cards.filter(c => (!c.kind || c.kind === 'video') && (jf === 'all' || c.journeyId === jf) && (sf === 'all' || c.status === sf));
  }
  enrichVideo(c) {
    const jr = this.jById(c.journeyId);
    const st = this.sc(c.status);
    const id = c.driveId;
    const links = [];
    if (id) links.push({ url:'https://drive.google.com/file/d/' + id + '/view', label:'Abrir no Drive' });
    if (c.avoz) links.push({ url:c.avoz, label:'Ver em A Voz' });
    const ad = c.funcao === 'AD';
    return Object.assign({}, c, {
      color:jr.color, dirLabel:jr.dirLabel, jLabel:jr.label, purpose:jr.purpose, plat:jr.plat,
      statusColor:st.dot, statusLabel:st.label,
      thumb: id ? 'https://drive.google.com/thumbnail?id=' + id + '&sz=w1000' : '',
      embedUrl: id ? 'https://drive.google.com/file/d/' + id + '/preview' : '',
      driveUrl: id ? 'https://drive.google.com/file/d/' + id + '/view' : '',
      posterBg: 'linear-gradient(135deg, ' + this.hexA(jr.color,0.92) + ', ' + this.hexA(jr.color,0.55) + ')',
      funcaoBg: ad ? 'var(--ink)' : 'var(--tint-lavender)', funcaoFg: ad ? 'var(--white)' : 'var(--brand-purple)',
      links, flagText: c.flag || '',
      onOpen: () => this.openVideoModal(c.id),
      onDrive: (e) => { if (e && e.stopPropagation) e.stopPropagation(); },
    });
  }
  buildGroups() {
    const vids = this.filteredVideos();
    const groups = [];
    this.journeys.forEach(jr => {
      const vs = vids.filter(c => c.journeyId === jr.id);
      if (!vs.length) return;
      groups.push({ id:jr.id, color:jr.color, dirLabel:jr.dirLabel, etapa:jr.etapa, purpose:jr.purpose, plat:jr.plat,
        primary:jr.primary, primaryLabel:jr.primaryLabel,
        countLabel: vs.length + (vs.length === 1 ? ' vídeo' : ' vídeos'), videos: vs.map(c => this.enrichVideo(c)) });
    });
    return groups;
  }

  // ---- direcionamento: actions ----
  setMode(m) { this.setState({ mode:m, selected: m === 'funil' ? this.state.selected : null }, () => { if (m === 'funil') setTimeout(() => this.fitView(), 60); }); }
  setJourneyFilter(id) { this.setState({ journeyFilter:id }); }
  setStatusFilter(s) { this.setState({ statusFilter:s }); }
  openVideoModal(id) { this.setState({ openVideo:id }); }
  closeVideo() { this.setState({ openVideo:null }); }

  // ---- direcionamento: controls ----
  buildModeToggle() {
    const m = this.state.mode || 'direcionamento';
    const seg = (label, val) => { const active = (val === 'funil') ? (m === 'funil') : (m !== 'funil'); return this.el('button', { key:val, onClick:() => this.setMode(val), style:{ border:'none', cursor:'pointer', borderRadius:999, padding:'8px 16px', fontSize:13, fontWeight:700, whiteSpace:'nowrap', background: active ? 'var(--white)' : 'transparent', color: active ? 'var(--ink)' : 'var(--gray-500)', boxShadow: active ? 'var(--shadow-xs)' : 'none', transition:'all .15s var(--ease-out)' } }, label); };
    return this.el('div', { style:{ display:'inline-flex', background:'var(--gray-100)', borderRadius:999, padding:4, gap:2 } }, seg('Direcionamento', 'direcionamento'), seg('Mapa de funil', 'funil'));
  }
  buildHeaderRight() {
    if (this.state.mode === 'funil') return this.buildControls();
    const n = this.filteredVideos().length;
    const sf = this.state.statusFilter;
    const statusSel = this.el('label', { style:{ display:'inline-flex', alignItems:'center', gap:5, background:'var(--white)', border:'1px solid var(--gray-200)', borderRadius:999, padding:'5px 9px 5px 13px', fontSize:12, fontWeight:700, color:'var(--gray-500)' } }, 'Status',
      this.el('select', { value:sf, onChange:(e) => this.setStatusFilter(e.target.value), style:{ border:'none', outline:'none', background:'transparent', fontFamily:'var(--font-sans)', fontSize:12, fontWeight:700, color: sf === 'all' ? 'var(--gray-600)' : 'var(--brand-purple)', cursor:'pointer' } },
        [['all','Todos'],['existe','Existe'],['confirmar','A confirmar'],['falta','Falta produzir']].map(([v,t]) => this.el('option', { key:v, value:v }, t))));
    return this.el('div', { style:{ display:'flex', alignItems:'center', gap:12, flex:'none' } }, statusSel);
  }
  buildFooterDock() {
    const S = this.state;
    const base = this.state.cards.filter(c => (!c.kind || c.kind === 'video') && (S.statusFilter === 'all' || c.status === S.statusFilter));
    const total = base.length;
    const chip = (id, label, color, count, active) => this.el('button', { key:id, onClick:() => this.setJourneyFilter(id), onMouseDown:(e) => e.stopPropagation(), style:{ display:'inline-flex', alignItems:'center', gap:7, border:'none', cursor:'pointer', borderRadius:999, padding:'8px 13px', fontSize:12.5, fontWeight:700, whiteSpace:'nowrap', background: active ? 'var(--ink)' : 'transparent', color: active ? 'var(--white)' : 'var(--gray-600)', transition:'background .15s var(--ease-out)' } },
      color ? this.el('span', { style:{ width:9, height:9, borderRadius:9, background:color, flex:'none' } }) : null,
      label,
      this.el('span', { style:{ fontSize:11, fontWeight:800, opacity: active ? 0.9 : 0.55 } }, String(count)));
    const chips = [chip('all', 'Todos', null, total, S.journeyFilter === 'all')];
    this.journeys.forEach(j => { const c = base.filter(x => x.journeyId === j.id).length; if (c > 0) chips.push(chip(j.id, j.dirLabel, j.color, c, S.journeyFilter === j.id)); });
    return this.el('div', { className:'solu-scroll', style:{ position:'fixed', left:'50%', bottom:18, transform:'translateX(-50%)', maxWidth:'94vw', display:'flex', alignItems:'center', gap:3, background:'var(--glass-white)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', borderRadius:999, padding:5, boxShadow:'var(--shadow-card), var(--ring-hairline)', zIndex:60, overflowX:'auto' } }, chips);
  }

  renderVals() {
    const S = this.state;
    const isDirec = S.mode !== 'funil';
    const mvCard = S.openVideo ? this.state.cards.find(c => c.id === S.openVideo) : null;
    return {
      modeToggle: this.buildModeToggle(),
      headerRight: this.buildHeaderRight(),
      subbar: isDirec ? null : this.buildFilters(),
      footerDock: isDirec ? this.buildFooterDock() : null,
      canvas: isDirec ? null : this.buildCanvas(),
      panel: isDirec ? null : this.buildPanel(),
      overlays: this.buildOverlays(),
      isDirec: isDirec,
      isFunil: !isDirec,
      groups: this.buildGroups(),
      onThumbError: (e) => { if (e && e.currentTarget) e.currentTarget.style.display = 'none'; },
      stop: (e) => { if (e && e.stopPropagation) e.stopPropagation(); },
      closeVideo: () => this.closeVideo(),
      modalOpen: !!mvCard,
      mv: mvCard ? this.enrichVideo(mvCard) : null,
    };
  }

}

export default Funis
