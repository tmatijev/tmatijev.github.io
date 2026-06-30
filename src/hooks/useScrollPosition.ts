import { useState, useEffect } from 'react';
import { navItems } from '../lib/content';

const SECTION_IDS = navItems.map((n) => n.id);

/**
 * Tracks the section currently in view. rAF-throttled, and only updates state
 * when the active section actually changes — so consumers re-render at most
 * once per section crossing, not once per scroll frame.
 */
export function useScrollPosition() {
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0] ?? 'home');

  useEffect(() => {
    let ticking = false;

    const compute = () => {
      ticking = false;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection((prev) => (prev === id ? prev : id));
          break;
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    compute();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { activeSection };
}
