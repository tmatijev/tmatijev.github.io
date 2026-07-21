// Single source of truth for site content.
// Keep this factual — no invented clients, metrics, or claims.

export const identity = {
  name: 'Tomislav Matijević',
  shortName: 'Tomislav',
  monogram: 'TM',
  role: 'Principal Frontend Engineer',
  roles: ['Principal Frontend Engineer', 'AI-native Developer', 'Technical Leader'],
  location: 'Osijek, Croatia',
  // Hero positioning line
  tagline:
    'I architect AI-powered web experiences that feel impossible — then make them production-ready.',
  // Short supporting line
  summary:
    'Principal Frontend Engineer with 10+ years shipping React, TypeScript and GraphQL at scale. I pair senior engineering judgment with AI acceleration to build fast, durable systems teams can extend.',
} as const;

export const links = {
  email: 'matas0412@gmail.com',
  github: 'https://github.com/tmatijev',
  githubUser: 'tmatijev',
  linkedin: 'https://linkedin.com/in/tmatijev',
  company: 'https://undefined.hr',
  companyName: 'Undefined',
  book: 'https://stutteringbook.com',
  site: 'https://tmatijev.github.io',
} as const;

export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'ai-edge', label: 'AI Edge' },
  { id: 'stories', label: 'Stories' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

// ── AI Engineering / Current Edge ────────────────────────────────────────────
export type AICapability = {
  index: string;
  title: string;
  description: string;
  tools: string[];
};

export const aiCapabilities: AICapability[] = [
  {
    index: '01',
    title: 'Architecture, accelerated',
    description:
      'I use Claude and GPT as thinking partners for system design — pressure-testing trade-offs, mapping module boundaries, and validating data flows before a single line ships.',
    tools: ['Claude', 'GPT', 'System Design'],
  },
  {
    index: '02',
    title: 'Implementation at senior speed',
    description:
      'Cursor and AI pair-programming turn well-formed intent into production React and TypeScript — typed, tested, and reviewed with the same rigor I bring by hand.',
    tools: ['Cursor', 'React', 'TypeScript'],
  },
  {
    index: '03',
    title: 'Debugging & refactoring',
    description:
      'AI shortens the loop from symptom to root cause. I drive it with hypotheses, not hope — isolating regressions and reshaping legacy code without breaking contracts.',
    tools: ['Refactoring', 'Observability', 'Testing'],
  },
  {
    index: '04',
    title: 'Product & creative coding',
    description:
      'From kinetic interfaces to internal tooling, I prototype fast, judge sharply, and keep only what survives scale. AI widens the search space; experience picks the winner.',
    tools: ['Prototyping', 'Automation', 'Product Thinking'],
  },
];

// ── Engineering Stories (case files) ─────────────────────────────────────────
export type Story = {
  id: string;
  headline: string;
  tagline: string;
  details: string;
  impact?: string;
  skills: string[];
};

export const stories: Story[] = [
  {
    id: 'jest-to-cypress-interactions',
    headline: 'Stabilized interaction testing with Cypress',
    tagline: 'Moved complex user flows to Cypress; kept Jest for pure logic',
    details:
      'In an enterprise codebase, I identified slow, flaky Jest tests tied to complex interactions. I migrated those paths to Cypress (especially forms) and kept Jest for logic and conditional rendering. This clarified responsibilities and stabilized CI.',
    impact: 'Reduced flakiness, cut CI time, and established a clear testing strategy.',
    skills: ['Cypress', 'Jest', 'React Testing Library', 'Testing Strategy', 'CI'],
  },
  {
    id: 'typescript-migration',
    headline: 'Led large-scale TypeScript migration',
    tagline: 'Converted JSX to TSX and aligned types with GraphQL fragments',
    details:
      'I led the initiative to migrate JSX to TSX, removing hand-rolled types in favor of GraphQL-generated types via fragments. That enabled end-to-end type safety and reuse across components and services.',
    impact: 'Eliminated type drift, improved DX, and set a new engineering standard.',
    skills: ['TypeScript', 'React', 'GraphQL', 'Codegen', 'Developer Experience'],
  },
  {
    id: 'hoc-to-hooks',
    headline: 'Replaced HOCs with idiomatic hooks',
    tagline: 'Modernized patterns and simplified component composition',
    details:
      'I replaced legacy HOCs with idiomatic hooks to reduce wrapper hell, improve readability, and unlock finer-grained composition. This reduced cognitive load and made reuse straightforward.',
    impact: 'Lean components, clearer data flow, easier testing, and better performance characteristics.',
    skills: ['React', 'Hooks', 'Refactor', 'Code Quality'],
  },
  {
    id: 'architecture-organization',
    headline: 'Designed scalable front-end architecture',
    tagline: 'Clear module boundaries and GraphQL fragments as first-class contracts',
    details:
      'I introduced a predictable architecture: dedicated folders for data, services, and libraries, and enforced proper GraphQL fragment usage. Fragments became the API for UI modules, improving cohesion and reuse.',
    impact: 'Faster onboarding, fewer regressions, and a scalable structure teams could extend confidently.',
    skills: ['Architecture', 'GraphQL Fragments', 'Module Boundaries', 'Scalability'],
  },
  {
    id: 'apollo-cache-mastery',
    headline: 'Optimized Apollo Client cache strategies',
    tagline: 'Refetch selectively; write to cache when it is faster and predictable',
    details:
      'I coached teams on when to refetch, when to write to the cache, and how to normalize updates for predictable UI. We avoided blanket refetches that hammered the network and slowed UX.',
    impact: 'Lowered network costs and latency while keeping UI consistent and snappy.',
    skills: ['Apollo Client', 'Caching', 'GraphQL', 'Performance'],
  },
  {
    id: 'observability-stack',
    headline: 'Implemented actionable observability',
    tagline: 'DataDog, LogRocket, and Sentry integrated for fast, informed decisions',
    details:
      'I set up observability with metrics, session replay, and error tracking. This enabled fast triage, clear ownership, and data-driven decisions instead of guesswork.',
    impact: 'Shorter MTTR, fewer production surprises, and measurable quality improvements.',
    skills: ['Sentry', 'LogRocket', 'DataDog', 'Observability'],
  },
  {
    id: 'mentoring',
    headline: 'Mentored junior developers into strong contributors',
    tagline: 'Hands-on guidance, clear code reviews, and practical growth plans',
    details:
      'I have mentored juniors through structured feedback, pairing, and ownership-driven tasks. Focus: fundamentals, testing discipline, and architectural thinking.',
    impact: 'Faster ramp-up, higher code quality, and a culture of learning and accountability.',
    skills: ['Mentorship', 'Code Review', 'Leadership', 'Team Enablement'],
  },
  {
    id: 'experience-compound-interest',
    headline: 'Experience compounds; it cannot be rushed',
    tagline: 'Good judgment from hard-won lessons, not guesswork',
    details:
      'Across products and teams, I have learned what breaks, what scales, and what merely looks elegant on paper. I bring practical patterns, sharp trade-off thinking, and calm execution under pressure.',
    impact: 'Fewer dead ends, faster decisions, and solutions that stand up in production.',
    skills: ['Leadership', 'Decision Making', 'Execution', 'Pragmatism'],
  },
];

// ── Experience Timeline ──────────────────────────────────────────────────────
export type Job = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'fulltime' | 'freelance';
  current?: boolean;
  responsibilities: string[];
  technologies: string[];
};

