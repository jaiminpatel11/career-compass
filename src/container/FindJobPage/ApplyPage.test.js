import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ApplyPage from './ApplyPage'; // Adjust the import path as necessary

describe('ApplyPage Component', () => {
  const job = {
    title: 'Job 1',
    company: 'Company 1',
    location: 'Location 1',
    description: 'Job Description',
    skills: ['Skill 1', 'Skill 2'],
  };

  test('renders job details and apply button', () => {
    render(<ApplyPage job={job} />);

    expect(screen.getByText('Job 1')).toBeInTheDocument();
    expect(screen.getByText('Company 1')).toBeInTheDocument();
    expect(screen.getByText('Location 1')).toBeInTheDocument();
    expect(screen.getByText('Job Description')).toBeInTheDocument();
    expect(screen.getByText('Skill 1')).toBeInTheDocument();
    expect(screen.getByText('Skill 2')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /apply/i })).toBeInTheDocument();
  });

  test('calls onApply when apply button is clicked', () => {
    const mockOnApply = jest.fn();
    render(<ApplyPage job={job} onApply={mockOnApply} />);

    const button = screen.getByRole('button', { name: /apply/i });
    fireEvent.click(button);

    expect(mockOnApply).toHaveBeenCalled();
  });
});
