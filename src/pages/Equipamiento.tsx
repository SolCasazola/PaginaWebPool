import { useState } from 'react'
import type { Navigate } from '../App'

const CATEGORIES = ['Todos', 'Tacos', 'Bolas', 'Mesas', 'Guantes', 'Tizas', 'Estuches', 'Accesorios']

const PRODUCTS = [
  {
    id: 1,
    name: 'Taco Predator P3 Cue',
    category: 'Tacos',
    level: 'Avanzado',
    levelColor: '#f5a623',
    price: '$85.000',
    features: ['12.75mm shaft', 'Low deflection', '58 pulgadas', 'Maple shaft premium'],
    img: 'https://images.unsplash.com/photo-1665406857699-dda0175bd380?w=400&h=300&fit=crop&auto=format',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Set Aramith Tournament',
    category: 'Bolas',
    level: 'Profesional',
    levelColor: '#ef4444',
    price: '$42.000',
    features: ['Resina phenolica', '2.25 pulgadas', 'Alta precisión', 'Set completo 16 bolas'],
    img: 'https://images.unsplash.com/photo-1688692449887-42d9dd2f0c37?w=400&h=300&fit=crop&auto=format',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Mesa Brunswick Gold Crown',
    category: 'Mesas',
    level: 'Profesional',
    levelColor: '#ef4444',
    price: '$1.200.000',
    features: ['9 pies', 'Slate triple', 'Paño Simonis 860', 'Pockets de cuero'],
    img: 'https://images.unsplash.com/photo-1788404881147-f787dd3a2b38?w=400&h=300&fit=crop&auto=format',
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Guante Predator',
    category: 'Guantes',
    level: 'Intermedio',
    levelColor: '#00d4ff',
    price: '$8.500',
    features: ['3 dedos libres', 'Lycra', 'Control del slide', 'Talle S/M/L/XL'],
    img: 'https://images.unsplash.com/photo-1771021184654-f47ff0f274c9?w=400&h=300&fit=crop&auto=format',
    rating: 4.5,
  },
  {
    id: 5,
    name: 'Tiza Master Blue Diamond',
    category: 'Tizas',
    level: 'Principiante',
    levelColor: '#39ff14',
    price: '$2.800',
    features: ['Pack x 3 unidades', 'Adherencia superior', 'Menos polvo', 'Color azul clásico'],
    img: 'https://images.unsplash.com/photo-1665406857699-dda0175bd380?w=400&h=300&fit=crop&auto=format',
    rating: 4.7,
  },
  {
    id: 6,
    name: 'Taco Iniciación Mizerak',
    category: 'Tacos',
    level: 'Principiante',
    levelColor: '#39ff14',
    price: '$18.000',
    features: ['13mm shaft', '58 pulgadas', '2 piezas', 'Ideal para comenzar'],
    img: 'https://images.unsplash.com/photo-1771021184654-f47ff0f274c9?w=400&h=300&fit=crop&auto=format',
    rating: 4.2,
  },
  {
    id: 7,
    name: 'Estuche Soft Case 2x4',
    category: 'Estuches',
    level: 'Intermedio',
    levelColor: '#00d4ff',
    price: '$14.500',
    features: ['2 tacos', '4 shafts', 'Compartimentos extra', 'Correa al hombro'],
    img: 'https://images.unsplash.com/photo-1688692449887-42d9dd2f0c37?w=400&h=300&fit=crop&auto=format',
    rating: 4.6,
  },
  {
    id: 8,
    name: 'Accesorio Rompetaco Mecánico',
    category: 'Accesorios',
    level: 'Principiante',
    levelColor: '#39ff14',
    price: '$5.200',
    features: ['Aluminio reforzado', 'Posición fija', 'Fácil de usar', 'Colores varios'],
    img: 'https://images.unsplash.com/photo-1788404881147-f787dd3a2b38?w=400&h=300&fit=crop&auto=format',
    rating: 4.3,
  },
]

export default function Equipamiento({ navigate }: { navigate: Navigate }) {
  const [category, setCategory] = useState('Todos')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<number | null>(null)

  const filtered = PRODUCTS.filter(p => {
    const matchCat = category === 'Todos' || p.category === category
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '44px 24px 60px' }}>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <span className="tag-cyan" style={{ marginBottom: 14, display: 'inline-block' }}>CATÁLOGO</span>
        <h1
          style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 700,
            fontSize: 52,
            color: '#fff',
            margin: '0 0 12px',
          }}
        >
          EQUIPAMIENTO{' '}
          <span style={{ color: '#00d4ff', textShadow: '0 0 24px rgba(0,212,255,0.45)' }}>
            PROFESIONAL
          </span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, margin: 0 }}>
          Todo lo que necesitás para jugar al máximo nivel. Precios de referencia actualizados.
        </p>
      </div>

      {/* Filters */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 14 }}>
          <input
            type="text"
            placeholder="🔍  Buscar producto..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ flex: 1, minWidth: 220, maxWidth: 360, padding: '9px 14px' }}
          />
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              style={{
                padding: '7px 14px',
                borderRadius: 7,
                border: `1px solid ${category === c ? '#00d4ff' : 'rgba(255,255,255,0.1)'}`,
                background: category === c ? 'rgba(0,212,255,0.1)' : 'transparent',
                color: category === c ? '#00d4ff' : 'rgba(255,255,255,0.5)',
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
      </div>

      {/* Product grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {filtered.map(p => (
          <div
            key={p.id}
            className="card"
            style={{
              cursor: 'pointer',
              overflow: 'hidden',
              border: selected === p.id ? '1px solid rgba(0,212,255,0.5)' : '1px solid rgba(57,255,20,0.12)',
              transition: 'all 0.2s',
            }}
            onClick={() => setSelected(selected === p.id ? null : p.id)}
          >
            <div style={{ position: 'relative', height: 150, overflow: 'hidden' }}>
              <img
                src={p.img}
                alt={p.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.55)',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', top: 10, left: 10 }}>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: 4,
                    background: `${p.levelColor}18`,
                    border: `1px solid ${p.levelColor}44`,
                    color: p.levelColor,
                    fontSize: 10,
                    fontWeight: 700,
                    fontFamily: 'Rajdhani',
                    letterSpacing: '0.07em',
                  }}
                >
                  {p.level.toUpperCase()}
                </span>
              </div>
              <div style={{ position: 'absolute', top: 10, right: 10 }}>
                <span style={{ fontSize: 12, color: '#f5a623' }}>{'★'.repeat(Math.floor(p.rating))}</span>
              </div>
            </div>

            <div style={{ padding: '14px 16px' }}>
              <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 4, lineHeight: 1.3 }}>
                {p.name}
              </div>
              <div style={{ fontSize: 11, color: '#00d4ff', fontWeight: 600, marginBottom: 10 }}>
                {p.category}
              </div>

              {selected === p.id && (
                <ul style={{ padding: 0, margin: '0 0 12px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {p.features.map((f, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>
                      <span style={{ color: '#00d4ff', fontSize: 8 }}>◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 1 }}>PRECIO REF.</div>
                  <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 20, color: '#39ff14' }}>{p.price}</div>
                </div>
                <button
                  className="btn-cyan"
                  style={{ fontSize: 10, padding: '6px 12px' }}
                  onClick={e => { e.stopPropagation(); setSelected(selected === p.id ? null : p.id) }}
                >
                  VER DETALLES
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
