import { motion } from 'framer-motion';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
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
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('what-can-i-do')} className="text-gray-600 hover:text-blue-600 transition-colors">
              What Can I Do?
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-4"
          >
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('what-can-i-do')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded"
            >
              What Can I Do?
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded"
            >
              Contact
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
} 