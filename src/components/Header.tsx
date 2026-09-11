import { useState } from 'react'
import type { Page, Navigate } from '../App'

function Logo({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', userSelect: 'none', display: 'flex', alignItems: 'center' }}>
      <svg width="148" height="46" viewBox="0 0 148 46">
        <defs>
          <radialGradient id="hball7" cx="33%" cy="27%" r="58%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="black" stopOpacity="0.2" />
          </radialGradient>
          <radialGradient id="hball9" cx="33%" cy="27%" r="58%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="black" stopOpacity="0.2" />
          </radialGradient>
          <clipPath id="hclip9">
            <circle cx="82" cy="27" r="14" />
          </clipPath>
        </defs>

        {/* Crossed cues */}
        <line x1="50" y1="3" x2="100" y2="14" stroke="#8b7355" strokeWidth="2.2" strokeLinecap="round" opacity="0.75" />
        <line x1="100" y1="3" x2="50" y2="14" stroke="#8b7355" strokeWidth="2.2" strokeLinecap="round" opacity="0.75" />

        {/* P */}
        <text x="2" y="42" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="38" fill="white">P</text>

        {/* Ball 7 — maroon solid */}
        <circle cx="57" cy="27" r="14" fill="#8b1a1a" stroke="rgba(0,0,0,0.25)" strokeWidth="0.5" />
        <circle cx="57" cy="27" r="6" fill="white" />
        <text x="57" y="31" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="8" fill="#1a1a1a" textAnchor="middle">7</text>
        <circle cx="57" cy="27" r="14" fill="url(#hball7)" />

        {/* Ball 9 — yellow stripe */}
        <circle cx="82" cy="27" r="14" fill="#f0f0f0" stroke="rgba(0,0,0,0.25)" strokeWidth="0.5" />
        <rect x="68" y="21" width="28" height="12" fill="#eab308" clipPath="url(#hclip9)" />
        <circle cx="82" cy="27" r="6" fill="white" />
        <text x="82" y="31" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="8" fill="#1a1a1a" textAnchor="middle">9</text>
        <circle cx="82" cy="27" r="14" fill="url(#hball9)" />

        {/* L */}
        <text x="100" y="42" fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="38" fill="white">L</text>
      </svg>
    </div>
  )
}

const NAV: { label: string; page: Page }[] = [
  { label: 'INICIO', page: 'inicio' },
  { label: 'APRENDER', page: 'aprender' },
  { label: 'JUGAR', page: 'jugar' },
  { label: 'TORNEOS', page: 'torneos' },
  { label: 'RANKING', page: 'ranking' },
  { label: 'COMUNIDAD', page: 'comunidad' },
  { label: 'EQUIPAMIENTO', page: 'equipamiento' },
  { label: 'NOTICIAS', page: 'noticias' },
]

export default function Header({ page, navigate }: { page: Page; navigate: Navigate }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [q, setQ] = useState('')

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(8,9,13,0.96)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(57,255,20,0.2)',
        boxShadow: '0 1px 20px rgba(0,0,0,0.5)',
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <Logo onClick={() => navigate('inicio')} />

        <nav style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
          {NAV.map(({ label, page: p }) => {
            const active = page === p
            return (
              <button
                key={p}
                onClick={() => navigate(p)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 11px',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: '0.07em',
                  color: active ? '#39ff14' : 'rgba(255,255,255,0.55)',
                  position: 'relative',
                  transition: 'color 0.18s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.9)' }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.55)' }}
              >
                {label}
                {active && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 2,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '75%',
                      height: 2,
                      background: '#39ff14',
                      borderRadius: 2,
                      boxShadow: '0 0 8px #39ff14',
                      display: 'block',
                    }}
                  />
                )}
              </button>
            )
          })}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          {searchOpen ? (
            <input
              autoFocus
              value={q}
              onChange={e => setQ(e.target.value)}
              onBlur={() => { setSearchOpen(false); setQ('') }}
              onKeyDown={e => e.key === 'Escape' && setSearchOpen(false)}
              placeholder="Buscar..."
              style={{
                width: 160,
                padding: '6px 12px',
                background: '#141720',
                border: '1px solid rgba(57,255,20,0.35)',
                borderRadius: 8,
                color: '#fff',
                fontFamily: 'Inter',
                fontSize: 13,
                outline: 'none',
              }}
            />
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              title="Buscar"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.55)',
                padding: 7,
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          )}

          <button
            onClick={() => navigate('perfil')}
            title="Mi Perfil"
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: page === 'perfil' ? 'rgba(57,255,20,0.15)' : 'rgba(255,255,255,0.07)',
              border: `1px solid ${page === 'perfil' ? 'rgba(57,255,20,0.45)' : 'rgba(255,255,255,0.12)'}`,
              cursor: 'pointer',
              color: page === 'perfil' ? '#39ff14' : 'rgba(255,255,255,0.55)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.15s, border-color 0.15s, color 0.15s',
            }}
            onMouseEnter={e => { if (page !== 'perfil') { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' } }}
            onMouseLeave={e => { if (page !== 'perfil') { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' } }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
