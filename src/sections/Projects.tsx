import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RepositoryCard } from '../components/Repository';
import { getRepositories } from '../models/github';
import type { Repository } from '../types/repository';

export default function Projects() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const repos = await getRepositories("tmatijev");
        const sortedRepos = repos.sort((a: Repository, b: Repository) => 
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        );
        setRepositories(sortedRepos);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Open Source & Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Exploring new technologies and sharing with the community
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repositories.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <RepositoryCard repository={repo} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
