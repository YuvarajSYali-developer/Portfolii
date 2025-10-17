import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ProjectCard } from '../project-card';
import { Project } from '@/shared/schema';

describe('ProjectCard', () => {
  const mockProject: Project = {
    id: '1',
    title: 'Test Project',
    description: 'This is a test project',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    repoUrl: 'https://github.com/test/test-project',
    githubUrl: 'https://github.com/test/test-project',
    liveUrl: 'https://test-project.com',
    category: 'Web Development',
    kpi: { value: '100', label: 'users' }
  };

  beforeEach(() => {
    // Clear all mocks and reset DOM before each test
    document.body.innerHTML = '';
    vi.clearAllMocks();
  });

  it('renders project title and description', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('Test Project')).toBeTruthy();
    expect(screen.getByText('This is a test project')).toBeTruthy();
  });

  it('displays the project category', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Web Development')).toBeTruthy();
  });

  it('shows technology badges', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('React')).toBeTruthy();
    expect(screen.getByText('TypeScript')).toBeTruthy();
    expect(screen.getByText('Tailwind')).toBeTruthy();
  });

  it('has working links', () => {
    render(<ProjectCard project={mockProject} />);
    
    const repoLink = screen.getByText('View Code').closest('a');
    const liveLink = screen.getByText('Live Demo').closest('a');
    
    expect(repoLink?.getAttribute('href')).toBe('https://github.com/test/test-project');
    expect(repoLink?.getAttribute('target')).toBe('_blank');
    expect(repoLink?.getAttribute('rel')).toBe('noopener noreferrer');
    
    expect(liveLink?.getAttribute('href')).toBe('https://test-project.com');
    expect(liveLink?.getAttribute('target')).toBe('_blank');
    expect(liveLink?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('displays KPI when provided', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('100 users')).toBeTruthy();
  });

  it('handles mouse events for animations', () => {
    render(<ProjectCard project={mockProject} />);
    const card = screen.getByTestId('project-card');
    
    fireEvent.mouseEnter(card);
    fireEvent.mouseMove(card, { clientX: 100, clientY: 100 });
    fireEvent.mouseLeave(card);
    
    // We're just testing that these events don't throw errors
    // Actual animation behavior is better tested with visual regression tests
  });
});
