/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../../components/Navbar';

describe('Navbar Component', () => {
  test('renders Navbar component', () => {
    render(<Navbar brand="Rick and Morty App" />);
    const navbarElement = screen.getByText(/Rick and Morty App/i);
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders with correct brand text', () => {
    const brandText = 'My Brand';
    render(<Navbar brand={brandText} />);
    const brandElement = screen.getByText(brandText);
    expect(brandElement).toBeInTheDocument();
  });

  test('has correct href attribute', () => {
    render(<Navbar brand="Test Brand" />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/home');
  });

  test('has correct class names', () => {
    render(<Navbar brand="Test Brand" />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveClass('navbar sticky-top navbar-dark bg-dark');
  });
});