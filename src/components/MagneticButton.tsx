import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
  strength?: number;
};

type ButtonProps = CommonProps & {
  onClick?: () => void;
  href?: undefined;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
};

type Props = ButtonProps | LinkProps;

/**
 * A button/link that subtly leans toward the cursor on hover.
 * Falls back to a plain element when the user prefers reduced motion.
 */
export function MagneticButton(props: Props) {
  const { children, className = '', variant = 'primary', strength = 0.4 } = props;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.3 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const cls = `${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${className}`;

  const inner =
    'href' in props && props.href !== undefined ? (
      <a
        href={props.href}
        className={cls}
        {...(props.external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    ) : (
      <button type="button" onClick={(props as ButtonProps).onClick} className={cls}>
        {children}
      </button>
    );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className="inline-flex"
    >
      {inner}
    </motion.div>
  );
}
