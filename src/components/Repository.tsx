import { motion, useReducedMotion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import type { Repository } from '../types/repository';
import { EASE } from '../lib/motion';

// Colored dot per language — extends the original map a little.
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  HTML: 'bg-orange-500',
  CSS: 'bg-sky-400',
  SCSS: 'bg-pink-500',
  Python: 'bg-green-500',
  Go: 'bg-cyan-400',
  Rust: 'bg-orange-600',
  Shell: 'bg-emerald-500',
  Vue: 'bg-emerald-400',
  PHP: 'bg-indigo-400',
  Ruby: 'bg-red-500',
  Java: 'bg-amber-600',
  'C++': 'bg-rose-500',
  Dockerfile: 'bg-sky-500',
  MDX: 'bg-violet-400',
};

/** "Updated 3 days ago" — returns null for the epoch (fallback repos). */
function relativeUpdated(pushedAt: string): string | null {
  const then = new Date(pushedAt);
  const time = then.getTime();
  if (Number.isNaN(time) || then.getUTCFullYear() <= 1970) return null;

  const diffMs = Date.now() - time;
  const day = 86_400_000;
  const days = Math.round(diffMs / day);

  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days} days ago`;
  const months = Math.round(days / 30);
  if (months < 12) return months === 1 ? '1 month ago' : `${months} months ago`;
  const years = Math.round(days / 365);
  return years === 1 ? '1 year ago' : `${years} years ago`;
}

export function RepositoryCard({ repository }: { repository: Repository }) {
  const reduce = useReducedMotion();
  const language = repository.language ?? 'Other';
  const dotColor = LANGUAGE_COLORS[language] ?? 'bg-gray-400';
  const updated = relativeUpdated(repository.pushed_at);

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="panel-interactive group relative flex h-full flex-col p-6"
    >
      {/* Header: language glyph + stars */}
      <div className="mb-5 flex items-start justify-between gap-3">
        <span className="mono-label">repo</span>
        {repository.stargazers_count > 0 && (
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-gold/90">
            <StarIcon aria-hidden="true" className="h-4 w-4" />
            <span aria-label={`${repository.stargazers_count} stars`}>
              {repository.stargazers_count}
            </span>
          </span>
        )}
      </div>

      <h3 className="font-display text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-accent-cyan dark:text-white">
        {repository.name}
      </h3>

      <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-600 line-clamp-3 dark:text-gray-400">
        {repository.description ?? 'No description provided.'}
      </p>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-gray-200/70 pt-4 dark:border-white/10">
        <div className="flex min-w-0 items-center gap-2">
          <span aria-hidden="true" className={`h-2.5 w-2.5 shrink-0 rounded-full ${dotColor}`} />
          <span className="truncate text-sm text-gray-600 dark:text-gray-400">{language}</span>
        </div>

        <a
          href={repository.html_url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View code for ${repository.name} on GitHub`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent-blue transition-colors duration-200 hover:text-accent-cyan dark:text-accent-cyan/90 dark:hover:text-accent-cyan"
        >
          View Code
          <ArrowUpRightIcon aria-hidden="true" className="h-3.5 w-3.5" />
        </a>
      </div>

      {updated && (
        <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-wider text-gray-400 dark:text-gray-500">
          Updated {updated}
        </p>
      )}
    </motion.article>
  );
}
