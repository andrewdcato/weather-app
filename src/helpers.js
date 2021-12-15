import dayjs from 'dayjs';

export function getCardinalDirection(degrees) {
  const DIRECTION_MAP = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const direction = DIRECTION_MAP[Math.round(degrees / 45) % 8];

  return direction;
}

export function getTimeStamp() {
  const now = dayjs();

  const DAY_MAP = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const MONTH_MAP = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return {
    dayOfWeek: DAY_MAP[now.day()],
    day: now.date(),
    month: MONTH_MAP[now.month()],
    year: now.year(),
  }
}

export function getForecastDay(day) {
  const timestamp = new dayjs.unix(day);

  console.log(timestamp.toString());

  const idx = timestamp.day();

  return [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ].at(idx);
}

export function getMoonPhase(val) {
  let phase;

  if (val === 0 || val === 1) phase = 'New Moon';
  else if (val <= 0.24) phase = 'Waxing Crescent';
  else if (val === 0.26) phase = 'First Quarter';
  else if (val <= 0.49) phase = 'Waxing Gibbous';
  else if (val === 0.50) phase = 'Full Moon';
  else if (val <= 0.74) phase = "Waning Gibbous";
  else if (val === 0.75) phase = 'Last Quarter';
  else if (val <= 0.99) phase = 'Waning Crescent';

  return phase;
}
