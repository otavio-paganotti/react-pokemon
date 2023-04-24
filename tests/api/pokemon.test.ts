import { Pokemon } from '../../src/api';
import { describe, test, expect, vi } from 'vitest';
import flushPromises from 'flush-promises';
import { pokemon } from '../mocks/pokemon';

vi.mock('../../src/api');

describe('Pokemon', () => {
  test('should return a list of pokemons', async () => {
    const mockedResponse = {
      count: 1118,
      next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
      previous: null,
      results: [pokemon],
    };

    vi.mocked(Pokemon.getPokemons).mockResolvedValueOnce({
      data: mockedResponse,
    });

    await flushPromises();

    const response = await Pokemon.getPokemons();

    expect(response).toMatchObject({
      data: mockedResponse,
    });
  });

  test('should return a unique pokemons', async () => {
    const mockedResponse = pokemon.content;

    vi.mocked(Pokemon.getPokemon).mockResolvedValueOnce({
      data: mockedResponse,
    });

    await flushPromises();

    const response = await Pokemon.getPokemon(1);

    expect(response).toMatchObject({
      data: mockedResponse,
    });
  });
});
