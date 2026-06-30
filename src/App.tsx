import { lazy, Suspense, useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { SpotlightBackground } from './components/SpotlightBackground';
import { InitialLoader } from './components/InitialLoader';
import { CompanyCTA } from './components/CompanyCTA';

import Home from './sections/Home';
const AIEdge = lazy(() => import('./sections/AIEdge'));
const Stories = lazy(() => import('./sections/Stories'));
const Experience = lazy(() => import('./sections/Experience'));
const Services = lazy(() => import('./sections/Services'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

const BOOT_KEY = 'tm-booted';

const Loading = () => (
  <div className="flex min-h-[60vh] items-center justify-center" aria-hidden="true">
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-accent-cyan/30 border-t-accent-cyan" />
  </div>
);

function App() {
  const [booting, setBooting] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(BOOT_KEY) !== '1';
  });

  const finishBoot = useCallback(() => {
    sessionStorage.setItem(BOOT_KEY, '1');
    setBooting(false);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {booting && <InitialLoader key="loader" onComplete={finishBoot} />}
      </AnimatePresence>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent-blue focus:px-5 focus:py-2.5 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <SpotlightBackground />
      <ScrollProgress />
      <Navigation />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <section id="home" className="scroll-mt-24">
          <Home />
        </section>

        <section id="ai-edge" className="scroll-mt-24">
          <Suspense fallback={<Loading />}>
            <AIEdge />
          </Suspense>
        </section>

        <section id="stories" className="scroll-mt-24">
          <Suspense fallback={<Loading />}>
            <Stories />
          </Suspense>
        </section>

        <section id="experience" className="scroll-mt-24">
          <Suspense fallback={<Loading />}>
            <Experience />
          </Suspense>
        </section>

        <section id="services" className="scroll-mt-24">
          <Suspense fallback={<Loading />}>
            <Services />
          </Suspense>
        </section>

        <section id="projects" className="scroll-mt-24">
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        </section>

        <section id="company" className="section-shell scroll-mt-24">
          <CompanyCTA />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        </section>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
