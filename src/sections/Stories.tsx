import { useCallback, useId, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDownIcon, BoltIcon } from '@heroicons/react/24/outline';
import { SectionHeader } from '../components/SectionHeader';
import { AnimatedGrid } from '../components/AnimatedGrid';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';
import { stories, type Story } from '../lib/content';

type StoryCardProps = {
  story: Story;
  index: number;
  isOpen: boolean;
  onToggle: (id: string) => void;
  activeSkills: Set<string>;
};

function StoryCard({ story, index, isOpen, onToggle, activeSkills }: StoryCardProps) {
  const reduce = useReducedMotion();
  const panelId = useId();
  const headingId = useId();

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        onToggle(story.id);
      }
    },
    [onToggle, story.id],
  );

  return (
    <motion.article variants={fadeUp} className="h-full">
      <div
        className={`panel-interactive group relative h-full overflow-hidden p-6 md:p-7 ${
          isOpen ? 'border-accent-cyan/40 shadow-glow dark:border-accent-cyan/30' : ''
        }`}
      >
        {/* Accent rail */}
        <span
          aria-hidden="true"
          className={`absolute inset-y-0 left-0 w-px bg-gradient-to-b from-accent-cyan/0 via-accent-cyan/60 to-accent-violet/0 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        />

        <div
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-labelledby={headingId}
          onClick={() => onToggle(story.id)}
          onKeyDown={handleKeyDown}
          className="flex w-full cursor-pointer items-start gap-4 rounded-md text-left"
        >
          <span className="mono-label mt-1 shrink-0 tabular-nums" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="min-w-0 flex-1">
            <h3
              id={headingId}
              className="font-display text-lg font-semibold leading-snug text-gray-900 dark:text-white text-balance"
            >
              {story.headline}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 text-pretty">
              {story.tagline}
            </p>
          </div>

          <span
            aria-hidden="true"
            className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 group-hover:border-accent-cyan/50 group-hover:text-accent-cyan dark:border-white/10 dark:text-gray-400 ${
              isOpen ? 'rotate-180 border-accent-cyan/50 text-accent-cyan' : ''
            }`}
          >
            <ChevronDownIcon className="h-4 w-4" />
          </span>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              key="content"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-5 pl-0 sm:pl-10">
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 text-pretty">
                  {story.details}
                </p>

                {story.impact && (
                  <div className="mt-4 flex gap-3 rounded-xl border border-accent-cyan/20 bg-accent-cyan/[0.06] p-4 dark:bg-accent-cyan/[0.05]">
                    <BoltIcon
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-accent-cyan"
                    />
                    <div>
                      <span className="mono-label">Impact</span>
                      <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-200 text-pretty">
                        {story.impact}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skill chips — always visible */}
        <div className="mt-5 flex flex-wrap gap-2 sm:pl-10">
          {story.skills.map((skill) => {
            const active = activeSkills.has(skill);
            return (
              <span
                key={skill}
                className={`chip ${
                  active
                    ? 'border-accent-cyan/50 bg-accent-cyan/10 text-accent-blue dark:text-accent-cyan'
                    : ''
                }`}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}

export default function Stories() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeSkills, setActiveSkills] = useState<Set<string>>(() => new Set());

  // Unique, stable list of all skills across stories.
  const allSkills = useMemo(() => {
    const seen = new Set<string>();
    for (const story of stories) {
      for (const skill of story.skills) seen.add(skill);
    }
    return Array.from(seen).sort((a, b) => a.localeCompare(b));
  }, []);

  // AND filter: a story matches only if it has every active skill.
  const filteredStories = useMemo(() => {
    if (activeSkills.size === 0) return stories;
    return stories.filter((story) => {
      const storySkills = new Set(story.skills);
      for (const skill of activeSkills) {
        if (!storySkills.has(skill)) return false;
      }
      return true;
    });
  }, [activeSkills]);

  const toggleStory = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  const toggleSkill = useCallback((skill: string) => {
    setActiveSkills((current) => {
      const next = new Set(current);
      if (next.has(skill)) next.delete(skill);
      else next.add(skill);
      return next;
    });
  }, []);

  const clearFilters = useCallback(() => setActiveSkills(new Set()), []);

  return (
    <div className="section-shell">
      <AnimatedGrid />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="stories"
          title="Engineering Stories"
          description="Real troubleshooting that shaped how I build and lead."
        />

        {/* Filter chips */}
        <motion.div
          variants={stagger(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter stories by skill">
            {allSkills.map((skill) => {
              const active = activeSkills.has(skill);
              return (
                <motion.button
                  key={skill}
                  type="button"
                  variants={fadeUp}
                  aria-pressed={active}
                  onClick={() => toggleSkill(skill)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                    active
                      ? 'border-transparent bg-gradient-to-r from-accent-blue to-accent-violet text-white shadow-glow-violet'
                      : 'border-gray-200 bg-white/60 text-gray-600 hover:border-accent-cyan/50 hover:text-accent-blue dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300 dark:hover:text-accent-cyan'
                  }`}
                >
                  {skill}
                </motion.button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-gray-500 dark:text-gray-500">
            <span aria-live="polite">
              {filteredStories.length} of {stories.length} stories
            </span>
            {activeSkills.size > 0 && (
              <button
                type="button"
                onClick={clearFilters}
                className="font-mono uppercase tracking-[0.2em] text-accent-cyan/90 transition-colors hover:text-accent-cyan"
              >
                clear
              </button>
            )}
          </div>
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="popLayout">
          {filteredStories.length > 0 ? (
            <motion.div
              key={Array.from(activeSkills).sort().join('|') || 'all'}
              variants={stagger(0.07)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
            >
              {filteredStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  index={stories.indexOf(story)}
                  isOpen={openId === story.id}
                  onToggle={toggleStory}
                  activeSkills={activeSkills}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-12 panel mx-auto max-w-md p-8 text-center"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">
                No stories match every selected skill. Try removing a filter.
              </p>
              <button type="button" onClick={clearFilters} className="btn-ghost mt-5 text-sm">
                Reset filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
