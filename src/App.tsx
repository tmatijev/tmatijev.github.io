import { lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';

// Lazy load all sections
const Home = lazy(() => import('./sections/Home'));
const Portfolio = lazy(() => import('./sections/Portfolio'));
const WhatCanIDo = lazy(() => import('./sections/WhatCanIDo'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));
const BeforeYouContinue = lazy(() => import('./sections/BeforeYouContinue'));
import type { Anecdote } from './sections/BeforeYouContinue';

// Simple loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  const anecdotes: Anecdote[] = [
    {
      id: 'jest-to-cypress-interactions',
      headline: 'Stabilized interaction testing with Cypress',
      tagline: 'Moved complex user flows to Cypress; kept Jest for pure logic',
      details:
        'In an enterprise codebase, I identified slow, flaky Jest tests tied to complex interactions. I migrated those paths to Cypress (especially forms) and kept Jest for logic and conditional rendering. This clarified responsibilities and stabilized CI.',
      impact:
        'Reduced flakiness, cut CI time, and established a clear testing strategy.',
      skills: ['Cypress', 'Jest', 'React Testing Library', 'Testing Strategy', 'CI']
    },
    {
      id: 'typescript-migration',
      headline: 'Led large-scale TypeScript migration',
      tagline: 'Converted JSX to TSX and aligned types with GraphQL fragments',
      details:
        'I led the initiative to migrate JSX to TSX, removing hand-rolled types in favor of GraphQL-generated types via fragments. That enabled end-to-end type safety and reuse across components and services.',
      impact:
        'Eliminated type drift, improved DX, and set a new engineering standard.',
      skills: ['TypeScript', 'React', 'GraphQL', 'Codegen', 'Developer Experience']
    },
    {
      id: 'hoc-to-hooks',
      headline: 'Replaced HOCs with idiomatic hooks',
      tagline: 'Modernized patterns and simplified component composition',
      details:
        'I replaced legacy HOCs with idiomatic hooks to reduce wrapper hell, improve readability, and unlock finer-grained composition. This reduced cognitive load and made reuse straightforward.',
      impact:
        'Lean components, clearer data flow, easier testing, and better performance characteristics.',
      skills: ['React', 'Hooks', 'Refactor', 'Code Quality']
    },
    {
      id: 'architecture-organization',
      headline: 'Designed scalable front‑end architecture',
      tagline: 'Clear module boundaries and GraphQL fragments as first‑class contracts',
      details:
        'I introduced a predictable architecture: dedicated folders for data, services, and libraries, and enforced proper GraphQL fragment usage. Fragments became the API for UI modules, improving cohesion and reuse.',
      impact:
        'Faster onboarding, fewer regressions, and a scalable structure teams could extend confidently.',
      skills: ['Architecture', 'GraphQL Fragments', 'Module Boundaries', 'Scalability']
    },
    {
      id: 'apollo-cache-mastery',
      headline: 'Optimized Apollo Client cache strategies',
      tagline: 'Refetch selectively; write to cache when it’s faster and predictable',
      details:
        'I coached teams on when to refetch, when to write to the cache, and how to normalize updates for predictable UI. We avoided blanket refetches that hammered the network and slowed UX.',
      impact:
        'Lowered network costs and latency while keeping UI consistent and snappy.',
      skills: ['Apollo Client', 'Caching', 'GraphQL', 'Performance']
    },
    {
      id: 'observability-stack',
      headline: 'Implemented actionable observability',
      tagline: 'DataDog, LogRocket, and Sentry integrated for fast, informed decisions',
      details:
        'I set up observability with metrics, session replay, and error tracking. This enabled fast triage, clear ownership, and data-driven decisions instead of guesswork.',
      impact:
        'Shorter MTTR, fewer production surprises, and measurable quality improvements.',
      skills: ['Sentry', 'LogRocket', 'DataDog', 'Observability']
    },
    {
      id: 'mentoring',
      headline: 'Mentored junior developers into strong contributors',
      tagline: 'Hands-on guidance, clear code reviews, and practical growth plans',
      details:
        'I’ve mentored juniors through structured feedback, pairing, and ownership-driven tasks. Focus: fundamentals, testing discipline, and architectural thinking.',
      impact:
        'Faster ramp-up, higher code quality, and a culture of learning and accountability.',
      skills: ['Mentorship', 'Code Review', 'Leadership', 'Team Enablement']
    },
    {
      id: 'experience-compound-interest',
      headline: 'Experience compounds; it can’t be rushed',
      tagline: 'Good judgment from hard-won lessons, not guesswork',
      details:
        'Across products and teams, I’ve learned what breaks, what scales, and what merely looks elegant on paper. I bring practical patterns, sharp trade-off thinking, and calm execution under pressure.',
      impact:
        'Fewer dead ends, faster decisions, and solutions that stand up in production.',
      skills: ['Leadership', 'Decision Making', 'Execution', 'Pragmatism']
    }
  ];
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section id="home">
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </section>

      <section id="before-you-continue">
        <Suspense fallback={<Loading />}>
          <BeforeYouContinue items={anecdotes} />
        </Suspense>
      </section>

      <section id="portfolio">
        <Suspense fallback={<Loading />}>
          <Portfolio />
        </Suspense>
      </section>

      <section id="what-can-i-do">
        <Suspense fallback={<Loading />}>
          <WhatCanIDo />
        </Suspense>
      </section>

      <section id="projects">
        <Suspense fallback={<Loading />}>
          <Projects />
        </Suspense>
      </section>

      <section id="contact">
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      </section>
    </div>
  );
}

export default App;
