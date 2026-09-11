import type { Navigate } from '../App'
import PoolBall from '../components/PoolBall'

const QUICK = [
  {
    title: 'APRENDER',
    desc: 'Reglas, técnicas y consejos para todos los niveles.',
    color: '#39ff14',
    page: 'aprender' as const,
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#39ff14" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: 'PRACTICAR',
    desc: 'Ejercicios, tiros y simulador para mejorar tu precisión.',
    color: '#00d4ff',
    page: 'jugar' as const,
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'MODALIDADES',
    desc: 'Descubrí todas las modalidades de pool.',
    color: '#8b5cf6',
    page: 'modalidades' as const,
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    title: 'TORNEOS',
    desc: 'Participá en torneos y demostrá tu talento.',
    color: '#f5a623',
    page: 'torneos' as const,
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
      </svg>
    ),
  },
  {
    title: 'COMUNIDAD',
    desc: 'Conectate con jugadores y compartí experiencias.',
    color: '#8b5cf6',
    page: 'comunidad' as const,
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

const TOURNAMENTS = [
  { name: 'APEN POOL 8', mode: 'Bola 8', date: '25 May 2024', city: 'Buenos Aires, AR', ball: 8 },
  { name: 'ARGENTINA CUP 9', mode: 'Bola 9', date: '15 Jun 2024', city: 'Córdoba, AR', ball: 9 },
  { name: 'MASTERS 10', mode: 'Bola 10', date: '10 Jul 2024', city: 'Rosario, AR', ball: 10 },
]

const COMMUNITY = [
  { user: 'Marcos_92', color: '#3b82f6', msg: '¿Qué taco recomiendan para empezar?', comments: 12, time: 'Hace 2h' },
  { user: 'LauPool', color: '#8b5cf6', msg: 'Les comparto mi mejor tiro de la semana 🎱', comments: 8, time: 'Hace 4h' },
  { user: 'JulianC', color: '#ef4444', msg: '¿Cómo mejorar el efecto en la bola blanca?', comments: 15, time: 'Hace 6h' },
]

const STATS = [
  { value: '+25K', label: 'JUGADORES ACTIVOS', icon: '👥' },
  { value: '120+', label: 'TORNEOS POR AÑO', icon: '🏆' },
  { value: '500+', label: 'GUÍAS Y CONSEJOS', icon: '🎯' },
  { value: '4.8', label: 'COMUNIDAD EN CRECIMIENTO', icon: '⭐' },
]

export default function Home({ navigate }: { navigate: Navigate }) {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: 520, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1688692449887-42d9dd2f0c37?w=1400&h=700&fit=crop&auto=format')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.45) saturate(1.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(8,9,13,0.97) 28%, rgba(8,9,13,0.78) 50%, rgba(8,9,13,0.3) 75%, rgba(8,9,13,0.08) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, transparent 60%, rgba(8,9,13,0.6) 100%)',
          }}
        />

        {/* Neon border bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background: 'rgba(57,255,20,0.4)',
            boxShadow: '0 0 12px rgba(57,255,20,0.25)',
          }}
        />

        {/* Social icons — right edge */}
        <div
          style={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            zIndex: 2,
          }}
        >
          {[
            { label: '📷', title: 'Instagram' },
            { label: '▶', title: 'YouTube' },
            { label: 'f', title: 'Facebook' },
          ].map(s => (
            <div
              key={s.title}
              title={s.title}
              style={{
                width: 32,
                height: 32,
                borderRadius: 6,
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              {s.label}
            </div>
          ))}
          <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.18)' }} />
        </div>

        {/* Hero text */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1400,
            margin: '0 auto',
            padding: '80px 24px',
            width: '100%',
          }}
        >
          <div style={{ maxWidth: 580 }}>
            <span className="tag-neon" style={{ marginBottom: 20, display: 'inline-block' }}>
              PLATAFORMA OFICIAL
            </span>
            <h1
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(42px, 6vw, 72px)',
                lineHeight: 1.0,
                margin: '0 0 20px',
                color: '#fff',
                textShadow: '0 2px 24px rgba(0,0,0,0.6)',
              }}
            >
              VIVÍ EL{' '}
              <span style={{ color: '#39ff14', textShadow: '0 0 32px rgba(57,255,20,0.55)' }}>POOL</span>
              <br />
              COMO NUNCA
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.68)',
                fontSize: 16,
                lineHeight: 1.65,
                margin: '0 0 32px',
                maxWidth: 420,
              }}
            >
              Aprendé, practicá y competí. Todo lo que necesitás para mejorar tu juego y formar parte de la comunidad.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button className="btn-neon" onClick={() => navigate('aprender')}>
                🎓 COMENZAR A APRENDER
              </button>
              <button className="btn-outline" onClick={() => navigate('torneos')}>
                🏆 EXPLORAR TORNEOS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick access ─────────────────────────────── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 24px 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 14,
          }}
        >
          {QUICK.map(q => (
            <div
              key={q.page}
              className="card"
              onClick={() => navigate(q.page)}
              style={{ padding: '22px 18px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 10 }}
            >
              <div>{q.icon}</div>
              <div>
                <div
                  style={{
                    fontFamily: 'Rajdhani, sans-serif',
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: '0.08em',
                    color: q.color,
                    marginBottom: 6,
                  }}
                >
                  {q.title}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.55 }}>{q.desc}</div>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: q.color,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  marginTop: 'auto',
                }}
              >
                Ver más →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Three-column section ──────────────────────── */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '24px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>

          {/* Próximos torneos */}
          <div className="card" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <span
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: '0.11em',
                  color: 'rgba(255,255,255,0.45)',
                  textTransform: 'uppercase',
                }}
              >
                PRÓXIMOS TORNEOS
              </span>
              <button
                onClick={() => navigate('torneos')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#39ff14',
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'Rajdhani',
                }}
              >
                Ver todos →
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {TOURNAMENTS.map((t, i) => (
                <div
                  key={i}
                  onClick={() => navigate('torneos')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '10px 12px',
                    background: '#141720',
                    borderRadius: 8,
                    cursor: 'pointer',
                    border: '1px solid transparent',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(57,255,20,0.2)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}
                >
                  <PoolBall n={t.ball} size={40} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: 'Rajdhani, sans-serif',
                        fontWeight: 700,
                        fontSize: 13,
                        color: '#39ff14',
                        marginBottom: 2,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', marginBottom: 1 }}>
                      Modalidad: {t.mode}
                    </div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', display: 'flex', gap: 10 }}>
                      <span>📅 {t.date}</span>
                      <span>📍 {t.city}</span>
                    </div>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 16 }}>›</span>
                </div>
              ))}
            </div>
          </div>

          {/* Consejo del día */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: 130, overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1771021184654-f47ff0f274c9?w=500&h=200&fit=crop&auto=format"
                alt="Pool shot"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(15,17,23,0.1), rgba(15,17,23,0.9))',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 16,
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: '0.11em',
                  color: 'rgba(255,255,255,0.45)',
                  textTransform: 'uppercase',
                }}
              >
                CONSEJO DEL DÍA
              </div>
            </div>
            <div style={{ padding: '20px 24px 24px' }}>
              <div
                style={{
                  color: '#39ff14',
                  fontSize: 44,
                  lineHeight: 0.8,
                  marginBottom: 10,
                  fontFamily: 'Georgia, serif',
                  opacity: 0.9,
                }}
              >
                "
              </div>
              <p
                style={{
                  color: 'rgba(255,255,255,0.82)',
                  fontSize: 15,
                  lineHeight: 1.6,
                  margin: '0 0 12px',
                  fontStyle: 'italic',
                }}
              >
                No se trata de pegar fuerte, se trata de tener control.
              </p>
              <div style={{ color: '#39ff14', fontSize: 13, fontWeight: 600, fontFamily: 'Rajdhani' }}>
                — Efren Reyes
              </div>
            </div>
          </div>

          {/* Actividad comunidad */}
          <div className="card" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <span
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: '0.11em',
                  color: 'rgba(255,255,255,0.45)',
                  textTransform: 'uppercase',
                }}
              >
                ACTIVIDAD EN LA COMUNIDAD
              </span>
              <button
                onClick={() => navigate('comunidad')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#39ff14',
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'Rajdhani',
                }}
              >
                Ver foro →
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {COMMUNITY.map((c, i) => (
                <div
                  key={i}
                  onClick={() => navigate('comunidad')}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: c.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 13,
                      fontWeight: 700,
                      color: 'white',
                      flexShrink: 0,
                    }}
                  >
                    {c.user[0]}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.88)', marginBottom: 2 }}>
                      {c.user}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.48)',
                        lineHeight: 1.4,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {c.msg}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2, flexShrink: 0 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>💬 {c.comments}</span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{c.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────── */}
      <section
        style={{
          marginTop: 32,
          borderTop: '1px solid rgba(57,255,20,0.15)',
          background: 'rgba(57,255,20,0.025)',
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: '0 auto',
            padding: '36px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
            textAlign: 'center',
          }}
        >
          {STATS.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ fontSize: 26, lineHeight: 1 }}>{s.icon}</div>
              <div
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: 700,
                  fontSize: 44,
                  color: '#39ff14',
                  lineHeight: 1,
                  textShadow: '0 0 22px rgba(57,255,20,0.45)',
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  color: 'rgba(255,255,255,0.38)',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: 600,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
