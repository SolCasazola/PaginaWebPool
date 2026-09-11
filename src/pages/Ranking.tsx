import { useState } from 'react'
import type { Navigate } from '../App'

const PLAYERS = [
  { pos: 1, name: 'Diego "El Maestro" Torres', city: 'Buenos Aires', points: 4820, tournaments: 28, wins: 22 },
  { pos: 2, name: 'Carlos Riquelme', city: 'Córdoba', points: 4410, tournaments: 25, wins: 18 },
  { pos: 3, name: 'Marcos Villalba', city: 'Rosario', points: 4180, tournaments: 30, wins: 16 },
  { pos: 4, name: 'Julián Ferreyra', city: 'Mendoza', points: 3950, tournaments: 22, wins: 14 },
  { pos: 5, name: 'Paula "La Zurda" Soto', city: 'Buenos Aires', points: 3720, tournaments: 20, wins: 13 },
  { pos: 6, name: 'Roberto Álvarez', city: 'Santa Fe', points: 3560, tournaments: 18, wins: 11 },
  { pos: 7, name: 'Laura Giménez', city: 'Córdoba', points: 3340, tournaments: 24, wins: 10 },
  { pos: 8, name: 'Nicolás Ponce', city: 'Buenos Aires', points: 3120, tournaments: 16, wins: 9 },
  { pos: 9, name: 'Valeria Moreno', city: 'Rosario', points: 2900, tournaments: 19, wins: 8 },
  { pos: 10, name: 'Hernán Castillo', city: 'Tucumán', points: 2780, tournaments: 14, wins: 7 },
]

const MEDALS = ['🥇', '🥈', '🥉']
const MEDAL_COLORS = ['#f5a623', '#9ca3af', '#cd7f32']
const MEDAL_BG = ['rgba(245,166,35,0.1)', 'rgba(156,163,175,0.08)', 'rgba(205,127,50,0.08)']
const MEDAL_BORDER = ['rgba(245,166,35,0.35)', 'rgba(156,163,175,0.2)', 'rgba(205,127,50,0.25)']

export default function Ranking({ navigate }: { navigate: Navigate }) {
  const [filter, setFilter] = useState('GLOBAL')

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '44px 24px 60px' }}>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <span className="tag-gold" style={{ marginBottom: 14, display: 'inline-block' }}>CLASIFICACIÓN</span>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <h1
            style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontWeight: 700,
              fontSize: 52,
              color: '#fff',
              margin: 0,
            }}
          >
            RANKING{' '}
            <span style={{ color: '#f5a623', textShadow: '0 0 24px rgba(245,166,35,0.45)' }}>
              OFICIAL
            </span>
          </h1>
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 6 }}>
            {['GLOBAL', 'ARGENTINA', 'CIUDAD'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 7,
                  border: `1px solid ${filter === f ? '#f5a623' : 'rgba(255,255,255,0.1)'}`,
                  background: filter === f ? 'rgba(245,166,35,0.12)' : 'transparent',
                  color: filter === f ? '#f5a623' : 'rgba(255,255,255,0.5)',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: '0.07em',
                  cursor: 'pointer',
                  transition: 'all 0.18s',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Podium — top 3 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
        {PLAYERS.slice(0, 3).map((p, i) => (
          <div
            key={i}
            style={{
              background: MEDAL_BG[i],
              border: `1px solid ${MEDAL_BORDER[i]}`,
              borderRadius: 12,
              padding: '24px 20px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              position: 'relative',
              overflow: 'hidden',
            }}
            onClick={() => navigate('perfil')}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 8px 28px ${MEDAL_COLORS[i]}22` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            {i === 0 && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#f5a623', boxShadow: '0 0 12px rgba(245,166,35,0.6)' }} />
            )}
            <div style={{ fontSize: 38, marginBottom: 8 }}>{MEDALS[i]}</div>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${MEDAL_COLORS[i]}44, ${MEDAL_COLORS[i]}22)`,
                border: `2px solid ${MEDAL_COLORS[i]}`,
                margin: '0 auto 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Rajdhani',
                fontWeight: 700,
                fontSize: 22,
                color: MEDAL_COLORS[i],
              }}
            >
              {p.name[0]}
            </div>
            <div
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontWeight: 700,
                fontSize: 16,
                color: '#fff',
                marginBottom: 4,
                lineHeight: 1.3,
              }}
            >
              {p.name}
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>{p.city}</div>
            <div
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontWeight: 700,
                fontSize: 32,
                color: MEDAL_COLORS[i],
                lineHeight: 1,
                textShadow: `0 0 16px ${MEDAL_COLORS[i]}55`,
              }}
            >
              {p.points.toLocaleString()}
            </div>
            <div style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', fontFamily: 'Rajdhani', fontWeight: 600, marginTop: 3 }}>
              PUNTOS
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 14 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', fontFamily: 'Rajdhani' }}>{p.tournaments}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>Torneos</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#39ff14', fontFamily: 'Rajdhani' }}>{p.wins}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>Victorias</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full ranking table */}
      <div className="card" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(57,255,20,0.15)' }}>
              {['POS', 'JUGADOR', 'CIUDAD', 'PUNTOS', 'TORNEOS', 'VICTORIAS', ''].map(h => (
                <th
                  key={h}
                  style={{
                    padding: '14px 20px',
                    textAlign: h === 'POS' || h === 'PUNTOS' || h === 'TORNEOS' || h === 'VICTORIAS' ? 'center' : 'left',
                    fontFamily: 'Rajdhani, sans-serif',
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.35)',
                    textTransform: 'uppercase',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PLAYERS.map((p, i) => (
              <tr
                key={i}
                onClick={() => navigate('perfil')}
                style={{
                  borderBottom: i < PLAYERS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  cursor: 'pointer',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(57,255,20,0.04)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: i < 3 ? `${MEDAL_COLORS[i]}18` : 'rgba(255,255,255,0.06)',
                      border: `1px solid ${i < 3 ? MEDAL_COLORS[i] : 'rgba(255,255,255,0.12)'}`,
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Rajdhani',
                      fontWeight: 700,
                      fontSize: 12,
                      color: i < 3 ? MEDAL_COLORS[i] : 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {p.pos}
                  </span>
                </td>
                <td style={{ padding: '14px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: '50%',
                        background: `hsl(${p.pos * 37}, 65%, 40%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Rajdhani',
                        fontWeight: 700,
                        fontSize: 14,
                        color: 'white',
                        flexShrink: 0,
                      }}
                    >
                      {p.name[0]}
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>{p.name}</span>
                  </div>
                </td>
                <td style={{ padding: '14px 20px', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{p.city}</td>
                <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'Rajdhani',
                      fontWeight: 700,
                      fontSize: 18,
                      color: '#39ff14',
                    }}
                  >
                    {p.points.toLocaleString()}
                  </span>
                </td>
                <td style={{ padding: '14px 20px', textAlign: 'center', fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>
                  {p.tournaments}
                </td>
                <td style={{ padding: '14px 20px', textAlign: 'center', fontSize: 14, color: '#39ff14', fontWeight: 600 }}>
                  {p.wins}
                </td>
                <td style={{ padding: '14px 20px' }}>
                  <button
                    className="btn-outline"
                    style={{ fontSize: 11, padding: '5px 12px' }}
                    onClick={e => { e.stopPropagation(); navigate('perfil') }}
                  >
                    VER PERFIL
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
