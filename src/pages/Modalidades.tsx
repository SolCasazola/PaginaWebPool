import { useState } from 'react'
import type { Navigate } from '../App'

const MODES = [
  {
    name: 'BOLA 8',
    subtitle: '8-Ball Pool',
    desc: 'La modalidad más popular del mundo. Un jugador emboca las bolas sólidas (1–7) y el otro las rayadas (9–15). El primero en embocar la bola 8 correctamente gana.',
    ball: 8,
    color: '#39ff14',
    img: 'https://images.unsplash.com/photo-1688692449887-42d9dd2f0c37?w=500&h=280&fit=crop&auto=format',
    rules: ['Se juega con 16 bolas: 7 sólidas, 7 rayadas, la 8 y la blanca.', 'La bola 8 solo puede embocarse al final.', 'Embocar la 8 prematuramente significa derrota.', 'Estilo: potencia y estrategia de posición.'],
    players: '2 jugadores',
    duration: '20–40 min',
  },
  {
    name: 'BOLA 9',
    subtitle: '9-Ball Pool',
    desc: 'Se juega con las bolas del 1 al 9. Hay que golpear siempre la bola de menor número. El que emboca la bola 9 —de cualquier manera legal— gana la partida.',
    ball: 9,
    color: '#00d4ff',
    img: 'https://images.unsplash.com/photo-1771021184654-f47ff0f274c9?w=500&h=280&fit=crop&auto=format',
    rules: ['Se juega con bolas del 1 al 9.', 'La bola blanca debe golpear primero la de menor número.', 'Embocar la 9 legalmente gana la partida inmediatamente.', 'Estilo: dinámico y veloz.'],
    players: '2 jugadores',
    duration: '10–20 min',
  },
  {
    name: 'BOLA 10',
    subtitle: '10-Ball Pool',
    desc: 'Variante más exigente del Bola 9. El jugador debe declarar la bola que va a embocar antes de cada tiro. Requiere mayor precisión y planificación táctica.',
    ball: 10,
    color: '#8b5cf6',
    img: 'https://images.unsplash.com/photo-1788404881147-f787dd3a2b38?w=500&h=280&fit=crop&auto=format',
    rules: ['Se juega con bolas del 1 al 10.', 'Cada tiro debe declararse antes de ejecutarse.', 'La bola 10 gana la partida si se emboca legalmente.', 'Estilo: técnico y estratégico.'],
    players: '2 jugadores',
    duration: '15–30 min',
  },
  {
    name: 'SNOOKER',
    subtitle: 'English Snooker',
    desc: 'Jugado en una mesa más grande con 21 bolas de colores y 15 bolas rojas. Sistema de puntuación por colores. Requiere altísima precisión y paciencia táctica.',
    ball: 1,
    color: '#f5a623',
    img: 'https://images.unsplash.com/photo-1665406857699-dda0175bd380?w=500&h=280&fit=crop&auto=format',
    rules: ['Mesa de 12x6 pies con 21 bolas de colores y 15 rojas.', 'Las rojas valen 1 punto; los colores de 2 a 7.', 'Se alternan golpes a roja y color hasta limpiar la mesa.', 'Estilo: precisión extrema y juego táctico.'],
    players: '2 jugadores',
    duration: '45–90 min',
  },
  {
    name: 'CARAMBOLA',
    subtitle: 'Carom Billiards',
    desc: 'Se juega en una mesa sin troneras con solo 3 bolas. El objetivo es hacer que la bola blanca toque las otras dos bolas en el mismo tiro. Pura técnica de precisión.',
    ball: 2,
    color: '#ef4444',
    img: 'https://images.unsplash.com/photo-1688692449887-42d9dd2f0c37?w=500&h=280&fit=crop&auto=format',
    rules: ['Mesa sin troneras. Solo 3 bolas: 2 blancas y 1 roja.', 'El objetivo es tocar ambas bolas en un solo tiro.', 'Variantes: libre, cadete, tres bandas.', 'Estilo: elegancia y cálculo matemático.'],
    players: '2 jugadores',
    duration: '30–60 min',
  },
]

