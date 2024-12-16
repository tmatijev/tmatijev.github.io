import { motion } from 'framer-motion';
import { BriefcaseIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { JobCard } from '../components/JobCard';
import type { Job } from '../types/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

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
      period: "MARCH 2012 — AUGUST 2011",
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
      title: "Front-end Developer & UI/UX Advisor",
      company: "FragranceX/Perfume.com (via Toptal)",
      location: "Osijek",
      period: "FEBRUARY 2015 — APRIL 2015",
      type: "freelance",
      responsibilities: [
        "Served as a UI/UX advisor",
        "Implemented a responsive image gallery solution",
        "Implemented a responsive product management solution",
        "Designed new visual improvements for products",
        "Implemented new interactive responsive navigation"
      ]
    },
    {
      title: "Front-end Developer",
      company: "Fort Hill Company (via Toptal)",
      location: "Osijek (remote)",
      period: "JUNE 2015 — JANUARY 2017",
      type: "freelance",
      responsibilities: [
        "Created a responsive form wizard with client-side validation",
        "Created jQuery plugins based on autocomplete functionality",
        "Improved UI/UX elements in the application",
        "Used Bootstrap as the main framework",
        "Served as UI/UX advisor",
        "Implemented and customized Highcharts library events"
      ],
      technologies: [
        "HTML", "CSS", "JavaScript", "jQuery", "Sass",
        "Gulp", "Bower", "Ruby on Rails"
      ]
    },
    {
      title: "Front-end Developer & UI/UX Advisor",
      company: "Matdagboken i Sverige AB (via Toptal)",
      location: "Osijek (remote)",
      period: "APRIL 2015 — MAY 2015",
      type: "freelance",
      responsibilities: [
        "Created visual solutions for responsive site fragments",
        "Created new HTML structure for tablet/mobile devices",
        "Created CSS for responsive solutions",
        "Maintained existing desktop HTML structure"
      ]
    },
    {
      title: "Front-end/Drupal Developer",
      company: "WineGreeting (via Toptal)",
      location: "Osijek (remote)",
      period: "MAY 2015 — JUNE 2015",
      type: "freelance",
      responsibilities: [
        "Created new Drupal themes",
        "Worked with designer on UI/UX improvements",
        "Created HTML, CSS, and JavaScript from Photoshop files",
        "Created administration classes and fields"
      ],
      technologies: [
        "Drupal", "PHP", "HTML", "CSS", "Sass",
        "Gulp", "Bower", "JavaScript", "jQuery"
      ]
    },
    {
      title: "Front-end/WordPress Developer",
      company: "Pixie (via Toptal)",
      location: "Osijek (remote)",
      period: "JUNE 2015 — JULY 2015",
      type: "freelance",
      responsibilities: [
        "Improved WordPress theme dynamics",
        "Created interactive product promotion pages",
        "Implemented and improved interactive zoom functionality",
        "Configured CDN and improved website performance"
      ],
      technologies: [
        "WordPress", "PHP", "HTML5", "CSS", "Sass",
        "JavaScript", "jQuery", "Git"
      ]
    },
    {
      title: "Front-end/Back-end Developer",
      company: "Lemeno (via Toptal)",
      location: "Osijek (remote)",
      period: "AUGUST 2015 — SEPTEMBER 2015",
      type: "freelance",
      responsibilities: [
        "Converted website to be completely responsive",
        "Implemented RTL and LTR direction support",
        "Improved UI/UX components",
        "Created and implemented design propositions",
        "Improved site speed and SEO"
      ],
      technologies: [
        "CodeIgniter", "PHP", "HTML", "CSS", "JavaScript",
        "jQuery", "Gulp", "Bower"
      ]
    },
    {
      title: "Front-end Developer",
      company: "Pareto Solutions (via Toptal)",
      location: "Osijek (remote)",
      period: "NOVEMBER 2015 — JANUARY 2016",
      type: "freelance",
      responsibilities: [
        "Built HTML architecture using BEM methodology",
        "Implemented custom forms using Stripe",
        "Implemented custom JavaScript step-by-step validation",
        "Implemented modal functionality for user exit intent",
        "Daily Git workflow"
      ],
      technologies: [
        "HTML", "CSS", "JavaScript", "jQuery", "BEM", "Stripe"
      ]
    },
    {
      title: "Front-end Developer/Designer",
      company: "Innovative Operations (via Toptal)",
      location: "Osijek (remote)",
      period: "JANUARY 2016 — FEBRUARY 2016",
      type: "freelance",
      responsibilities: [
        "Created visual solutions for dashboard and website",
        "Created HTML architecture using BEM methodology",
        "Implemented responsive design solutions",
        "Created custom font icons using Sketch",
        "Served as UI/UX advisor",
        "Implemented responsive images solution"
      ],
      technologies: [
        "HTML", "CSS", "JavaScript", "Sass", "Node.js",
        "Ruby on Rails", "BEM", "Sketch"
      ]
    },
    {
      title: "Front-end Developer",
      company: "Copyop (via Toptal)",
      location: "Osijek (remote)",
      period: "MARCH 2016 — APRIL 2016",
      type: "freelance",
      responsibilities: [
        "Worked intensively with HighCharts API",
        "Developed animated stock market trading simulation",
        "Created HighCharts and CSS logic for win/loss ratios",
        "Implemented client-side validation using Parsley.js",
        "Created configurable calculation system"
      ],
      technologies: [
        "JavaScript", "jQuery", "PHP", "HTML5", "CSS3",
        "HighCharts API", "Parsley.js"
      ]
    },
    {
      title: "Front-end Developer",
      company: "Pavlovspig (via Toptal)",
      location: "Osijek (remote)",
      period: "JUNE 2016 — JULY 2016",
      type: "freelance",
      responsibilities: [
        "Built JavaScript architecture for API communication",
        "Created custom page navigation and interaction features",
        "Implemented Highcharts with large dataset handling",
        "Created front-end session management system",
        "Integrated and customized dashboard theme"
      ],
      technologies: [
        "PHP", "HTML5", "JavaScript", "jQuery", "CSS3", "Highcharts"
      ]
    }
  ];

  const fullTimePositions = employmentHistory.filter(job => job.type === 'fulltime');
  const freelanceProjects = employmentHistory.filter(job => job.type === 'freelance');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <motion.div 
        className="max-w-4xl mx-auto p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
          <p className="text-xl text-gray-600">Building the modern web since 2011</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show">
          {/* Full-time Positions */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BriefcaseIcon className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-800">Full-time Positions</h2>
            </div>
            <div className="space-y-8">
              {fullTimePositions.map((job) => (
                <JobCard key={`${job.company}-${job.period}`} job={job} />
              ))}
            </div>
          </div>

          {/* Freelance Projects */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <UserGroupIcon className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-800">Freelance Projects</h2>
            </div>
            <div className="space-y-8">
              {freelanceProjects.map((job) => (
                <JobCard key={`${job.company}-${job.period}`} job={job} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}