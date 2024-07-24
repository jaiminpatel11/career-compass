import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyApplications from './MyApplications'; // Adjust the import path as necessary

describe('MyApplications Component', () => {
  test('renders Navbar, HeroSection, AppliedJobs, and Footer', () => {
    render(<MyApplications />);

    expect(screen.getByAltText('logo')).toBeInTheDocument(); // Assuming logo has alt text 'logo'
    expect(screen.getByText('Applied Jobs')).toBeInTheDocument(); // Assuming there's a heading or text 'Applied Jobs'
    expect(screen.getByText('Footer')).toBeInTheDocument(); // Assuming there's a heading or text 'Footer'
  });

  test('fetches CSS variables and applies them', () => {
    render(<MyApplications />);
    
    const rootStyles = getComputedStyle(document.documentElement);
    expect(rootStyles.getPropertyValue('--primary-color')).toBeTruthy();
    expect(rootStyles.getPropertyValue('--primary-font-color')).toBeTruthy();
    expect(rootStyles.getPropertyValue('--secondary-font-color')).toBeTruthy();
    expect(rootStyles.getPropertyValue('--card-color')).toBeTruthy();
    expect(rootStyles.getPropertyValue('--footer-link-color')).toBeTruthy();
  });

  test('calculates opacity based on scroll position', () => {
    render(<MyApplications />);
    
    window.scrollTo = jest.fn();
    fireEvent.scroll(window, { target: { scrollY: 100 } });

    const heroSection = screen.getByText('HeroSection'); // Assuming HeroSection has text 'HeroSection'
    expect(heroSection).toHaveStyle('opacity: 0.67'); // Assuming getOpacity() works correctly
  });
});
