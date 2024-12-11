const WeatherItem = (data) => {
  console.log(data);
  const {
    dt,
    dt_txt,
    main: { temp, feels_like },
    clouds,
    rain,
    wind,
    weather,
  } = data.data;
  const { icon, main, description } = weather[0];
  const image = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <>
      <div className="weatherItemContainer">
        <p>{dt_txt}</p>
        <img src={image} />
        <ul className="weatherList">
          <li>
            Temperature: {(data.data.main.temp - 273.15).toFixed(0)}
            <sup>o</sup>C
          </li>
          <li>
            Feels like: {(data.data.main.feels_like - 273.15).toFixed(0)}
            <sup>o</sup>C
          </li>
          <li>Pressure: {data.data.main.pressure}hPa</li>
          <li>Windspeed: {data.data.wind.speed}mph</li>
        </ul>
      </div>
    </>
  );
};

export default WeatherItem;
