import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";
import type { Job } from "../types/portfolio";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <motion.div 
      variants={item}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100/50 hover:border-blue-100"
    >
      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
        {job.title}
      </h3>
      
      <div className="flex flex-wrap gap-4 mt-3 text-gray-600">
        <div className="flex items-center gap-1">
          <BriefcaseIcon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
          <span className="group-hover:text-blue-600 transition-colors duration-300">{job.company}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPinIcon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
          <span className="group-hover:text-blue-600 transition-colors duration-300">{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
          <span className="group-hover:text-blue-600 transition-colors duration-300">{job.period}</span>
        </div>
      </div>
      
      <ul className="mt-4 space-y-2">
        {job.responsibilities.map((responsibility, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * i }}
            className="text-gray-600 flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300"
          >
            <span className="text-blue-600 mt-1">•</span>
            {responsibility}
          </motion.li>
        ))}
      </ul>

      {job.technologies && (
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3 text-gray-700">
            <CommandLineIcon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium group-hover:text-blue-600 transition-colors duration-300">Technologies:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {job.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 hover:scale-105 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
} 