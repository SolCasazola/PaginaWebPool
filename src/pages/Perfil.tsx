import { useState } from 'react'
import type { Navigate } from '../App'
import PoolBall from '../components/PoolBall'

const STATS_GRID = [
  { label: 'RANKING GLOBAL', value: '#4', color: '#f5a623', icon: '🏅' },
  { label: 'PUNTOS', value: '3.950', color: '#39ff14', icon: '⭐' },
  { label: 'TORNEOS', value: '22', color: '#00d4ff', icon: '🏆' },
  { label: 'VICTORIAS', value: '14', color: '#8b5cf6', icon: '🥇' },
  { label: 'WIN RATE', value: '63%', color: '#39ff14', icon: '📊' },
  { label: 'RACHA ACTUAL', value: '5 wins', color: '#f5a623', icon: '🔥' },
]

const ACHIEVEMENTS = [
  { name: 'Primera Victoria', icon: '🏆', earned: true, desc: 'Ganaste tu primer torneo' },
  { name: 'Maratonista', icon: '🎱', earned: true, desc: 'Jugaste 20+ torneos' },
  { name: 'Francotirador', icon: '🎯', earned: true, desc: 'Run-out perfecto en torneo' },
  { name: 'Leyenda Local', icon: '⭐', earned: true, desc: 'Top 5 ranking regional' },
  { name: 'Campeón Nacional', icon: '🥇', earned: false, desc: 'Ganar el campeonato nacional' },
  { name: 'El Maestro', icon: '🔮', earned: false, desc: 'Alcanzar top 1 del ranking' },
]

const TOURNAMENTS_PLAYED = [
  { name: 'APEN POOL 8', date: 'May 2024', result: '2do puesto', ball: 8, points: '+280' },
  { name: 'COPA MENDOZA 8', date: 'Mar 2024', result: '1er puesto', ball: 8, points: '+450' },
  { name: 'ARGENTINA CUP 9', date: 'Feb 2024', result: '3er puesto', ball: 9, points: '+180' },
  { name: 'MASTERS 10', date: 'Ene 2024', result: 'Cuartos', ball: 10, points: '+90' },
]

const POSTS = [
  { text: '¡Logré mi primer run-out en torneo! Gracias a todos por el apoyo 🎱', likes: 34, comments: 8, time: 'Hace 3d' },
  { text: '¿Alguien tiene consejos para mejorar el tiro de apertura en bola 9?', likes: 12, comments: 15, time: 'Hace 1sem' },
  { text: 'Comparto esta combinación imposible que convertí el fin de semana pasado.', likes: 87, comments: 22, time: 'Hace 2sem' },
]

