import React from 'react';
import renderer from 'react-test-renderer';
import DailyPanel from '../../../components/weather/DailyPanel';

test('properly renders with no forecast data', () => {
  const daily = renderer.create(
    <DailyPanel />
  ).toJSON();

  expect(daily).toMatchSnapshot();
});

test('properly renders with forecast data', () => {
  const daily = renderer.create(
    <DailyPanel forecast={global.TEST_DAILY_FORECAST} />
  ).toJSON();

  expect(daily).toMatchSnapshot();
});

