import React from 'react';
import renderer from 'react-test-renderer';
import LocationInput from '../../components/LocationInput';

test('matches snapshot', () => {
  const input = renderer.create(<LocationInput />).toJSON();
  expect(input).toMatchSnapshot();
});
