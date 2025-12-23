import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import type { Job } from '../types/portfolio';

export default function Portfolio() {
  const employmentHistory: Job[] = [
    {
      title: "Principal Front-end Engineer",
      company: "Toptal",
      location: "Osijek (remote)",
      period: "SEPTEMBER 2023 — PRESENT",
      type: "fulltime",
      responsibilities: [
        "Identifying and enhancing architectural aspects within the Client vertical",
        "Pinpointing potential technical and business improvements",
        "High-level code quality advocate in team and squad environments",
        "Leadership in implementing technical and infrastructure initiatives",
        "Active participation in research and experimentation with technologies",
        "Proactive identification of challenges and areas for improvement",
        "Coaching and mentoring engineers on advanced topics",
        "Proactive assistance to other engineers in problem-solving",
        "Engaging in discussions and promoting technical migrations",
        "Promoting productive communication and facilitating discussions"
      ],
      technologies: [
        "React", "TypeScript", "GraphQL", "Node.js", "Next.js",
        "Architecture Design", "Technical Leadership"
      ]
    },
    {
      title: "Senior Front-end Core Engineer",
      company: "Toptal",
      location: "Osijek (remote)",
      period: "JANUARY 2017 — SEPTEMBER 2023",
      type: "fulltime",
      responsibilities: [
        "Design, build, and maintain efficient, reusable front-end code",
        "Multiple initiative lead",
        "Help maintain code quality",
        "Onboard and mentor new team members",
        "Working with the latest FE technologies"
      ],
      technologies: [
        "React", "Redux", "TypeScript", "GraphQL", "Apollo", "Relay",
        "Enzyme", "Jest", "StoryBook", "TestShot", "RTL", "Happo",
        "Cypress", "Sass", "Lodash", "Babel", "Webpack", "date-fns"
      ]
    },
    {
      title: "Front-end & Front-end Lead Engineer",
      company: "Farmeron",
      location: "Osijek",
      period: "AUGUST 2014 — JANUARY 2017",
      type: "fulltime",
      responsibilities: [
        "Implemented UI/UX improvements",
        "Created coding standards for CSS/JavaScript",
        "Utilized AngularJS for complex projects",
        "Improved front-end architecture reducing page load size by 85%",
        "Led project specifications and infrastructure decisions",
        "Created jQuery plugins for site functionalities",
        "Worked on new Farmeron website using BEM methodology",
        "Wrote JavaScript tests using Jasmine"
      ],
      technologies: [
        "AngularJS", "JavaScript", "jQuery", "Sass", "OOCSS",
        "Gulp", "Bower", "Jasmine", "Git"
      ]
    },
    {
      title: "eZ Publish / Front-end Engineer",
      company: "Netgen",
      location: "Osijek",
      period: "MARCH 2012 — AUGUST 2014",
      type: "fulltime",
      responsibilities: [
        "eZ Publish template programming",
        "Front-end development (HTML, CSS, Javascript, jQuery)",
        "Visual Design solutions (Adobe Photoshop, Illustrator)",
        "Working with LESS & Bootstrap",
        "Daily use of GIT & SVN"
      ],
      technologies: [
        "eZ Publish", "HTML", "CSS", "JavaScript", "jQuery",
        "LESS", "Bootstrap", "Git", "SVN"
      ]
    },
    {
      title: "Freelance Front-end Developer",
      company: "Various Clients (via Toptal)",
      location: "Remote",
      period: "2015 — 2016",
      type: "freelance",
      responsibilities: [
        "Successfully completed multiple high-stakes projects for international clients",
        "Specialized in UI/UX improvements, responsive design, and performance optimization",
        "Worked with FragranceX, Fort Hill Company, Matdagboken, WineGreeting, Pixie, Lemeno, Pareto Solutions, Innovative Operations, Copyop, and Pavlovspig",
        "Consistently delivered high-quality code and advisory services"
      ],
      technologies: [
        "React", "Angular", "WordPress", "Drupal", "PHP", "HighCharts", "Ruby on Rails", "Stripe Integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg py-20 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4">
             <BriefcaseIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Building the modern web since 2011</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gray-200 dark:bg-gray-800 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {employmentHistory.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 bg-blue-600 rounded-full border-4 border-white dark:border-dark-bg transform md:-translate-x-1/2 z-10 shadow-sm" />

                {/* Content */}
                <div className="flex-1 ml-6 md:ml-0">
                  <div className={`glass-card p-6 md:p-8 rounded-2xl hover:shadow-xl transition-shadow ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <div className={`flex flex-col gap-2 mb-4 ${
                      index % 2 === 0 ? 'md:items-start' : 'md:items-end'
                    }`}>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                      <div className="text-blue-600 dark:text-blue-400 font-semibold text-lg">{job.company}</div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {job.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <ul className={`space-y-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed ${
                         index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                      }`}>
                        {job.responsibilities.slice(0, 4).map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>

                      {job.technologies && (
                        <div className={`flex flex-wrap gap-2 mt-4 ${
                           index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                        }`}>
                          {job.technologies.slice(0, 6).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-xs rounded-md border border-gray-200 dark:border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                          {job.technologies.length > 6 && (
                            <span className="px-2 py-1 text-xs text-gray-400">+{job.technologies.length - 6} more</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
