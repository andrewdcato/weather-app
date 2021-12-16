import { useState, useEffect } from 'react';
import { getTimeStamp } from '../helpers';

export default function useGetDate(isLoading) {
  const [dayOfWeek, setDayOfWeek] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  useEffect(() => {
    if (!isLoading) {

      const timestamp = getTimeStamp();

      setDayOfWeek(timestamp.dayOfWeek);
      setDay(timestamp.day);
      setMonth(timestamp.month);
      setYear(timestamp.year)
    }
  }, [isLoading]);

  return {
    dayOfWeek,
    day,
    month,
    year
  }
}
