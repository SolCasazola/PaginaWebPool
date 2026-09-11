import { useState } from 'react'
import type { Navigate } from '../App'

const CATEGORIES = [
  { id: 'todos', label: 'Todos', icon: '🌐', count: 128 },
  { id: 'preguntas', label: 'Preguntas', icon: '❓', count: 45 },
  { id: 'consejos', label: 'Consejos', icon: '💡', count: 33 },
  { id: 'debates', label: 'Debates', icon: '💬', count: 28 },
  { id: 'tiros', label: 'Mejores Tiros', icon: '🎱', count: 22 },
]

const POSTS = [
  {
    id: 1,
    category: 'preguntas',
    user: 'Marcos_92',
    color: '#3b82f6',
    time: 'Hace 2h',
    title: '¿Qué taco recomiendan para empezar?',
    body: 'Hola a todos. Soy nuevo en el pool y quiero comprar mi primer taco. ¿Cuál recomiendan para principiantes? ¿Conviene ir a un cue de dos piezas desde el principio?',
    likes: 24,
    comments: 12,
    liked: false,
  },
  {
    id: 2,
    category: 'tiros',
    user: 'LauPool',
    color: '#8b5cf6',
    time: 'Hace 4h',
    title: 'Les comparto mi mejor tiro de la semana 🎱',
    body: 'Logré una combinación imposible en el torneo del sábado. Combiné la 3 y la 8 en la misma tronera. El video está en Instagram. ¡No lo podía creer!',
    likes: 87,
    comments: 8,
    liked: true,
  },
  {
    id: 3,
    category: 'preguntas',
    user: 'JulianC',
    color: '#ef4444',
    time: 'Hace 6h',
    title: '¿Cómo mejorar el efecto en la bola blanca?',
    body: 'Llevo 6 meses jugando y no logro dominar el topspin consistentemente. Cada vez que intento dar efecto hacia arriba la bola blanca se va de lado. ¿Algún consejo sobre la posición del taco?',
    likes: 41,
    comments: 15,
    liked: false,
  },
  {
    id: 4,
    category: 'consejos',
    user: 'ProCarambola',
    color: '#16a34a',
    time: 'Hace 1d',
    title: 'Consejo del día: La importancia de la posición',
    body: 'Muchos novatos se enfocan en embocar la bola y olvidan el posicionamiento de la blanca. Si no pensás dos jugadas adelante, vas a perder la mesa. Practicá tirando la blanca sin otras bolas hasta dominar su control.',
    likes: 156,
    comments: 22,
    liked: false,
  },
  {
    id: 5,
    category: 'debates',
    user: 'TorneosAR',
    color: '#f5a623',
    time: 'Hace 2d',
    title: '¿Bola 8 o Bola 9? ¿Cuál es la mejor modalidad?',
    body: 'El eterno debate del pool argentino. ¿La velocidad del Bola 9 o la estrategia profunda del Bola 8? ¿Qué preferís jugar y por qué? Yo voto Bola 9 por la dinámica.',
    likes: 203,
    comments: 64,
    liked: false,
  },
]

