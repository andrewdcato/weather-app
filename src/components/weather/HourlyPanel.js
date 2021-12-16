import { getWeatherIcon, getTime, getForecastDay } from '../../helpers';

function HourlyCard({ hour, idx, max }) {
  const time = getTime(hour.dt);
  const day = getForecastDay(hour.dt);

  return (
    <>
      <div
        className={`mb-4 min-w-max flex flex-col text-center shadow bg-blue-200 ${ idx % 2 !== 0 ? 'bg-opacity-80' : 'bg-opacity-40' } ${idx === 0 ? 'rounded-l' : ''} ${idx === max ? 'rounded-r' : ''}`}
      >
        <span>{time}</span>
        <img src={getWeatherIcon(hour.weather[0].icon)} alt={hour.weather[0].main}></img>
        <span>{parseInt(hour.temp)}&deg;</span>
      </div>

      {time === '11 pm' && (
        <div className="text-center bg-blue-600 text-white mb-4" style={{'writing-mode': 'vertical-lr', transform: 'rotate(-180deg)'}}>{day}</div>
      )}
    </>
  )
}

export default function HourlyForecastPanel({ forecast }) {
  return (
    <div className="mt-6">
      <h3 className="text-xl">Hourly Forecast</h3>
      <div className="mt-3 place-content-center">
        <div className="flex overflow-x-auto overscroll-none scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {forecast?.map((hour, idx) =>
            <HourlyCard
              hour={hour}
              idx={idx}
              max={forecast?.length - 1}
              key={idx}
            />
          )}
        </div>
      </div>
    </div>
  );
}
