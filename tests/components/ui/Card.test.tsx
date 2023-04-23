import React from 'react';
import renderer from 'react-test-renderer';
import Card from '@/components/ui/Card';

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
};

test('should render correctly the card component', () => {
  const component = renderer.create(
    <Card>
      This is a content
    </Card>
  );

  let tree = toJson(component);
  expect(tree).toMatchSnapshot();

  expect(tree.children).toHaveLength(2);
  expect(tree.children[1].children[0]).toBe('This is a content');
});
