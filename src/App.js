import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [lat, setLat] = useState(38.9517);
  const [long, setLong] = useState(-92.3341);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // navigator.geolocation.getCurrentPosition(function(position) {
      //   setLat(position.coords.latitude);
      //   setLong(position.coords.longitude);
      // });

      await fetch(process.env.REACT_APP_WEATHER_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lat, long })
      })
      .then(response => response.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(data)}</p>
      </header>
    </div>
  );
}

export default App;
