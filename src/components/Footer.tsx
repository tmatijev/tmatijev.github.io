import { motion } from 'framer-motion';
import { identity, links } from '../lib/content';
import { viewportOnce } from '../lib/motion';

const footerLinks = [
  { label: 'GitHub', href: links.github, external: true },
  { label: 'LinkedIn', href: links.linkedin, external: true },
  { label: 'Undefined', href: links.company, external: true },
  { label: 'Email', href: `mailto:${links.email}`, external: false },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gray-200/70 bg-white dark:border-white/10 dark:bg-ink-950">
      {/* animated pulse line */}
      <svg
        className="absolute inset-x-0 top-0 h-px w-full"
        viewBox="0 0 1200 1"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.line
          x1="0"
          y1="0.5"
          x2="1200"
          y2="0.5"
          stroke="url(#footerLine)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.2 }}
        />
        <defs>
          <linearGradient id="footerLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <div className="font-display text-2xl font-bold text-gray-900 dark:text-white">
              {identity.name}
            </div>
            <p className="mt-2 max-w-sm text-sm text-gray-500 dark:text-gray-400">
              {identity.role} · {identity.location}
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3" aria-label="Footer">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-sm font-medium text-gray-500 transition-colors hover:text-accent-blue dark:text-gray-400 dark:hover:text-accent-cyan"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 text-xs text-gray-500 dark:border-white/5 dark:text-gray-400 md:flex-row">
          <span>© {year} {identity.name}. Built with React, TypeScript &amp; Framer Motion.</span>
          <span className="font-mono tracking-wider">human judgment × AI acceleration</span>
        </div>
      </div>
    </footer>
  );
}
