const RECLASS = [
  ['c1', 'ATRAÇÃO → WHATSAPP', 'CTA é diagnóstico, não venda direta. Bot roteia high/low ticket.'],
  ['c2', 'CONFIANÇA → REMARKETING', 'Sem CTA de produto. Só funciona p/ público morno. NÃO usar no frio.'],
  ['c3', 'ATRAÇÃO ⚠️', 'Sem destino explícito. Precisa de botão definido na plataforma antes de rodar.'],
  ['c4', 'ANUNCIE → WHATSAPP', 'CTA consultivo ("vai te explicar"), não checkout. Bot decide low/high.'],
  ['c7', 'CADASTRO ✅ + semente upsell', 'Final do vídeo planta ideia do plano pago → remarketing ANUNCIE.'],
  ['c11', 'CONFIANÇA → VSL (high ticket)', 'CTA é "reunião gratuita" = agendamento = call com consultor.'],
]

export function NotasProjeto() {
  return (
    <details className="notas-section">
      <summary>📋 Notas do projeto e decisões de classificação</summary>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Reclassificação</th>
            <th>Motivo (baseado no CTA real)</th>
          </tr>
        </thead>
        <tbody>
          {RECLASS.map(([id, re, motivo]) => (
            <tr key={id}>
              <td>
                <b>{id}</b>
              </td>
              <td>{re}</td>
              <td>{motivo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="alerta">
        <b>⚠️ Regra central de classificação</b>
        A pergunta correta não é "qual etapa do funil?" — é{' '}
        <b>
          "o CTA deste vídeo convida pra qual ação, e essa ação leva pra qual mecanismo de
          conversão?"
        </b>{' '}
        O campo <b>Objetivo</b> é o destaque principal de cada card: responde em uma linha o que o
        vídeo quer provocar e para onde vai.
      </div>
    </details>
  )
}