export const employmentHistory: Job[] = [
  {
    title: 'Principal Frontend Engineer',
    company: 'Toptal',
    location: 'Osijek (remote)',
    period: 'Sep 2023 — Present',
    type: 'fulltime',
    current: true,
    responsibilities: [
      'Drive architecture and technical direction across the Client vertical',
      'Lead infrastructure and migration initiatives end to end',
      'High-level code-quality advocate across teams and squads',
      'Coach and mentor engineers on advanced architecture and patterns',
      'Research and validate emerging technologies before adoption',
    ],
    technologies: [
      'React', 'TypeScript', 'GraphQL', 'Node.js', 'Next.js',
      'Architecture', 'Technical Leadership',
    ],
  },
  {
    title: 'Senior Frontend Core Engineer',
    company: 'Toptal',
    location: 'Osijek (remote)',
    period: 'Jan 2017 — Sep 2023',
    type: 'fulltime',
    responsibilities: [
      'Designed, built, and maintained efficient, reusable front-end systems',
      'Led multiple cross-cutting initiatives',
      'Maintained and raised code-quality standards',
      'Onboarded and mentored new team members',
    ],
    technologies: [
      'React', 'Redux', 'TypeScript', 'GraphQL', 'Apollo', 'Relay',
      'Jest', 'Storybook', 'RTL', 'Cypress', 'Webpack',
    ],
  },
  {
    title: 'Frontend & Frontend Lead Engineer',
    company: 'Farmeron',
    location: 'Osijek',
    period: 'Aug 2014 — Jan 2017',
    type: 'fulltime',
    responsibilities: [
      'Improved front-end architecture, reducing page load size by 85%',
      'Created coding standards for CSS and JavaScript',
      'Led project specifications and infrastructure decisions',
      'Built data-rich interfaces with AngularJS and BEM methodology',
    ],
    technologies: [
      'AngularJS', 'JavaScript', 'jQuery', 'Sass', 'OOCSS',
      'Gulp', 'Jasmine', 'Git',
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Netgen',
    location: 'Osijek',
    period: 'Mar 2012 — Aug 2014',
    type: 'fulltime',
    responsibilities: [
      'eZ Publish template programming and front-end development',
      'Built responsive interfaces with HTML, CSS, JavaScript, jQuery',
      'Delivered visual-design solutions and component systems',
      'Worked daily with LESS, Bootstrap, Git and SVN',
    ],
    technologies: [
      'eZ Publish', 'HTML', 'CSS', 'JavaScript', 'jQuery',
      'LESS', 'Bootstrap', 'Git',
    ],
  },
  {
    title: 'Freelance Frontend Developer',
    company: 'Various Clients (via Toptal)',
    location: 'Remote',
    period: '2015 — 2016',
    type: 'freelance',
    responsibilities: [
      'Delivered multiple high-stakes projects for international clients',
      'Specialized in UI/UX, responsive design, and performance optimization',
      'Provided technical advisory alongside hands-on delivery',
    ],
    technologies: [
      'React', 'Angular', 'WordPress', 'PHP', 'HighCharts', 'Stripe',
    ],
  },
];

// ── Services / What I Can Build ──────────────────────────────────────────────
export type Service = {
  title: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    title: 'AI-Powered Applications',
    description:
      'Production apps that put LLMs to work — assistants, automations, and AI-native workflows wired into real product surfaces, not demos.',
    tags: ['Claude', 'GPT', 'Automation'],
  },
  {
    title: 'Frontend Architecture',
    description:
      'Module boundaries, typed contracts, and patterns that survive scale. I build foundations teams can extend without fear.',
    tags: ['React', 'TypeScript', 'GraphQL'],
  },
  {
    title: 'Modern Web Products',
    description:
      'Fast, accessible, memorable interfaces built with React, Next.js and Remix — engineered for both users and the teams who maintain them.',
    tags: ['Next.js', 'Remix', 'UX'],
  },
  {
    title: 'Performance Optimization',
    description:
      'I find what is slow and make it fast — render paths, bundles, caching, Core Web Vitals. Measured wins, not guesswork.',
    tags: ['Core Web Vitals', 'Caching', 'Profiling'],
  },
  {
    title: 'Technical Consulting',
    description:
      'Architecture reviews, testing strategy, and engineering direction. A senior partner who has seen what breaks and what scales.',
    tags: ['Strategy', 'Code Review', 'Mentoring'],
  },
  {
    title: 'MVP & Product Builds',
    description:
      'From sharp idea to shippable product — fast iteration backed by senior judgment so the foundation does not buckle later.',
    tags: ['MVP', 'Prototyping', 'Delivery'],
  },
];

