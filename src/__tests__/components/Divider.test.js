import React from 'react';
import renderer from 'react-test-renderer';
import Divider from '../../components/Divider';

test('matches snapshot', () => {
  const divider = renderer.create(<Divider />).toJSON();
  expect(divider).toMatchSnapshot();
});
