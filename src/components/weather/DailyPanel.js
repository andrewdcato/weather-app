import { ArrowNarrowUpIcon, ArrowNarrowDownIcon } from '@heroicons/react/solid'
import { getForecastDay, getWeatherIcon } from '../../helpers';
function DailyCard({ day, idx }) {
  return (
    <>
      <div
        className={`px-3 mx-3 mb-4 flex text-center items-center justify-center flex-col rounded shadow bg-blue-200 ${ idx % 2 === 0 ? 'bg-opacity-80' : 'bg-opacity-40' }`}
      >
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
    </>
  )
}

export default function DailyForecastPanel({ forecast }) {
  return (
    <>
      <div className="mt-6">
        <h3 className="text-xl">Daily Forecast</h3>
        <div className="mt-3 place-content-center">
          <div className="text-center justify-between items-center flex overflow-x-auto overscroll-none scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            {forecast?.map((day, idx) =>
              <DailyCard day={day} idx={idx} key={idx} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
