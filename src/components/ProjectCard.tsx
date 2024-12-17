import { motion } from 'framer-motion';

interface ProjectCardProps {
  job: {
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
    technologies?: string[];
  };
}

export function ProjectCard({ job }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -5
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-100"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {job.title}
      </h3>
      <div className="text-blue-600 mb-4">
        <span className="font-semibold">{job.company}</span>
        <span className="mx-2">•</span>
        <span className="text-gray-500">{job.location}</span>
      </div>
      <div className="text-gray-500 mb-4">{job.period}</div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Responsibilities:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="hover:text-gray-900 transition-colors">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
        
        {job.technologies && (
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
} 