export default function Comunidad({ navigate }: { navigate: Navigate }) {
  const [category, setCategory] = useState('todos')
  const [likes, setLikes] = useState<Record<number, boolean>>({ 2: true })
  const [newPost, setNewPost] = useState(false)
  const [postText, setPostText] = useState('')
  const [expanded, setExpanded] = useState<number | null>(null)

  const filtered = POSTS.filter(p => category === 'todos' || p.category === category)

  const toggleLike = (id: number) => {
    setLikes(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '44px 24px 60px' }}>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <span className="tag-violet" style={{ marginBottom: 14, display: 'inline-block' }}>FORO</span>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <h1
            style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontWeight: 700,
              fontSize: 52,
              color: '#fff',
              margin: 0,
            }}
          >
            COMUNIDAD{' '}
            <span style={{ color: '#8b5cf6', textShadow: '0 0 24px rgba(139,92,246,0.45)' }}>
              POOL
            </span>
          </h1>
          <button
            className="btn-neon"
            onClick={() => setNewPost(!newPost)}
            style={{ background: '#8b5cf6', color: 'white' }}
          >
            ✍️ PUBLICAR
          </button>
        </div>
      </div>

      {/* New post form */}
      {newPost && (
        <div className="card-violet" style={{ padding: 20, marginBottom: 20 }}>
          <textarea
            value={postText}
            onChange={e => setPostText(e.target.value)}
            placeholder="Compartí tu experiencia, pregunta o consejo..."
            rows={4}
            style={{
              width: '100%',
              padding: '12px 14px',
              resize: 'vertical',
              marginBottom: 12,
              background: '#141720',
              border: '1px solid rgba(139,92,246,0.3)',
              borderRadius: 8,
            }}
          />
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              className="btn-neon"
              style={{ background: '#8b5cf6', color: 'white', fontSize: 12, padding: '8px 18px' }}
              onClick={() => { setNewPost(false); setPostText('') }}
            >
              PUBLICAR
            </button>
            <button
              className="btn-outline"
              style={{ color: '#8b5cf6', borderColor: 'rgba(139,92,246,0.4)', fontSize: 12, padding: '8px 18px' }}
              onClick={() => { setNewPost(false); setPostText('') }}
            >
              CANCELAR
            </button>
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 20 }}>
        {/* Sidebar — categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div
            style={{
              fontFamily: 'Rajdhani',
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.35)',
              textTransform: 'uppercase',
              marginBottom: 4,
              padding: '0 4px',
            }}
          >
            CATEGORÍAS
          </div>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: 8,
                border: `1px solid ${category === cat.id ? 'rgba(139,92,246,0.4)' : 'transparent'}`,
                background: category === cat.id ? 'rgba(139,92,246,0.1)' : 'rgba(255,255,255,0.03)',
                color: category === cat.id ? '#8b5cf6' : 'rgba(255,255,255,0.55)',
                cursor: 'pointer',
                fontFamily: 'Rajdhani',
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: '0.04em',
                textAlign: 'left',
                transition: 'all 0.15s',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>{cat.icon}</span>
                {cat.label}
              </span>
              <span
                style={{
                  fontSize: 10,
                  background: category === cat.id ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.08)',
                  borderRadius: 10,
                  padding: '1px 6px',
                  color: category === cat.id ? '#8b5cf6' : 'rgba(255,255,255,0.3)',
                }}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Posts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filtered.map(post => (
            <div key={post.id} className="card" style={{ padding: '20px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: post.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    fontWeight: 700,
                    color: 'white',
                    flexShrink: 0,
                  }}
                >
                  {post.user[0]}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2 }}>
                    <span style={{ fontWeight: 600, fontSize: 14, color: '#fff' }}>{post.user}</span>
                    <span
                      style={{
                        fontSize: 10,
                        padding: '2px 7px',
                        borderRadius: 4,
                        background: post.category === 'preguntas' ? 'rgba(0,212,255,0.1)' :
                          post.category === 'consejos' ? 'rgba(57,255,20,0.1)' :
                          post.category === 'debates' ? 'rgba(245,166,35,0.1)' : 'rgba(139,92,246,0.1)',
                        color: post.category === 'preguntas' ? '#00d4ff' :
                          post.category === 'consejos' ? '#39ff14' :
                          post.category === 'debates' ? '#f5a623' : '#8b5cf6',
                        border: `1px solid ${post.category === 'preguntas' ? 'rgba(0,212,255,0.25)' :
                          post.category === 'consejos' ? 'rgba(57,255,20,0.25)' :
                          post.category === 'debates' ? 'rgba(245,166,35,0.25)' : 'rgba(139,92,246,0.25)'}`,
                        fontFamily: 'Rajdhani',
                        fontWeight: 700,
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {CATEGORIES.find(c => c.id === post.category)?.label}
                    </span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginLeft: 'auto' }}>{post.time}</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: 700,
                  fontSize: 17,
                  color: '#fff',
                  marginBottom: 8,
                  lineHeight: 1.3,
                  cursor: 'pointer',
                }}
                onClick={() => setExpanded(expanded === post.id ? null : post.id)}
              >
                {post.title}
              </div>

              {expanded === post.id && (
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.58)', lineHeight: 1.65, margin: '0 0 12px' }}>
                  {post.body}
                </p>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button
                  onClick={() => toggleLike(post.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: likes[post.id] ? '#39ff14' : 'rgba(255,255,255,0.35)',
                    fontSize: 13,
                    fontWeight: 600,
                    transition: 'color 0.15s',
                  }}
                >
                  {likes[post.id] ? '❤️' : '🤍'}
                  <span>{post.likes + (likes[post.id] && !post.liked ? 1 : !likes[post.id] && post.liked ? -1 : 0)}</span>
                </button>

                <button
                  onClick={() => setExpanded(expanded === post.id ? null : post.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'rgba(255,255,255,0.35)',
                    fontSize: 13,
                    fontWeight: 600,
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                >
                  💬 {post.comments}
                </button>

                <button
                  className="btn-outline"
                  style={{ marginLeft: 'auto', fontSize: 11, padding: '5px 14px', color: '#8b5cf6', borderColor: 'rgba(139,92,246,0.4)' }}
                  onClick={() => setExpanded(expanded === post.id ? null : post.id)}
                >
                  VER DISCUSIÓN
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
