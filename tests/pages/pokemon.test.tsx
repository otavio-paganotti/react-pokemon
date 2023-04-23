import React from 'react';
import renderer from 'react-test-renderer';
import PokemonComponent from '@/pages/pokemon/Index';

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
};

test('', () => {
  const component = renderer.create(<PokemonComponent />);

  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
