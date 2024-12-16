import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <motion.div 
        className="max-w-4xl mx-auto p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Portfolio</h1>
        <p className="text-lg text-gray-600 mb-8">
          This page is under construction. Soon you'll see my featured projects and work experience here.
        </p>
        
        {/* Placeholder for future content */}
        <div className="grid gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              I'm currently organizing my portfolio projects. Check back soon to see my work!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 