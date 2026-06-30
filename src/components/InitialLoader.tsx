import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../lib/motion';

const BOOT_LINES = [
  'initializing craft',
  'loading AI workflows',
  'optimizing experience',
  'ready',
];

type Props = { onComplete: () => void };

/**
 * First-load "AI system boot" overlay: an SVG TM monogram draws itself,
 * neural nodes light up, and terminal lines stream before it dissolves
 * into the hero. Honors reduced-motion with a short, static variant.
 */
export function InitialLoader({ onComplete }: Props) {
  const reduce = useReducedMotion();
  const [line, setLine] = useState(reduce ? BOOT_LINES.length - 1 : 0);

  useEffect(() => {
    if (reduce) {
      const t = window.setTimeout(onComplete, 600);
      return () => window.clearTimeout(t);
    }
    const timers: number[] = [];
    BOOT_LINES.forEach((_, i) => {
      timers.push(window.setTimeout(() => setLine(i), 500 + i * 360));
    });
    timers.push(window.setTimeout(onComplete, 500 + BOOT_LINES.length * 360 + 450));
    return () => timers.forEach(window.clearTimeout);
  }, [reduce, onComplete]);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0.15 + i * 0.25, duration: 0.7, ease: EASE },
        opacity: { delay: 0.15 + i * 0.25, duration: 0.2 },
      },
    }),
  };

  // T stem + bar, then M — four strokes total.
  const strokes = [
    'M40 35 H95',         // T bar
    'M67.5 35 V92',       // T stem
    'M115 92 V35 L142 70 L169 35 V92', // M
  ];
  const nodes = [
    [40, 35], [95, 35], [67.5, 92],
    [115, 35], [142, 70], [169, 35], [115, 92], [169, 92],
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.6, ease: EASE } }}
    >
      <div className="absolute inset-0 bg-mesh-dark opacity-60" aria-hidden="true" />

      <div className="relative" role="status" aria-label="Loading">
        <svg width="220" height="132" viewBox="0 0 209 127" className="overflow-visible">
          <defs>
            <linearGradient id="loaderStroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          {/* neural connection lines */}
          {!reduce && (
            <motion.path
              d="M40 35 L67.5 92 M95 35 L115 35 M142 70 L169 92"
              stroke="#22d3ee"
              strokeWidth="0.75"
              strokeOpacity="0.4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: EASE }}
            />
          )}

          {strokes.map((d, i) => (
            <motion.path
              key={d}
              d={d}
              fill="none"
              stroke="url(#loaderStroke)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={draw}
              custom={i}
              initial={reduce ? 'show' : 'hidden'}
              animate="show"
            />
          ))}

          {!reduce &&
            nodes.map(([cx, cy], i) => (
              <motion.circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="3"
                fill="#22d3ee"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.05, duration: 0.3, ease: EASE }}
              />
            ))}
        </svg>
      </div>

      <div className="mt-8 h-5 font-mono text-xs tracking-[0.25em] uppercase text-accent-cyan/80">
        <span aria-hidden="true">&gt; </span>
        {BOOT_LINES[line]}
        <span className="ml-0.5 inline-block w-2 animate-pulse">_</span>
      </div>
    </motion.div>
  );
}
