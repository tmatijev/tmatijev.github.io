import { motion } from "framer-motion";
import {
  UserIcon,
  GlobeAltIcon,
  FaceSmileIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { OptimizedImage } from '../components/OptimizedImage';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { measurePerformance } from '../utils/performance';
import { useEffect } from 'react';

export default function Home() {
  const { scrollProgress } = useScrollPosition();
  
  useEffect(() => {
    measurePerformance.markStart('home-render');
    return () => {
      measurePerformance.markEnd('home-render');
      measurePerformance.clearMarks('home-render');
    };
  }, []);

  // Add parallax effect based on scroll progress
  const parallaxOffset = scrollProgress * 0.5; // Adjust multiplier for effect intensity

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden pt-24 pb-24">
      {/* Background decoration with parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          className="max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <OptimizedImage
                src="./images/avatar.jpeg"
                alt="Tomislav Matijević"
                width={192}
                height={192}
                className="w-48 h-48 rounded-full ring-4 ring-white shadow-xl"
              />
            </motion.div>

            <div className="flex-1">
              <motion.h1
                className="text-6xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Tomislav Matijević
              </motion.h1>

              <motion.h2
                className="text-2xl text-blue-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Principal Frontend Engineer
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                With over 10 years of experience in web development, I
                specialize in React and modern web technologies. My expertise
                spans across React, Remix, NextJS, and various frontend tools.
                I'm passionate about creating efficient, maintainable code and
                staying current with the latest web development trends.
                Currently exploring Remix, NextJS, Prisma, and MongoDB to push
                the boundaries of what's possible on the web.
              </motion.p>

              <motion.div
                className="space-y-4 mb-8 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Beyond Coding:
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <UserIcon className="w-5 h-5 text-blue-600" />
                    Proud father of two beautiful daughters
                  </li>
                  <li className="flex items-center gap-2">
                    <GlobeAltIcon className="w-5 h-5 text-blue-600" />
                    Tennis enthusiast
                  </li>
                  <li className="flex items-center gap-2">
                    <FaceSmileIcon className="w-5 h-5 text-blue-600" />
                    Dog lover
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpenIcon className="w-5 h-5 text-blue-600 mt-1" />
                    <span>
                      Author of a book about stuttering, available at{" "}
                      <a
                        href="https://stutteringbook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      >
                        stutteringbook.com
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://amzn.eu/d/dxdgOJz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      >
                        Amazon
                      </a>
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="space-y-4 mb-8 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  My Websites:
                </h3>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center">
                    <span className="mr-2">→</span>
                    <a
                      href="https://mucanje.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-all duration-300 relative inline-block group"
                    >
                      mucanje.com
                      <span className="absolute -right-6 transform transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">→</span>
                    <a
                      href="https://stutteringbook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-all duration-300 relative inline-block group"
                    >
                      stutteringbook.com
                      <span className="absolute -right-6 transform transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  View my Portfolio
                </button>
                <button
                  onClick={() => document.getElementById('what-can-i-do')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto bg-white text-blue-600 px-8 py-3 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  What can I do?
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
