import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRightIcon,
  BookOpenIcon,
  CodeBracketIcon,
  MapPinIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { HeroVisual } from '../components/HeroVisual';
import { MagneticButton } from '../components/MagneticButton';
import { AnimatedGrid } from '../components/AnimatedGrid';
import { fadeUp, stagger, EASE } from '../lib/motion';
import { identity, links } from '../lib/content';

const stats = [
  { value: '10+', label: 'Years shipping' },
  { value: 'Principal', label: 'Engineer' },
  { value: 'AI-native', label: 'Workflow' },
  { value: 'Author', label: 'Published' },
] as const;

const social = [
  { href: links.github, label: 'GitHub', Icon: CodeBracketIcon },
  { href: links.linkedin, label: 'LinkedIn', Icon: UserIcon },
  { href: links.book, label: 'Author', Icon: BookOpenIcon },
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/** Subtle, reduced-motion-safe role rotator. */
function RoleRotator() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % identity.roles.length),
      2600,
    );
    return () => window.clearInterval(timer);
  }, [reduce]);

  if (reduce) {
    return <span className="text-gradient">{identity.role}</span>;
  }

  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={identity.roles[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="text-gradient inline-block"
        >
          {identity.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Home() {
  return (
    <div className="section-shell flex min-h-screen items-center pt-28 md:pt-32">
      <AnimatedGrid />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8">
        {/* Text column */}
        <motion.div
          variants={stagger(0.1, 0.05)}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1 lg:col-span-7"
        >
          <motion.p
            variants={fadeUp}
            className="mono-label mb-5 flex flex-wrap items-center gap-x-3 gap-y-1"
          >
            <span>
              <span aria-hidden="true">// </span>
              principal frontend × ai engineer
            </span>
            <span aria-hidden="true" className="text-gray-300 dark:text-white/20">
              /
            </span>
            <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {identity.location}
            </span>
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mb-4 text-lg font-medium text-gray-500 dark:text-gray-400"
          >
            {identity.name} — <RoleRotator />
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white sm:text-5xl xl:text-6xl"
          >
            {identity.tagline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty text-base text-gray-600 dark:text-gray-400 sm:text-lg"
          >
            {identity.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton variant="primary" onClick={() => scrollTo('projects')}>
              View Work
            </MagneticButton>
            <MagneticButton variant="ghost" onClick={() => scrollTo('contact')}>
              Contact Me
            </MagneticButton>
            <a
              href={links.company}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-accent-gold/40 bg-accent-gold/5 px-4 py-2 text-sm font-medium text-accent-gold transition-colors duration-200 hover:border-accent-gold/70 hover:bg-accent-gold/10"
            >
              {links.companyName}
              <ArrowUpRightIcon
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.div>

          {/* Social pills */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-2.5"
          >
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="chip hover:border-accent-cyan/40 hover:text-accent-blue dark:hover:text-accent-cyan"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {label}
              </a>
            ))}
          </motion.div>

          {/* Stats strip */}
          <motion.dl
            variants={fadeUp}
            className="mt-10 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-200/80 bg-gray-200/60 sm:grid-cols-4 dark:border-white/10 dark:bg-white/5"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/80 px-4 py-4 backdrop-blur-sm dark:bg-ink-950/80"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-lg font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </dd>
                <dd className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-gray-500 dark:text-gray-500">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Visual column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </div>
  );
}
