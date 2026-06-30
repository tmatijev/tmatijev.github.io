import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Desktop-only cursor spotlight. A soft radial glow follows the pointer,
 * fixed behind all content. Disabled for touch + reduced-motion users.
 */
export function SpotlightBackground() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  // Track the glow's centre; translate a fixed-size blob to that point.
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 80, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 80, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 hidden md:block overflow-hidden">
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute -left-[300px] -top-[300px] h-[600px] w-[600px] rounded-full
                   bg-[radial-gradient(circle,rgba(34,211,238,0.10),transparent_60%)]
                   dark:bg-[radial-gradient(circle,rgba(34,211,238,0.08),transparent_60%)]"
      />
    </div>
  );
}
