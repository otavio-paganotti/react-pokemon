import React from 'react';
import renderer from 'react-test-renderer';
import List from '@/components/grid/List';

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

test('should render correctly the List component', () => {
  const component = renderer.create(<List />);

  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
