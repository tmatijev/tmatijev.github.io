/**
 * Reusable section backdrop: animated gradient mesh + a faint technical grid,
 * masked so it fades toward the edges. Pure CSS — no extra network requests.
 * Drop it as the first child of a `relative` section.
 */
type Props = {
  /** Show the gradient mesh glow. Default true. */
  mesh?: boolean;
  /** Show the grid lines. Default true. */
  grid?: boolean;
  className?: string;
};

export function AnimatedGrid({ mesh = true, grid = true, className = '' }: Props) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {mesh && (
        <div className="absolute -inset-[10%] bg-mesh animate-mesh-drift opacity-90 will-change-transform" />
      )}
      {grid && (
        <div
          className="absolute inset-0 opacity-[0.18] dark:opacity-[0.12]
                     [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(120,140,180,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,140,180,0.35) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      )}
    </div>
  );
}
