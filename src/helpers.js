import dayjs from 'dayjs';

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

const DIRECTION_MAP = [
  'N',
  'NE',
  'E',
  'SE',
  'S',
  'SW',
  'W',
  'NW'
];

export function getCardinalDirection(degrees) {
  return DIRECTION_MAP[Math.round(degrees / 45) % 8];
}

export function getTimeStamp() {
  const now = dayjs();

  return {
    dayOfWeek: DAY_MAP[now.day()],
    day: now.date(),
    month: MONTH_MAP[now.month()],
    year: now.year(),
  }
}

export function getForecastDay(day) {
  return DAY_MAP.at(new dayjs.unix(day).day());
}

export function getTime(milis) {
  return new dayjs.unix(milis).format('h a').toString();
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

export function getWeatherIcon(icon) {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}