export default function Perfil({ navigate }: { navigate: Navigate }) {
  const [activeTab, setActiveTab] = useState<'stats' | 'torneos' | 'logros' | 'publicaciones'>('stats')
  const [editing, setEditing] = useState(false)

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '44px 24px 60px' }}>
      {/* Profile header */}
      <div
        className="card"
        style={{
          padding: '32px',
          marginBottom: 24,
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: 28,
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0f1117 0%, #141820 100%)',
          borderColor: 'rgba(57,255,20,0.2)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: -60,
            left: -60,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(57,255,20,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Avatar */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
              border: '3px solid rgba(57,255,20,0.5)',
              boxShadow: '0 0 24px rgba(57,255,20,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Rajdhani',
              fontWeight: 700,
              fontSize: 34,
              color: 'white',
              position: 'relative',
              zIndex: 1,
            }}
          >
            J
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 4,
              right: 4,
              width: 16,
              height: 16,
              borderRadius: '50%',
              background: '#39ff14',
              border: '2px solid #0f1117',
              boxShadow: '0 0 8px rgba(57,255,20,0.8)',
            }}
          />
        </div>

        {/* Info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
            <h1
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontWeight: 700,
                fontSize: 34,
                color: '#fff',
                margin: 0,
                lineHeight: 1,
              }}
            >
              Julián Ferreyra
            </h1>
            <span className="tag-gold">NIVEL 8</span>
            <span className="tag-neon">VERIFICADO</span>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 10 }}>
            @julian_pool · Mendoza, Argentina
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            <div>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', fontFamily: 'Rajdhani', fontWeight: 700 }}>
                MODALIDAD FAVORITA
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                <PoolBall n={8} size={22} />
                <span style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>Bola 8</span>
              </div>
            </div>
            <div>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', fontFamily: 'Rajdhani', fontWeight: 700 }}>
                RANKING
              </span>
              <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 22, color: '#f5a623', lineHeight: 1.3 }}>
                #4 GLOBAL
              </div>
            </div>
            <div>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', fontFamily: 'Rajdhani', fontWeight: 700 }}>
                MIEMBRO DESDE
              </span>
              <div style={{ fontSize: 13, color: '#fff', fontWeight: 500, marginTop: 3 }}>Enero 2022</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignSelf: 'flex-start' }}>
          <button className="btn-neon" onClick={() => setEditing(!editing)}>
            ✏️ EDITAR PERFIL
          </button>
          <button className="btn-outline" onClick={() => navigate('ranking')}>
            📊 VER ESTADÍSTICAS
          </button>
          <button className="btn-outline" onClick={() => navigate('torneos')}>
            🏆 MIS TORNEOS
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 20, borderBottom: '1px solid rgba(57,255,20,0.15)', paddingBottom: 0 }}>
        {[
          { id: 'stats', label: 'ESTADÍSTICAS' },
          { id: 'torneos', label: 'TORNEOS' },
          { id: 'logros', label: 'LOGROS' },
          { id: 'publicaciones', label: 'PUBLICACIONES' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            style={{
              padding: '10px 18px',
              background: 'none',
              border: 'none',
              borderBottom: `2px solid ${activeTab === tab.id ? '#39ff14' : 'transparent'}`,
              color: activeTab === tab.id ? '#39ff14' : 'rgba(255,255,255,0.45)',
              fontFamily: 'Rajdhani, sans-serif',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.07em',
              cursor: 'pointer',
              transition: 'color 0.15s, border-color 0.15s',
              marginBottom: -1,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'stats' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {STATS_GRID.map((s, i) => (
            <div
              key={i}
              className="card"
              style={{ padding: '22px 24px', display: 'flex', alignItems: 'center', gap: 16 }}
            >
              <div style={{ fontSize: 32 }}>{s.icon}</div>
              <div>
                <div
                  style={{
                    fontFamily: 'Rajdhani',
                    fontWeight: 700,
                    fontSize: 36,
                    color: s.color,
                    lineHeight: 1,
                    textShadow: `0 0 16px ${s.color}44`,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.35)',
                    fontFamily: 'Rajdhani',
                    fontWeight: 700,
                  }}
                >
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'torneos' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {TOURNAMENTS_PLAYED.map((t, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: '16px 20px',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto auto',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <PoolBall n={t.ball} size={40} />
              <div>
                <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 2 }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>📅 {t.date}</div>
              </div>
              <span
                style={{
                  padding: '4px 10px',
                  borderRadius: 5,
                  background: t.result.includes('1er') ? 'rgba(245,166,35,0.15)' : t.result.includes('2do') ? 'rgba(156,163,175,0.12)' : 'rgba(57,255,20,0.08)',
                  border: `1px solid ${t.result.includes('1er') ? 'rgba(245,166,35,0.4)' : t.result.includes('2do') ? 'rgba(156,163,175,0.25)' : 'rgba(57,255,20,0.2)'}`,
                  color: t.result.includes('1er') ? '#f5a623' : t.result.includes('2do') ? '#9ca3af' : '#39ff14',
                  fontSize: 12,
                  fontFamily: 'Rajdhani',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                }}
              >
                {t.result}
              </span>
              <span style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 18, color: '#39ff14' }}>
                {t.points}
              </span>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'logros' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: '20px 22px',
                opacity: a.earned ? 1 : 0.4,
                filter: a.earned ? 'none' : 'grayscale(0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                borderColor: a.earned ? 'rgba(245,166,35,0.25)' : 'rgba(255,255,255,0.08)',
              }}
            >
              <div style={{ fontSize: 36 }}>{a.icon}</div>
              <div>
                <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 15, color: a.earned ? '#f5a623' : 'rgba(255,255,255,0.5)', marginBottom: 3 }}>
                  {a.name}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{a.desc}</div>
                {!a.earned && (
                  <div style={{ marginTop: 6 }}>
                    <span className="tag-neon" style={{ fontSize: 9, padding: '1px 6px' }}>POR CONSEGUIR</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'publicaciones' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 720 }}>
          {POSTS.map((p, i) => (
            <div key={i} className="card" style={{ padding: '18px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 15,
                    fontWeight: 700,
                    color: 'white',
                    flexShrink: 0,
                  }}
                >
                  J
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: '#fff', marginBottom: 1 }}>Julián Ferreyra</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{p.time}</div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, margin: '0 0 14px' }}>
                {p.text}
              </p>
              <div style={{ display: 'flex', gap: 16 }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', gap: 5 }}>
                  ❤️ {p.likes}
                </span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', gap: 5 }}>
                  💬 {p.comments}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
