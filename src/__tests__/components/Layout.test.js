import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../../components/Layout';
import LocationInput from '../../components/LocationInput';

test('properly renders with no children', () => {
  const layout = renderer.create(<Layout></Layout>).toJSON();
  expect(layout).toMatchSnapshot();
});

test('properly renders with basic children', () => {
  const layout = renderer.create(
    <Layout>
      <h1>I am a child</h1>
      <h2>I am a smaller child</h2>
    </Layout>
  ).toJSON();

  expect(layout).toMatchSnapshot();
})

test('properly renders with component children', () => {
  const layout = renderer.create(
    <Layout>
      <LocationInput />
    </Layout>
  ).toJSON();

  expect(layout).toMatchSnapshot();
});
