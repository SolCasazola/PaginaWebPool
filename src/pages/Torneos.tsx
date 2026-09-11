import { useState } from 'react'
import type { Navigate } from '../App'
import PoolBall from '../components/PoolBall'

const ALL_TORNEOS = [
  { id: 1, name: 'APEN POOL 8', mode: 'Bola 8', ball: 8, date: '25 May 2024', city: 'Buenos Aires, AR', players: 32, status: 'Próximo', prize: '$50.000' },
  { id: 2, name: 'ARGENTINA CUP 9', mode: 'Bola 9', ball: 9, date: '15 Jun 2024', city: 'Córdoba, AR', players: 24, status: 'Inscripción abierta', prize: '$80.000' },
  { id: 3, name: 'MASTERS 10', mode: 'Bola 10', ball: 10, date: '10 Jul 2024', city: 'Rosario, AR', players: 16, status: 'Próximo', prize: '$120.000' },
  { id: 4, name: 'COPA MENDOZA 8', mode: 'Bola 8', ball: 8, date: '02 Aug 2024', city: 'Mendoza, AR', players: 28, status: 'Inscripción abierta', prize: '$35.000' },
  { id: 5, name: 'NACIONAL DE SNOOKER', mode: 'Snooker', ball: 1, date: '18 Aug 2024', city: 'Buenos Aires, AR', players: 20, status: 'Próximo', prize: '$95.000' },
  { id: 6, name: 'TORNEO LITORAL 9', mode: 'Bola 9', ball: 9, date: '05 Sep 2024', city: 'Santa Fe, AR', players: 18, status: 'Inscripción abierta', prize: '$45.000' },
  { id: 7, name: 'OPEN SUR', mode: 'Bola 8', ball: 8, date: '20 Sep 2024', city: 'Mar del Plata, AR', players: 40, status: 'En progreso', prize: '$60.000' },
  { id: 8, name: 'GRAN PRIX NORTE', mode: 'Bola 10', ball: 10, date: '12 Oct 2024', city: 'Salta, AR', players: 12, status: 'Próximo', prize: '$40.000' },
]

const STATUS_COLORS: Record<string, string> = {
  'Próximo': '#00d4ff',
  'Inscripción abierta': '#39ff14',
  'En progreso': '#f5a623',
  'Finalizado': 'rgba(255,255,255,0.3)',
}

