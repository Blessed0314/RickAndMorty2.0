import axios from 'axios';
import FetchCharacters from '../../services/characters-service';

jest.mock('axios');

describe('FetchCharacters service', () => {
  const mockUrl = 'https://rickandmortyapi.com/api/character';
  const mockResponse = {
    data: {
      info: { count: 826, pages: 42, next: 'https://rickandmortyapi.com/api/character?page=3', prev: null },
      results: [
        { id: 1, name: 'Rick Sanchez', status: 'Alive' },
        { id: 2, name: 'Morty Smith', status: 'Alive' }
      ]
    }
  };

  test('should fetch characters successfully', async () => {
    axios.get.mockResolvedValue(mockResponse);
    
    const result = await FetchCharacters(mockUrl);

    expect(axios.get).toHaveBeenCalledWith(mockUrl);
    
    expect(result).toEqual(mockResponse.data);
  });

  test('should log an error if the request fails', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const mockError = new Error('Network error');

    axios.get.mockRejectedValue(mockError);
    
    const result = await FetchCharacters(mockUrl);

    expect(axios.get).toHaveBeenCalledWith(mockUrl);

    expect(consoleSpy).toHaveBeenCalledWith(mockError);
    
    expect(result).toBeUndefined();
  });
});
