import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Searchbar from './Searchbar'; // Adjust the import path as necessary

describe('Searchbar Component', () => {
  test('renders input field and search button', () => {
    render(<Searchbar />);
    
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument(); // Assuming input has placeholder 'Search...'
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument(); // Assuming button has text 'Search'
  });

  test('calls onSearch when search button is clicked', () => {
    const mockOnSearch = jest.fn();
    render(<Searchbar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test query' } });

    const button = screen.getByRole('button', { name: /search/i });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith('test query');
  });
});
