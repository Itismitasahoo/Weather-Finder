import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "London",
    feelsLike: 37.12,
    humidity: 79,
    temp: 30.12,
    tempMax: 30.12,
    tempMin: 30.12,
    weather: "light rain",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by me</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
