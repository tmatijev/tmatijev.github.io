import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { AnimatedGrid } from '../components/AnimatedGrid';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';
import { aiCapabilities, identity } from '../lib/content';

/** Faux macOS-style traffic lights for the console header. */
function TerminalDots() {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      <span className="h-3 w-3 rounded-full bg-rose-400/80 dark:bg-rose-500/70" />
      <span className="h-3 w-3 rounded-full bg-amber-400/80 dark:bg-amber-400/70" />
      <span className="h-3 w-3 rounded-full bg-emerald-400/80 dark:bg-emerald-500/70" />
    </div>
  );
}

export default function AIEdge() {
  const reduce = useReducedMotion();
  const hover = reduce ? undefined : { y: -6, scale: 1.015 };

  return (
    <div className="section-shell">
      <AnimatedGrid />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="ai_edge"
          title={
            <>
              Engineering with an <span className="text-gradient">AI co-processor</span>
            </>
          }
          description={`${identity.shortName} works as an AI-native developer — Claude, GPT and Cursor wired directly into how he architects, implements, debugs and reasons about product. Senior judgment sets the direction; AI compresses the distance to shipped.`}
        />

        {/* AI console / operating panel */}
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="panel relative mt-14 overflow-hidden p-px"
        >
          {/* circuit / glow accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-accent-cyan/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-accent-violet/10 blur-3xl"
          />

          {/* Console header bar */}
          <motion.div
            variants={fadeUp}
            className="relative flex items-center gap-4 border-b border-gray-200/80 px-5 py-3.5 dark:border-white/10"
          >
            <TerminalDots />
            <div className="flex min-w-0 items-center gap-2 font-mono text-xs text-gray-500 dark:text-gray-400">
              <span className="text-accent-cyan/80" aria-hidden="true">
                ~/tomislav/
              </span>
              <span className="truncate">ai-workflows</span>
            </div>
            <span className="ml-auto inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              live
            </span>
          </motion.div>

          {/* Capability cards grid */}
          <div className="relative grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
            {aiCapabilities.map((cap) => (
              <motion.article
                key={cap.index}
                variants={fadeUp}
                whileHover={hover}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="panel-interactive group relative overflow-hidden p-6"
              >
                {/* faint top scan-line accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white">
                    {cap.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="font-mono text-3xl font-bold leading-none text-gray-200 transition-colors duration-300 group-hover:text-accent-cyan/70 dark:text-white/10 dark:group-hover:text-accent-cyan/50"
                  >
                    {cap.index}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-600 text-pretty dark:text-gray-400">
                  {cap.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {cap.tools.map((tool) => (
                    <li key={tool}>
                      <span className="chip">
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-accent-cyan/70"
                          aria-hidden="true"
                        />
                        {tool}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          {/* Console footer / prompt line */}
          <motion.div
            variants={fadeUp}
            className="relative flex items-center gap-2 border-t border-gray-200/80 px-5 py-3 font-mono text-xs text-gray-500 dark:border-white/10 dark:text-gray-400"
          >
            <span className="text-accent-violet/80" aria-hidden="true">
              $
            </span>
            <span className="truncate">ship --with ai --judgment senior</span>
            <span
              className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-accent-cyan/70"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
