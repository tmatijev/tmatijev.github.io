import { motion, useReducedMotion } from 'framer-motion';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { employmentHistory } from '../lib/content';
import { fadeUp, scaleIn, stagger, viewportOnce } from '../lib/motion';
import { SectionHeader } from '../components/SectionHeader';
import { AnimatedGrid } from '../components/AnimatedGrid';

const MAX_TECH = 6;
const MAX_RESPONSIBILITIES = 4;

const typeLabel: Record<'fulltime' | 'freelance', string> = {
  fulltime: 'Full-time',
  freelance: 'Freelance',
};

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <div className="section-shell">
      <AnimatedGrid />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeader
          kicker="experience"
          title="Experience"
          description="Building the modern web since 2011."
        />

        <motion.ol
          variants={stagger(0.12)}
          initial={reduce ? false : 'hidden'}
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-16 space-y-10 md:mt-20 md:space-y-16"
        >
          {/* Glowing gradient spine */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-4 w-px md:left-1/2 md:-translate-x-1/2
                       bg-gradient-to-b from-transparent via-accent-blue/50 to-transparent"
          />
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-4 w-px blur-[2px] md:left-1/2 md:-translate-x-1/2
                       bg-gradient-to-b from-transparent via-accent-cyan/30 to-transparent"
          />

          {employmentHistory.map((job, index) => {
            const isLeft = index % 2 === 0;
            const visibleTech = job.technologies.slice(0, MAX_TECH);
            const extraTech = job.technologies.length - visibleTech.length;
            const responsibilities = job.responsibilities.slice(0, MAX_RESPONSIBILITIES);

            const columnClass = isLeft
              ? 'md:col-start-1 md:pr-14'
              : 'md:col-start-2 md:pl-14';

            const cardClass = job.current
              ? 'panel p-6 md:p-7 shadow-glow border-accent-cyan/40 dark:border-accent-cyan/30 transition-transform duration-300 hover:-translate-y-1 md:-translate-y-1 md:hover:-translate-y-2'
              : 'panel-interactive p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1';

            return (
              <motion.li
                key={`${job.company}-${job.period}`}
                variants={fadeUp}
                className="relative pl-12 md:grid md:grid-cols-2 md:items-start md:gap-x-14 md:pl-0"
              >
                {/* Timeline dot on the spine. Centering (translateX) lives on this
                    plain span; the scale animation lives on the inner motion.span so
                    Framer's inline transform can't override the centering. */}
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-7 -translate-x-1/2 md:left-1/2"
                >
                  <motion.span variants={scaleIn} className="relative grid h-4 w-4 place-items-center">
                    {job.current && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-accent-cyan/50" />
                    )}
                    <span
                      className={
                        job.current
                          ? 'relative h-4 w-4 rounded-full bg-accent-cyan ring-4 ring-accent-cyan/20 shadow-glow'
                          : 'relative h-3 w-3 rounded-full bg-gradient-to-br from-accent-blue to-accent-violet ring-4 ring-ink-950/60 dark:ring-ink-950'
                      }
                    />
                  </motion.span>
                </span>

                <div className={columnClass}>
                  <article className={cardClass}>
                    <header className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white">
                          {job.title}
                        </h3>
                        <p className="mt-0.5 font-medium text-accent-blue dark:text-accent-cyan">
                          {job.company}
                        </p>
                      </div>
                      {job.current ? (
                        <span className="mono-label inline-flex items-center gap-1.5 rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-2.5 py-1 !text-[0.625rem] text-accent-cyan dark:text-accent-cyan">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                          Current
                        </span>
                      ) : (
                        <span className="chip !text-[0.625rem] uppercase tracking-[0.18em]">
                          {typeLabel[job.type]}
                        </span>
                      )}
                    </header>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-xs text-gray-500 dark:text-gray-400">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {job.location}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-violet/70"
                          />
                          <span className="text-pretty">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {visibleTech.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                      {extraTech > 0 && (
                        <li className="chip border-accent-cyan/30 text-accent-blue dark:text-accent-cyan">
                          +{extraTech} more
                        </li>
                      )}
                    </ul>
                  </article>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </div>
  );
}
