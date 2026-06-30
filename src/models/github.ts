import type { Repository } from '../types/repository';
import { featuredProjects } from '../lib/content';

type RawRepo = Repository & { fork: boolean };

/** Manual fallback so the Projects section never looks broken if the API fails. */
export const fallbackRepositories: Repository[] = featuredProjects.map((p, i) => ({
  id: -1 - i,
  name: p.name,
  description: p.description,
  html_url: p.url,
  language: p.language,
  stargazers_count: 0,
  topics: [],
  pushed_at: new Date(0).toISOString(),
}));

export async function getRepositories(username: string): Promise<Repository[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`,
  );
  if (!response.ok) {
    throw new Error(`GitHub API responded with ${response.status}`);
  }
  const repositories: RawRepo[] = await response.json();
  return repositories.filter((repo) => !repo.fork);
}
