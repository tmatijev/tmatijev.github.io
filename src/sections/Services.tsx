import type { ComponentType, SVGProps } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  CpuChipIcon,
  Square3Stack3DIcon,
  BoltIcon,
  ArrowTrendingUpIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import { SectionHeader } from '../components/SectionHeader';
import { MagneticButton } from '../components/MagneticButton';
import { AnimatedGrid } from '../components/AnimatedGrid';
import { services, links } from '../lib/content';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

// Map each service to a fitting outline icon by title.
const iconByTitle: Record<string, IconType> = {
  'AI-Powered Applications': CpuChipIcon,
  'Frontend Architecture': Square3Stack3DIcon,
  'Modern Web Products': BoltIcon,
  'Performance Optimization': ArrowTrendingUpIcon,
  'Technical Consulting': ChatBubbleLeftRightIcon,
  'MVP & Product Builds': RocketLaunchIcon,
};

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <div className="section-shell">
      <AnimatedGrid />

      <div className="section-shell relative mx-auto max-w-7xl px-6 !py-0">
        <SectionHeader
          kicker="services"
          title={
            <>
              What I <span className="text-gradient">Build</span>
            </>
          }
          description="Senior engineering judgment, applied end to end — from AI-native product surfaces to architecture that holds up under scale. A focused set of things I do exceptionally well."
        />

        <motion.ul
          variants={stagger(0.08, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = iconByTitle[service.title] ?? BoltIcon;
            return (
              <motion.li key={service.title} variants={fadeUp} className="h-full">
                <motion.article
                  whileHover={reduce ? undefined : { y: -6, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  className="panel-interactive group relative h-full overflow-hidden p-7"
                >
                  {/* Accent glow on hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-cyan/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative flex flex-col gap-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-accent-blue/15 via-accent-cyan/10 to-accent-violet/15 text-accent-cyan transition-colors duration-300 group-hover:border-accent-cyan/40 dark:bg-white/[0.04]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>

                    <div>
                      <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600 text-pretty dark:text-gray-400">
                        {service.description}
                      </p>
                    </div>

                    <ul className="mt-auto flex flex-wrap gap-2 pt-1">
                      {service.tags.map((tag) => (
                        <li key={tag} className="chip">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* CTA panel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="panel relative mt-16 overflow-hidden p-8 md:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent-blue/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent-violet/15 blur-3xl"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="mono-label mb-4">
                <span aria-hidden="true">// </span>
                let&apos;s build
              </p>
              <h3 className="font-display text-2xl font-bold text-gray-900 text-balance md:text-3xl dark:text-white">
                Have something hard worth building?
              </h3>
              <p className="mt-3 text-gray-600 text-pretty dark:text-gray-400">
                Bring the ambition — I&apos;ll bring the architecture, the speed,
                and the judgment to make it production-ready. I also build under{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Undefined
                </span>
                , my software studio.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <MagneticButton variant="primary" onClick={scrollToContact}>
                Start a project
              </MagneticButton>
              <MagneticButton variant="ghost" href={links.company} external>
                Visit Undefined
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
