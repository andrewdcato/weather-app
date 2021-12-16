import React from 'react';
import renderer from 'react-test-renderer';
import CurrentPanel from '../../../components/weather/CurrentPanel';

test('properly renders with no forecast data', () => {
  const current = renderer.create(
    <CurrentPanel date={global.TEST_DATE} />
  ).toJSON();

  expect(current).toMatchSnapshot();
});

test('properly renders with forecast data', () => {
  const current = renderer.create(
    <CurrentPanel
      current={global.TEST_CURRENT_FORECAST}
      date={global.TEST_DATE}
      today={global.TEST_TODAY}
    />
  ).toJSON();

  expect(current).toMatchSnapshot();
});

