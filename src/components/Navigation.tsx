import { motion } from 'framer-motion';

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            TM
          </button>
          
          <div className="flex gap-6">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('what-can-i-do')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              What Can I Do?
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 