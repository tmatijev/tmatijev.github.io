import { motion } from "framer-motion";

export default function WhatCanIDo() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <motion.div 
        className="max-w-4xl mx-auto p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">What Can I Do?</h1>
        <div className="space-y-8">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frontend Development</h2>
            <p className="text-gray-600">
              Expertise in React, TypeScript, and modern frontend tools. Building responsive, 
              accessible, and performant web applications.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Full Stack Development</h2>
            <p className="text-gray-600">
              Experience with Node.js, databases, and API design. Creating end-to-end solutions 
              that scale.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Leadership</h2>
            <p className="text-gray-600">
              Leading teams, mentoring developers, and architecting solutions. Bringing best 
              practices and modern development workflows to projects.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 