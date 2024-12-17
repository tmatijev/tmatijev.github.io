import { motion } from 'framer-motion';

interface ServiceCardProps {
  emoji: string;
  title: string;
  description: string;
}

export function ServiceCard({ emoji, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -5,
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-100"
    >
      <span className="text-4xl mb-4 block transform transition-transform hover:scale-110 inline-block">{emoji}</span>
      <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h2>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
        {description}
      </p>
    </motion.div>
  );
} 