import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../../src/components/ui/Card';
import { describe, beforeEach, expect, test, vi } from 'vitest';
import { pokemon } from '../../mocks/pokemon';

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

vi.mock('react-router-dom');

const onMounted = async () => {
  let component;

  component = renderer.create(
    <Card
      item={pokemon}
    >
      This is a content
    </Card>
  );

  return toJson(component);
};

describe('Card.tsx', () => {
  let tree;

  beforeEach(async () => {
    vi.clearAllMocks();

    tree = await onMounted();
  });

  test('should render correctly the Paginator component and take a snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
