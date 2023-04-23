import React from 'react';
import renderer from 'react-test-renderer';
import Container from '@/components/base/Container';

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
};

test('should render correctly the container component', () => {
  const component = renderer.create(
    <Container>
      This is a content
    </Container>
  );

  let tree = toJson(component);
  expect(tree).toMatchSnapshot();

  expect(tree.props.className).toBe('mx-auto max-w-7xl sm:px-6 lg:px-8');
  expect(tree.children).toHaveLength(1);
  expect(tree.children[0]).toBe('This is a content');
});
