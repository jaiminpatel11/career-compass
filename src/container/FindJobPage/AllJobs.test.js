import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AllJobs from './AllJobs'; // Adjust the import path as necessary

describe('AllJobs Component', () => {
  const jobs = [
    { id: 1, title: 'Job 1', company: 'Company 1', location: 'Location 1' },
    { id: 2, title: 'Job 2', company: 'Company 2', location: 'Location 2' },
  ];

  test('renders job listings', () => {
    render(<AllJobs jobs={jobs} />);

    expect(screen.getByText('Job 1')).toBeInTheDocument();
    expect(screen.getByText('Company 1')).toBeInTheDocument();
    expect(screen.getByText('Location 1')).toBeInTheDocument();

    expect(screen.getByText('Job 2')).toBeInTheDocument();
    expect(screen.getByText('Company 2')).toBeInTheDocument();
    expect(screen.getByText('Location 2')).toBeInTheDocument();
  });
});
