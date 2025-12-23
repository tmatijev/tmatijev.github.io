import { motion } from "framer-motion";

interface ServiceCardProps {
  emoji: string;
  title: string;
  description: string;
}

export function ServiceCard({ emoji, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card p-8 rounded-2xl h-full flex flex-col group transition-all duration-300"
    >
      <div className="text-4xl mb-6 bg-blue-50 dark:bg-blue-900/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
}
