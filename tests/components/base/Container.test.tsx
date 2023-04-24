import React from 'react';
import renderer from 'react-test-renderer';
import Container from '../../../src/components/base/Container';
import { describe, test, expect, beforeEach, vi } from 'vitest';

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

const onMounted = async () => {
  const component = renderer.create(
    <Container>
      This is a content
    </Container>
  );

  return toJson(component);
};

describe('Container.tsx', () => {
  let tree;

  beforeEach(async () => {
    vi.clearAllMocks();

    tree = await onMounted();
  });

  test('should take a snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should render correctly the container component', () => {
    expect(tree.props.className).toBe('mx-auto max-w-7xl sm:px-6 lg:px-8');
    expect(tree.children).toHaveLength(1);
    expect(tree.children[0]).toBe('This is a content');
  });
});
