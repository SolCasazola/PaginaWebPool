import { useState } from 'react'
import type { Navigate } from '../App'

const LEVELS = [
  {
    id: 'principiante',
    label: 'PRINCIPIANTE',
    color: '#39ff14',
    icon: '🎱',
    topics: ['Posición básica del cuerpo', 'Cómo sostener el taco correctamente', 'Cómo apuntar y alinear el tiro', 'Normas básicas del juego', 'El agarre del puente'],
  },
  {
    id: 'intermedio',
    label: 'INTERMEDIO',
    color: '#00d4ff',
    icon: '🎯',
    topics: ['Efectos: topspin y backspin', 'Control de la bola blanca', 'Tiros con banda y carambola', 'Planificación de la posición', 'Defensa y seguridad'],
  },
  {
    id: 'avanzado',
    label: 'AVANZADO',
    color: '#f5a623',
    icon: '🏆',
    topics: ['Estrategias de partida', 'Posicionamiento avanzado', 'Combinaciones y seriadas', 'Presión mental y enfoque', 'Lectura de la mesa'],
  },
]

const TUTORIALS = [
  {
    title: 'Cómo tomar el taco correctamente',
    level: 'Principiante',
    levelColor: '#39ff14',
    duration: '8 min',
    img: 'https://images.unsplash.com/photo-1665406857699-dda0175bd380?w=400&h=220&fit=crop&auto=format',
  },
  {
    title: 'Dominar el efecto de la bola blanca',
    level: 'Intermedio',
    levelColor: '#00d4ff',
    duration: '14 min',
    img: 'https://images.unsplash.com/photo-1771021184654-f47ff0f274c9?w=400&h=220&fit=crop&auto=format',
  },
  {
    title: 'Estrategias de apertura Bola 9',
    level: 'Avanzado',
    levelColor: '#f5a623',
    duration: '22 min',
    img: 'https://images.unsplash.com/photo-1788404881147-f787dd3a2b38?w=400&h=220&fit=crop&auto=format',
  },
  {
    title: 'Tiros con banda: técnica completa',
    level: 'Intermedio',
    levelColor: '#00d4ff',
    duration: '18 min',
    img: 'https://images.unsplash.com/photo-1688692449887-42d9dd2f0c37?w=400&h=220&fit=crop&auto=format',
  },
  {
    title: 'Posición básica y stance',
    level: 'Principiante',
    levelColor: '#39ff14',
    duration: '6 min',
    img: 'https://images.unsplash.com/photo-1665406857699-dda0175bd380?w=400&h=220&fit=crop&auto=format',
  },
  {
    title: 'Combinaciones: jugadas difíciles',
    level: 'Avanzado',
    levelColor: '#f5a623',
    duration: '28 min',
    img: 'https://images.unsplash.com/photo-1771021184654-f47ff0f274c9?w=400&h=220&fit=crop&auto=format',
  },
]

export default function Aprender({ navigate }: { navigate: Navigate }) {
  const [activeLevel, setActiveLevel] = useState('principiante')
  const [activeTutorial, setActiveTutorial] = useState<number | null>(null)

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '44px 24px 60px' }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <span className="tag-neon" style={{ marginBottom: 14, display: 'inline-block' }}>EDUCACIÓN</span>
        <h1
          style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 700,
            fontSize: 52,
            color: '#fff',
            margin: '0 0 12px',
          }}
        >
          APRENDÉ A <span style={{ color: '#39ff14', textShadow: '0 0 24px rgba(57,255,20,0.45)' }}>JUGAR</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 520, lineHeight: 1.6, margin: 0 }}>
          Desde las bases hasta técnicas avanzadas. Elegí tu nivel y empezá a mejorar hoy.
        </p>
      </div>

      {/* Level selector */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 40 }}>
        {LEVELS.map(lvl => (
          <div
            key={lvl.id}
            onClick={() => setActiveLevel(lvl.id)}
            style={{
              background: activeLevel === lvl.id ? `rgba(${lvl.color === '#39ff14' ? '57,255,20' : lvl.color === '#00d4ff' ? '0,212,255' : '245,166,35'},0.08)` : '#0f1117',
              border: `1px solid ${activeLevel === lvl.id ? lvl.color : 'rgba(255,255,255,0.1)'}`,
              borderRadius: 12,
              padding: '24px 28px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: activeLevel === lvl.id ? `0 0 24px rgba(${lvl.color === '#39ff14' ? '57,255,20' : lvl.color === '#00d4ff' ? '0,212,255' : '245,166,35'},0.12)` : 'none',
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 10 }}>{lvl.icon}</div>
            <div
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontWeight: 700,
                fontSize: 18,
                color: activeLevel === lvl.id ? lvl.color : '#fff',
                letterSpacing: '0.05em',
                marginBottom: 16,
              }}
            >
              {lvl.label}
            </div>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {lvl.topics.map((t, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
                  <span style={{ color: lvl.color, fontSize: 10 }}>◆</span>
                  {t}
                </li>
              ))}
            </ul>
            <button
              className="btn-neon"
              style={{
                marginTop: 20,
                background: activeLevel === lvl.id ? lvl.color : 'transparent',
                color: activeLevel === lvl.id ? '#08090d' : lvl.color,
                border: `1.5px solid ${lvl.color}`,
                fontSize: 12,
                padding: '9px 18px',
              }}
              onClick={e => { e.stopPropagation(); navigate('jugar') }}
            >
              COMENZAR LECCIÓN
            </button>
          </div>
        ))}
      </div>

      {/* Tutorials grid */}
      <div style={{ marginBottom: 24 }}>
        <h2
          style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 700,
            fontSize: 26,
            color: '#fff',
            margin: '0 0 20px',
            letterSpacing: '0.03em',
          }}
        >
          TUTORIALES DESTACADOS
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {TUTORIALS.map((tut, i) => (
            <div
              key={i}
              className="card"
              onClick={() => setActiveTutorial(activeTutorial === i ? null : i)}
              style={{ cursor: 'pointer', overflow: 'hidden' }}
            >
              <div style={{ position: 'relative', height: 140, overflow: 'hidden' }}>
                <img
                  src={tut.img}
                  alt={tut.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                    transform: activeTutorial === i ? 'scale(1.04)' : 'scale(1)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 40%, rgba(15,17,23,0.85))',
                  }}
                />
                <div style={{ position: 'absolute', top: 10, left: 12 }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '2px 8px',
                    background: `rgba(${tut.levelColor === '#39ff14' ? '57,255,20' : tut.levelColor === '#00d4ff' ? '0,212,255' : '245,166,35'},0.15)`,
                    border: `1px solid ${tut.levelColor}`,
                    borderRadius: 4,
                    color: tut.levelColor,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.07em',
                    fontFamily: 'Rajdhani',
                  }}>
                    {tut.level.toUpperCase()}
                  </span>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 12,
                    background: 'rgba(0,0,0,0.55)',
                    borderRadius: 4,
                    padding: '2px 7px',
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  ⏱ {tut.duration}
                </div>
              </div>
              <div style={{ padding: '16px 18px' }}>
                <div
                  style={{
                    fontFamily: 'Rajdhani, sans-serif',
                    fontWeight: 700,
                    fontSize: 15,
                    color: '#fff',
                    marginBottom: 12,
                    lineHeight: 1.3,
                  }}
                >
                  {tut.title}
                </div>
                <button
                  className="btn-neon"
                  style={{ fontSize: 11, padding: '7px 16px' }}
                  onClick={e => { e.stopPropagation(); navigate('jugar') }}
                >
                  ▶ COMENZAR LECCIÓN
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
