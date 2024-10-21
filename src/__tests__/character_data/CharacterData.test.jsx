import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CharacterData from '../../components/CharacterData';

describe('CharacterData Component', () => {
  const mockData = {
    name: 'Morty Smith',
    specie: 'Human',
    location: 'Earth (C-137)',
  };

  it('renders the character name in the title', () => {
    render(<CharacterData name={mockData.name} specie={mockData.specie} location={mockData.location} />);
    
    const title = screen.getByText(mockData.name);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('card-title');
  });

  it('renders the specie and location', () => {
    render(<CharacterData name={mockData.name} specie={mockData.specie} location={mockData.location} />);
    
    const specie = screen.getByText(`specie: ${mockData.specie}`);
    const location = screen.getByText(`location: ${mockData.location}`);
    
    expect(specie).toBeInTheDocument();
    expect(location).toBeInTheDocument();
  });

  it('renders the correct class for the card body', () => {
    const { container } = render(<CharacterData name={mockData.name} specie={mockData.specie} location={mockData.location} />);
    
    const cardBody = container.firstChild;
    expect(cardBody).toHaveClass('card-boby');
  });
});
