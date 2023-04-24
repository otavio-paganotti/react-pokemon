import React from 'react';
import renderer from 'react-test-renderer';
import IndexComponent from '../../src/pages/index/Index';
import Grid from '../../src/components/grid/Grid';
import { describe, beforeEach, expect, test, vi } from 'vitest';
import { Pokemon } from '../../src/api';

vi.mock('../../src/components/grid/Grid');

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
};

const onMounted = async () => {
  let component;

  component = renderer.create(
    <IndexComponent />
  );

  return toJson(component);
};

describe('Index.tsx', () => {
  let tree;

  beforeEach(async () => {
    vi.clearAllMocks();

    tree = await onMounted();
  });

  test('should render correctly the Index component and take a snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should have 1 Grid child element must be called', async () => {
    expect(Grid).toHaveBeenCalled();

    expect(Grid).toHaveBeenCalledTimes(1);

    expect(Grid).toHaveBeenCalledWith({
      module: Pokemon.getPokemons,
    }, {});
  });
});
