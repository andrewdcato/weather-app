import './styles/App.css';
import { useEffect, useState } from 'react';
import LocationInput from './components/LocationInput';
import WeatherDisplay from './components/WeatherDisplay';

function useGetForecast(lat, lng) {
  // Loading animation toggle
  const [isLoading, setIsLoading] = useState(false);

  // Forecast data
  const [currentConditions, setCurrentConditions] = useState(null);
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
            setCurrentConditions(result?.current);
            setForecast(result?.daily);
          })
          .then(() => setIsLoading(false));
      }
    }

    fetchData(lat, lng);
  }, [lat, lng]);

  return { currentConditions, forecast, isLoading };
}

export default function App() {
  // Latitude and Longitude for weather API call
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  // Forecast and animation toggle
  const {
    currentConditions,
    forecast,
    isLoading
  } = useGetForecast(lat, lng);

  return (
    <div className="app">
      <LocationInput
        setLat={setLat}
        setLng={setLng}
      />

      {(!!lat && !!lng) &&
        <WeatherDisplay
          currentConditions={currentConditions}
          forecast={forecast}
          isLoading={isLoading}
        />
      }
    </div>
  );
}

