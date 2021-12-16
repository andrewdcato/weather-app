import { useEffect, useState } from 'react';

export default function useGetForecast(lat, lng) {
  // Loading animation toggle
  const [isLoading, setIsLoading] = useState(false);

  // Forecast data
  const [current, setCurrent] = useState(null);
  const [daily, setDaily] = useState(null);
  const [hourly, setHourly] = useState(null);

  useEffect(() => {
    if (!!current) setCurrent(null);
    if (!!daily) setDaily(null);
    if (!!hourly) setHourly(null);

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
            setDaily(result?.daily);
            setHourly(result?.hourly);
          })
          .then(() => setIsLoading(false));
      }
    }

    fetchData(lat, lng);
  }, [lat, lng]);

  return {
    current,
    daily,
    hourly,
    isLoading
  };
}
