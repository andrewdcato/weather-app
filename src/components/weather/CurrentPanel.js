import { getCardinalDirection, getMoonPhase, getTime } from '../../helpers';

function ConditionCard({ description = null, value}) {
  return (
    <>
      <div className="px-3 mx-3 flex flex-col rounded shadow bg-blue-200 bg-opacity-40">
        <div className="text-left">
          {!!description && <span className="font-semibold">{description}</span>} {value}
        </div>
      </div>
    </>
  )
}

export default function CurrentPanel({
  current, today, date: { month, day, year, dayOfWeek}
}) {
  return (
    <>
      <div className="flex mb-4 justify-between items-center">
        <div className="flex flex-col">
          <h5 className="mb-0 font-medium text-3xl">{dayOfWeek}</h5>
          <h6>{month} {day}, {year}</h6>
        </div>
        <div className="flex flex-col text-right">
          <h5 className="font-medium text-3xl"><span>{parseInt(current?.temp)}&deg; F</span></h5>
          <h6>{current?.weather[0].main}</h6>
        </div>
      </div>

      <h3 className="text-xl">Current Conditions</h3>
      <div className="mt-6">
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <ConditionCard description="Feels Like" value={
            <span>{parseInt(current?.feels_like)}&deg; F</span>
          }/>
          <ConditionCard description="Pressure" value={
            <span>{current?.pressure} hPa</span>
          } />
          <ConditionCard description="Sunrise" value={
            <span>{getTime(current?.sunrise)}</span>
          } />
          <ConditionCard description="Precipitation" value={
            <span>{parseInt(today?.pop * 100)}%</span>
          } />
          <ConditionCard description="Humidity" value={
            <span>{current?.humidity}%</span>
          } />
          <ConditionCard description="Sunset" value={
            <span>{getTime(current?.sunset)}</span>
          } />
          <ConditionCard description="Wind" value={
            <span>{parseInt(current?.wind_speed)} MPH {getCardinalDirection(current?.wind_deg)}</span>
          } />
          <ConditionCard description="UV Index" value={
            <span>{current?.uvi}</span>
          } />
          <ConditionCard value={
            <span>{getMoonPhase(today?.moon_phase || 0)}</span>
          } />
        </div>
      </div>
    </>
  )
}
