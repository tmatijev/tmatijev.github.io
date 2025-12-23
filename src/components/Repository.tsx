import { motion } from 'framer-motion';
import { StarIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import type { Repository } from '../types/repository';

export function RepositoryCard({ repository }: { repository: Repository }) {
  const language = repository.language || 'Unknown';
  const languageColor = {
    TypeScript: 'bg-blue-500',
    JavaScript: 'bg-yellow-500',
    HTML: 'bg-orange-500',
    CSS: 'bg-blue-400',
    Python: 'bg-green-500',
    // Add more as needed
  }[language] || 'bg-gray-500';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card h-full flex flex-col p-6 rounded-2xl group transition-all duration-300 hover:border-blue-500/30 dark:hover:border-blue-400/30"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
          <CodeBracketIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-white/5 px-2 py-1 rounded-md text-sm">
          <StarIcon className="w-4 h-4" />
          <span>{repository.stargazers_count}</span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
        {repository.name}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
        {repository.description || "No description provided."}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${languageColor}`} />
          <span className="text-sm text-gray-600 dark:text-gray-400">{repository.language || 'Unknown'}</span>
        </div>

        <a
          href={repository.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Code
          <ArrowTopRightOnSquareIcon className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}
