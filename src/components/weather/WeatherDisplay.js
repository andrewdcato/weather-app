import React from 'react';

import Divider from '../Divider';
import CurrentPanel from './CurrentPanel';
import HourlyForecastPanel from './HourlyPanel';
import DailyForecastPanel from './DailyPanel';

import useGetDate from '../../hooks/useGetDate';

export default function WeatherDisplay({
  current, daily, hourly, isLoading}
) {
  const date = useGetDate(isLoading);
  const today = daily?.[0];

  return (
    <>
      <div className="bg-blue-300 text-gray-800 rounded-lg overflow-hidden shadow my-6">
        <div className="px-6 py-6 relative">
          {(!isLoading && !current) &&
            <div className="flex justify-center items-center">
              Please enter and select a city above to see the weather.
            </div>
          }

          {(!!isLoading) &&
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-blue-400 h-12 w-12"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-blue-400 rounded"></div>
                    <div className="h-4 bg-blue-400 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          }

          {(!isLoading && (current && today && date)) && (
            <>
              <CurrentPanel
                current={current}
                today={today}
                date={date}
              />
              <Divider />
            </>
          )}

          {!!hourly && (
            <>
              <HourlyForecastPanel forecast={hourly} />
              <Divider />
            </>
          )}

          {!!daily && (<DailyForecastPanel forecast={daily} />)}
        </div>
      </div>
    </>
  )
}
