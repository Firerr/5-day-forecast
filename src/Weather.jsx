import { useState } from 'react';
import axios from 'axios';
import WeatherItem from './WeatherItem';

const Weather = () => {
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1a5deb21721e492cd6d22d1ce89825c6`,
      );
      console.log(response);
      setWeatherData(response.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  const getLatLong = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=1a5deb21721e492cd6d22d1ce89825c6`,
      );
      //console.log(response);
      const { lat, lon } = response.data[0];
      fetchWeatherData(lat, lon);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="searchContainer">
        <input onChange={(item) => setCity(item.target.value)} placeholder='City name' />
        <button onClick={getLatLong}>Get Weather</button>
      </div>
      <div className="weatherContainer">
        {weatherData.map((item, index) => (
          <WeatherItem data={item} key={index} />
        ))}
      </div>
    </>
  );
};
export default Weather;
