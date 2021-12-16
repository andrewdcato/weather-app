import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

test('matches snapshot', () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
