import { useState } from 'react'
import type { Navigate } from '../App'

const NEWS = [
  {
    id: 1,
    category: 'Torneos',
    catColor: '#f5a623',
    title: 'Shane Van Boening gana el US Open 9-Ball por octava vez',
    date: '8 Sep 2024',
    summary: 'El bicampeón estadounidense dominó el torneo más importante del año con una actuación impecable, derrotando a Ko Pin Yi en la final por 11-7.',
    img: 'https://images.unsplash.com/photo-1688692449887-42d9dd2f0c37?w=600&h=340&fit=crop&auto=format',
    featured: true,
  },
  {
    id: 2,
    category: 'Jugadores',
    catColor: '#00d4ff',
    title: 'Efren Reyes cumple 60 años: el legado del "Mago" del pool',
    date: '5 Sep 2024',
    summary: 'El filipino más legendario del pool celebró su cumpleaños con una exhibición especial. Su influencia en el juego moderno es incalculable.',
    img: 'https://images.unsplash.com/photo-1771021184654-f47ff0f274c9?w=600&h=340&fit=crop&auto=format',
    featured: true,
  },
  {
    id: 3,
    category: 'Eventos',
    catColor: '#8b5cf6',
    title: 'El Pool llega al streaming: se transmiten torneos en vivo',
    date: '3 Sep 2024',
    summary: 'Por primera vez en Argentina, tres torneos nacionales serán transmitidos en vivo por plataformas digitales. Una nueva era para el deporte.',
    img: 'https://images.unsplash.com/photo-1788404881147-f787dd3a2b38?w=600&h=340&fit=crop&auto=format',
    featured: false,
  },
  {
    id: 4,
    category: 'Consejos',
    catColor: '#39ff14',
    title: '5 técnicas que mejorarán tu juego de defensa',
    date: '1 Sep 2024',
    summary: 'La defensa es el aspecto más subestimado del pool amateur. Te enseñamos a colocar la bola blanca en posiciones que frustren a cualquier rival.',
    img: 'https://images.unsplash.com/photo-1665406857699-dda0175bd380?w=600&h=340&fit=crop&auto=format',
    featured: false,
  },
  {
    id: 5,
    category: 'Torneos',
    catColor: '#f5a623',
    title: 'Resultados del Campeonato Argentino de Bola 9',
    date: '28 Ago 2024',
    summary: 'Diego Torres se coronó campeón nacional en una final épica disputada en Buenos Aires. El torneo reunió a 128 jugadores de todo el país.',
    img: 'https://images.unsplash.com/photo-1688692449887-42d9dd2f0c37?w=600&h=340&fit=crop&auto=format',
    featured: false,
  },
  {
    id: 6,
    category: 'Jugadores',
    catColor: '#00d4ff',
    title: 'Ko Pin Yi: el maestro del Bola 10 que redefine el juego',
    date: '25 Ago 2024',
    summary: 'El jugador taiwanés demuestra que la técnica y la precisión son superiores a la fuerza bruta. Analizamos su estilo único.',
    img: 'https://images.unsplash.com/photo-1771021184654-f47ff0f274c9?w=600&h=340&fit=crop&auto=format',
    featured: false,
  },
]

const CATEGORIES = ['Todos', 'Torneos', 'Jugadores', 'Eventos', 'Consejos']

export default function Noticias({ navigate }: { navigate: Navigate }) {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [expanded, setExpanded] = useState<number | null>(null)

  const featured = NEWS.filter(n => n.featured)
  const filtered = NEWS.filter(n => !n.featured && (activeCategory === 'Todos' || n.category === activeCategory))

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '44px 24px 60px' }}>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <span className="tag-neon" style={{ marginBottom: 14, display: 'inline-block' }}>ACTUALIDAD</span>
        <h1
          style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 700,
            fontSize: 52,
            color: '#fff',
            margin: '0 0 12px',
          }}
        >
          NOTICIAS{' '}
          <span style={{ color: '#39ff14', textShadow: '0 0 24px rgba(57,255,20,0.45)' }}>
            DEL POOL
          </span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, margin: 0 }}>
          Todo lo que pasa en el mundo del pool, billar y snooker.
        </p>
      </div>

      {/* Featured — 2-col grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 32 }}>
        {featured.map(n => (
          <div
            key={n.id}
            className="card"
            style={{ cursor: 'pointer', overflow: 'hidden' }}
            onClick={() => setExpanded(expanded === n.id ? null : n.id)}
          >
            <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
              <img
                src={n.img}
                alt={n.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)', transition: 'transform 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(15,17,23,0.9))' }} />
              <div style={{ position: 'absolute', top: 14, left: 14 }}>
                <span
                  style={{
                    padding: '3px 10px',
                    borderRadius: 4,
                    background: `${n.catColor}20`,
                    border: `1px solid ${n.catColor}55`,
                    color: n.catColor,
                    fontSize: 10,
                    fontFamily: 'Rajdhani',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                  }}
                >
                  {n.category.toUpperCase()} ★ DESTACADO
                </span>
              </div>
              <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
                <div
                  style={{
                    fontFamily: 'Rajdhani',
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#fff',
                    lineHeight: 1.3,
                    textShadow: '0 1px 8px rgba(0,0,0,0.7)',
                  }}
                >
                  {n.title}
                </div>
              </div>
            </div>
            <div style={{ padding: '16px 18px' }}>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: '0 0 14px' }}>
                {n.summary}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>📅 {n.date}</span>
                <button className="btn-neon" style={{ fontSize: 11, padding: '6px 14px' }}>
                  LEER MÁS →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Category filter */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {CATEGORIES.map(c => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            style={{
              padding: '7px 14px',
              borderRadius: 7,
              border: `1px solid ${activeCategory === c ? '#39ff14' : 'rgba(255,255,255,0.1)'}`,
              background: activeCategory === c ? 'rgba(57,255,20,0.1)' : 'transparent',
              color: activeCategory === c ? '#39ff14' : 'rgba(255,255,255,0.5)',
              fontFamily: 'Rajdhani',
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: '0.06em',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {c.toUpperCase()}
          </button>
        ))}
      </div>

      {/* More news grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {filtered.map(n => (
          <div
            key={n.id}
            className="card"
            style={{ cursor: 'pointer', overflow: 'hidden' }}
            onClick={() => setExpanded(expanded === n.id ? null : n.id)}
          >
            <div style={{ position: 'relative', height: 140, overflow: 'hidden' }}>
              <img
                src={n.img}
                alt={n.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)', transition: 'transform 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(15,17,23,0.85))' }} />
              <div style={{ position: 'absolute', top: 10, left: 12 }}>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: 4,
                    background: `${n.catColor}18`,
                    border: `1px solid ${n.catColor}44`,
                    color: n.catColor,
                    fontSize: 9,
                    fontFamily: 'Rajdhani',
                    fontWeight: 700,
                    letterSpacing: '0.07em',
                  }}
                >
                  {n.category.toUpperCase()}
                </span>
              </div>
            </div>
            <div style={{ padding: '14px 16px' }}>
              <div
                style={{
                  fontFamily: 'Rajdhani',
                  fontWeight: 700,
                  fontSize: 15,
                  color: '#fff',
                  lineHeight: 1.3,
                  marginBottom: 8,
                }}
              >
                {n.title}
              </div>
              {expanded === n.id && (
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.52)', lineHeight: 1.6, margin: '0 0 10px' }}>
                  {n.summary}
                </p>
              )}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)' }}>{n.date}</span>
                <button className="btn-outline" style={{ fontSize: 10, padding: '5px 12px' }}>
                  LEER MÁS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
