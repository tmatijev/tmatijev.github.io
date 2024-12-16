import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

export async function getRepositories(username: string) {
  const { data } = await octokit.repos.listForUser({
    username,
    sort: "updated",
    per_page: 100,
    type: 'owner'
  });

  // Filter out forked repositories
  return data.filter(repo => !repo.fork);
} 