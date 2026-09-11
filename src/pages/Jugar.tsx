import { useState, useRef, useCallback } from 'react'
import type { Navigate } from '../App'

const TW = 580
const TH = 290
const PAD = 22
const POCKET_R = 11
const BALL_R = 9

const POCKETS = [
  { x: PAD, y: PAD },
  { x: TW / 2, y: PAD - 5 },
  { x: TW - PAD, y: PAD },
  { x: PAD, y: TH - PAD },
  { x: TW / 2, y: TH - PAD + 5 },
  { x: TW - PAD, y: TH - PAD },
]

interface Ball { id: number; x: number; y: number; color: string; stripe?: boolean }

const INIT_BALLS: Ball[] = [
  { id: 8, x: 410, y: 145, color: '#111827' },
  { id: 1, x: 430, y: 133, color: '#eab308' },
  { id: 2, x: 430, y: 157, color: '#3b82f6' },
  { id: 3, x: 450, y: 121, color: '#ef4444' },
  { id: 4, x: 450, y: 145, color: '#8b5cf6' },
  { id: 5, x: 450, y: 169, color: '#f97316' },
  { id: 6, x: 470, y: 109, color: '#16a34a' },
  { id: 7, x: 470, y: 133, color: '#b91c1c' },
  { id: 9, x: 470, y: 157, color: '#eab308', stripe: true },
  { id: 10, x: 470, y: 181, color: '#3b82f6', stripe: true },
]

const INIT_CUE = { x: 155, y: 145 }

