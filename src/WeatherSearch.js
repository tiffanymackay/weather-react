import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  let [display, setDisplay] = useState(false);
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        onChange={updateCity}
        type="search"
        aria-label="Search"
        placeholder="Enter a city..."
      />
      <input type="submit" value="search" />
    </form>
  );

  function showTemperature(response) {
    setDisplay(true);
    setCity(response.data.name);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=dc249be89a0015c3980887c32be65599`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (display) {
    return (
      <div>
          <h2>{city}</h2>
        {form}
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} mph</li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  } else return form;
}
