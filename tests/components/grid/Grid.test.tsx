import React from 'react';
import renderer from 'react-test-renderer';
import Grid from '@/components/grid/Grid';

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
};

test('should render correctly the Grid component', () => {
  const component = renderer.create(
    <Grid />
  );

  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
