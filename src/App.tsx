import { motion } from 'framer-motion';
import Home from './sections/Home';
import Portfolio from './sections/Portfolio';
import WhatCanIDo from './sections/WhatCanIDo';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Home />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="what-can-i-do">
          <WhatCanIDo />
        </section>

        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
