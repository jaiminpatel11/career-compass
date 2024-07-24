import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import InterviewDate from './InterviewDate'; // Adjust the import path as necessary

jest.mock('axios');

describe('InterviewDate Component', () => {
  beforeEach(() => {
    sessionStorage.setItem('user', 'test-token');
  });

  afterEach(() => {
    sessionStorage.removeItem('user');
  });

  test('renders InterviewDate page correctly', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        job_id: { title: 'Test Job', location: 'Test Location', description: 'Job Description', skills: ['Skill 1'], requirements: ['Requirement 1'] },
        company_id: { name: 'Test Company' },
        status: 'interview_scheduled',
        interview_dates: [{ date: '2023-12-01', time: '10:00 AM' }]
      }
    });

    render(
      <BrowserRouter>
        <InterviewDate />
      </BrowserRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    expect(await screen.findByText('Test Job')).toBeInTheDocument();
    expect(screen.getByText('Test Company')).toBeInTheDocument();
    expect(screen.getByText('Test Location')).toBeInTheDocument();
    expect(screen.getByText('Job Description')).toBeInTheDocument();
  });

  test('displays snackbar message when interview date is not selected', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        job_id: { title: 'Test Job', location: 'Test Location', description: 'Job Description', skills: ['Skill 1'], requirements: ['Requirement 1'] },
        company_id: { name: 'Test Company' },
        status: 'interview_scheduled',
        interview_dates: [{ date: '2023-12-01', time: '10:00 AM' }]
      }
    });

    render(
      <BrowserRouter>
        <InterviewDate />
      </BrowserRouter>
    );

    expect(await screen.findByText('Test Job')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Confirm Interview'));

    expect(await screen.findByText('Please select an interview date.')).toBeInTheDocument();
  });

  test('handles interview confirmation correctly', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        job_id: { title: 'Test Job', location: 'Test Location', description: 'Job Description', skills: ['Skill 1'], requirements: ['Requirement 1'] },
        company_id: { name: 'Test Company' },
        status: 'interview_scheduled',
        interview_dates: [{ date: '2023-12-01', time: '10:00 AM' }]
      }
    });

    axios.put.mockResolvedValueOnce({});

    render(
      <BrowserRouter>
        <InterviewDate />
      </BrowserRouter>
    );

    expect(await screen.findByText('Test Job')).toBeInTheDocument();

    fireEvent.change(screen.getByRole('combobox'), { target: { value: '2023-12-01 10:00 AM' } });
    fireEvent.click(screen.getByText('Confirm Interview'));

    expect(await screen.findByText('Interview Confirmed Successfully')).toBeInTheDocument();
  });

  test('calculates opacity based on scroll position', async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        job_id: { title: 'Test Job', location: 'Test Location', description: 'Job Description', skills: ['Skill 1'], requirements: ['Requirement 1'] },
        company_id: { name: 'Test Company' },
        status: 'interview_scheduled',
        interview_dates: [{ date: '2023-12-01', time: '10:00 AM' }]
      }
    });

    render(
      <BrowserRouter>
        <InterviewDate />
      </BrowserRouter>
    );

    expect(await screen.findByText('Test Job')).toBeInTheDocument();

    window.scrollTo = jest.fn();
    fireEvent.scroll(window, { target: { scrollY: 100 } });

    const heroSection = screen.getByText('HeroSection'); // Assuming HeroSection has text 'HeroSection'
    expect(heroSection).toHaveStyle('opacity: 0.67'); // Assuming getOpacity() works correctly
  });
});
