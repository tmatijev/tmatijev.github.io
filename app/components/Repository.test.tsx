import { render, screen } from '@testing-library/react';
import { RepositoryCard } from './Repository';

const mockRepository = {
  id: 1,
  name: "Test Repo",
  description: "Test Description",
  html_url: "https://github.com/test",
  topics: ["react", "typescript"],
  stargazers_count: 10,
  language: "TypeScript",
  updated_at: "2024-03-20T12:00:00Z"
};

describe('RepositoryCard', () => {
  it('renders repository information correctly', () => {
    render(<RepositoryCard repository={mockRepository} />);
    
    expect(screen.getByText('Test Repo')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('★ 10')).toBeInTheDocument();
    
    const topics = screen.getAllByText(/react|typescript/);
    expect(topics).toHaveLength(2);
  });
}); 