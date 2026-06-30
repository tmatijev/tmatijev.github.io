import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  ArrowUpRightIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { SectionHeader } from '../components/SectionHeader';
import { MagneticButton } from '../components/MagneticButton';
import { AnimatedGrid } from '../components/AnimatedGrid';
import { fadeUp, stagger, viewportOnce } from '../lib/motion';
import { links, identity } from '../lib/content';

type GlyphProps = { className?: string };

type Channel = {
  label: string;
  value: string;
  href: string;
  icon: (props: GlyphProps) => JSX.Element;
  external: boolean;
};

const channels: Channel[] = [
  {
    label: 'Email',
    value: links.email,
    href: `mailto:${links.email}`,
    icon: (props) => <EnvelopeIcon {...props} aria-hidden="true" />,
    external: false,
  },
  {
    label: 'GitHub',
    value: `@${links.githubUser}`,
    href: links.github,
    icon: GitHubGlyph,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: `in/${links.githubUser}`,
    href: links.linkedin,
    icon: LinkedInGlyph,
    external: true,
  },
  {
    label: links.companyName,
    value: 'undefined.hr',
    href: links.company,
    icon: StudioGlyph,
    external: true,
  },
];

export default function Contact() {
  return (
    <div className="section-shell">
      <AnimatedGrid />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="contact"
          title={
            <>
              Let&apos;s build <span className="text-gradient">something</span>
            </>
          }
          description="Available for select engineering work and technical consulting. If the problem is hard and the bar is high, I want to hear about it."
          align="center"
        />

        <motion.div
          variants={stagger(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 lg:grid-cols-5"
        >
          {/* Contact channels */}
          <motion.div
            variants={fadeUp}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-3"
          >
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(channel.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="panel-interactive group relative flex items-center gap-4 p-5"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 flex-none items-center justify-center rounded-xl
                               border border-gray-200/80 bg-gray-50 text-accent-blue
                               transition-colors duration-300
                               group-hover:border-accent-cyan/40 group-hover:text-accent-cyan
                               dark:border-white/10 dark:bg-white/[0.04] dark:text-accent-cyan"
                  >
                    <Icon className="h-6 w-6" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="mono-label">{channel.label}</span>
                    <span className="mt-1 block truncate text-base font-medium text-gray-900 dark:text-white">
                      {channel.value}
                    </span>
                  </span>

                  <ArrowUpRightIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-gray-400 transition-all duration-300
                               group-hover:-translate-y-0.5 group-hover:translate-x-0.5
                               group-hover:text-accent-cyan dark:text-gray-500"
                  />
                </a>
              );
            })}
          </motion.div>

          {/* Direct panel */}
          <motion.div
            variants={fadeUp}
            className="panel relative flex flex-col justify-between overflow-hidden p-8 lg:col-span-2"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full
                         bg-accent-violet/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full
                         bg-accent-cyan/10 blur-3xl"
            />

            <div className="relative">
              <p className="mono-label">
                <span aria-hidden="true">// </span>direct
              </p>
              <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                The fastest way to reach me
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Skip the form. A clear email gets a thoughtful reply — usually
                within a day. Tell me what you&apos;re building and where it
                hurts.
              </p>
            </div>

            <div className="relative mt-8">
              <MagneticButton
                href={`mailto:${links.email}`}
                variant="primary"
                className="w-full"
              >
                <EnvelopeIcon aria-hidden="true" className="h-5 w-5" />
                <span className="truncate">{links.email}</span>
                <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
              </MagneticButton>

              <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
                {identity.location} · Working remotely worldwide
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Inline brand glyphs (no extra deps) ─────────────────────────────────── */

function GitHubGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

function LinkedInGlyph({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function StudioGlyph({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className={className}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v6a4 4 0 0 0 8 0V7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
    </svg>
  );
}
