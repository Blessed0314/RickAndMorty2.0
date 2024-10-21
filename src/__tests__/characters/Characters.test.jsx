import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Characters from '../../components/Characters';  // Ruta correcta al componente
import Character from '../../components/Character';  // Este es importante para mockear el subcomponente

// Mockea el subcomponente Character
jest.mock('../../components/Character', () => () => <div>Mocked Character</div>);

describe('Characters Component', () => {
  const mockCharacters = [
    {
      image: 'https://example.com/image1.jpg',
      name: 'Rick Sanchez',
      species: 'Human',
      location: { name: 'Earth' },
    },
    {
      image: 'https://example.com/image2.jpg',
      name: 'Morty Smith',
      species: 'Human',
      location: { name: 'Earth' },
    }
  ];

  it('renders a list of characters', () => {
    render(<Characters characters={mockCharacters} />);
    
    // Verifica que el componente Characters renderiza correctamente los elementos de la lista
    const characterElements = screen.getAllByText('Mocked Character');
    expect(characterElements).toHaveLength(mockCharacters.length);
  });

  it('does not render any characters when the list is empty', () => {
    render(<Characters characters={[]} />);
    
    // Verifica que no hay personajes cuando la lista está vacía
    const characterElements = screen.queryByText('Mocked Character');
    expect(characterElements).toBeNull();
  });
});