export default function Jugar({ navigate }: { navigate: Navigate }) {
  const [angle, setAngle] = useState(30)
  const [force, setForce] = useState(65)
  const [effect, setEffect] = useState(0)
  const [balls, setBalls] = useState<Ball[]>(INIT_BALLS)
  const [cuePos, setCuePos] = useState(INIT_CUE)
  const [shooting, setShooting] = useState(false)
  const [pocketed, setPocketed] = useState<number[]>([])

  const cuePosRef = useRef(INIT_CUE)
  const velRef = useRef({ vx: 0, vy: 0 })
  const ballsRef = useRef<Ball[]>(INIT_BALLS)
  const pocketedRef = useRef<number[]>([])
  const animRef = useRef<number | null>(null)

  const rad = (angle * Math.PI) / 180
  const trajLen = 185
  const trajEnd = {
    x: cuePos.x + Math.cos(rad) * trajLen,
    y: cuePos.y - Math.sin(rad) * trajLen,
  }
  const trajEndClamped = {
    x: Math.max(PAD + BALL_R, Math.min(TW - PAD - BALL_R, trajEnd.x)),
    y: Math.max(PAD + BALL_R, Math.min(TH - PAD - BALL_R, trajEnd.y)),
  }

  const step = useCallback(() => {
    const vel = velRef.current
    const pos = cuePosRef.current

    vel.vx *= 0.989
    vel.vy *= 0.989

    let nx = pos.x + vel.vx
    let ny = pos.y + vel.vy

    if (nx < PAD + BALL_R) { vel.vx = Math.abs(vel.vx) * 0.82; nx = PAD + BALL_R }
    if (nx > TW - PAD - BALL_R) { vel.vx = -Math.abs(vel.vx) * 0.82; nx = TW - PAD - BALL_R }
    if (ny < PAD + BALL_R) { vel.vy = Math.abs(vel.vy) * 0.82; ny = PAD + BALL_R }
    if (ny > TH - PAD - BALL_R) { vel.vy = -Math.abs(vel.vy) * 0.82; ny = TH - PAD - BALL_R }

    // Simple ball collisions
    const updatedBalls = ballsRef.current.map(b => {
      if (pocketedRef.current.includes(b.id)) return b
      const dx = nx - b.x
      const dy = ny - b.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < BALL_R * 2.1 && dist > 0) {
        const nx2 = b.x + (dx / dist) * 3
        const ny2 = b.y + (dy / dist) * 3
        vel.vx -= (dx / dist) * Math.sqrt(vel.vx ** 2 + vel.vy ** 2) * 0.6
        vel.vy -= (dy / dist) * Math.sqrt(vel.vx ** 2 + vel.vy ** 2) * 0.6
        return {
          ...b,
          x: Math.max(PAD + BALL_R, Math.min(TW - PAD - BALL_R, nx2)),
          y: Math.max(PAD + BALL_R, Math.min(TH - PAD - BALL_R, ny2)),
        }
      }
      return b
    })
    ballsRef.current = updatedBalls

    // Pocket checks for cue ball
    let cuePocketed = false
    for (const p of POCKETS) {
      const dx = nx - p.x
      const dy = ny - p.y
      if (Math.sqrt(dx * dx + dy * dy) < POCKET_R + BALL_R - 2) {
        nx = INIT_CUE.x; ny = INIT_CUE.y
        vel.vx = 0; vel.vy = 0
        cuePocketed = true
        break
      }
    }

    // Pocket checks for balls
    const newPocketed = [...pocketedRef.current]
    updatedBalls.forEach(b => {
      if (newPocketed.includes(b.id)) return
      for (const p of POCKETS) {
        const dx = b.x - p.x
        const dy = b.y - p.y
        if (Math.sqrt(dx * dx + dy * dy) < POCKET_R + BALL_R - 3) {
          newPocketed.push(b.id)
          break
        }
      }
    })
    pocketedRef.current = newPocketed

    cuePosRef.current = { x: nx, y: ny }
    setCuePos({ x: nx, y: ny })
    setBalls([...updatedBalls])
    setPocketed([...newPocketed])

    if (Math.abs(vel.vx) > 0.04 || Math.abs(vel.vy) > 0.04) {
      animRef.current = requestAnimationFrame(step)
    } else {
      setShooting(false)
    }
  }, [])

  const shoot = () => {
    if (shooting) return
    setShooting(true)
    const r = (angle * Math.PI) / 180
    velRef.current = {
      vx: Math.cos(r) * force * 0.2,
      vy: -Math.sin(r) * force * 0.2,
    }
    animRef.current = requestAnimationFrame(step)
  }

  const reset = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current)
    cuePosRef.current = { ...INIT_CUE }
    velRef.current = { vx: 0, vy: 0 }
    ballsRef.current = INIT_BALLS.map(b => ({ ...b }))
    pocketedRef.current = []
    setCuePos({ ...INIT_CUE })
    setBalls(INIT_BALLS.map(b => ({ ...b })))
    setPocketed([])
    setShooting(false)
  }

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '44px 24px 60px' }}>
      <div style={{ marginBottom: 32 }}>
        <span className="tag-cyan" style={{ marginBottom: 14, display: 'inline-block' }}>SIMULADOR DE PRÁCTICA</span>
        <h1
          style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontWeight: 700,
            fontSize: 52,
            color: '#fff',
            margin: '0 0 10px',
          }}
        >
          MESA DE <span style={{ color: '#00d4ff', textShadow: '0 0 24px rgba(0,212,255,0.45)' }}>PRÁCTICA</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, margin: 0 }}>
          Ajustá el ángulo, la fuerza y el efecto. Luego disparará.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
        {/* Pool table */}
        <div className="card" style={{ padding: 24 }}>
          <div style={{ overflowX: 'auto' }}>
            <svg
              width={TW}
              height={TH}
              style={{ display: 'block', borderRadius: 8, maxWidth: '100%' }}
            >
              {/* Brown rail */}
              <rect x="0" y="0" width={TW} height={TH} rx="10" fill="#4a2c0a" />
              {/* Felt */}
              <rect x={PAD - 2} y={PAD - 2} width={TW - (PAD - 2) * 2} height={TH - (PAD - 2) * 2} rx="4" fill="#1a6b35" />
              {/* Felt detail */}
              <rect x={PAD} y={PAD} width={TW - PAD * 2} height={TH - PAD * 2} rx="2" fill="#1f8040" />

              {/* Center markings */}
              <line x1={TW / 2} y1={PAD + 2} x2={TW / 2} y2={TH - PAD - 2} stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3,5" />
              <circle cx={TW / 2} cy={TH / 2} r="18" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <circle cx={TW / 4} cy={TH / 2} r="2" fill="rgba(255,255,255,0.15)" />
              <circle cx={(TW * 3) / 4} cy={TH / 2} r="2" fill="rgba(255,255,255,0.15)" />

              {/* Pockets */}
              {POCKETS.map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r={POCKET_R + 2} fill="rgba(0,0,0,0.5)" />
                  <circle cx={p.x} cy={p.y} r={POCKET_R} fill="#0d0d0d" />
                  <circle cx={p.x} cy={p.y} r={POCKET_R - 2} fill="#070707" />
                </g>
              ))}

              {/* Trajectory */}
              {!shooting && (
                <g>
                  <line
                    x1={cuePos.x}
                    y1={cuePos.y}
                    x2={trajEndClamped.x}
                    y2={trajEndClamped.y}
                    stroke="rgba(57,255,20,0.55)"
                    strokeWidth="1.2"
                    strokeDasharray="6,5"
                  />
                  <circle cx={trajEndClamped.x} cy={trajEndClamped.y} r="3.5" fill="rgba(57,255,20,0.55)" />
                  {/* Arrow */}
                  <line
                    x1={cuePos.x}
                    y1={cuePos.y}
                    x2={cuePos.x + Math.cos(rad) * 18}
                    y2={cuePos.y - Math.sin(rad) * 18}
                    stroke="rgba(57,255,20,0.9)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
              )}

              {/* Colored balls */}
              {balls
                .filter(b => !pocketed.includes(b.id))
                .map(b => (
                  <g key={b.id}>
                    {b.stripe ? (
                      <>
                        <circle cx={b.x} cy={b.y} r={BALL_R} fill="#f0f0f0" />
                        <rect
                          x={b.x - BALL_R}
                          y={b.y - 4}
                          width={BALL_R * 2}
                          height={8}
                          fill={b.color}
                          clipPath={`inset(0 0 0 0 round ${BALL_R}px)`}
                        />
                        <circle cx={b.x} cy={b.y} r={BALL_R} fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
                      </>
                    ) : (
                      <circle cx={b.x} cy={b.y} r={BALL_R} fill={b.color} stroke="rgba(0,0,0,0.25)" strokeWidth="0.5" />
                    )}
                    <circle cx={b.x} cy={b.y} r={4.5} fill="white" />
                    <text
                      x={b.x}
                      y={b.y + 3.2}
                      textAnchor="middle"
                      fontSize={b.id >= 10 ? '4.5' : '5.5'}
                      fontWeight="bold"
                      fill={b.id === 8 ? '#eee' : '#111'}
                      fontFamily="Inter,sans-serif"
                    >
                      {b.id}
                    </text>
                    <circle cx={b.x - 2.5} cy={b.y - 3} r="2.2" fill="white" opacity="0.25" />
                  </g>
                ))}

              {/* Cue ball */}
              <circle cx={cuePos.x} cy={cuePos.y} r={BALL_R} fill="white" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
              <circle cx={cuePos.x - 2.5} cy={cuePos.y - 3} r="2.5" fill="white" opacity="0.35" />
            </svg>
          </div>

          {/* Pocketed display */}
          {pocketed.length > 0 && (
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.38)',
                  fontFamily: 'Rajdhani',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                }}
              >
                EMBOCADAS:
              </span>
              {pocketed.map(id => {
                const b = INIT_BALLS.find(x => x.id === id)
                return (
                  <div
                    key={id}
                    title={`Bola ${id}`}
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: b?.color || '#888',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 9,
                      color: id === 8 ? '#eee' : '#111',
                      fontWeight: 700,
                      fontFamily: 'Inter',
                    }}
                  >
                    {id}
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="card" style={{ padding: 24 }}>
            <div
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
                marginBottom: 22,
              }}
            >
              CONTROLES DE TIRO
            </div>

            {[
              { label: 'FUERZA', value: force, setter: setForce, min: 1, max: 100, color: '#39ff14', unit: '%' },
              { label: 'ÁNGULO', value: angle, setter: setAngle, min: 0, max: 359, color: '#00d4ff', unit: '°' },
              { label: 'EFECTO', value: effect, setter: setEffect, min: -50, max: 50, color: '#8b5cf6', unit: '' },
            ].map(ctrl => (
              <div key={ctrl.label} style={{ marginBottom: 22 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <span
                    style={{
                      fontFamily: 'Rajdhani, sans-serif',
                      fontWeight: 700,
                      fontSize: 13,
                      letterSpacing: '0.07em',
                      color: ctrl.color,
                    }}
                  >
                    {ctrl.label}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.7)',
                      fontFamily: 'Rajdhani, sans-serif',
                      fontWeight: 700,
                      minWidth: 36,
                      textAlign: 'right',
                    }}
                  >
                    {ctrl.value}
                    {ctrl.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min={ctrl.min}
                  max={ctrl.max}
                  value={ctrl.value}
                  onChange={e => ctrl.setter(Number(e.target.value))}
                  disabled={shooting}
                  style={{ width: '100%', accentColor: ctrl.color }}
                />
              </div>
            ))}
          </div>

          <button className="btn-neon" onClick={shoot} disabled={shooting} style={{ justifyContent: 'center' }}>
            🎱 DISPARAR
          </button>
          <button className="btn-outline" onClick={reset} style={{ justifyContent: 'center' }}>
            ↺ REINICIAR
          </button>

          <div className="card" style={{ padding: 16 }}>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', lineHeight: 1.65 }}>
              <strong style={{ color: 'rgba(255,255,255,0.65)' }}>💡 TIP:</strong> Ajustá el ángulo y la fuerza. El efecto
              positivo aplica topspin y el negativo backspin en la bola blanca.
            </div>
          </div>

          {/* Ball legend */}
          <div className="card" style={{ padding: 16 }}>
            <div
              style={{
                fontFamily: 'Rajdhani',
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.38)',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              BOLAS EN MESA
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {INIT_BALLS.filter(b => !pocketed.includes(b.id)).map(b => (
                <div
                  key={b.id}
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: b.stripe ? '#f0f0f0' : b.color,
                    border: b.stripe ? `2px solid ${b.color}` : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 9,
                    color: b.id === 8 ? '#eee' : '#111',
                    fontWeight: 700,
                    fontFamily: 'Inter',
                  }}
                >
                  {b.id}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
