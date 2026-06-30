import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

type Props = {
  /** Mono kicker label, e.g. "ai_edge" — rendered as // ai_edge */
  kicker: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
};

export function SectionHeader({ kicker, title, description, align = 'center' }: Props) {
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      <motion.p variants={fadeUp} className="mono-label mb-4">
        <span aria-hidden="true">// </span>
        {kicker}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-5 text-lg text-gray-600 dark:text-gray-400 text-pretty"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
