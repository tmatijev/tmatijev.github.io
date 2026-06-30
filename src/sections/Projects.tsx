import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RepositoryCard } from '../components/Repository';
import { SectionHeader } from '../components/SectionHeader';
import { MagneticButton } from '../components/MagneticButton';
import { AnimatedGrid } from '../components/AnimatedGrid';
import { getRepositories, fallbackRepositories } from '../models/github';
import { links } from '../lib/content';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';
import type { Repository } from '../types/repository';

const MAX_REPOS = 9;
const SKELETON_KEYS = ['s0', 's1', 's2', 's3', 's4', 's5'];

function byPushedDesc(a: Repository, b: Repository): number {
  return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
}

function SkeletonCard() {
  return (
    <div className="panel relative h-full overflow-hidden p-6" aria-hidden="true">
      {/* shimmer sweep — globally neutralized under prefers-reduced-motion */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mb-5 flex items-center justify-between">
        <div className="h-3 w-12 rounded bg-gray-200/80 dark:bg-white/10" />
        <div className="h-3 w-8 rounded bg-gray-200/80 dark:bg-white/10" />
      </div>
      <div className="h-5 w-2/3 rounded bg-gray-200/80 dark:bg-white/10" />
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-gray-200/70 dark:bg-white/[0.07]" />
        <div className="h-3 w-5/6 rounded bg-gray-200/70 dark:bg-white/[0.07]" />
        <div className="h-3 w-1/2 rounded bg-gray-200/70 dark:bg-white/[0.07]" />
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-gray-200/70 pt-4 dark:border-white/10">
        <div className="h-3 w-20 rounded bg-gray-200/80 dark:bg-white/10" />
        <div className="h-3 w-16 rounded bg-gray-200/80 dark:bg-white/10" />
      </div>
    </div>
  );
}

export default function Projects() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const repos = await getRepositories(links.githubUser);
        if (!active) return;
        setRepositories([...repos].sort(byPushedDesc).slice(0, MAX_REPOS));
      } catch {
        if (!active) return;
        setRepositories([...fallbackRepositories].slice(0, MAX_REPOS));
        setUsedFallback(true);
      } finally {
        if (active) setLoading(false);
      }
    };

    load();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="section-shell">
      <AnimatedGrid />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker="projects"
          title={
            <>
              Open Source <span className="text-gradient">&amp; Projects</span>
            </>
          }
          description="A live look at what I'm building in public — extensions, tools, and experiments, pulled straight from GitHub and sorted by most recent."
        />

        {usedFallback && (
          <p className="mt-6 text-center font-mono text-xs tracking-wider text-gray-400 dark:text-gray-500">
            <span aria-hidden="true">// </span>showing featured selection
          </p>
        )}

        {loading ? (
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SKELETON_KEYS.map((key) => (
              <SkeletonCard key={key} />
            ))}
          </div>
        ) : (
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {repositories.map((repo) => (
              <motion.div key={repo.id} variants={fadeUp}>
                <RepositoryCard repository={repo} />
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 flex justify-center"
        >
          <MagneticButton variant="ghost" href={links.github} external>
            Explore all repositories
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
