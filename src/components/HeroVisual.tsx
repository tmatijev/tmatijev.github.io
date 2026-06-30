import { useReducedMotion } from 'framer-motion';

// Pre-computed node positions on two concentric orbits around (200,200).
const OUTER = [
  [350, 200], [275, 70], [125, 70],
  [50, 200], [125, 330], [275, 330],
] as const;

const INNER = [
  [263.6, 136.4], [136.4, 136.4],
  [136.4, 263.6], [263.6, 263.6],
] as const;

const FRAGMENTS = [
  { x: 300, y: 110, t: 'tsx' },
  { x: 70, y: 250, t: 'ai()' },
  { x: 250, y: 300, t: '</>' },
];

/**
 * Signature hero centerpiece: an AI neural constellation. Two orbits of nodes
 * rotate slowly around a glowing core, wired with pulsing connection lines and
 * floating code fragments. Motion is pure transform/opacity and is disabled
 * for reduced-motion users.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className={`relative w-full max-w-md aspect-square ${reduce ? '' : 'animate-float'}`}>
      <div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full bg-accent-cyan/10 blur-3xl dark:bg-accent-cyan/15"
      />
      <svg
        viewBox="0 0 400 400"
        role="img"
        aria-label="Animated neural constellation representing AI-accelerated engineering"
        className="relative h-full w-full"
      >
        <defs>
          <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <radialGradient id="heroCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </radialGradient>
        </defs>

        {/* faint orbit rings */}
        <circle cx="200" cy="200" r="150" fill="none" stroke="url(#heroLine)" strokeOpacity="0.18" />
        <circle cx="200" cy="200" r="90" fill="none" stroke="url(#heroLine)" strokeOpacity="0.18" />

        {/* spokes from core to outer nodes */}
        <g stroke="url(#heroLine)" strokeOpacity="0.25" strokeWidth="1">
          {OUTER.map(([x, y]) => (
            <line key={`spoke-${x}-${y}`} x1="200" y1="200" x2={x} y2={y} />
          ))}
        </g>

        {/* outer ring polygon */}
        <polygon
          points={OUTER.map(([x, y]) => `${x},${y}`).join(' ')}
          fill="none"
          stroke="url(#heroLine)"
          strokeOpacity="0.3"
          strokeWidth="1"
          className={reduce ? '' : 'animate-pulse-line'}
        />

        {/* rotating outer nodes */}
        <g
          className={reduce ? '' : 'animate-spin-slow'}
          style={{ transformOrigin: '200px 200px' }}
        >
          {OUTER.map(([x, y], i) => (
            <circle
              key={`o-${i}`}
              cx={x}
              cy={y}
              r={i % 2 === 0 ? 6 : 4}
              fill="#22d3ee"
              fillOpacity={i % 2 === 0 ? 0.95 : 0.6}
            />
          ))}
        </g>

        {/* rotating inner nodes (reverse) */}
        <g
          className={reduce ? '' : 'animate-spin-slow'}
          style={{ transformOrigin: '200px 200px', animationDirection: 'reverse' }}
        >
          {INNER.map(([x, y], i) => (
            <circle key={`i-${i}`} cx={x} cy={y} r="4" fill="#8b5cf6" fillOpacity="0.85" />
          ))}
        </g>

        {/* glowing core */}
        <circle cx="200" cy="200" r="22" fill="url(#heroCore)" />
        <circle
          cx="200"
          cy="200"
          r="22"
          fill="none"
          stroke="#22d3ee"
          strokeOpacity="0.6"
          className={reduce ? '' : 'animate-pulse-line'}
        />
        <text
          x="200"
          y="206"
          textAnchor="middle"
          className="fill-white font-display font-bold"
          fontSize="18"
        >
          TM
        </text>

        {/* floating code fragments */}
        {FRAGMENTS.map((f) => (
          <text
            key={f.t}
            x={f.x}
            y={f.y}
            textAnchor="middle"
            className="fill-accent-cyan/70 font-mono"
            fontSize="11"
          >
            {f.t}
          </text>
        ))}
      </svg>
    </div>
  );
}
