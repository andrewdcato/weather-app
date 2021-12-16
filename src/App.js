import React, { useState } from 'react';
import Divider from './components/Divider';
import Layout from './components/Layout';
import LocationInput from './components/LocationInput';
import WeatherDisplay from './components/weather/WeatherDisplay';
import useGetForecast from './hooks/useGetForecast';

export default function App() {
  // Latitude and Longitude for weather API call
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  // Forecast and animation toggle
  const {
    current,
    daily,
    hourly,
    isLoading,
  } = useGetForecast(lat, lng);

  return (
    <Layout>
      <LocationInput
        setLat={setLat}
        setLng={setLng}
      />

      <Divider />

      <WeatherDisplay
        current={current}
        daily={daily}
        hourly={hourly}
        isLoading={isLoading}
      />
    </Layout>

  );
}

