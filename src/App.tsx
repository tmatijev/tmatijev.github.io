import { lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';

// Lazy load all sections
const Home = lazy(() => import('./sections/Home'));
const Portfolio = lazy(() => import('./sections/Portfolio'));
const WhatCanIDo = lazy(() => import('./sections/WhatCanIDo'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));
const BeforeYouContinue = lazy(() => import('./sections/BeforeYouContinue'));

// Simple loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section id="home">
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </section>

      <section id="before-you-continue">
        <Suspense fallback={<Loading />}>
          <BeforeYouContinue />
        </Suspense>
      </section>

      <section id="portfolio">
        <Suspense fallback={<Loading />}>
          <Portfolio />
        </Suspense>
      </section>

      <section id="what-can-i-do">
        <Suspense fallback={<Loading />}>
          <WhatCanIDo />
        </Suspense>
      </section>

      <section id="projects">
        <Suspense fallback={<Loading />}>
          <Projects />
        </Suspense>
      </section>

      <section id="contact">
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      </section>
    </div>
  );
}

export default App;
