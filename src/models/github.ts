export async function getRepositories(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const repositories = await response.json();
  return repositories.filter((repo: any) => !repo.fork);
} 