import React, { useEffect, useState } from 'react';
import { getCardinalDirection, getTimeStamp } from '../helpers';

const getNextDay = (day, idx) => {
  const DAY_MAP = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return DAY_MAP[(DAY_MAP.indexOf(day) + idx)];
}


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

function WeeklyForecastPanel({ forecast, dayOfWeek }) {
  return (
    <>
      <div className="px-6 py-6 relative">
        <div className="text-center justify-between items-center flex">
          {forecast?.slice(0,5).map((day, idx) =>
            <div className="text-center mb-0 flex items-center justify-center flex-col">
              <span>{getNextDay(dayOfWeek, idx + 1)}</span>
              <span>{day.temp.max}&deg; F</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default function WeatherDisplay({currentConditions, forecast, isLoading}) {
  console.log('current', currentConditions);
  console.log('forecast', forecast);
  const { dayOfWeek, day, month, year } = useGetDate(isLoading);

  return (
    <>
      <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full dark:bg-gray-600">
        <div className="px-6 py-6 relative">
            {(!!isLoading && !currentConditions) && <p>Loading up some weather right quick...</p>}

            {!!currentConditions &&
              <>
                <div className="flex mb-4 justify-between items-center">
                  <div>
                    <h5 className="mb-0 font-medium text-3xl">{dayOfWeek}</h5>
                    <h6 className="mb-0">{month} {day}, {year}</h6>
                  </div>
                  <div className="text-right">
                    <h3 className="font-bond text-4xl mb-0"><span>{currentConditions?.temp}&deg; F</span></h3>
                  </div>
                </div>
                <p>The wind is blowing from the {getCardinalDirection(currentConditions?.wind_deg)} at {currentConditions?.wind_speed} MPH</p>

                <WeeklyForecastPanel
                  forecast={forecast}
                  dayOfWeek={dayOfWeek}
                />
              </>
            }
        </div>
      </div>
    </>
  )
}
