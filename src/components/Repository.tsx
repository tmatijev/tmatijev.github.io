import { Repository as RepositoryType } from '../types/repository';

interface Props {
  repository: RepositoryType;
}

export const RepositoryCard = ({ repository }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" data-testid="repository-card">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {repository.name}
      </h3>
      
      {repository.description && (
        <p className="text-gray-600 mb-4">{repository.description}</p>
      )}
      
      <div className="flex flex-wrap gap-2 mb-4">
        {repository.topics.map((topic) => (
          <span 
            key={topic}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {topic}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          {repository.language && (
            <span className="text-sm text-gray-600">
              {repository.language}
            </span>
          )}
          <span className="text-sm text-gray-600">
            ★ {repository.stargazers_count}
          </span>
        </div>
        <a 
          href={repository.html_url}
          className="text-blue-600 hover:text-blue-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}; 