export default function Torneos({ navigate }: { navigate: Navigate }) {
  const [search, setSearch] = useState('')
  const [filterMode, setFilterMode] = useState('Todos')
  const [filterStatus, setFilterStatus] = useState('Todos')
  const [selected, setSelected] = useState<number | null>(null)

  const modes = ['Todos', 'Bola 8', 'Bola 9', 'Bola 10', 'Snooker', 'Carambola']
  const statuses = ['Todos', 'Próximo', 'Inscripción abierta', 'En progreso']

  const filtered = ALL_TORNEOS.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.city.toLowerCase().includes(search.toLowerCase())
    const matchMode = filterMode === 'Todos' || t.mode === filterMode
    const matchStatus = filterStatus === 'Todos' || t.status === filterStatus
    return matchSearch && matchMode && matchStatus
  })

  const detailT = selected !== null ? ALL_TORNEOS.find(t => t.id === selected) : null

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '44px 24px 60px' }}>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <span className="tag-gold" style={{ marginBottom: 14, display: 'inline-block' }}>COMPETENCIAS</span>
        <h1
          style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 700,
            fontSize: 52,
            color: '#fff',
            margin: '0 0 12px',
          }}
        >
          TORNEOS <span style={{ color: '#f5a623', textShadow: '0 0 24px rgba(245,166,35,0.45)' }}>Y COPAS</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, margin: 0 }}>
          Encontrá tu próxima competencia. Filtrá por modalidad, fecha y ubicación.
        </p>
      </div>

      {/* Detail panel */}
      {detailT && (
        <div
          className="card-gold"
          style={{ padding: 24, marginBottom: 24, display: 'grid', gridTemplateColumns: '1fr auto', gap: 20, alignItems: 'start' }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
              <PoolBall n={detailT.ball} size={48} />
              <div>
                <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 26, color: '#f5a623', lineHeight: 1 }}>
                  {detailT.name}
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 3 }}>
                  {detailT.mode} · {detailT.city}
                </div>
              </div>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: 4,
                  background: `${STATUS_COLORS[detailT.status] || '#888'}18`,
                  border: `1px solid ${STATUS_COLORS[detailT.status] || '#888'}44`,
                  color: STATUS_COLORS[detailT.status] || '#888',
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: 'Rajdhani',
                  letterSpacing: '0.07em',
                }}
              >
                {detailT.status.toUpperCase()}
              </span>
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              {[
                { label: 'FECHA', value: detailT.date },
                { label: 'PARTICIPANTES', value: `${detailT.players} jugadores` },
                { label: 'PREMIO', value: detailT.prize },
              ].map(d => (
                <div key={d.label}>
                  <div style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', fontFamily: 'Rajdhani', fontWeight: 700, marginBottom: 3 }}>
                    {d.label}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{d.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexDirection: 'column', alignItems: 'flex-end' }}>
            <button className="btn-neon">🏆 INSCRIBIRME</button>
            <button className="btn-outline" onClick={() => setSelected(null)} style={{ fontSize: 12, padding: '8px 16px' }}>
              CERRAR
            </button>
          </div>
        </div>
      )}

      {/* Filters */}
      <div
        className="card"
        style={{ padding: '16px 20px', marginBottom: 20, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}
      >
        <input
          type="text"
          placeholder="🔍  Buscar torneo o ciudad..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 200, padding: '9px 14px' }}
        />

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {modes.map(m => (
            <button
              key={m}
              onClick={() => setFilterMode(m)}
              style={{
                padding: '6px 12px',
                borderRadius: 6,
                border: `1px solid ${filterMode === m ? '#f5a623' : 'rgba(255,255,255,0.1)'}`,
                background: filterMode === m ? 'rgba(245,166,35,0.12)' : 'transparent',
                color: filterMode === m ? '#f5a623' : 'rgba(255,255,255,0.5)',
                fontSize: 12,
                fontFamily: 'Rajdhani',
                fontWeight: 600,
                cursor: 'pointer',
                letterSpacing: '0.05em',
                transition: 'all 0.15s',
              }}
            >
              {m.toUpperCase()}
            </button>
          ))}
        </div>

        <select
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
          style={{ padding: '9px 12px', minWidth: 150 }}
        >
          {statuses.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Tournament list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 24px', color: 'rgba(255,255,255,0.3)', fontSize: 15 }}>
            No se encontraron torneos con esos filtros.
          </div>
        ) : (
          filtered.map(t => (
            <div
              key={t.id}
              className="card"
              onClick={() => setSelected(t.id)}
              style={{
                padding: '16px 20px',
                cursor: 'pointer',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto auto auto',
                alignItems: 'center',
                gap: 16,
                border: selected === t.id ? '1px solid rgba(245,166,35,0.4)' : '1px solid rgba(57,255,20,0.12)',
              }}
            >
              <PoolBall n={t.ball} size={40} />
              <div>
                <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 3 }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', display: 'flex', gap: 12 }}>
                  <span>🗓 {t.date}</span>
                  <span>📍 {t.city}</span>
                  <span>👥 {t.players} jugadores</span>
                </div>
              </div>
              <span className="tag-cyan" style={{ fontSize: 10 }}>{t.mode.toUpperCase()}</span>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: 4,
                  background: `${STATUS_COLORS[t.status] || '#888'}14`,
                  border: `1px solid ${STATUS_COLORS[t.status] || '#888'}33`,
                  color: STATUS_COLORS[t.status] || '#888',
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: 'Rajdhani',
                  letterSpacing: '0.07em',
                  whiteSpace: 'nowrap',
                }}
              >
                {t.status.toUpperCase()}
              </span>
              <button
                className="btn-outline"
                style={{ fontSize: 11, padding: '6px 14px' }}
                onClick={e => { e.stopPropagation(); setSelected(t.id) }}
              >
                VER TORNEO
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
