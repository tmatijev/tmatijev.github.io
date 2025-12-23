import { useMemo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, TagIcon } from '@heroicons/react/24/outline';

export type Anecdote = {
  id: string;
  headline: string;
  tagline: string;
  details: string;
  impact?: string;
  skills: string[];
  year?: string | number;
  link?: { href: string; label?: string };
};

type BeforeYouContinueProps = {
  items?: Anecdote[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 }
};

export default function BeforeYouContinue({ items = [] }: BeforeYouContinueProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeSkills, setActiveSkills] = useState<string[]>([]);

  const allSkills = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => i.skills.forEach((s) => set.add(s)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const filtered = useMemo(() => {
    if (activeSkills.length === 0) return items;
    return items.filter((i) => activeSkills.every((s) => i.skills.includes(s)));
  }, [items, activeSkills]);

  const handleToggleExpand = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  const handleKeyDownToggle = useCallback((e: React.KeyboardEvent<HTMLDivElement>, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setExpandedId((prev) => (prev === id ? null : id));
    }
  }, []);

  const handleToggleSkill = useCallback((skill: string) => {
    setActiveSkills((prev) => {
      if (prev.includes(skill)) return prev.filter((s) => s !== skill);
      return [...prev, skill];
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg py-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Engineering Stories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Real troubleshooting stories that shaped how I build and lead.</p>
        </motion.div>

        {allSkills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-wrap gap-2 justify-center"
          >
            {allSkills.map((skill) => {
              const isActive = activeSkills.includes(skill);
              return (
                <button
                  key={skill}
                  onClick={() => handleToggleSkill(skill)}
                  aria-pressed={isActive}
                  className={`
                    px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border
                    ${isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                      : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400'
                    }
                  `}
                >
                  {skill}
                </button>
              );
            })}
          </motion.div>
        )}

        {items.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400">No stories yet. Share your achievements and I will populate this section.</div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filtered.map((item) => {
            const isExpanded = expandedId === item.id;
            const controlId = `anecdote-${item.id}`;
            return (
              <motion.div key={item.id} variants={cardVariants}>
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`${item.headline}. Toggle details.`}
                  aria-expanded={isExpanded}
                  aria-controls={controlId}
                  onClick={() => handleToggleExpand(item.id)}
                  onKeyDown={(e) => handleKeyDownToggle(e, item.id)}
                  className={`
                    group h-full flex flex-col rounded-2xl transition-all duration-300 border cursor-pointer outline-none
                    ${isExpanded
                      ? 'bg-white dark:bg-dark-card border-blue-500 dark:border-blue-500 shadow-lg ring-1 ring-blue-500/20'
                      : 'bg-white/50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-dark-card hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md'
                    }
                  `}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className={`text-lg font-bold mb-2 transition-colors ${
                          isExpanded ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
                        }`}>
                          {item.headline}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.tagline}</p>
                      </div>
                      <span
                        className={`flex-shrink-0 p-1 rounded-full transition-all duration-300 ${
                          isExpanded ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rotate-180' : 'text-gray-400 group-hover:text-blue-500'
                        }`}
                        aria-hidden
                      >
                        <ChevronDownIcon className="w-5 h-5" />
                      </span>
                    </div>

                    <div className="mt-auto mb-4 flex flex-wrap gap-2">
                      {item.skills.slice(0, 3).map((s) => (
                        <span key={s} className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 font-medium flex items-center gap-1">
                          <TagIcon className="w-3 h-3" />
                          {s}
                        </span>
                      ))}
                      {item.skills.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-md bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400">
                          +{item.skills.length - 3}
                        </span>
                      )}
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={controlId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                          className="overflow-hidden border-t border-gray-100 dark:border-white/10"
                        >
                          <div className="pt-4 text-sm text-gray-600 dark:text-gray-300 space-y-3">
                            <p className="leading-relaxed">{item.details}</p>
                            {item.impact && (
                              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-500/20">
                                <span className="font-semibold text-blue-700 dark:text-blue-300 block mb-1">Impact:</span>
                                {item.impact}
                              </div>
                            )}
                            {item.link && (
                              <a
                                href={item.link.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                              >
                                {item.link.label || 'Learn more →'}
                              </a>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
