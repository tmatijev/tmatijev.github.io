import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { company, links } from '../lib/content';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';
import { MagneticButton } from './MagneticButton';

/** Featured panel for the Undefined software studio. */
export function CompanyCTA() {
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="panel relative mx-auto max-w-5xl overflow-hidden p-8 md:p-14"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-violet/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-cyan/15 blur-3xl"
      />

      <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <motion.p variants={fadeUp} className="mono-label mb-4">
            <span aria-hidden="true">// </span>company
          </motion.p>
          <motion.h3
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            {company.name}
            <span className="text-gradient"> — {company.tagline.split('—')[1]?.trim()}</span>
          </motion.h3>
          <motion.p variants={fadeUp} className="mt-5 text-lg text-gray-600 dark:text-gray-300 text-pretty">
            {company.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
            {company.highlights.map((h) => (
              <span key={h} className="chip">{h}</span>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="flex flex-col items-start gap-4 md:items-end">
          <div className="text-right">
            <div className="font-display text-5xl font-bold text-gradient">{company.productCount}</div>
            <div className="mono-label mt-1">live products</div>
          </div>
          <MagneticButton href={links.company} external>
            Visit {company.name}
            <ArrowUpRightIcon className="h-4 w-4" />
          </MagneticButton>
        </motion.div>
      </div>
    </motion.div>
  );
}
