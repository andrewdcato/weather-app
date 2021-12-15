import { useEffect, useState } from 'react';
import Divider from './components/Divider';
import LocationInput from './components/LocationInput';
import WeatherDisplay from './components/WeatherDisplay';

function useGetForecast(lat, lng) {
  // Loading animation toggle
  const [isLoading, setIsLoading] = useState(false);

  // Forecast data
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const fetchData = async (lat, lng) => {
      if (!!lat && !!lng) {
        setIsLoading(true);

        const {
          REACT_APP_WEATHER_API_URL: API_URL,
          REACT_APP_WEATHER_API_KEY: API_KEY
        } = process.env

        const url = `${API_URL}?lat=${lat}&lon=${lng}&units=imperial&appid=${API_KEY}`;

        await fetch(url)
          .then(response => response.json())
          .then(result => {
            setCurrent(result?.current);
            setForecast(result?.daily);
          })
          .then(() => setIsLoading(false));
      }
    }

    fetchData(lat, lng);
  }, [lat, lng]);

  return { current, forecast, isLoading };
}

export default function App() {
  // Latitude and Longitude for weather API call
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  // Forecast and animation toggle
  const {
    current,
    forecast,
    isLoading
  } = useGetForecast(lat, lng);

  return (
    <div className="mx-auto p-4 bg-blue-100 flex h-screen justify-center items-center">
      <div className="flex flex-wrap">
        <div className="w-full px-2">
          <div className="p-6 relative">
            <LocationInput setLat={setLat} setLng={setLng} />
          </div>

          <Divider />

          {(!!lat && !!lng) &&
            <WeatherDisplay
              current={current}
              forecast={forecast}
              isLoading={isLoading}
            />
          }
        </div>
      </div>
    </div>
  );
}

