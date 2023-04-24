import React from 'react';
import renderer, { act } from 'react-test-renderer';
import List from '../../../src/components/grid/List';
import Card from '../../../src/components/ui/Card';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { pokemon } from '../../mocks/pokemon';

vi.mock('../../../src/components/ui/Card');

const mockedResolvedResponse = [
  pokemon
];

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
};

vi.mock('react-router-dom');

const onMounted = async () => {
  let component;

  await act(async () => {
    component = renderer.create(
      <List
        items={mockedResolvedResponse}
      />
    )
  });

  return toJson(component);
};

describe('List.tsx', () => {
  let tree;

  beforeEach(async () => {
    vi.clearAllMocks();

    tree = await onMounted();
  });

  test('should render correctly the List component and take a snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should have only 1 card child element must be called with correct props', () => {
    expect(Card).toHaveBeenCalled();
    
    expect(Card).toHaveBeenCalledTimes(1);

    expect(Card).toHaveBeenCalledWith({
      item: pokemon
    }, {});
  });
});
