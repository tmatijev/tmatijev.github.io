import { useMemo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 py-12 pt-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Before you continue …</h2>
          <p className="text-gray-600 text-lg">Real troubleshooting stories that shaped how I build and lead.</p>
        </motion.div>

        {allSkills.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {allSkills.map((skill) => {
              const isActive = activeSkills.includes(skill);
              return (
                <button
                  key={skill}
                  onClick={() => handleToggleSkill(skill)}
                  aria-pressed={isActive}
                  className={`${isActive ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50'} border border-blue-200 rounded-full px-3 py-1 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  {skill}
                </button>
              );
            })}
          </div>
        )}

        {items.length === 0 && (
          <div className="text-center text-gray-500">No stories yet. Share your achievements and I will populate this section.</div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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
                  className="group rounded-xl bg-white/80 backdrop-blur shadow-sm hover:shadow-md border border-blue-100 transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.headline}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.tagline}</p>
                      </div>
                      <span className="text-blue-600 group-hover:translate-x-0.5 transition-transform" aria-hidden>
                        {isExpanded ? '−' : '+'}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((s) => (
                        <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                          {s}
                        </span>
                      ))}
                      {item.year && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-50 text-gray-700 border border-gray-200">
                          {item.year}
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
                          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 text-sm text-gray-700">
                            <p className="mb-2">{item.details}</p>
                            {item.impact && <p className="text-gray-800"><span className="font-medium">Impact:</span> {item.impact}</p>}
                            {item.link && (
                              <a
                                href={item.link.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-block mt-3 text-blue-700 hover:text-blue-800 underline underline-offset-4"
                              >
                                {item.link.label || 'Learn more'}
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


