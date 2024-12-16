import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { RepositoryCard } from "~/components/Repository";
import { getRepositories } from "~/models/github.server";

export const loader = async () => {
  const repositories = await getRepositories("tmatijev");
  return json({ repositories });
};

export default function Projects() {
  const { repositories } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          My GitHub Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo) => (
            <RepositoryCard key={repo.id} repository={repo} />
          ))}
        </div>
      </div>
    </div>
  );
} 