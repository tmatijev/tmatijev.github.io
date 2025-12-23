import { motion, useScroll, useTransform } from "framer-motion";
import {
  UserIcon,
  GlobeAltIcon,
  BookOpenIcon,
  ArrowRightIcon,
  CodeBracketIcon
} from "@heroicons/react/24/outline";
import { OptimizedImage } from '../components/OptimizedImage';
import { measurePerformance } from '../utils/performance';
import { useEffect, useRef } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  
  useEffect(() => {
    measurePerformance.markStart('home-render');
    return () => {
      measurePerformance.markEnd('home-render');
      measurePerformance.clearMarks('home-render');
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden flex items-center justify-center pt-24 pb-24">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-white dark:bg-dark-bg transition-colors duration-300">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />

        {/* Animated gradients */}
        <motion.div
          style={{ y: y1, x: -100 }}
          className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-blob"
        />
        <motion.div
          style={{ y: y2, x: 100 }}
          className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-2000"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:bg-[url('/grid-dark.svg')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-sm font-medium mb-8 border border-blue-100 dark:border-blue-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for new projects
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Modern Web
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              I'm Tomislav Matijević, a Principal Frontend Engineer with over a decade
              of experience. I specialize in scalable React applications,
              performance optimization, and engineering leadership.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto btn-primary flex items-center justify-center gap-2"
              >
                View Portfolio
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('what-can-i-do')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto btn-secondary"
              >
                What I Do
              </button>
            </motion.div>

            {/* Quick stats/links */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-gray-200 dark:border-white/10 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">10+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years Exp.</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">Principal</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Engineer</div>
              </div>
              <a
                href="https://stutteringbook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center lg:text-left group hover:opacity-80 transition-opacity"
              >
                <div className="text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center lg:justify-start gap-2">
                  Author <BookOpenIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400 group-hover:underline">View Book →</div>
              </a>
               <a
                href="https://github.com/tmatijev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center lg:text-left group hover:opacity-80 transition-opacity"
              >
                <div className="text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center lg:justify-start gap-2">
                  Coder <CodeBracketIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400 group-hover:underline">GitHub →</div>
              </a>
            </motion.div>
          </div>

          {/* Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] rotate-6 opacity-20 blur-lg animate-pulse" />
              <div className="absolute inset-0 bg-white dark:bg-dark-card rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-white/10 rotate-3 transition-transform hover:rotate-0 duration-500">
                <OptimizedImage
                  src="./images/avatar.jpeg"
                  alt="Tomislav Matijević"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-8 top-12 glass-card p-4 rounded-xl flex items-center gap-3 hidden sm:flex"
            >
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <UserIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Current Role</div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">Principal Engineer</div>
              </div>
            </motion.div>

             <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-8 bottom-12 glass-card p-4 rounded-xl flex items-center gap-3 hidden sm:flex"
            >
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <GlobeAltIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Based in</div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">Osijek, Croatia</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
