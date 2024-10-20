import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Character from '../../components/Character';


describe('Character Component', () => {
  const mockCharacter = {
    image: 'https://example.com/image.jpg',
    name: 'Rick Sanchez',
    species: 'Human',
    location: { name: 'Earth' },
  };

  it('renders the character image', () => {
    render(<Character character={mockCharacter} index={0} />);
    
    const image = screen.getByAltText('');
    expect(image).toHaveAttribute('src', mockCharacter.image);
  });

  

  it('has the correct key and className', () => {
    const { container } = render(<Character character={mockCharacter} index={0} />);
    
    const characterCard = container.firstChild;
    expect(characterCard).toHaveClass('col mb-4');
  });
});
