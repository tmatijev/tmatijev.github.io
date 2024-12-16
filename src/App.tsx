import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import WhatCanIDo from './pages/WhatCanIDo';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/what-can-i-do" element={<WhatCanIDo />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
