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
