import '../styles/WeatherDisplay.css';
import React, { useEffect, useState } from 'react';
import { getCardinalDirection, getTimeStamp } from '../helpers';

function useGetDate(isLoading) {
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

export default function WeatherDisplay({currentConditions, forecast, isLoading}) {
  console.log('current', currentConditions);
  console.log('forecast', forecast);
  const { dayOfWeek, day, month, year } = useGetDate(isLoading);

  return (
    <>
      <div className='weather-display-container'>
        <div className='current-conditions-card'>
          {(!!isLoading && !currentConditions) && <p>Loading up some weather right quick...</p>}

          {!!currentConditions &&
            <>
              <p>It is {dayOfWeek}, {month} {day}, {year}. </p>
              <p>The current temperature is {currentConditions?.temp}&deg; F</p>
              <p>The wind is blowing from the {getCardinalDirection(currentConditions?.wind_deg)} at {currentConditions?.wind_speed} MPH</p>
            </>
          }
        </div>
      </div>
    </>
  )
}
