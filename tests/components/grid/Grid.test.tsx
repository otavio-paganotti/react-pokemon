import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Grid from '../../../src/components/grid/Grid';
import { Pokemon as PokemonApi } from '../../../src/api';
import { expect, describe, test, vi, beforeEach } from 'vitest';
import { pokemon } from '../../mocks/pokemon';

vi.mock('../../../src/api');
vi.mock('react-router-dom');

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

const mockedResolvedResponse = {
  count: 0,
  next: null,
  previous: null,
  results: [pokemon],
  pagination: {
    firstPage: 1,
    lastPage: 1,
    nextPage: 1,
    prevPage: 1,
    nextPages: [],
    prevPages: [],
    page: 1,
  },
};

const onMounted = async () => {
  vi.mocked(PokemonApi.getPokemons).mockResolvedValueOnce(
    mockedResolvedResponse
  );

  let component;

  await act(async () => {
    component = renderer.create(<Grid module={PokemonApi.getPokemons} />);
  });

  return toJson(component);
};

describe('Grid.tsx', () => {
  let tree;

  beforeEach(async () => {
    tree = await onMounted();

    vi.mocked(PokemonApi.getPokemons).mockClear();
  });

  test('should render correctly the Grid component and take a snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should Grid component have 1 children', () => {
    expect(tree.children?.length).toBe(1);
  });

  test('should Grid component have a div with class "p-4 h-screen-minus-56 grid grid-cols-1 content-between gap-4"', () => {
    expect(tree.children[0].props.className).toBe(
      'p-4 h-screen-minus-56 grid grid-cols-1 content-between gap-4'
    );
  });

  test('should list section have a list and a pagination component', () => {
    expect(tree.children[0].children?.length).toBe(2);
    expect(tree.children[0].children[0].type).toBe('div');
    expect(tree.children[0].children[1].type).toBe('div');
  });
});