// ── Company / Undefined ──────────────────────────────────────────────────────
export const company = {
  name: 'Undefined',
  legalName: 'UNDEFINED d.o.o.',
  url: links.company,
  tagline: 'Definiramo nedefinirano — we define the undefined.',
  description:
    'Undefined is my software studio, where sharp ideas become modern digital products — SaaS platforms, web apps, books, and browser extensions, all built for the experience.',
  // Factual: 11 live products per undefined.hr
  productCount: 11,
  highlights: ['SaaS Platforms', 'Web Apps', 'Chrome Extensions', 'Web Readers'],
};

// ── Featured projects (manual fallback if GitHub API fails) ──────────────────
export type FeaturedProject = {
  name: string;
  description: string;
  language: string;
  url: string;
};

// ── Live products (shipped, running in production) ───────────────────────────
// Real products built under Undefined. Screenshots live in /public/projects.
export type LiveProduct = {
  slug: string;
  name: string;
  tagline: string;
  url: string;
  image: string;
  tech: string[];
  accent: string;
  accent2: string;
};

export const liveProducts: LiveProduct[] = [
  {
    slug: 'birthday-disco',
    name: 'Birthday Disco',
    tagline: 'A birthday countdown that turns into a party',
    url: 'https://birthdaydisco.com/',
    image: '/projects/birthdaydisco.jpg',
    tech: ['Vite', 'React', 'Canvas'],
    accent: '#e879f9',
    accent2: '#22d3ee',
  },
  {
    slug: 'tokenpoker',
    name: 'TokenPoker',
    tagline: 'Planning poker for AI costs',
    url: 'https://www.tokenpoker.app/',
    image: '/projects/tokenpoker.png',
    tech: ['Next.js', 'Vercel', 'Realtime'],
    accent: '#22d3ee',
    accent2: '#6366f1',
  },
  {
    slug: 'tenis-hr',
    name: 'Tenis.hr',
    tagline: 'A platform for modern tennis clubs',
    url: 'https://tenis.hr',
    image: '/projects/tenis.png',
    tech: ['Next.js', 'React', 'Vercel'],
    accent: '#a3e635',
    accent2: '#22c55e',
  },
  {
    slug: 'treneri-tenis',
    name: 'Treneri.tenis.hr',
    tagline: 'Find a tennis coach in Croatia',
    url: 'https://treneri.tenis.hr/',
    image: '/projects/treneri-tenis.jpg',
    tech: ['Next.js', 'React', 'Maps'],
    accent: '#bef264',
    accent2: '#22d3ee',
  },
  {
    slug: 'croatia-for-kids',
    name: 'Croatia for Kids',
    tagline: 'Croatia through colorful bilingual books',
    url: 'https://www.croatiaforkids.com/',
    image: '/projects/croatiaforkids.png',
    tech: ['Next.js', 'Tailwind', 'PWA'],
    accent: '#f472b6',
    accent2: '#f59e0b',
  },
  {
    slug: 'church-media-studio',
    name: 'Church Media Studio',
    tagline: 'Professional media content for churches',
    url: 'https://www.churchmediastudio.com/',
    image: '/projects/churchmediastudio.jpg',
    tech: ['Next.js', 'React'],
    accent: '#818cf8',
    accent2: '#c084fc',
  },
  {
    slug: 'northvale-records',
    name: 'Northvale Records',
    tagline: 'More than sound. More than genre.',
    url: 'https://www.northvale-records.com/',
    image: '/projects/northvale.png',
    tech: ['Next.js', 'React', 'Tailwind'],
    accent: '#34d399',
    accent2: '#a855f7',
  },
  {
    slug: 'mucanje',
    name: 'Mucanje.com',
    tagline: "Croatia's first portal on stuttering",
    url: 'https://mucanje.com',
    image: '/projects/mucanje.png',
    tech: ['Remix', 'React'],
    accent: '#2dd4bf',
    accent2: '#38bdf8',
  },
  {
    slug: 'stuttering-book',
    name: 'Stuttering — Positive Thinking',
    tagline: 'A free online book on overcoming stuttering',
    url: 'https://stutteringbook.com',
    image: '/projects/stutteringbook.png',
    tech: ['Next.js', 'Web Reader'],
    accent: '#facc15',
    accent2: '#eab308',
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'release-radar',
    description: 'Chrome extension that tracks new releases so you never miss a drop.',
    language: 'TypeScript',
    url: 'https://github.com/tmatijev/release-radar',
  },
  {
    name: 'crayon-canvas',
    description: 'A playful Chrome extension for quick, expressive on-page drawing.',
    language: 'TypeScript',
    url: 'https://github.com/tmatijev/crayon-canvas',
  },
  {
    name: 'simple-job-finder',
    description: 'Chrome extension that streamlines the job-hunting workflow.',
    language: 'TypeScript',
    url: 'https://github.com/tmatijev/simple-job-finder',
  },
  {
    name: 'bem-class-utils',
    description: 'Tiny, typed helpers for composing BEM-style class names.',
    language: 'TypeScript',
    url: 'https://github.com/tmatijev/bem-class-utils',
  },
  {
    name: 'matchResultPrediction',
    description: 'Match outcome prediction based on club coefficients.',
    language: 'TypeScript',
    url: 'https://github.com/tmatijev/matchResultPrediction',
  },
  {
    name: 'mucanje',
    description: 'Health portal focused on stuttering and positive thinking.',
    language: 'CSS',
    url: 'https://github.com/tmatijev/mucanje',
  },
];
