import { ArrowNarrowUpIcon, ArrowNarrowDownIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react';
import { getCardinalDirection, getTimeStamp, getForecastDay, getMoonPhase } from '../helpers';
import Divider from './Divider';

const getWeatherIcon = icon => `http://openweathermap.org/img/wn/${icon}@2x.png`;

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

function ConditionCard({ description = null, value}) {
  return (
    <>
      <div className="px-3 mx-3 flex flex-col rounded shadow bg-blue-600 bg-opacity-25">
        <div className="text-left">
          {!!description && <span className="font-semibold">{description}</span>} {value}
        </div>
      </div>
    </>
  )
}
function CurrentPanel({ current, today, date: { month, day, year, dayOfWeek} }) {
  return (
    <>
      <div className="flex mb-4 justify-between items-center">
        <div>
          <h5 className="mb-0 font-medium text-3xl">{dayOfWeek}</h5>
          <h6 className="mb-0">{month} {day}, {year}</h6>
        </div>
        <div className="text-right">
          <h3 className="font-bond text-4xl mb-0"><span>{parseInt(current?.temp)}&deg; F</span></h3>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {/* Feels like | pressure | sunrise */}
        {/* precip     | humidity | sunset */}
        {/* wind       | uv index | moon phase */}
        <ConditionCard description="Feels Like" value={parseInt(current?.feels_like) + "&deg; F"}/>
        <ConditionCard description="Pressure" value={current?.pressure + " hPa"} />
        <ConditionCard description="Sunrise" value={current?.pressure + " hPa"} />
        <ConditionCard description="Precipitation" value={parseInt(today?.pop * 100) + "%"} />
        <ConditionCard description="Humidity" value={current?.humidity + "%"} />
        <ConditionCard description="Sunset" value={current?.pressure + " hPa"} />
        <ConditionCard description="Wind" value={parseInt(current?.wind_speed) + " MPH " + getCardinalDirection(current?.wind_deg)} />
        <ConditionCard description="UV Index" value={current?.uvi} />
        <ConditionCard value={getMoonPhase(today?.moon_phase || 0)} />
      </div>
    </>
  )
}

function ForecastPanel({ forecast }) {
  return (
    <>
      <div className="flex relative mt-6">
        <div className="text-center justify-between items-center flex">
          {forecast?.slice(1,6).map((day, idx) =>
            <div className="text-center px-3 mx-3 flex items-center justify-center flex-col rounded shadow bg-blue-600 bg-opacity-25">
              <span>{getForecastDay(day.dt)}</span>
              <img src={getWeatherIcon(day.weather[0].icon)} alt={day.weather[0].main}></img>
              <div className="text-sm flex text-center items-center justify-center">
                <div className="flex items-center justify-center mr-3">
                  <span>{parseInt(day.temp.max)}&deg;</span>
                  <ArrowNarrowUpIcon className="h-3 w-3"/>
                </div>
                <div className="flex items-center justify-center">
                  <span>{parseInt(day.temp.min)}&deg;</span>
                  <ArrowNarrowDownIcon className="h-3 w-3"/>
                </div>
              </div>
            </div>

          )}
        </div>
      </div>
    </>
  )
}

export default function WeatherDisplay({current, forecast, isLoading}) {
  const date = useGetDate(isLoading);
  const today = forecast?.[0];

  console.log('current', current);
  console.log('forecast', forecast);
  console.log('today', today);

  return (
    <>
      <div className="bg-blue-300 text-gray-800 relative min-w-0 break-words rounded-lg overflow-hidden shadow-xl mb-4 w-full dark">
        <div className="px-6 py-6 relative">
          {(!!isLoading && !current) &&
            <div className="flex mb-4 justify-between items-center inline-block align-middle">
              <h3 className="mb-0 font-medium text-4xl">Loading up some weather right quick...</h3>
            </div>
          }

          {!!(current && today && date) && (<CurrentPanel current={current} today={today} date={date} />)}

          {!!forecast && (
            <>
              <Divider />
              <ForecastPanel forecast={forecast} />
            </>
          )}
        </div>
      </div>
    </>
  )
}
