import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importa jest-dom para usar toBeInTheDocument
import Pagination from '../../components/Pagination';

describe('Pagination Component', () => {
  const mockOnPrev = jest.fn();
  const mockOnNext = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Prev button when prev prop is provided', () => {
    render(<Pagination prev="some-url" next={null} onPrev={mockOnPrev} onNext={mockOnNext} />);
    const prevButton = screen.getByText(/Prev/i);
    expect(prevButton).toBeInTheDocument();
  });

  test('does not render Prev button when prev prop is not provided', () => {
    render(<Pagination prev={null} next={null} onPrev={mockOnPrev} onNext={mockOnNext} />);
    const prevButton = screen.queryByText(/Prev/i);
    expect(prevButton).not.toBeInTheDocument();
  });

  test('renders Next button when next prop is provided', () => {
    render(<Pagination prev={null} next="some-url" onPrev={mockOnPrev} onNext={mockOnNext} />);
    const nextButton = screen.getByText(/Next/i);
    expect(nextButton).toBeInTheDocument();
  });

  test('does not render Next button when next prop is not provided', () => {
    render(<Pagination prev={null} next={null} onPrev={mockOnPrev} onNext={mockOnNext} />);
    const nextButton = screen.queryByText(/Next/i);
    expect(nextButton).not.toBeInTheDocument();
  });

  test('calls onPrev when Prev button is clicked', () => {
    render(<Pagination prev="some-url" next={null} onPrev={mockOnPrev} onNext={mockOnNext} />);
    const prevButton = screen.getByText(/Prev/i);
    fireEvent.click(prevButton);
    expect(mockOnPrev).toHaveBeenCalledTimes(1);
  });

  test('calls onNext when Next button is clicked', () => {
    render(<Pagination prev={null} next="some-url" onPrev={mockOnPrev} onNext={mockOnNext} />);
    const nextButton = screen.getByText(/Next/i);
    fireEvent.click(nextButton);
    expect(mockOnNext).toHaveBeenCalledTimes(1);
  });
});