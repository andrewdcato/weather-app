import {
  getCardinalDirection,
  getMoonPhase,
  getTimeStamp,
  getForecastDay,
  getTime
} from "../helpers";

const getRandom = (min, max) => Math.random() * (max - min) + min;

describe('#getCardinalDirection()', () => {
  const testArr = [
    ['N', getRandom(-22.5, 22.5)],
    ['NE', getRandom(22.6, 67.5)],
    ['E', getRandom(67.6, 112.5)],
    ['SE', getRandom(112.6, 157.5)],
    ['S', getRandom(157.6, 202.5)],
    ['SW', getRandom(202.6, 247.5)],
    ['W', getRandom(247.6, 292.5)],
    ['NW', getRandom(292.6, 337.5)],
    ['N', getRandom(337.6, 360)]
  ];

  test.each(testArr)(
    'should return %s for %i',
    (direction, degrees) => {
      expect(getCardinalDirection(degrees)).toEqual(direction);
    }
  )
});

describe('#getMoonPhase()', () => {
  const testArr = [
    ['New Moon', 0.00],
    ['Waxing Crescent', getRandom(0.01, 0.24)],
    ['First Quarter', 0.25],
    ['Waxing Gibbous', getRandom(0.26, 0.49)],
    ['Full Moon', 0.5],
    ['Waning Gibbous', getRandom(0.51, 0.74)],
    ['Last Quarter', 0.75],
    ['Waning Crescent', getRandom(0.76, 0.99)],
    ['New Moon', 1.00],
  ];

  test.each(testArr)(
    'should return %s for %f',
    (phase, percent) => {
      expect(getMoonPhase(percent)).toEqual(phase);
    }
  )
});

describe('date helpers', () => {
  //11:00 am on Wed. April 13, 2016 CST (Standard Time)
  const mockDayOfWeek = 'Wednesday';
  const mockMonth = 'April'
  const mockDay = 13;
  const mockYear = 2016;
  // Weather API sends back time in *seconds* since epoch, not milliseconds. Annoying.
  const mockTime = 1460563200

  beforeEach(() => {
    jest
      .useFakeTimers('modern')
      .setSystemTime(new Date(1460563200 * 1000));
  });

  describe('#getTimeStamp()', () => {
    test('should return proper timestamp', () => {
      const timestamp = getTimeStamp();
      expect(timestamp.dayOfWeek).toBe(mockDayOfWeek);
      expect(timestamp.day).toBe(mockDay);
      expect(timestamp.month).toBe(mockMonth);
      expect(timestamp.year).toBe(mockYear);
    });
  });

  describe('#getForecastDay()', () => {
    test('should return the proper day', () => {
      const day = getForecastDay(mockTime);
      expect(day).toBe(mockDayOfWeek);
    });
  });

  describe('#getTime()', () => {
    test('should return the proper time', () => {
      const time = getTime(mockTime);
      expect(time).toBe('11 am');
    })
  })

  //? Once all tests are done, release the date mock
  afterAll(() => { jest.useRealTimers() });
});
