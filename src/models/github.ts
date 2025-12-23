export async function getRepositories(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const repositories = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return repositories.filter((repo: any) => !repo.fork);
} 