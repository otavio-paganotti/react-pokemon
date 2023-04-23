import React from 'react';
import renderer from 'react-test-renderer';
import Paginator from '@/components/grid/Paginator';

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

test('should render correctly the Paginator component', () => {
  const component = renderer.create(<Paginator />);

  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
