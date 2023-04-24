import React from 'react';
import renderer, { act } from 'react-test-renderer';
import PokemonComponent from '../../src/pages/pokemon/Index';
import Card from '../../src/components/ui/Card';
import { describe, beforeEach, expect, test, vi } from 'vitest';
import { pokemon } from '../mocks/pokemon';
import { Pokemon } from '../../src/api';

vi.mock('../../src/api');
vi.mock('../../src/components/ui/Card');

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
};

vi.mock('react-router-dom', () => ({
  useParams: () => ({
    id: pokemon.id,
  }),
}));

const onMounted = async () => {
  vi.mocked(Pokemon.getPokemon).mockResolvedValueOnce(pokemon);

  let component;

  await act(() => {
    component = renderer.create(
      <PokemonComponent />
    )
  });

  return toJson(component);
};

describe('Pokemon.tsx', () => {
  let tree;

  beforeEach(async () => {
    vi.clearAllMocks();

    tree = await onMounted();
  });

  test('should render correctly the Pokemon component and take a snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should have 1 h1 element', async () => {
    expect(tree.children).toHaveLength(2);

    expect(tree.children[0].type).toBe('h1');

    expect(tree.children[0].children).toHaveLength(1);

    expect(tree.children[0].children[0]).toBe('Pokemon');

    expect(tree.children[0].props).toEqual({
      className: 'text-4xl text-center',
    });
  });

  test('should have 1 Card child element must be called', async () => {    
    expect(Card).toHaveBeenCalled();
  });
});
