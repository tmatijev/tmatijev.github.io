import { ErrorBoundary } from './components/ErrorBoundary';
import { lazy, Suspense } from 'react';

// Lazy load components
const Home = lazy(() => import('./sections/Home'));
const Portfolio = lazy(() => import('./sections/Portfolio'));
const WhatCanIDo = lazy(() => import('./sections/WhatCanIDo'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));
const Navigation = lazy(() => import('./components/Navigation'));

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <div className="min-h-screen">
          <Navigation />
          <main>
            <section id="home" aria-label="Home section">
              <Home />
            </section>
            
            <section id="portfolio" aria-label="Portfolio section">
              <Portfolio />
            </section>
            
            <section id="what-can-i-do" aria-label="Services section">
              <WhatCanIDo />
            </section>

            <section id="projects" aria-label="Projects section">
              <Projects />
            </section>
            
            <section id="contact" aria-label="Contact section">
              <Contact />
            </section>
          </main>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
