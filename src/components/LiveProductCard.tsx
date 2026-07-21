import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import type { LiveProduct } from '../lib/content';
import { EASE } from '../lib/motion';

export function LiveProductCard({ product }: { product: LiveProduct }) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${product.name} — opens in a new tab`}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="panel-interactive group relative flex h-full flex-col overflow-hidden"
    >
      {/* Screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={product.image}
          alt={`Screenshot of ${product.name}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        {/* Accent wash on hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${product.accent}22 0%, transparent 45%, ${product.accent2}22 100%)`,
          }}
        />
        {/* Live badge */}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-white backdrop-blur">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: product.accent }}
          />
          Live
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-grow flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-accent-cyan dark:text-white">
            {product.name}
          </h3>
          <ArrowUpRightIcon
            aria-hidden="true"
            className="mt-1 h-4 w-4 shrink-0 text-gray-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-cyan dark:text-gray-500"
          />
        </div>

        <p className="mt-2 flex-grow text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {product.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {product.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200/80 px-2.5 py-0.5 font-mono text-[0.7rem] text-gray-500 dark:border-white/10 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
