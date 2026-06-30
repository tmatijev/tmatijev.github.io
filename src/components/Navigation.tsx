import { useState, useCallback, useEffect, useRef } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import { navItems, links, company } from '../lib/content';

type Theme = 'light' | 'dark';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function NavLink({
  id,
  label,
  active,
  onSelect,
}: {
  id: string;
  label: string;
  active: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onSelect(id)}
      aria-current={active ? 'true' : undefined}
      className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
        active
          ? 'text-gray-900 dark:text-white'
          : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
      }`}
    >
      {active && (
        <motion.span
          layoutId="navActive"
          className="absolute inset-0 rounded-full bg-gray-900/5 dark:bg-white/10"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative">{label}</span>
    </button>
  );
}

function ThemeToggle({
  theme,
  onToggle,
  className = 'h-5 w-5',
}: {
  theme: Theme;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onToggle}
      className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-900/5 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <MoonIcon className={className} /> : <SunIcon className={className} />}
    </button>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSection } = useScrollPosition();
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const select = useCallback((id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  }, []);

  // Mobile menu: lock scroll, close on Escape, restore focus to the toggle.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? 'border-b border-gray-200/70 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/70'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <button
            onClick={() => select('home')}
            className="font-display text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            aria-label="Back to top"
          >
            TM<span className="text-gradient">.</span>
          </button>

          {/* Desktop */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-1 rounded-full border border-gray-200/70 bg-white/50 px-2 py-1 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  active={activeSection === item.id}
                  onSelect={select}
                />
              ))}
            </div>

            <a
              href={links.company}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 px-4 py-1.5 text-sm font-semibold text-gray-900 transition-colors hover:border-accent-cyan/60 dark:text-white"
            >
              {company.name}
              <ArrowUpRightIcon className="h-3.5 w-3.5 text-accent-cyan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="h-6 w-px bg-gray-200 dark:bg-white/10" />
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} onToggle={toggleTheme} className="h-6 w-6" />
            <button
              ref={toggleRef}
              onClick={() => setIsOpen((v) => !v)}
              className="text-gray-700 dark:text-gray-200"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-20 z-40 overflow-hidden bg-white/95 backdrop-blur-xl outline-none dark:bg-ink-950/95 md:hidden"
          >
            <div className="space-y-1 px-6 py-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => select(item.id)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-accent-cyan/10 text-gray-900 dark:text-white'
                      : 'text-gray-600 hover:bg-gray-900/5 dark:text-gray-300 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <a
                href={links.company}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-between rounded-xl border border-accent-cyan/30 bg-accent-cyan/5 px-4 py-3 text-base font-semibold text-gray-900 dark:text-white"
              >
                Visit {company.name}
                <ArrowUpRightIcon className="h-4 w-4 text-accent-cyan" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