export default function Modalidades({ navigate }: { navigate: Navigate }) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '44px 24px 60px' }}>
      <div style={{ marginBottom: 40 }}>
        <span className="tag-violet" style={{ marginBottom: 14, display: 'inline-block' }}>MODALIDADES</span>
        <h1
          style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 700,
            fontSize: 52,
            color: '#fff',
            margin: '0 0 12px',
          }}
        >
          CONOCÉ TODAS LAS{' '}
          <span style={{ color: '#8b5cf6', textShadow: '0 0 24px rgba(139,92,246,0.45)' }}>
            MODALIDADES
          </span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 16, margin: 0, maxWidth: 500 }}>
          Desde el clásico Bola 8 hasta la elegancia de la Carambola. Elegí la que más te guste y conocé sus reglas.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {MODES.map((m, i) => (
          <div key={i}>
            <div
              className="card"
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                border: selected === i ? `1px solid ${m.color}` : '1px solid rgba(255,255,255,0.08)',
                boxShadow: selected === i ? `0 0 28px ${m.color}22` : 'none',
                transition: 'all 0.22s',
              }}
              onClick={() => setSelected(selected === i ? null : i)}
            >
              <div style={{ position: 'relative', height: 160, overflow: 'hidden' }}>
                <img
                  src={m.img}
                  alt={m.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                    transform: selected === i ? 'scale(1.05)' : 'scale(1)',
                    filter: 'brightness(0.55) saturate(1.2)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${m.color}22 0%, transparent 60%), linear-gradient(to bottom, transparent 40%, rgba(15,17,23,0.88))`,
                  }}
                />
                <div style={{ position: 'absolute', top: 14, left: 14 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '50%',
                      background: m.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Inter',
                      fontWeight: 900,
                      fontSize: 18,
                      color: '#0a0a0a',
                      boxShadow: `0 0 16px ${m.color}66`,
                    }}
                  >
                    {m.ball}
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: 12, left: 14 }}>
                  <div
                    style={{
                      fontFamily: 'Rajdhani, sans-serif',
                      fontWeight: 700,
                      fontSize: 22,
                      color: '#fff',
                      lineHeight: 1,
                      textShadow: '0 1px 8px rgba(0,0,0,0.6)',
                    }}
                  >
                    {m.name}
                  </div>
                  <div style={{ fontSize: 12, color: m.color, fontWeight: 600, marginTop: 2 }}>{m.subtitle}</div>
                </div>
              </div>

              <div style={{ padding: '16px 18px' }}>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: '0 0 14px' }}>
                  {m.desc}
                </p>

                <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
                  <span
                    style={{
                      fontSize: 11,
                      color: 'rgba(255,255,255,0.4)',
                      background: 'rgba(255,255,255,0.06)',
                      borderRadius: 4,
                      padding: '3px 8px',
                    }}
                  >
                    👥 {m.players}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: 'rgba(255,255,255,0.4)',
                      background: 'rgba(255,255,255,0.06)',
                      borderRadius: 4,
                      padding: '3px 8px',
                    }}
                  >
                    ⏱ {m.duration}
                  </span>
                </div>

                <button
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '8px 16px',
                    background: 'transparent',
                    color: m.color,
                    border: `1px solid ${m.color}66`,
                    borderRadius: 7,
                    cursor: 'pointer',
                    fontFamily: 'Rajdhani, sans-serif',
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: '0.07em',
                    transition: 'background 0.18s, border-color 0.18s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${m.color}18`; e.currentTarget.style.borderColor = m.color }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = `${m.color}66` }}
                  onClick={e => { e.stopPropagation(); setSelected(selected === i ? null : i) }}
                >
                  {selected === i ? '▲ OCULTAR REGLAS' : '▼ VER REGLAS'}
                </button>
              </div>

              {/* Expanded rules */}
              {selected === i && (
                <div
                  style={{
                    margin: '0 18px 18px',
                    padding: '16px',
                    background: `${m.color}08`,
                    border: `1px solid ${m.color}33`,
                    borderRadius: 8,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Rajdhani, sans-serif',
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: '0.1em',
                      color: m.color,
                      marginBottom: 10,
                      textTransform: 'uppercase',
                    }}
                  >
                    REGLAS PRINCIPALES
                  </div>
                  <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {m.rules.map((r, ri) => (
                      <li key={ri} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
                        <span style={{ color: m.color, marginTop: 2, flexShrink: 0, fontSize: 9 }}>◆</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
