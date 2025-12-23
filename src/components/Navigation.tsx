import { useState, useCallback, useEffect } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSection } = useScrollPosition();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'before-you-continue', label: 'Stories' },
    { id: 'portfolio', label: 'Experience' },
    { id: 'what-can-i-do', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ] as const;

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setIsOpen(false);
  }, []);

  const NavLink = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`relative px-3 py-2 text-sm font-medium transition-colors ${
        activeSection === id
          ? 'text-blue-600 dark:text-blue-400'
          : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
      }`}
    >
      {label}
      {activeSection === id && (
        <motion.div
          layoutId="activeSection"
          className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </button>
  );

  const MobileNavLink = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
        activeSection === id
          ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
          : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5'
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg border-b border-gray-200 dark:border-dark-border shadow-sm'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold font-display text-gray-900 dark:text-white cursor-pointer tracking-tight"
              onClick={() => scrollToSection('home')}
            >
              TM<span className="text-blue-600">.</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-4 bg-white/50 dark:bg-white/5 px-6 py-2 rounded-full border border-gray-200 dark:border-white/10 backdrop-blur-md">
                {navItems.map((item) => (
                  <NavLink key={item.id} {...item} />
                ))}
              </div>

              <div className="w-px h-6 bg-gray-200 dark:bg-white/10" />

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <MoonIcon className="w-5 h-5" />
                ) : (
                  <SunIcon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10 transition-colors"
              >
                 {theme === 'light' ? (
                  <MoonIcon className="w-6 h-6" />
                ) : (
                  <SunIcon className="w-6 h-6" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <XMarkIcon className="w-8 h-8" />
                ) : (
                  <Bars3Icon className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-xl md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MobileNavLink {...item} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
